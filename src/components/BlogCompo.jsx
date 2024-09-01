import React from "react";

export function CardsBlog() {
  const cards = [
    {
      imgUrl: "./assets/cool.webp",
      title: "Selectores De Css En Acción",
      name: "Monica Galler",
      time: "October 19 , 2023",
      link: "#",
      profile: "./assets/avatar-3.webp",
    },
    {
      imgUrl: "./assets/rachel.webp",
      title: "Grupos de selectores css",
      time: "October 18 , 2023",
      name: "Rachel Green",
      link: "",
      profile: "./assets/avatar-3.webp",
    },
    {
      imgUrl: "./assets/monica.webp",
      time: "October 17 , 2023",
      title: "Definición De Selectores Descendientes",
      name: "Monica Geller",
      profile: "./assets/avatar-3.webp",
      link: "",
    },
  ];
  return (
    <ul className="w-full flex flex-wrap justify-center md:flex-row flex-col max-w-[1100px] gap-7 mx-auto ">
      {cards.map((card, index) => (
        <Card card={card} key={index} />
      ))}
    </ul>
  );
}

function Card({ card }) {
  return (
    <article className="flex flex-col gap-5 relative   ">
      <img
        src={card.imgUrl}
        className="w-full h-[200px] rounded-md block mx-auto object-cover"
        alt="illustration image"
      />
      <h3 className="text-xl flex  gap-5 py-2">
        <b className="capitalize">category</b>{" "}
        <span className="text-black/35 font-medium">{card.time}</span>
      </h3>
      <a
        href="#"
        className="text-2xl  hover:text-black/40 transition-all duration-100 ease-linear max-w-[25ch] text-wrap text-black/70 leading-snug flex-1"
      >
        {card.title}
      </a>
      <section className="flex items-center gap-10   py-5">
        <img
          src={card.profile}
          alt={card.title}
          className="w-8 aspect-square"
        />
        <p className="text-xl">{card.name}</p>
      </section>
    </article>
  );
}
