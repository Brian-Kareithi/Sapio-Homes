"use client";

export default function PropertiesSection() {
  const properties = [
    {
      name: "Nyayo View Suites",
      type: "Studios & One Bedrooms",
      location: "Nairobi West",
      status: "Sold Out",
      statusColor: "bg-red-500/80",
      image: "https://ppkfgsakvcijmmhjwbcz.supabase.co/storage/v1/object/public/Photos/Nyayo-View-Suites--scaled.jpg"
    },
    {
      name: "HillSide Gardens",
      type: "3 & 4 Bedroom Apartments",
      location: "Parklands",
      status: "Sold Out",
      statusColor: "bg-red-500/80",
      image: "https://ppkfgsakvcijmmhjwbcz.supabase.co/storage/v1/object/public/Photos/HillSide-Gardens-scaled.jpg"
    },
    {
      name: "Balozi Suites",
      type: "Studios & One Bedrooms",
      location: "South B",
      status: "Sold Out",
      statusColor: "bg-red-500/80",
      image: "https://ppkfgsakvcijmmhjwbcz.supabase.co/storage/v1/object/public/Photos/BALOZI-SUITES-scaled.png"
    },
    {
      name: "The Reveal",
      type: "Studios & One Bedrooms",
      location: "Kilimani",
      status: "Sold Out",
      statusColor: "bg-red-500/80",
      image: "https://ppkfgsakvcijmmhjwbcz.supabase.co/storage/v1/object/public/Photos/The-reveal-render-scaled.jpg"
    },
    {
      name: "Park Road Residency",
      type: "1 Bedroom Apartments",
      location: "Parkroad Near Gurunanak",
      status: "Selling Now",
      statusColor: "bg-green-500/80",
      image: "https://ppkfgsakvcijmmhjwbcz.supabase.co/storage/v1/object/public/Photos/real%20estate%20one.jpg"
    },
    {
      name: "Westway Apartments",
      type: "2 & 3 Bedroom Apartments",
      location: "Westlands",
      status: "Coming Soon",
      statusColor: "bg-blue-500/80",
      image: "https://ppkfgsakvcijmmhjwbcz.supabase.co/storage/v1/object/public/Photos/real%20estate%20three.jpg"
    },
  ];

  return (
    <section id="properties" className="py-16 sm:py-20" style={{ backgroundColor: "#101726" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Featured Properties
          </h2>
          <div className="w-16 h-0.5 bg-amber-500 mx-auto mb-4" />
          <p className="text-white/60 max-w-2xl mx-auto">
            Discover our exclusive collection of premium properties
          </p>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {properties.map((property, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-amber-500/50 hover:shadow-xl transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative h-52 sm:h-56 overflow-hidden">
                <img
                  src={property.image}
                  alt={property.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <span
                    className={`${property.statusColor} text-white text-xs font-medium px-3 py-1.5 rounded-full backdrop-blur-sm shadow-lg`}
                  >
                    {property.status}
                  </span>
                </div>
                
                {/* Property Name Overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {property.name}
                  </h3>
                </div>
              </div>
              
              {/* Property Details */}
              <div className="p-5">
                <p className="text-white/70 text-sm mb-1">{property.type}</p>
                <p className="text-white/50 text-xs flex items-center gap-1">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {property.location}
                </p>
                
                {/* Learn More Button */}
                <button className="mt-4 text-amber-400 hover:text-amber-300 text-sm font-semibold transition-colors inline-flex items-center gap-1 group/btn">
                  Learn More
                  <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl border border-white/20 transition-all duration-300 font-medium">
            View All Properties
          </button>
        </div>
      </div>
    </section>
  );
}