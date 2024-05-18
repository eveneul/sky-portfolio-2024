import { Suspense, useEffect, useRef, useState } from "react";
import Scene from "../components/3D/Scene";
import Test from "../components/3D/Test";
import Header from "../components/Header";
import Intro from "../components/Intro";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  scrollState,
  textModelTransformState,
  textScaleState,
} from "../state/common";
import useScroll from "../hooks/use-scroll";
import Lenis from "@studio-freight/lenis/types";
import { transformToScroll } from "../ts/interaction/utils";
import Works from "../components/Works";
import { OutsideLink } from "../components/Button";
import SplitText from "../components/SplitText";
import ScrollObserver from "../ts/interaction/scrollObserver";

export default function Home(lenis: Lenis | null) {
  const lenisValue = useRecoilValue(scrollState);
  const [textScale, setTextScale] = useRecoilState(textScaleState);
  const [textModelTransform, setTextModelTransform] = useRecoilState(
    textModelTransformState
  );
  const [circleWidth, setCircleWidth] = useState(0);

  const [translatePoint, setTranslatePoint] = useState(0);

  const visualRef = useRef<HTMLDivElement>(null);
  const worksRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const workTitleRef = useRef<HTMLHeadingElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (visualRef.current) {
      setTranslatePoint(visualRef.current?.getBoundingClientRect().height);
    }
  }, []);

  useEffect(() => {
    const circleWrapHeight = circleRef.current?.getBoundingClientRect().height;
    const circleWrapTop = circleRef.current?.getBoundingClientRect().top;

    const transformTextScale = transformToScroll(
      1,
      20,
      lenisValue.scroll,
      0,
      translatePoint - 300
    );

    const transformTextModelScale = transformToScroll(
      0,
      10,
      lenisValue.scroll,
      0,
      translatePoint - 300
    );

    const transformCircleScale = transformToScroll(
      0,
      2500,
      lenisValue.scroll,
      987,
      2800
    );

    if (visualRef.current && worksRef.current) {
      setTextScale(transformTextScale);
      setTextModelTransform(transformTextModelScale);
    }

    if (transformCircleScale > 0) {
      setCircleWidth(transformCircleScale);
    }
    if (circleWrapTop && circleWrapTop > 0) {
      setCircleWidth(0);
    }

    if (circleWrapTop && circleWrapTop * -1 > window.innerHeight / 2 - 300) {
      workTitleRef.current?.classList.add("in-view");
    }

    const contectTop = contactRef.current?.getBoundingClientRect().top;
    if (contectTop && contectTop < 30) {
    }
  }, [lenisValue]);

  useEffect(() => {
    const splitTexts = document.querySelectorAll(".split-text");
    if (splitTexts.length === 0 || !splitTexts) return;
    splitTexts.forEach((splitText: HTMLElement, i) => {
      splitText.style.transitionDelay = `${i * 100}ms`;
    });
  }, []);

  useEffect(() => {
    const observer = new ScrollObserver();
    const contectSection = document.querySelector(".sc-contact");
    const workSectTitle = document.querySelector(".sc-work h2 .split-text");
    if (contectSection) {
      observer.observeElement(contectSection);
    }

    if (workSectTitle) {
      observer.observeElement(workSectTitle);
    }
    // const contactTitle1 = document.querySelector(".introduce-1 .split-text");
    // const contactTitle2 = document.querySelector(".introduce-2 .split-text");
    // const contactTitle3 = document.querySelector(".introduce-3 .split-text");
    // const contactTitle4 = document.querySelector(".introduce-4 .split-text");
    // const elements = [
    //   workSectTitle,
    //   contactTitle1,
    //   contactTitle2,
    //   contactTitle3,
    //   contactTitle4,
    // ];
    // if (elements.length === 0 || !elements) return;
    // const inviewObserver = new ScrollObserver();
    // elements.forEach((element, i) => {
    //   inviewObserver.observeElement(element);
    // });
    // inviewObserver.observeElement(workSectTitle);
    // inviewObserver.observeElement(contactTitle1);
    // inviewObserver.observeElement(contactTitle2);
    // inviewObserver.observeElement(contactTitle3);
    // inviewObserver.observeElement(contactTitle4);
  }, []);

  return (
    <>
      <Intro />

      <div className="h-[400vh] w-[100vw] bg-black" ref={visualRef}>
        <section className="sc-visual h-[100vh] flex justify-center sticky top-0 ">
          <h2 className="hidden">Sky Portfolio</h2>
          <div className="h-full w-full ">
            <Scene />
          </div>
        </section>
        <div
          className=" w-full h-screen sticky top-0 overflow-x-hidden"
          ref={circleRef}
        >
          <i
            className="block h-[auto] aspect-square bg-white rounded-[50%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 origin-center w-[1px]"
            style={{
              transform: `scale(${circleWidth})`,
            }}
          ></i>
        </div>
      </div>

      <section className="sc-work w-full bg-white" ref={worksRef}>
        <h2 className="translate-y-[-80px]">
          <SplitText text="work" style="text-60" />
        </h2>
        <div className="bg-white w-full relative">
          <Works />
        </div>
      </section>
      <section
        className="sc-contact bg-black w-full h-screen flex flex-col justify-center items-center"
        ref={contactRef}
      >
        <div className="flex flex-col  justify-center">
          <div className="text-64 font-kr text-white uppercase ml-[161px] flex items-center introduce-1">
            <SplitText text="UI/UX" style="font-en translate-y-10" />를 이해하고
          </div>
          <div className="text-64 font-kr text-white uppercase ml-[474px] flex items-center introduce-2">
            <SplitText text="motion" style="font-en translate-y-10" />을
            좋아하며
          </div>
          <div className="text-64 font-kr text-white uppercase flex items-center introduce-3">
            최고의
            <SplitText text="performance" style="font-en translate-y-10" />를
            창작하는
          </div>
          <h2 className="uppercase text-white flex flex-col justify-center items-center mt-50">
            <div className="introduce-4">
              <SplitText text="interaction developer" style="text-white" />
            </div>
            <span className="text-[170px] font-kr font-700">오하늘입니다</span>
          </h2>
        </div>
        <div className="flex justify-center items-center mt-70 gap-x-40">
          <OutsideLink text={"phone"} url="tel:010-7278-9864" />
          <OutsideLink text={"email"} url="mailto:'nebulass@naver.com'" />
        </div>
      </section>
    </>
  );
}
