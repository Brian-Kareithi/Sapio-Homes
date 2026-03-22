export default function PropertiesSection() {
  const properties = [
    {
      name: "Nyayo View Suites",
      type: "Studios & One Bedrooms",
      location: "Nairobi West",
      status: "Sold Out",
      statusColor: "bg-red-500",
    },
    {
      name: "HillSide Gardens",
      type: "3 & 4 Bedroom Apartments",
      location: "Parklands",
      status: "Sold Out",
      statusColor: "bg-red-500",
    },
    {
      name: "Balozi Suites",
      type: "Studios & One Bedrooms",
      location: "South B",
      status: "Sold Out",
      statusColor: "bg-red-500",
    },
    {
      name: "The Reveal",
      type: "Studios & One Bedrooms",
      location: "Kilimani",
      status: "Sold Out",
      statusColor: "bg-red-500",
    },
    {
      name: "Park Road Residency",
      type: "1 Bedroom Apartments",
      location: "Parkroad Near Gurunanak",
      status: "Selling Now",
      statusColor: "bg-green-500",
    },
    {
      name: "Westway Apartments",
      type: "2 & 3 Bedroom Apartments",
      location: "Westlands",
      status: "Coming Soon",
      statusColor: "bg-blue-500",
    },
  ];

  return (
    <section id="properties" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Featured Properties
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Discover our exclusive collection of premium properties
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-amber-500/50 transition-all duration-300 group"
            >
              <div className="relative h-48 bg-gradient-to-br from-gray-800 to-gray-900">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all" />
                <div className="absolute top-4 right-4">
                  <span
                    className={`${property.statusColor} text-white text-xs px-3 py-1 rounded-full`}
                  >
                    {property.status}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-xl font-bold text-white">{property.name}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-white/80 mb-2">{property.type}</p>
                <p className="text-white/60 text-sm">{property.location}</p>
                <button className="mt-4 text-amber-400 hover:text-amber-300 text-sm font-semibold transition-colors">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}