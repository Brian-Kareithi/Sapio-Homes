const COMPANY_QUERY = encodeURIComponent(
  `Sapio Homes, ${process.env.NEXT_PUBLIC_COMPANY_ADDRESS || "HH Towers, Nairobi, Kenya"}`
);

export default function LocationMap() {
  return (
    <div className="w-full rounded-2xl overflow-hidden border border-app-border shadow-lg">
      <iframe
        title="Sapio Homes Location"
        width="100%"
        height="350"
        style={{ display: "block" }}
        src={`https://maps.google.com/maps?q=${COMPANY_QUERY}&output=embed`}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
