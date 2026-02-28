"use client";

import Image from "next/image";
import { useState, useEffect, useRef, useCallback } from "react";

const testimonials = [
  {
    name: "Aditi M.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
    quote:
      '"Before starting therapy, I constantly felt overwhelmed and emotionally exhausted. I didn\'t understand my triggers or patterns. Today, I feel grounded, self-aware, and more in control of my emotions than ever before."',
    verified: true,
    program: "Reborn – Emotional Healing",
    outcome: "Emotional Regulation & Confidence",
    duration: "12 Weeks",
  },
  {
    name: "Rohan K.",
    rating: 5,
    image:
      "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?semt=ais_hybrid&w=740&q=80",
    quote:
      '"I was navigating burnout and self-doubt. Through guided sessions and reflective exercises, I gained clarity about my goals and rebuilt my confidence. The tools I learned continue to support me daily."',
    verified: false,
    program: "Life Transformation Program",
    outcome: "Renewed Direction & Mental Clarity",
    duration: "10 Weeks",
  },
  {
    name: "Neha S. - Delhi",
    rating: 5,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150",
    quote:
      '"By week 6, I felt emotionally lighter and mentally stronger. I learned how to process my feelings instead of suppressing them. It changed how I approach relationships and life decisions."',
    verified: false,
    program: "Private Counseling",
    outcome: "Emotional Strength & Self-Awareness",
    duration: "8 Weeks",
  },
  {
    name: "Anonymous Participant",
    rating: 5,
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150",
    quote:
      '"What stood out was the safe, non-judgmental environment. I never felt rushed. Healing finally felt possible, practical, and sustainable."',
    verified: false,
    program: "Mindfulness Circles",
    outcome: "Reduced Anxiety & Inner Stability",
    duration: "Ongoing",
  },
];

