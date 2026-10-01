"use client";

import type { AnchorHTMLAttributes } from "react";
import { trackEvent, type AnalyticsEvent } from "@/lib/analytics";

type TrackedLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  events?: AnalyticsEvent[];
};

export function TrackedLink({ events, onClick, ...props }: TrackedLinkProps) {
  return (
    <a
      {...props}
      onClick={(event) => {
        events?.forEach(trackEvent);
        onClick?.(event);
      }}
    />
  );
}
