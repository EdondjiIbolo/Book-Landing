import Accordeon from "./components/Accordeon";
import { Cards } from "./components/Banner";
import { CardsBlog } from "./components/BlogCompo";
import Header from "./components/Header";
import { ChechIcon, EyeIcon, SheetIcon, SunIcon } from "./components/Icons";

function App() {
  return (
    <>
      <Header />
      <main className="px-4">
        <article className="flex flex-col pt-20">
          <p className="text-black/50 text-3xl text-center mb-4">
            Our Services
          </p>
          <h2 className="md:text-5xl text-xl mx-auto  text-black max-w-[29ch]  text-pretty md:leading-relaxed   text-center">
            Handshake infographic mass market crowdfunding iteration.
          </h2>
        </article>

        <Cards />
        <article>
          <section className="banner banner-2  text-black p-4 pt-24">
            <img
              src="./assets/income.webp"
              className="mx-auto"
              alt="hero image"
            />
            <article className="flex flex-col justify-center gap-9">
              <h1 className="text-3xl text-center md:text-start sm:text-4xl max-w-[40ch]  md:leading-relaxed text-pretty ">
                We connect our customers with the best, and help them keep
                up-and stay open.
              </h1>
              <div className="flex flex-col md:text-start items-center md:items-start text-center gap-5">
                <p className="text-xl flex-col md:flex-row  justify-center md:justify-start max-w-[50ch] flex items-center gap-2">
                  <ChechIcon />
                  We connect our customers with the besy.
                </p>
                <p className="text-xl flex-col md:flex-row  justify-center md:justify-start max-w-[50ch] flex items-center gap-2">
                  <ChechIcon />
                  We connect our customers with the besy.
                </p>
                <p className="text-xl flex-col md:flex-row  justify-center md:justify-start max-w-[50ch] flex items-center gap-2">
                  <ChechIcon />
                  We connect our customers with the besy.
                </p>

                <div className="flex flex-col items-center md:items-start mt-5 justify-between w-full gap-4 mx-auto font-medium text-xl">
                  <a
                    className="w-54  bg-[#0a2742] text-center p-3 px-12 text-white rounded-3xl hover:bg-transparent border-2 border-transparent hover:text-[#0a2742] hover:border-[#0a2742] transition-all duration-200 ease-linear"
                    href="#"
                  >
                    Start Now
                  </a>
                </div>
              </div>
            </article>
          </section>
        </article>
        <article>
          <section className="banner banner-2  text-black p-4 py-24">
            <article className="flex flex-col justify-center items-center md:items-start gap-9">
              <h1 className="text-3xl text-center md:text-start sm:text-4xl max-w-[40ch]  md:leading-relaxed text-pretty ">
                We connect our customers with the best, and help them keep
                up-and stay open.
              </h1>
              <div className="flex flex-col gap-5">
                <p className="text-xl flex-col md:flex-row  justify-center md:justify-start max-w-[50ch] flex items-center gap-5 p-6 cursor-pointer hover:bg-[#0a2742] hover:text-white transition-all duration-200 ease-linear rounded  shadow-lg">
                  <SheetIcon />
                  We connect our customers with the besy.
                </p>
                <p className="text-xl flex-col md:flex-row  justify-center md:justify-start max-w-[50ch] flex items-center gap-5 p-6 cursor-pointer hover:bg-[#0a2742] hover:text-white transition-all duration-200 ease-linear rounded  shadow-lg">
                  <EyeIcon />
                  We connect our customers with the besy.
                </p>
                <p className="text-xl flex-col md:flex-row  justify-center md:justify-start max-w-[50ch] flex items-center gap-5 p-6 cursor-pointer hover:bg-[#0a2742] hover:text-white transition-all duration-200 ease-linear rounded  shadow-lg">
                  <SunIcon />
                  We connect our customers with the besy.
                </p>
              </div>
            </article>
            <img
              src="./assets/agile.webp"
              className="mx-auto"
              alt="hero image"
            />
          </section>
        </article>
        <section className="py-16">
          <figure className="w-full flex py-3 justify-center">
            <img src="./assets/customers.webp" alt="" />
          </figure>
          <div className="banner pt-10 text-black">
            <h3 className="text-3xl text-center md:text-start sm:text-4xl max-w-[40ch]  md:leading-relaxed text-pretty ">
              We connect our customers with the best, and help them keep up-and
              stay open.
            </h3>
            <div>
              <Accordeon />
            </div>
          </div>
        </section>
        <section>
          <article className="flex flex-col md:pt-20 pt-16 justify-center items-center ">
            <p className="text-black/50 text-3xl text-center mb-4">Our Blog</p>
            <h2 className="text-3xl text-center  sm:text-4xl max-w-[40ch]  md:leading-relaxed text-pretty py-6">
              Value proposition accelerator product management venture
            </h2>
          </article>

          <div className="flex items-center flex-col gap-4">
            <CardsBlog />
            <a
              href="#"
              className="p-3 px-16 border-2 border-[#0a2742] hover:bg-[#0a2742] hover:text-white font-medium rounded-3xl transition-all duration-200 ease-linear"
            >
              Load more
            </a>
          </div>
        </section>
        <footer className="mt-10">
          <section className="bg-[#0a2742] max-w-[1100px] mx-auto my-3 py-12 gap-12 rounded-xl flex flex-col items-center p-3">
            <h3 className="text-3xl text-white text-center  sm:text-5xl max-w-[40ch]  md:leading-normal text-pretty ">
              An enterprise template to ramp up your company website
            </h3>
            <form className="flex gap-4 p-5 max-w-[600px] w-full justify-center flex-wrap">
              <input
                type="text"
                placeholder="Your Email Addres"
                className="p-2 pl-7 py-4 text-xl rounded-full w-full max-w-3/5 outline-none"
              />
              <button className="p-4 px-8 flex-1 font-bold text-lg rounded-full bg-green-400 text-[#0a2742] border-2 border-transparent hover:bg-[#0a2742] hover:border-green-400 transition-all duration-200 ease-linear hover:text-green-400">
                Start now
              </button>
            </form>
          </section>
        </footer>
      </main>
      <footer className="p-6 w-full bg-slate-200/40 mt-16 py-20 ">
        <article className="w-full sm:justify-between flex col-span-2 sm:flex-row flex-col gap-3 max-w-[1100px] mx-auto">
          <section className="w-[250px] flex pb-5 flex-col gap-8">
            <picture>
              <img src="./assets/logo-black.svg" alt="" />
            </picture>
            <p className="text-black/45 max-w-[30ch] sm:text-sm text-lg">
              Social media validation business model canvas graphical user
              interface launch party creative facebook iPad twitter.
            </p>
            <p>All rights reserved.</p>
          </section>
          <ul className="flex sm:justify-between sm:flex-row flex-col sm:items-center w-2/4 md:text-md text-lg gap-4">
            <ul className="flex flex-col gap-2">
              <p className="font-bold text-base py-3">Landing</p>
              <li className="py-2 hover:text-green-400 transition-all duration-200 ease-linear text-black/55">
                <a href="#">Home</a>
              </li>
              <li className="py-2 hover:text-green-400 transition-all duration-200 ease-linear text-black/55">
                <a href="#">About</a>
              </li>
              <li className="py-2 hover:text-green-400 transition-all duration-200 ease-linear text-black/55">
                <a href="#">Services</a>
              </li>
            </ul>
            <ul className="flex flex-col gap-2">
              <p className="font-bold text-base">Company</p>
              <li className="py-2 hover:text-green-400 transition-all duration-200 ease-linear text-black/55">
                <a href="#">Home</a>
              </li>
              <li className="py-2 hover:text-green-400 transition-all duration-200 ease-linear text-black/55 flex gap-3 items-center">
                <a href="#">Careers</a>{" "}
                <span className="p-1 bg-green-400 rounded-2xl px-2 text-xs text-black font-semibold">
                  Hiring!
                </span>
              </li>
              <li className="py-2 hover:text-green-400 transition-all duration-200 ease-linear text-black/55">
                <a href="#">Services</a>
              </li>
            </ul>
            <ul className="flex flex-col gap-2">
              <p className="font-bold text-base">Resources</p>
              <li className="py-2 hover:text-green-400 transition-all duration-200 ease-linear text-black/55">
                <a href="#">Blog</a>
              </li>
              <li className="py-2 hover:text-green-400 transition-all duration-200 ease-linear text-black/55">
                <a href="#">About</a>
              </li>
              <li className="py-2 hover:text-green-400 transition-all duration-200 ease-linear text-black/55">
                <a href="#">Services</a>
              </li>
            </ul>
          </ul>
        </article>
      </footer>
    </>
  );
}

export default App;
