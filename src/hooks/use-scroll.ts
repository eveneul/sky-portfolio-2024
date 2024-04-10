// import Lenis from "@studio-freight/lenis/types";
import Lenis from "@studio-freight/lenis";
import { useRecoilState } from "recoil";
import { scrollState } from "../state/common";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { LenisScrollType } from "../types/common";

export default function useScroll() {
  const [lenis, setLenis] = useState<Lenis | null>(null);
  const [lenisState, setLenisState] = useRecoilState(scrollState);
  const reqIdRef = useRef<number | null>(null);
  useEffect(() => {
    if (lenis) {
      if (reqIdRef.current) cancelAnimationFrame(reqIdRef.current);
      const animate = (time: DOMHighResTimeStamp) => {
        lenis?.raf(time);
        reqIdRef.current = requestAnimationFrame(animate);
      };
      reqIdRef.current = requestAnimationFrame(animate);
    }
    return () => {
      if (reqIdRef.current !== null) {
        cancelAnimationFrame(reqIdRef.current);
      }
    };
  }, [lenis]);

  useLayoutEffect(() => {
    const lenisInstance = new Lenis({
      duration: 0.8,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    //@ts-ignore
    window.lenis = lenisInstance;

    lenisInstance.on(
      "scroll",
      ({ scroll, limit, velocity, direction, progress }: LenisScrollType) => {
        setLenisState((prevLenisState) => {
          return {
            ...prevLenisState,
            scroll,
            limit,
            velocity,
            direction,
            progress,
          };
        });
      }
    );

    window.addEventListener("lenisStop", () => {
      lenisInstance.stop();
    });
    window.addEventListener("lenisStart", () => {
      lenisInstance.start();
    });
    window.addEventListener("lenisTop", () => {
      lenisInstance.scrollTo(0, { immediate: true });
    });

    setLenis(lenisInstance);

    setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    }, 500);

    return () => {
      lenisInstance.destroy();
      setLenis(null);
    };
  }, [setLenis]);

  return lenis;
}
