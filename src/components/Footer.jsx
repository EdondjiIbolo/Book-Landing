export default function Footer() {
  return (
    <footer className="p-6 w-full bg-slate-200/40 mt-16 py-20 ">
      <article className="w-full sm:justify-between flex col-span-2 sm:flex-row flex-col gap-3 max-w-[1120px] mx-auto">
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
  );
}
