"use client";

import { useSyncExternalStore } from "react";

import { getOpeningStatus } from "@app/lib/openingStatus";

const ONE_MINUTE = 60_000;

// Re-render once a minute so the status flips at opening and closing time.
const subscribe = (onChange: () => void) => {
  const timer = setInterval(onChange, ONE_MINUTE);
  return () => clearInterval(timer);
};

// The current minute: stays the same value within a minute, so React re-renders only when it changes.
const getSnapshot = () => Math.floor(Date.now() / ONE_MINUTE);

// The page is built ahead of time, so the server cannot know the visitor's time.
const getServerSnapshot = () => null;

const OpenStatus: React.FC = () => {
  const minute = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  if (minute === null) {
    return <span aria-hidden="true" className="block h-[1.7em]" />;
  }

  const status = getOpeningStatus(new Date(minute * ONE_MINUTE));

  return (
    <span className="flex items-center gap-2">
      {status.isOpen && (
        <span aria-hidden="true" className="size-1.75 rounded-full bg-olive" />
      )}
      {status.label}
    </span>
  );
};

export default OpenStatus;
