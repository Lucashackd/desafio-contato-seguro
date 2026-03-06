import { useBreakpoint } from "./useBreakpoint";

export function useDevice() {
  const breakpoint = useBreakpoint();

  return {
    isMobile: breakpoint === "mobile",
    isTablet: breakpoint === "tablet",
    isDesktop: breakpoint === "desktop",
    isHandHeld: breakpoint !== "desktop",
  };
}
