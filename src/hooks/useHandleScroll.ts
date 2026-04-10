import { useLenis } from "@studio-freight/react-lenis";

export const useScrollTo = () => {
  const lenis = useLenis();

  const scrollToId = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    lenis?.scrollTo(id, {
      offset: -80,
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
  };

  return scrollToId;
};
