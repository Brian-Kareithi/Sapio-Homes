"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    if (sessionStorage.getItem("loaded")) {
      document.documentElement.classList.remove("overflow-hidden");
      return;
    }
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setHidden(false);
    document.documentElement.classList.add("overflow-hidden");

    const timer = setTimeout(() => {
      setHidden(true);
      sessionStorage.setItem("loaded", "1");
    }, 800);

    return () => {
      clearTimeout(timer);
      document.documentElement.classList.remove("overflow-hidden");
    };
  }, []);

  if (hidden) return null;

  return (
    <div
      id="loading-screen"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-app-bg"
    >
      <div className="w-8 h-8 border-2 border-app-border border-t-amber-500 rounded-full animate-spin" />
    </div>
  );
}