const SLIDE_DURATION = 450; // ms for CSS transition
const INTERVAL_MS = 3500;

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5 mt-1">
      {Array.from({ length: rating }).map((_, i) => (
        <svg
          key={i}
          className="w-3 h-3 text-yellow-400"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof testimonials)[0];
}) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-md flex flex-col h-full select-none">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 text-sm">
              {testimonial.name}
            </h3>
            <StarRating rating={testimonial.rating} />
          </div>
        </div>
        {testimonial.verified && (
          <div className="bg-teal-500 rounded-full p-1.5 flex-shrink-0">
            <svg
              className="w-4 h-4 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        )}
      </div>
      <p className="text-gray-700 text-sm leading-relaxed flex-1 overflow-hidden">
        {testimonial.quote}
      </p>
      <div className="grid grid-cols-3 gap-4 pt-3 mt-3 border-t border-gray-100">
        {[
          { label: "Program", value: testimonial.program },
          { label: "Outcome", value: testimonial.outcome },
          { label: "Duration", value: testimonial.duration },
        ].map(({ label, value }) => (
          <div key={label}>
            <p className="text-[10px] text-teal-600 font-semibold mb-1 uppercase">
              {label}
            </p>
            <p className="text-xs text-gray-900 font-medium leading-tight">
              {value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * True sliding carousel — infinite loop via cloned items + silent position snap.
 *
 * Desktop: viewport shows 3 cards, advances 1 at a time.
 * Mobile:  viewport shows 1 card.
 *
 * Card widths are measured in pixels via a ResizeObserver on the viewport div
 * so translateX is always exact regardless of container size.
 */
export default function TestimonialsSection() {
  const total = testimonials.length;
  const CLONES = total; // clone the full set on each side → always enough buffer
  const GAP_D = 24; // desktop gap px
  const GAP_M = 16; // mobile gap px

  // track = [...clones_end, ...real, ...clones_start]
  const track = [
    ...testimonials.slice(-CLONES),
    ...testimonials,
    ...testimonials.slice(0, CLONES),
  ];

  // trackIndex: real index 0 maps to position CLONES in the track
  const [trackIndex, setTrackIndex] = useState(0); // 0 = first real card
  const [animated, setAnimated] = useState(true);
  const isSliding = useRef(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Measure the viewport width for pixel-perfect translation
  const desktopViewportRef = useRef<HTMLDivElement>(null);
  const mobileViewportRef = useRef<HTMLDivElement>(null);
  const [desktopVW, setDesktopVW] = useState(0);
  const [mobileVW, setMobileVW] = useState(0);

  useEffect(() => {
    const obs = new ResizeObserver((entries) => {
      for (const e of entries) {
        if (e.target === desktopViewportRef.current)
          setDesktopVW(e.contentRect.width);
        if (e.target === mobileViewportRef.current)
          setMobileVW(e.contentRect.width);
      }
    });
    if (desktopViewportRef.current) obs.observe(desktopViewportRef.current);
    if (mobileViewportRef.current) obs.observe(mobileViewportRef.current);
    return () => obs.disconnect();
  }, []);

  // Card widths in px
  const desktopCardW = desktopVW > 0 ? (desktopVW - GAP_D * 2) / 3 : 0;
  const mobileCardW = mobileVW > 0 ? mobileVW : 0;

  // translateX for position p in the track
  const desktopX = (p: number) => -(p * (desktopCardW + GAP_D));
  const mobileX = (p: number) => -(p * (mobileCardW + GAP_M));

  // dot: which real card is first-visible
  const activeDot = ((trackIndex % total) + total) % total;

  const snapIfNeeded = useCallback(() => {
    setTrackIndex((cur) => {
      if (cur < 0) {
        setAnimated(false);
        requestAnimationFrame(() =>
          requestAnimationFrame(() => setAnimated(true)),
        );
        return cur + total;
      }
      if (cur >= total) {
        setAnimated(false);
        requestAnimationFrame(() =>
          requestAnimationFrame(() => setAnimated(true)),
        );
        return cur - total;
      }
      return cur;
    });
    isSliding.current = false;
  }, [total]);

  const slideTo = useCallback(
    (newIdx: number) => {
      if (isSliding.current) return;
      isSliding.current = true;
      setAnimated(true);
      setTrackIndex(newIdx);
      setTimeout(snapIfNeeded, SLIDE_DURATION + 10);
    },
    [snapIfNeeded],
  );

  const advance = useCallback(
    (dir: "next" | "prev") => slideTo(trackIndex + (dir === "next" ? 1 : -1)),
    [trackIndex, slideTo],
  );

  useEffect(() => {
    timerRef.current = setInterval(() => advance("next"), INTERVAL_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [advance]);

  const handleNav = (dir: "next" | "prev") => {
    if (timerRef.current) clearInterval(timerRef.current);
    advance(dir);
    timerRef.current = setInterval(() => advance("next"), INTERVAL_MS);
  };

  const handleDot = (dotIdx: number) => {
    if (timerRef.current) clearInterval(timerRef.current);
    slideTo(dotIdx);
    timerRef.current = setInterval(() => advance("next"), INTERVAL_MS);
  };

  const css = animated
    ? `transform ${SLIDE_DURATION}ms cubic-bezier(0.4,0,0.2,1)`
    : "none";

  const ArrowBtn = ({
    dir,
    onClick,
  }: {
    dir: "prev" | "next";
    onClick: () => void;
  }) => (
    <button
      onClick={onClick}
      className="w-11 h-11 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-teal-50 transition flex-shrink-0"
      aria-label={dir === "prev" ? "Previous" : "Next"}
    >
      <svg
        className="w-5 h-5 text-teal-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d={dir === "prev" ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"}
        />
      </svg>
    </button>
  );

  return (
    <section
      className="pt-20 pb-[20vh] relative overflow-hidden"
      style={{
        backgroundImage:
          "url('/images/19726c9c-7c52-4a43-9af5-9c3187998d61 1.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="mb-12">
          <p className="text-gray-900 text-sm font-semibold mb-3">
            Real Transformations
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold mb-4">
            Real <span className="text-teal-600 font-semibold">Stories</span>,
            Real <span className="text-teal-600">People</span>
          </h2>
          <p className="text-gray-700 text-base max-w-2xl">
            See how individuals have rediscovered clarity, resilience, and
            emotional strength through our guided wellness programs.
          </p>
        </div>

        {/* ── DESKTOP ── */}
        <div className="hidden md:flex items-center gap-4">
          <ArrowBtn dir="prev" onClick={() => handleNav("prev")} />

          {/* Viewport */}
          <div ref={desktopViewportRef} className="flex-1 overflow-hidden">
            {/* Track */}
            <div
              className="flex"
              style={{
                gap: `${GAP_D}px`,
                transform: `translateX(${desktopX(trackIndex + CLONES)}px)`,
                transition: css,
                willChange: "transform",
              }}
            >
              {track.map((item, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 h-[340px]"
                  style={{
                    width:
                      desktopCardW > 0
                        ? `${desktopCardW}px`
                        : "calc((100% - 48px)/3)",
                  }}
                >
                  <TestimonialCard testimonial={item} />
                </div>
              ))}
            </div>
          </div>

          <ArrowBtn dir="next" onClick={() => handleNav("next")} />
        </div>

        {/* ── MOBILE ── */}
        <div className="block md:hidden">
          <div ref={mobileViewportRef} className="overflow-hidden">
            <div
              className="flex"
              style={{
                gap: `${GAP_M}px`,
                transform: `translateX(${mobileX(trackIndex + CLONES)}px)`,
                transition: css,
                willChange: "transform",
              }}
            >
              {track.map((item, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 h-[360px]"
                  style={{
                    width: mobileCardW > 0 ? `${mobileCardW}px` : "100%",
                  }}
                >
                  <TestimonialCard testimonial={item} />
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-between mt-5">
            <ArrowBtn dir="prev" onClick={() => handleNav("prev")} />
            <ArrowBtn dir="next" onClick={() => handleNav("next")} />
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => handleDot(i)}
              aria-label={`Go to slide ${i + 1}`}
              className="rounded-full transition-all duration-300"
              style={{
                backgroundColor: activeDot === i ? "#0d9488" : "#d1d5db",
                width: activeDot === i ? "20px" : "8px",
                height: "8px",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
