import "./banner.css";
import { ArrowIcon } from "./Icons";
export default function Banner() {
  return (
    <section className="main-banner">
      <section className="banner p-8 ">
        <article className="flex flex-col justify-center gap-4">
          <h1 className="text-3xl md:text-5xl max-w-[40ch] md:max-w-[20ch] leading-snug text-pretty font-medium">
            Save time by building fast with Boldo Template
          </h1>
          <p className="text-lg max-w-[50ch]">
            Funding handshake buyer business-to-business metrics iPad
            patnership. First mover advantage innovator success deployment
            non-disclousure
          </p>
          <section className="flex flex-col sm:flex-row mt-5 justify-between w-full gap-4 mx-auto font-medium text-lg">
            <a
              className="flex-1  bg-green-500 text-center p-2 text-black rounded-3xl hover:bg-transparent border-2 border-transparent hover:text-green-600 hover:border-green-600 transition-all duration-200 ease-linear"
              href="#"
            >
              Buy template
            </a>
            <a
              className="flex-1 bg-transparent border-2 text-whiteborder-white-600 text-center p-2 text-white rounded-3xl hover:bg-transparent hover:text-black hover:border-white transition-all duration-200 ease-linear hover:bg-white"
              href="#"
            >
              Explore
            </a>
          </section>
        </article>

        <img
          src="./assets/hero-graphics.svg"
          className="mx-auto"
          alt="hero image"
        />
      </section>
      <BannerFooter />
    </section>
  );
}

function BannerFooter() {
  return <section className="slider"></section>;
}

export function Cards() {
  const cards = [
    {
      imgUrl: "./assets/cool.webp",
      title: "Cool feature title",
      description: "Learning curve network effects return on investment.",
      link: "",
    },
    {
      imgUrl: "./assets/event.webp",
      title: "Even cooler feature",
      description: "Learning curve network effects return on investment.",
      link: "",
    },
    {
      imgUrl: "./assets/cool.webp",
      title: "Cool feature title",
      description: "Learning curve network effects return on investment.",
      link: "",
    },
  ];
  return (
    <ul className="cards ">
      {cards.map((card, index) => (
        <Card card={card} key={index} />
      ))}
    </ul>
  );
}

function Card({ card }) {
  return (
    <article className="card">
      <img
        src={card.imgUrl}
        className="w-full object-cover"
        alt="illustration image"
      />
      <h3 className="text-xl py-2">{card.title}</h3>
      <p className="text-lg text-black/45 leading-snug">{card.description}</p>
      <a
        href="#"
        className=" flex mt-2 text-lg items-center py-1 gap-8 border-black/70 hover:border-none hover:text-black/30 transition-all duration-150 ease-linear border-b-2 w-min text-nowrap"
      >
        <p>Explore page</p>
        <ArrowIcon />
      </a>
    </article>
  );
}
