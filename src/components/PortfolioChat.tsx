import { useEffect, useRef, useState } from "react";
import type { FormEvent, KeyboardEvent } from "react";
import { Bot, Loader2, MessageCircle, Send, X } from "lucide-react";

type ChatMessage = {
  id: number;
  role: "assistant" | "user";
  content: string;
  isError?: boolean;
};

class ChatRequestError extends Error {}

const API_BASE_URL = (
  import.meta.env.VITE_API_BASE_URL || "https://web-api-m0dv.onrender.com"
).replace(/\/+$/, "");
const REQUEST_TIMEOUT_MS = 30_000;
const FALLBACK_ERROR = "Sorry, I couldn't get a response. Please try again later.";

const getSafeBackendError = (payload: unknown): string | undefined => {
  if (!payload || typeof payload !== "object" || !("error" in payload)) {
    return undefined;
  }

  const error = payload.error;
  if (
    typeof error !== "string" ||
    !error.trim() ||
    error.length > 240 ||
    /(stack|traceback|api.?key|credential|token|gemini|provider| at .+:\d+:\d+)/i.test(
      error,
    )
  ) {
    return undefined;
  }

  return error.trim();
};

const PortfolioChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 0,
      role: "assistant",
      content:
        "Hi! Ask me about Karthik's experience, skills, projects, or achievements.",
    },
  ]);
  const nextMessageId = useRef(1);
  const requestInProgress = useRef(false);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const conversationEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    conversationEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isSending]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const submittedMessage = message.trim();

    if (!submittedMessage || requestInProgress.current) {
      return;
    }

    requestInProgress.current = true;
    setMessages((currentMessages) => [
      ...currentMessages,
      {
        id: nextMessageId.current++,
        role: "user",
        content: submittedMessage,
      },
    ]);
    setMessage("");
    setIsSending(true);

    const controller = new AbortController();
    const timeoutId = window.setTimeout(
      () => controller.abort(),
      REQUEST_TIMEOUT_MS,
    );

    try {
      const response = await fetch(`${API_BASE_URL}/api/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: submittedMessage }),
        signal: controller.signal,
      });

      let payload: unknown;
      try {
        payload = await response.json();
      } catch {
        payload = undefined;
      }

      if (!response.ok) {
        throw new ChatRequestError(
          getSafeBackendError(payload) || FALLBACK_ERROR,
        );
      }

      const answer =
        payload &&
        typeof payload === "object" &&
        "answer" in payload &&
        typeof payload.answer === "string"
          ? payload.answer.trim()
          : "";

      if (!answer) {
        throw new ChatRequestError(FALLBACK_ERROR);
      }

      setMessages((currentMessages) => [
        ...currentMessages,
        { id: nextMessageId.current++, role: "assistant", content: answer },
      ]);
    } catch (error) {
      const errorMessage =
        error instanceof Error && error.name === "AbortError"
          ? "The request timed out. Please try again."
          : error instanceof ChatRequestError
            ? error.message
            : FALLBACK_ERROR;

      setMessages((currentMessages) => [
        ...currentMessages,
        {
          id: nextMessageId.current++,
          role: "assistant",
          content: errorMessage,
          isError: true,
        },
      ]);
    } finally {
      window.clearTimeout(timeoutId);
      requestInProgress.current = false;
      setIsSending(false);
      inputRef.current?.focus();
    }
  };

  const handleInputKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey && !event.nativeEvent.isComposing) {
      event.preventDefault();
      formRef.current?.requestSubmit();
    }
  };

  return (
    <div className="fixed bottom-20 right-5 z-50">
      {isOpen && (
        <section
          id="portfolio-chat-panel"
          aria-labelledby="portfolio-chat-title"
          className="mb-3 flex h-[min(34rem,calc(100dvh-8rem))] w-[calc(100vw-2.5rem)] max-w-96 flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl dark:border-gray-700 dark:bg-gray-800"
        >
          <header className="flex items-center justify-between bg-primary-600 px-4 py-3 text-white dark:bg-primary-700">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-white/15 p-2">
                <Bot aria-hidden="true" className="h-5 w-5" />
              </div>
              <div>
                <h2 id="portfolio-chat-title" className="font-semibold">
                  Portfolio Assistant
                </h2>
                <p className="text-xs text-white/80">Ask about Karthik</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close portfolio assistant"
              className="rounded-full p-2 transition-colors hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <X aria-hidden="true" className="h-5 w-5" />
            </button>
          </header>

          <div
            className="min-h-0 flex-1 space-y-4 overflow-y-auto bg-gray-50 p-4 dark:bg-gray-900"
            aria-label="Conversation"
            aria-live="polite"
            aria-relevant="additions"
          >
            {messages.map((chatMessage) => (
              <div
                key={chatMessage.id}
                className={`flex ${chatMessage.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <p
                  role={chatMessage.isError ? "alert" : undefined}
                  className={`max-w-[85%] whitespace-pre-wrap break-words rounded-2xl px-4 py-2.5 text-sm ${
                    chatMessage.role === "user"
                      ? "rounded-br-md bg-primary-600 text-white dark:bg-primary-700"
                      : chatMessage.isError
                        ? "rounded-bl-md bg-red-100 text-red-800 dark:bg-red-950 dark:text-red-200"
                        : "rounded-bl-md bg-white text-gray-800 shadow-sm dark:bg-gray-800 dark:text-gray-100"
                  }`}
                >
                  {chatMessage.content}
                </p>
              </div>
            ))}
            {isSending && (
              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <Loader2 aria-hidden="true" className="h-4 w-4 animate-spin" />
                <span>Waiting for a response…</span>
              </div>
            )}
            <div ref={conversationEndRef} />
          </div>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="border-t border-gray-200 bg-white p-3 dark:border-gray-700 dark:bg-gray-800"
          >
            <label htmlFor="portfolio-chat-message" className="sr-only">
              Your message
            </label>
            <div className="flex items-end gap-2">
              <textarea
                ref={inputRef}
                id="portfolio-chat-message"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                onKeyDown={handleInputKeyDown}
                disabled={isSending}
                rows={1}
                maxLength={2000}
                placeholder="Ask a question…"
                className="max-h-28 min-h-11 flex-1 resize-y rounded-xl border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900 placeholder:text-gray-500 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200 disabled:cursor-not-allowed disabled:opacity-60 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 dark:placeholder:text-gray-400 dark:focus:ring-primary-800"
              />
              <button
                type="submit"
                disabled={isSending || !message.trim()}
                aria-label="Send message"
                className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-600 text-white transition-colors hover:bg-primary-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-primary-600 dark:hover:bg-primary-500"
              >
                <Send aria-hidden="true" className="h-4 w-4" />
              </button>
            </div>
            <p className="mt-1.5 text-xs text-gray-500 dark:text-gray-400">
              Enter to send · Shift+Enter for a new line
            </p>
          </form>
        </section>
      )}

      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        aria-controls="portfolio-chat-panel"
        aria-label={isOpen ? "Close portfolio assistant" : "Open portfolio assistant"}
        className="ml-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary-600 text-white shadow-lg transition-transform hover:scale-105 hover:bg-primary-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 dark:bg-primary-600 dark:hover:bg-primary-500"
      >
        {isOpen ? (
          <X aria-hidden="true" className="h-6 w-6" />
        ) : (
          <MessageCircle aria-hidden="true" className="h-6 w-6" />
        )}
      </button>
    </div>
  );
};

export default PortfolioChat;
