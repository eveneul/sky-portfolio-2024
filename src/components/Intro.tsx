import { useEffect, useRef, useState } from "react";

export default function Intro() {
  const [isLoading, setIsLoading] = useState(true);
  const introRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (isLoading) {
      window.dispatchEvent(new Event("lenisStop"));
      setTimeout(() => {
        setIsLoading(false);
      }, 1500);
    }

    if (!isLoading) {
      introRef.current?.classList.add("sm");

      setTimeout(() => {
        const introBg = document.querySelector(".intro-bg") as HTMLElement;
        window.dispatchEvent(new Event("lenisStart"));
        if (introBg) {
          introBg.style.visibility = "hidden";
        }
      }, 700);
    }
  }, [isLoading]);

  return (
    <>
      <div id="intro" ref={introRef}>
        <div className="intro-view fixed top-0 left-[50%] translate-x-[-50%]  flex justify-center items-center z-10">
          <div className="relative intro-wrap">
            <i className="block h-1 bg-white translate-y-1 relative z-10 top-0 left-0 mix-blend-difference current"></i>
            <i className="block w-full h-1 bg-white opacity-30 absolute total"></i>
          </div>
        </div>
        <div className="intro-bg"></div>
      </div>
    </>
  );
}
