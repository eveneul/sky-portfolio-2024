import { atom } from "recoil";

export const scrollState = atom({
  key: "scrollState",
  default: {
    lenis: null, // Lenis 인스턴스
    scroll: 0, // window.scrollY, 현재 스크롤 값
    limit: 0, // 스크롤할 수 있는 최댓값
    velocity: 0, // 스크롤 속도
    direction: 0, // 스크롤 방향, 1: 스크롤이 밑으로, 0: 스크롤 X, -1: 스크롤 위로
    progress: 0, // 스크롤 진행률
  },
});

export const textScaleState = atom({
  key: "textScaleState",
  default: 1,
});

export const textModelTransformState = atom({
  key: "textModelTransformState",
  default: 0,
});
