export default function About() {
  return (
    <main className="relative">
      <div className="container-blue -z-10 h-[40em] absolute"></div>
      <section className="main-banner">
        <article className="flex  flex-col px-4  pt-10 text-white">
          <p className=" text-lg text-center mb-2 mt-5 sm:pt-0">About</p>
          <h2 className="sm:text-5xl text-xl mx-auto   max-w-[23ch]  text-pretty sm:leading-normal   text-center">
            We love to make great things, things that matter
          </h2>
          <div className="flex justify-center text-center flex-col items-center pt-10 text-sm pb-20">
            <p className="max-w-[60ch]">
              Funding handshake buyer business-to-business metrics iPad
              patnership. First mover advantage innovator success deployment
              non-disclosure.
            </p>
          </div>
        </article>
      </section>
      <article className="relative ">
        <section className="   mx-auto    pb-5">
          <article className="sm:max-w-[720px] md:max-w-[1020px] w-full grid grid-cols-2 h-[500px] md:grid-cols-3    mx-auto gap-3 grid-rows-2 px-3">
            <picture className="rounded-lg banner-2 overflow-hidden">
              <img
                src="./assets/call.png"
                className="h-full w-full object-center object-cover "
                alt=""
              />
            </picture>
            <picture className="md:row-span-2 overflow-hidden rounded-lg">
              <img
                src="./assets/rachelli.png"
                alt=""
                className="h-full w-full object-cover"
              />
            </picture>
            <picture className="rounded-lg banner-2 overflow-hidden">
              <img
                src="./assets/cool.webp"
                alt=""
                className="h-full w-full object-cover"
              />
            </picture>
            <picture className="rounded-lg banner-2 overflow-hidden">
              <img
                src="./assets/monica.webp"
                alt=""
                className="h-full w-full object-cover  object-center"
              />
            </picture>
            <picture className="rounded-lg banner-2 overflow-hidden col-span-2 h-[150px] md:h-auto md:col-span-1">
              <img
                src="./assets/users.png"
                className="h-full w-full object-cover object-center"
                alt=""
              />
            </picture>
          </article>
        </section>
        <section className="max-w-[800px] px-3 py-28 flex flex-col gap-2 mx-auto">
          <span className="text-black/50 text-lg mb-4">Our story</span>
          <h2 className="md:text-4xl leading-relaxed text-3xl  text-black max-w-[30ch]  text-pretty   ">
            Handshake infographic mass market crowdfunding iteration.
          </h2>
          <p className="leading-loose text-black/75 text-md  text-pretty pt-3 w-[65ch] md:w-auto  ">
            Conversion angel investor entrepreneur first mover advantage.
            Handshake infographic mass market crowdfunding iteration. Traction
            stock user experience deployment beta innovator incubator focus.
            Sales user experience branding growth hacking holy grail
            monetization conversion prototype stock network effects. Learning
            curve network effects return on investment bootstrapping
            business-to-consumer.
          </p>
        </section>
        <section className="container-blue py-20 text-center text-white ">
          <article className="max-w-[1120px] mx-auto w-full">
            <div>
              <span className=" text-lg mb-4">Our story</span>
              <h2 className="sm:text-4xl leading-relaxed text-2xl mx-auto   max-w-[30ch]  text-pretty   ">
                Handshake infographic mass market crowdfunding iteration.
              </h2>
            </div>
            <article className="flex justify-between p-3 py-10">
              <div className="flex flex-col justify-center items-start">
                <span className="text-6xl  text-green-500 font-semibold">
                  120 m
                </span>
                <span className="text-2xl text-white/85 py-3 ">
                  Cool feature title
                </span>
              </div>
              <div className="flex flex-col justify-center items-start">
                <span className="text-6xl  text-green-500 font-semibold">
                  10.000
                </span>
                <span className="text-2xl text-white/85 py-3 ">
                  Cool feature title
                </span>
              </div>
              <div className="flex flex-col justify-center items-start">
                <span className="text-6xl  text-green-500 font-semibold">
                  240
                </span>
                <span className="text-2xl text-white/85 py-3 ">
                  Cool feature title
                </span>
              </div>
            </article>
          </article>
        </section>
        <article className="max-w-[800px] px-3 py-10 flex flex-col gap-2 mx-auto">
          <section className="py-5">
            <p className=" text-lg mb-4">Our team</p>
            <h3 className="md:text-4xl leading-relaxed text-3xl  text-black max-w-[30ch]  text-pretty   ">
              The leadership team
            </h3>
            <p className="leading-loose text-black/75 text-md text-pretty pt-3 w-[65ch] md:w-auto  ">
              Conversion angel investor entrepreneur first mover advantage.
              Handshake infographic mass market crowdfunding iteration. Traction
              stock user experience deployment beta innovator incubator focus.
            </p>
          </section>
          <section className="grid md:grid-cols-3 sm:gap-10 py-5 ">
            <div className="flex flex-col gap-3 banner-2">
              <img src="./assets/call.png" alt="image" />
              <div>
                <span className="text-2xl font-medium">Michael Scott</span>
                <p className="text-xl m-0 p-0 text-black/55">General Manager</p>
              </div>
            </div>
            <div className="flex flex-col gap-3 banner-2">
              <img src="./assets/call.png" alt="image" />
              <div>
                <span className="text-2xl font-medium">Michael Scott</span>
                <p className="text-xl m-0 p-0 text-black/55">General Manager</p>
              </div>
            </div>
            <div className="flex flex-col gap-3 banner-2">
              <img src="./assets/call.png" alt="image" />
              <div>
                <span className="text-2xl font-medium">Michael Scott</span>
                <p className="text-xl m-0 p-0 text-black/55">General Manager</p>
              </div>
            </div>
          </section>
        </article>
        <section className="container-blue py-32 px-6 text-white ">
          <article className="max-w-[820px] mx-auto w-full">
            <div className="flex flex-col  gap-6">
              <span className=" text-lg mb-4">Our values</span>
              <h2 className="sm:text-4xl leading-normal text-2xl    max-w-[30ch]  text-pretty   ">
                Things in we believe
              </h2>
              <p className="leading-normal  text-lg  text-pretty pt-3 w-[55ch] md:w-auto  ">
                Conversion angel investor entrepreneur first mover advantage.
                Handshake infographic mass market crowdfunding iteration.
                Traction stock user experience deployment beta innovator
                incubator focus.
              </p>
            </div>
            <article className="flex flex-col gap-5 p-3 py-10">
              <div className="flex items-center banner-2 gap-4">
                <img
                  src="./assets/cool.webp"
                  alt=""
                  className="w-32 object-cover rounded-md aspect-square"
                />
                <div className="flex flex-col gap-3">
                  <span className="text-xl font-bold">We are commited</span>
                  <p className="text-lg">
                    Conversion angel investor entrepreneur first mover
                    advantage. Handshake infographic mass market crowdfunding
                    iteration.
                  </p>
                </div>
              </div>
              <div className="flex items-center banner-2 gap-6">
                <img
                  src="./assets/event.webp"
                  alt=""
                  className="w-32 object-cover rounded-md aspect-square"
                />
                <div className="flex flex-col gap-3">
                  <span className="text-xl font-bold">We are commited</span>
                  <p className="text-lg">
                    Conversion angel investor entrepreneur first mover
                    advantage. Handshake infographic mass market crowdfunding
                    iteration.
                  </p>
                </div>
              </div>
              <div className="flex items-center banner-2 gap-6">
                <img
                  src="./assets/event.webp"
                  alt=""
                  className="w-32 object-cover rounded-md aspect-square"
                />
                <div className="flex flex-col gap-3">
                  <span className="text-xl font-bold">We are commited</span>
                  <p className="text-lg">
                    Conversion angel investor entrepreneur first mover
                    advantage. Handshake infographic mass market crowdfunding
                    iteration.
                  </p>
                </div>
              </div>
            </article>
          </article>
        </section>
        <footer className="my-32 px-6">
          <section className="bg-[#0a2742] max-w-[1120px] mx-auto my-3 py-12 gap-12 rounded-xl flex flex-col items-center p-3">
            <h3 className="text-xl text-white text-center  sm:text-4xl max-w-[40ch]  md:leading-normal text-pretty ">
              An enterprise template to ramp up your company website
            </h3>
            <form className="flex gap-6 p-5 max-w-[600px] w-full justify-center flex-col sm:flex-row">
              <input
                type="text"
                placeholder="Your Email Addres"
                className="p-2 pl-7  text-lg rounded-full w-full max-w-3/5 outline-none"
              />
              <button className="p-2 px-8  text-nowrap font-bold text-lg rounded-full bg-green-400 text-[#0a2742] border-2 border-transparent hover:bg-[#0a2742] hover:border-green-400 transition-all duration-200 ease-linear hover:text-green-400">
                Start now
              </button>
            </form>
          </section>
        </footer>
      </article>
    </main>
  );
}
