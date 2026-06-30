import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import Image from "next/image";
import InstagramBrowserHint from "./InstagramBrowserHint";
import styles from "./instagram.module.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Instagram Links | Everything Ninja",
  description: "Quick links for Everything Ninja product picks.",
};

const productLinks = [
  {
    name: "Ninja Creami",
    description: "Frozen treats, protein ice cream, sorbet, and prep tools",
    href: "#ninja-creami",
    accent: "bg-[#d7ff45]",
    eyebrow: "Creami file",
    mark: "01",
  },
  {
    name: "Ninja Indoor Grill",
    description: "Countertop grilling, crisping, and weeknight dinners",
    href: "#ninja-indoor-grill",
    accent: "bg-[#75d7ff]",
    eyebrow: "Grill file",
    mark: "02",
  },
];

function InstagramIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <rect height="18" rx="5" width="18" x="3" y="3" />
      <circle cx="12" cy="12" r="4" />
      <path d="M17.5 6.5h.01" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2.2"
    >
      <path d="M7 17 17 7" />
      <path d="M9 7h8v8" />
    </svg>
  );
}

export default function InstagramPage() {
  return (
    <main
      className={`${bricolage.className} min-h-dvh bg-[#151513] text-[#10110e]`}
    >
      <InstagramBrowserHint />
      <div
        className={`${styles.phone} relative mx-auto flex min-h-dvh w-full max-w-[430px] flex-col overflow-hidden px-5 pb-6 pt-8 shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_28px_80px_rgba(0,0,0,0.42)]`}
      >
        <div
          aria-hidden="true"
          className="absolute left-0 top-0 z-10 h-[8px] w-full bg-[linear-gradient(90deg,#10110e_0_30%,#d7ff45_30%_50%,#ff6048_50%_72%,#75d7ff_72%_100%)]"
        />

        <section className="relative z-10 flex flex-col items-center pb-8 pt-8 text-center">
          <div
            className={`${styles.logoPlate} grid h-[88px] w-full max-w-[334px] place-items-center rounded-[8px] border-[3px] border-[#10110e] bg-white px-5 shadow-[8px_8px_0_#10110e]`}
          >
            <Image
              alt="Everything Ninja logo"
              className="h-auto w-full"
              height={239}
              priority
              sizes="(max-width: 430px) 280px, 320px"
              src="/everything-ninja-logo.webp"
              width={1167}
            />
          </div>

          <p className="mt-8 border-y-2 border-[#10110e] bg-[#d7ff45] px-3 py-1 text-[13px] font-extrabold leading-none tracking-normal">
            Countertop gear notes
          </p>

          <h1 className="mt-4 text-[38px] font-extrabold leading-[0.96] tracking-normal">
            @everything.ninja
          </h1>
          <p className="mt-4 max-w-[340px] text-[22px] font-bold leading-[1.12] tracking-normal">
            Ninja product guides, comparison notes, and tools for choosing the
            right countertop gear
          </p>

          <a
            aria-label="Instagram profile"
            className="mt-6 inline-flex h-11 items-center gap-2 rounded-[8px] border-2 border-[#10110e] bg-[#10110e] px-4 text-[16px] font-extrabold leading-none text-white shadow-[4px_4px_0_#75d7ff] transition active:translate-x-0.5 active:translate-y-0.5 active:shadow-[2px_2px_0_#75d7ff]"
            href="https://www.instagram.com/everything.ninja/"
            rel="noreferrer"
            target="_blank"
          >
            <InstagramIcon />
            Instagram
          </a>
        </section>

        <section className="relative z-10 mt-3">
          <div
            aria-hidden="true"
            className="mb-4 h-[10px] w-full rounded-full bg-[repeating-linear-gradient(90deg,#10110e_0_18px,transparent_18px_26px)]"
          />
          <h2 className="text-center text-[25px] font-extrabold leading-none tracking-normal">
            Ninja product links
          </h2>

          <div className="mt-5 space-y-3">
            {productLinks.map((link, index) => (
              <a
                className={`${styles.linkCard} group grid min-h-[104px] grid-cols-[62px_1fr_34px] items-center gap-3 rounded-[8px] border-2 border-[#10110e] bg-white px-3 py-3 shadow-[6px_6px_0_#10110e] transition active:translate-x-0.5 active:translate-y-0.5 active:shadow-[3px_3px_0_#10110e]`}
                href={link.href}
                key={link.name}
                style={{ animationDelay: `${120 + index * 90}ms` }}
              >
                <span
                  className={`grid h-[58px] w-[58px] place-items-center rounded-[8px] border-2 border-[#10110e] ${link.accent} text-[22px] font-extrabold leading-none shadow-[3px_3px_0_rgba(16,17,14,0.18)]`}
                >
                  {link.mark}
                </span>
                <span className="min-w-0 text-left">
                  <span className="mb-1 block text-[12px] font-extrabold leading-none tracking-normal text-[#ff6048]">
                    {link.eyebrow}
                  </span>
                  <span className="block text-[22px] font-extrabold leading-[1.02] tracking-normal">
                    {link.name}
                  </span>
                  <span className="mt-1.5 block text-[15px] font-semibold leading-[1.18] text-[#10110e]/65">
                    {link.description}
                  </span>
                </span>
                <span className="grid h-8 w-8 place-items-center justify-self-end rounded-[8px] bg-[#10110e] text-white transition group-active:translate-x-0.5">
                  <ArrowIcon />
                </span>
              </a>
            ))}
          </div>
        </section>

        <div className="relative z-10 mt-auto pt-14">
          <a
            className="mx-auto flex min-h-[62px] w-full max-w-[340px] items-center justify-center gap-2 rounded-[8px] border-2 border-[#10110e] bg-[#ff6048] px-5 text-center text-[21px] font-extrabold leading-tight text-white shadow-[6px_6px_0_#10110e] transition active:translate-x-0.5 active:translate-y-0.5 active:shadow-[3px_3px_0_#10110e]"
            href="/"
          >
            Visit everything.ninja
            <ArrowIcon />
          </a>
        </div>
      </div>
    </main>
  );
}
