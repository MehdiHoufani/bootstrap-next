export const breakpoints = () => {
  let isMobile = false;
  if (typeof window !== "undefined")
    isMobile = window.matchMedia("(max-width: 600px)").matches;
  return { isMobile };
};
