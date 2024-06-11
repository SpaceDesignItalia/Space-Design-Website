import React, { useEffect, useState } from "react";
import { cn } from "@nextui-org/react";

function TypingAnimation({ children, duration = 200, className }) {
  const [displayedText, setDisplayedText] = useState([]);
  const [i, setI] = useState(0);

  const flattenChildren = (children) => {
    let flatChildren = [];
    React.Children.forEach(children, (child) => {
      if (typeof child === "string") {
        flatChildren = [
          ...flatChildren,
          ...child.split("").map((char) => ({ type: "text", char })),
        ];
      } else if (React.isValidElement(child)) {
        const childProps = { ...child.props };
        const nestedChildren = flattenChildren(child.props.children);
        flatChildren.push(
          ...nestedChildren.map((nestedChild) => ({
            ...nestedChild,
            element: React.cloneElement(child, { children: nestedChild.char }),
          }))
        );
      }
    });
    return flatChildren;
  };

  const flatTextArray = flattenChildren(children);

  useEffect(() => {
    const typingEffect = setInterval(() => {
      if (i < flatTextArray.length) {
        setDisplayedText((prevState) => [...prevState, flatTextArray[i]]);
        setI(i + 1);
      } else {
        clearInterval(typingEffect);
      }
    }, duration);

    return () => {
      clearInterval(typingEffect);
    };
  }, [duration, i, flatTextArray]);

  return (
    <p className={cn(className)}>
      {displayedText.map((item, index) =>
        item.element ? (
          <span
            className="bg-gradient-to-br from-[#FF0000] to-[#B91372] text-transparent bg-clip-text"
            key={index}
          >
            {item.char}
          </span>
        ) : (
          <span key={index}>{item.char}</span>
        )
      )}
    </p>
  );
}

export default TypingAnimation;
