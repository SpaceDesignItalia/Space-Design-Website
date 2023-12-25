import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

import CountUp from "react-countup";

import CoffeeRoundedIcon from "@mui/icons-material/CoffeeRounded";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import CommitRoundedIcon from "@mui/icons-material/CommitRounded";

export default function Stats() {
  const stats = [
    {
      id: 1,
      name: "Tazzine di caffè bevute",
      value: "1000",
      icon: <CoffeeRoundedIcon fontSize="50px" />,
    },
    {
      id: 2,
      name: "Righe di codice scritto",
      value: "100",
      icon: <CodeRoundedIcon fontSize="50px" />,
    },
    {
      id: 3,
      name: "Commit nelle repository",
      value: "4000",
      icon: <CommitRoundedIcon fontSize="50px" />,
    },
  ];

  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-40% 0px",
  });
  const variants = {
    hidden: { opacity: 0, y: 150 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div ref={ref} className="h-auto bg-white py-20 px-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              className="flex flex-col gap-3 justify-center items-center text-4xl font-semibold text-gray-900 sm:text-5xl"
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={variants}
              transition={{
                duration: 1.5,
                type: "spring",
                bounce: 0.25,
              }}
            >
              {stat.icon}
              {stat.id === 2 ? (
                <CountUp
                  end={inView ? stat.value : 0}
                  duration={3}
                  prefix="+"
                  suffix="k"
                  className="font-bold"
                />
              ) : (
                <CountUp
                  end={inView ? stat.value : 0}
                  duration={3}
                  prefix="+"
                  className="font-bold"
                />
              )}
              <p className="text-lg leading-7 text-gray-700">{stat.name}</p>
            </motion.div>
          ))}
        </dl>
      </div>
    </div>
  );
}
