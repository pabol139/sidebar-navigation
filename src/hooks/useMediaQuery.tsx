import { useEffect, useState } from "react";

export default function useMediaQuery(query: string, initial = false) {
  const [matches, setMatches] = useState(() => {
    if (typeof window === "undefined" || !window.matchMedia) return initial;
    return window.matchMedia(query).matches;
  });

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mq = window.matchMedia(query);
    const onChange = (event: MediaQueryListEvent | MediaQueryList) => {
      setMatches("matches" in event ? event.matches : mq.matches);
    };

    setMatches(mq.matches);

    mq.addEventListener("change", onChange as EventListener);
    return () => mq.removeEventListener("change", onChange as EventListener);
  }, [query]);

  return matches;
}
