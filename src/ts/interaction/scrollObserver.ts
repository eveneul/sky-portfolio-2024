class ScrollObserver {
  observer: IntersectionObserver | null;

  constructor() {
    this.observer = null;
  }

  observeElement(element: Element | Array<Element>) {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            entry.target.classList.add("in-view-from-bottom");
          } else {
            entry.target.classList.remove("in-view");
            if (entry.boundingClientRect.top > window.innerHeight * 0.5) {
              entry.target.classList.remove("in-view-from-bottom");
            }
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      }
    );

    if (Array.isArray(element)) {
      element.forEach((el) => {
        this.observer?.observe(el);
      });
    } else {
      this.observer.observe(element);
    }
  }

  disconnect() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}

export default ScrollObserver;
