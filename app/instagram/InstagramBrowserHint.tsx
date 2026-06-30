"use client";

import { useEffect, useState } from "react";

function isInstagramBrowser() {
  if (typeof navigator === "undefined") {
    return false;
  }

  return /Instagram/i.test(navigator.userAgent);
}

function CloseIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="2.2"
    >
      <path d="M6 6l12 12" />
      <path d="M18 6 6 18" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-12 w-12"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <path d="M4 17c5.8-1.1 10.2-4.6 13-10" />
      <path d="M12 7h5v5" />
    </svg>
  );
}

export default function InstagramBrowserHint() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(isInstagramBrowser());
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div
      aria-labelledby="instagram-browser-hint-title"
      className="fixed left-0 right-0 top-3 z-50 flex justify-center px-3"
      role="dialog"
    >
      <div className="relative w-full max-w-[430px] rounded-[18px] border border-black/10 bg-white px-4 py-3 pr-[76px] text-black shadow-[0_12px_34px_rgba(0,0,0,0.18)]">
        <button
          aria-label="Close instructions"
          className="absolute right-2.5 top-2.5 grid h-8 w-8 place-items-center rounded-full bg-[#f1f2f4] text-black transition active:scale-95"
          onClick={() => setIsVisible(false)}
          type="button"
        >
          <CloseIcon />
        </button>
        <div className="pointer-events-none absolute right-10 -top-2 text-black">
          <ArrowIcon />
        </div>
        <p
          className="text-[13px] font-black uppercase leading-none tracking-normal text-black/48"
          id="instagram-browser-hint-title"
        >
          Open externally
        </p>
        <p className="mt-1.5 text-[16px] font-extrabold leading-[1.18]">
          Tap the three dots up top, then choose{" "}
          <span className="whitespace-nowrap">Open in external browser</span>.
        </p>
      </div>
    </div>
  );
}
