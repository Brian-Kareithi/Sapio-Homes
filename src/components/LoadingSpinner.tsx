"use client";

export default function LoadingSpinner() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-[9999]">
      <div className="relative">
        {/* Outer ring */}
        <div className="w-16 h-16 border-4 border-white/10 rounded-full animate-pulse" />
        
        {/* Spinner */}
        <div className="absolute top-0 left-0 w-16 h-16 border-4 border-t-amber-500 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin" />
  
      </div>
    </div>
  );
}