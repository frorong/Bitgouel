import { useEffect, useRef } from "react";

const useIntersectionObserver = (
  callback: IntersectionObserverCallback,
  options?: IntersectionObserverInit
) => {
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (observer.current) {
      observer.current.disconnect();
    }

    observer.current = new IntersectionObserver(callback, options);

    return () => {
      observer.current?.disconnect();
    };
  }, [callback, options]);

  const observe = (element: Element | null) => {
    if (element) {
      observer.current?.observe(element);
    }
  };

  const unobserve = (element: Element | null) => {
    if (element) {
      observer.current?.unobserve(element);
    }
  };

  return { observe, unobserve };
};

export default useIntersectionObserver;
