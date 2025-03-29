import React, { useEffect, useState } from "react";
import "../styles/Hero.css"; // Create this CSS file

const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div class="relative bg-black pb-12 pt-48 sm:pb-16 lg:pb-32 xl:pb-48 xl:pt-60 2xl:pb-56">
      <div class="absolute inset-0">
        <img
          class="h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>

      <div class="relative">
        <div class="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div class="w-full lg:w-2/3 xl:w-1/2">
            <p class="mt-6 tracking-tighter text-white">
              <span class="font-sans text-6xl font-normal">
                Endless Inspiration Awaits
              </span>
              <br />
              <span class="font-serif text-7xl font-normal italic">
                Discover It All
              </span>
            </p>
            <p class="mt-12 font-sans text-base font-normal leading-7 text-white ">
              Ready to dive into a world of knowledge and creativity? From
              trending topics to timeless insights, our blog covers everything
              you care about—lifestyle, tech, health, travel, and more. Whether
              you're looking for fresh ideas or expert advice, there's always
              something new to explore. Start reading now and fuel your
              curiosity!
            </p>

            <div class="mt-5 flex items-center space-x-3 sm:space-x-4">
              <a
                href="#discover"
                title=""
                class="
                            focus:ring-primary
                            focus:ring-offset-secondary
                            inline-flex
                            items-center
                            justify-center
                            rounded-full
                            border-2
                            border-transparent
                            bg-white
                            px-5
                            py-2 font-sans
                            text-base
                            font-semibold
                            text-black
                            transition-all
                            duration-200
                            hover:bg-opacity-90
                            focus:outline-none focus:ring-2 focus:ring-offset-2 sm:text-lg sm:leading-8
                        "
                role="button"
              >
                Get started
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
