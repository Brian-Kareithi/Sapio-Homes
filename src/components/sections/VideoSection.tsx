import SectionHeading from "@/components/ui/SectionHeading";

export default function VideoSection() {
  return (
    <section id="blog" className="scroll-mt-24 bg-app-bg py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Featured Project"
          title="A virtual tour"
          description="Step inside our latest developments from anywhere in the world. This immersive walkthrough brings the Sapio Homes experience to you."
        />

        <div className="mt-14 overflow-hidden rounded-2xl border border-app-border shadow-premium-lg">
          <div className="relative h-0 pb-[56.25%]">
            <iframe
              className="absolute left-0 top-0 h-full w-full"
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
