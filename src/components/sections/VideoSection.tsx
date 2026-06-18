export default function VideoSection() {
  return (
    <section id="blog" className="py-20 bg-app-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="h-px w-8 bg-amber-400" />
          <span className="text-xs uppercase tracking-[0.25em] text-amber-500">FEATURED PROJECT</span>
          <span className="h-px w-8 bg-amber-400" />
        </div>
        <h2 className="font-serif text-4xl sm:text-5xl font-light text-primary leading-tight text-center mb-4">
          A Virtual Tour
        </h2>
        <p className="text-secondary/70 max-w-2xl mx-auto text-center mb-12 leading-relaxed">
          Step inside our latest developments from anywhere in the world. This immersive walkthrough
          brings the Sapio Homes experience to you.
        </p>

        <div className="rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800/60 shadow-lg">
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
