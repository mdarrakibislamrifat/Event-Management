import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import Card from "../../Components/Card/Card";

const Home = () => {
  const cards = useLoaderData();

  return (
    <div>
      <div>
        <Banner></Banner>
        <h2 className="text-3xl font-bold text-center my-10 underline mb-10">
          Our Services
        </h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 ">
        {cards.map((card) => (
          <Card key={card.event_id} card={card}></Card>
        ))}
      </div>

      {/* extra part one */}
      <h2 className="text-3xl text-center font-bold underline mt-10">
        Our Packages
      </h2>
      <div  className="mt-10 flex-wrap gap-4 items-center justify-center lg:flex">
        {/* first card */}
        <div >
          <div data-aos="flip-right" class="relative flex w-full max-w-[20rem] flex-col rounded-xl bg-gradient-to-tr from-amber-600 to-amber-400 bg-clip-border p-8 text-white shadow-md shadow-pink-500/40">
            <div class="relative m-0 mb-8 overflow-hidden rounded-none border-b border-white/10 bg-transparent bg-clip-border pb-8 text-center text-gray-700 shadow-none">
              <p class="block font-sans text-sm font-normal uppercase leading-normal text-white antialiased">
                standard
              </p>
              <h1 class="mt-6 flex justify-center gap-1 font-sans text-7xl font-normal tracking-normal text-white antialiased">
                <span class="mt-2 text-4xl">$</span>29
                <span class="self-end text-4xl">/mo</span>
              </h1>
            </div>
            <div class="p-0">
              <ul class="flex flex-col gap-4">
                <li class="flex items-center gap-4">
                  <span class="rounded-full border border-white/20 bg-white/20 p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      aria-hidden="true"
                      class="h-3 w-3"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      ></path>
                    </svg>
                  </span>
                  <p class="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                    3 team members
                  </p>
                </li>
                <li class="flex items-center gap-4">
                  <span class="rounded-full border border-white/20 bg-white/20 p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      aria-hidden="true"
                      class="h-3 w-3"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      ></path>
                    </svg>
                  </span>
                  <p class="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                    200+ components
                  </p>
                </li>
                <li class="flex items-center gap-4">
                  <span class="rounded-full border border-white/20 bg-white/20 p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      aria-hidden="true"
                      class="h-3 w-3"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      ></path>
                    </svg>
                  </span>
                  <p class="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                    40+ built-in pages
                  </p>
                </li>
                <li class="flex items-center gap-4">
                  <span class="rounded-full border border-white/20 bg-white/20 p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      aria-hidden="true"
                      class="h-3 w-3"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      ></path>
                    </svg>
                  </span>
                  <p class="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                    1 year free updates
                  </p>
                </li>
                <li class="flex items-center gap-4">
                  <span class="rounded-full border border-white/20 bg-white/20 p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      aria-hidden="true"
                      class="h-3 w-3"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      ></path>
                    </svg>
                  </span>
                  <p class="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                    Life time technical support
                  </p>
                </li>
              </ul>
            </div>
            <div class="mt-12 p-0">
              <button
                class="block w-full select-none rounded-lg bg-white py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-pink-500 shadow-md shadow-blue-gray-500/10 transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-gray-500/20 focus:scale-[1.02] focus:opacity-[0.85] focus:shadow-none active:scale-100 active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
                data-ripple-dark="true"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
        {/* second card */}

        <div data-aos="flip-right" class="relative flex w-full max-w-[20rem] flex-col rounded-xl bg-gradient-to-tr from-amber-600 to-amber-400 bg-clip-border p-8 text-white shadow-md shadow-pink-500/40">
          <div class="relative m-0 mb-8 overflow-hidden rounded-none border-b border-white/10 bg-transparent bg-clip-border pb-8 text-center text-gray-700 shadow-none">
            <p class="block font-sans text-sm font-normal uppercase leading-normal text-white antialiased">
              Pro
            </p>
            <h1 class="mt-6 flex justify-center gap-1 font-sans text-7xl font-normal tracking-normal text-white antialiased">
              <span class="mt-2 text-4xl">$</span>39
              <span class="self-end text-4xl">/mo</span>
            </h1>
          </div>
          <div class="p-0">
            <ul class="flex flex-col gap-4">
              <li class="flex items-center gap-4">
                <span class="rounded-full border border-white/20 bg-white/20 p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    aria-hidden="true"
                    class="h-3 w-3"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    ></path>
                  </svg>
                </span>
                <p class="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                  3 team members
                </p>
              </li>
              <li class="flex items-center gap-4">
                <span class="rounded-full border border-white/20 bg-white/20 p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    aria-hidden="true"
                    class="h-3 w-3"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    ></path>
                  </svg>
                </span>
                <p class="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                  250+ components
                </p>
              </li>
              <li class="flex items-center gap-4">
                <span class="rounded-full border border-white/20 bg-white/20 p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    aria-hidden="true"
                    class="h-3 w-3"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    ></path>
                  </svg>
                </span>
                <p class="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                  45+ built-in pages
                </p>
              </li>
              <li class="flex items-center gap-4">
                <span class="rounded-full border border-white/20 bg-white/20 p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    aria-hidden="true"
                    class="h-3 w-3"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    ></path>
                  </svg>
                </span>
                <p class="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                  1.5 year free updates
                </p>
              </li>
              <li class="flex items-center gap-4">
                <span class="rounded-full border border-white/20 bg-white/20 p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    aria-hidden="true"
                    class="h-3 w-3"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    ></path>
                  </svg>
                </span>
                <p class="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                  Life time technical support
                </p>
              </li>
            </ul>
          </div>
          <div class="mt-12 p-0">
            <button
              class="block w-full select-none rounded-lg bg-white py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-pink-500 shadow-md shadow-blue-gray-500/10 transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-gray-500/20 focus:scale-[1.02] focus:opacity-[0.85] focus:shadow-none active:scale-100 active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              data-ripple-dark="true"
            >
              Buy Now
            </button>
          </div>
        </div>
        <div>
          <div data-aos="flip-right" class="relative flex w-full max-w-[20rem] flex-col rounded-xl bg-gradient-to-tr from-amber-600 to-amber-400 bg-clip-border p-8 text-white shadow-md shadow-pink-500/40">
            <div class="relative m-0 mb-8 overflow-hidden rounded-none border-b border-white/10 bg-transparent bg-clip-border pb-8 text-center text-gray-700 shadow-none">
              <p class="block font-sans text-sm font-normal uppercase leading-normal text-white antialiased">
                Pro Plus
              </p>
              <h1 class="mt-6 flex justify-center gap-1 font-sans text-7xl font-normal tracking-normal text-white antialiased">
                <span class="mt-2 text-4xl">$</span>29
                <span class="self-end text-4xl">/mo</span>
              </h1>
            </div>
            <div class="p-0">
              <ul class="flex flex-col gap-4">
                <li class="flex items-center gap-4">
                  <span class="rounded-full border border-white/20 bg-white/20 p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      aria-hidden="true"
                      class="h-3 w-3"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      ></path>
                    </svg>
                  </span>
                  <p class="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                    3 team members
                  </p>
                </li>
                <li class="flex items-center gap-4">
                  <span class="rounded-full border border-white/20 bg-white/20 p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      aria-hidden="true"
                      class="h-3 w-3"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      ></path>
                    </svg>
                  </span>
                  <p class="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                    300+ components
                  </p>
                </li>
                <li class="flex items-center gap-4">
                  <span class="rounded-full border border-white/20 bg-white/20 p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      aria-hidden="true"
                      class="h-3 w-3"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      ></path>
                    </svg>
                  </span>
                  <p class="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                    50+ built-in pages
                  </p>
                </li>
                <li class="flex items-center gap-4">
                  <span class="rounded-full border border-white/20 bg-white/20 p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      aria-hidden="true"
                      class="h-3 w-3"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      ></path>
                    </svg>
                  </span>
                  <p class="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                    2 years free updates
                  </p>
                </li>
                <li class="flex items-center gap-4">
                  <span class="rounded-full border border-white/20 bg-white/20 p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      aria-hidden="true"
                      class="h-3 w-3"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      ></path>
                    </svg>
                  </span>
                  <p class="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                    Life time technical support
                  </p>
                </li>
              </ul>
            </div>
            <div class="mt-12 p-0">
              <button
                class="block w-full select-none rounded-lg bg-white py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-pink-500 shadow-md shadow-blue-gray-500/10 transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-gray-500/20 focus:scale-[1.02] focus:opacity-[0.85] focus:shadow-none active:scale-100 active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
                data-ripple-dark="true"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>


      {/* over footer */}
      <h2 className="text-3xl font-bold text-center mt-10 underline">Growth our services </h2>
      <div >

      <div class="container my-24 mx-auto md:px-6">
  
  <section class="mb-32 text-center lg:text-left">
    <div
      class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
      <div class="flex flex-wrap items-center">
        <div class="block w-full shrink-0 grow-0 basis-auto lg:flex lg:w-6/12 xl:w-4/12">
          <img src="https://i.ibb.co/MRv4VwN/371098457-3784733161849245-5628090038965612412-n.jpg" alt="Trendy Pants and Shoes"
            class="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg" />
        </div>
        <div class="w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12">
          <div class="px-6 py-12 md:px-12">
            <h2 class="display-5 mb-6 text-4xl font-bold text-white dark:text-primary-400">
              Growth History
            </h2>
            <p class="mb-12 text-white dark:text-neutral-300">
            Define what you aim to achieve with the event. This could be increased attendance, greater engagement, higher revenue, or increased brand exposure.Review previous events to identify what worked well and what didn't. Use this analysis to make informed decisions for the upcoming event.Allocate a budget and determine the resources required for the event based on the expected growth. This includes venue costs, marketing expenses, staffing, technology, and any other necessities.
            </p>

            <div class="grid md:grid-cols-3 lg:gap-x-12">
              <div class="mb-12 md:mb-0">
                <h2 class="mb-4 text-3xl font-bold text-white dark:text-primary-400">
                  1000
                </h2>
                <h5 class="mb-0 text-lg font-medium text-white dark:text-neutral-300">
                  Happy customers
                </h5>
              </div>

              <div class="mb-12 md:mb-0">
                <h2 class="mb-4 text-3xl font-bold text-white dark:text-primary-400">
                  70%
                </h2>
                <h5 class="mb-0 text-lg font-medium text-white dark:text-neutral-300">
                  Growth
                </h5>
              </div>

              <div class="">
                <h2 class="mb-4 text-3xl font-bold text-white dark:text-primary-400">
                  49
                </h2>
                <h5 class="mb-0 text-lg font-medium text-white dark:text-neutral-300">
                  Projects
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
</div>

      </div>
    </div>
  );
};

export default Home;
