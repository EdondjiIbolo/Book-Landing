import React, { useState } from "react";
import { AccordeonIcon } from "./Icons";

export default function Accordeon() {
  return (
    <div className="flex flex-col gap-4">
      <AccordeonItem />
      <AccordeonItem />
    </div>
  );
}

function AccordeonItem() {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };
  return (
    <article
      className={`border-b border-black/20 pb-3 h-12 md:h-16  overflow-hidden ${
        show ? "md:h-44 h-36" : ""
      } transition-all duration-200 ease-linear`}
    >
      <div
        className="flex items-center  justify-between  cursor-pointer"
        onClick={handleClick}
      >
        <h4 className="md:text-2xl text-lg md:py-3 ">
          {" "}
          We connect our customers with the best.
        </h4>
        <div
          className={`bg-blue-950 text-white rounded-full w-10 cursor-pointer hover:bg-white hover:text-blue-950 border-2 hover:border-blue-950 transition-all duration-150 ease-linear ${
            show ? " rotate-180" : "rotate-0"
          } transition-all duration-200 ease-linear`}
          onClick={handleClick}
        >
          <AccordeonIcon />
        </div>
      </div>
      <p className="text-xl leading-8">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus
        magnam quasi velit omnis ducimus. Cumque quam nesciunt voluptatem
        aperiam voluptate.
      </p>
    </article>
  );
}
