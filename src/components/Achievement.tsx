import Carousel, { ISlides } from "./Carousel";

const slides: ISlides[] = [
  { imageurl: "award1.jpg", caption: "" },
  { imageurl: "award2.jpg", caption: "" },
];

export default function Achievement() {
  return (
    <section id="achievement" className="py-20 bg-gradient-to-b to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Achievements</h2>
          <div className="w-20 h-1 bg-primary-600 dark:bg-primary-400 mx-auto"></div>
        </div>

        <Carousel items={slides} />
      </div>
    </section>
  );
}
