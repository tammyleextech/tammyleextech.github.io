import React, { useState, useRef, useEffect } from "react";
import { FadeInDiv } from "./fade-in.styles";

const FadeInSection = ({ children }) => {
  const [isVisible, setVisible] = useState(true);
  const domRef = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    const currentRef = domRef.current;
    observer.observe(currentRef);
    return () => observer.unobserve(currentRef);
  }, []);

  return (
    <FadeInDiv ref={domRef} isVisible={isVisible}>
      {children}
    </FadeInDiv>
  );
};

export default FadeInSection;
