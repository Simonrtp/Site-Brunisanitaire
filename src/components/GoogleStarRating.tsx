"use client";

import { Star } from "lucide-react";

const sizeClass = { sm: "h-3.5 w-3.5", md: "h-4 w-4" } as const;

export default function GoogleStarRating({
  value,
  size = "md",
  className = "",
}: {
  value: number;
  size?: keyof typeof sizeClass;
  className?: string;
}) {
  const cls = sizeClass[size];
  return (
    <div className={`flex gap-0.5 ${className}`}>
      {[1, 2, 3, 4, 5].map((i) => {
        const fill = Math.min(1, Math.max(0, value - (i - 1)));
        return (
          <div key={i} className={`relative shrink-0 ${cls}`}>
            <Star
              className={`absolute inset-0 ${cls} text-gray-200`}
              fill="currentColor"
              strokeWidth={0}
              aria-hidden
            />
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${fill * 100}%` }}
            >
              <Star
                className={`${cls} fill-yellow-400 text-yellow-400`}
                strokeWidth={0}
                aria-hidden
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
