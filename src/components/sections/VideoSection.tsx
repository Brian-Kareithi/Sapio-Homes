export default function VideoSection() {
  return (
    <section id="blog" className="py-20 bg-app-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Featured Project
          </h2>
          <p className="text-secondary max-w-2xl mx-auto">
            Take a virtual tour of our latest developments
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-2xl">
          <div className="relative pb-[56.25%] h-0">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/zBW2wQJRmXI"
              title="Sapio Homes Video Tour"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
