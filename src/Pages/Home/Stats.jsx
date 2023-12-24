import React from "react";
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

  return (
    <div className="h-auto bg-white py-20 px-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="flex flex-col gap-3 justify-center items-center text-3xl font-semibold text-gray-900 sm:text-5xl"
            >
              {stat.icon}
              {stat.id === 2 ? (
                <CountUp
                  end={stat.value}
                  duration={3}
                  prefix="+"
                  suffix="k"
                  className="font-bold"
                />
              ) : (
                <CountUp
                  end={stat.value}
                  duration={3}
                  prefix="+"
                  className="font-bold"
                />
              )}
              <p className="text-lg leading-7 text-gray-700">{stat.name}</p>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
