import { Link } from "react-router-dom";
import worksData from "../../public/mock/works";
import { ViewResume } from "./Button";
import { useRecoilValue } from "recoil";
import { scrollState } from "../state/common";
import { useEffect, useState } from "react";
import ScrollObserver from "../ts/interaction/scrollObserver";

export default function Works() {
  useEffect(() => {
    const worksList = document.querySelectorAll(".works-list li");

    if (worksList.length > 0) {
      const workListArray = Array.from(worksList);
      const inviewObserver = new ScrollObserver();
      inviewObserver.observeElement(workListArray);
    }
  }, []);

  return (
    <>
      <ul className="works-list">
        {worksData.map((work, index) => (
          <li className={`${work.class}`} key={work.title}>
            <Link to={work.url} target="_blank">
              <div className="w-full h-[400px] img-box">
                <img
                  src={work.imgSrc}
                  alt={work.title}
                  className="w-full h-full"
                />
              </div>
              <span className="title-box font-kr uppercase">{work.title}</span>
            </Link>
            {work.tp === 1 && <ViewResume />}
          </li>
        ))}
      </ul>
    </>
  );
}
