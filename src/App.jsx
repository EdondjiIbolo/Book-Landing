import { Cards } from "./components/Banner";
import Header from "./components/Header";
import { ChechIcon } from "./components/Icons";

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
              <h1 className="text-lg md:text-4xl max-w-[40ch]  md:leading-relaxed text-pretty ">
                We connect our customers with the best, and help them keep
                up-and stay open.
              </h1>
              <div className="flex flex-col gap-5">
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

                <section className="flex flex-col sm:flex-row mt-5 justify-between w-full gap-4 mx-auto font-medium text-xl">
                  <a
                    className="w-54  bg-blue-950 text-center p-3 px-12 text-white rounded-3xl hover:bg-transparent border-2 border-transparent hover:text-blue-950 hover:border-blue-950 transition-all duration-200 ease-linear"
                    href="#"
                  >
                    Start Now
                  </a>
                </section>
              </div>
            </article>
          </section>
        </article>
      </main>
    </>
  );
}

export default App;
