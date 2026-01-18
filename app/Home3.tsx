"use client";
import React from "react";

const Home3 = () => {
  const logos = [
    "/assets/sbi.png",
    "/assets/maddy.svg",
    "/assets/logo-rmc.png",
    "/assets/ornet.png",
    "/assets/TGC-STAFFING.webp",
    "/assets/icici-header-logo.png",
    "/assets/kore-mobiles.png",
  ];

  return (
    <section className="py-10 bg-[#f5f9fc]">
      <div className="max-w-7xl mx-auto px-0">

        {/* MAIN WRAPPER */}
        <div className="grid md:grid-cols-4 grid-cols-1 gap-6 items-stretch">

          {/* LEFT TITLE BOX */}
          <div className="bg-[#f5f9fc] text-main rounded-2xl p-8 flex items-center">
            <h2 className="text-4xl font-bold leading-snug text-main-dark">
              Our Partners
            </h2>
          </div>

          {/* RIGHT LOGO SLIDER */}
          <div className="md:col-span-3 rounded-2xl p-4 bg-[#f5f9fc]">

            <div className="overflow-hidden w-full slider-wrapper">
              <div className="flex animate-scroll items-center w-max">

                {[...logos, ...logos].map((logo, index) => (
                  <div
                    key={index}
                    className="
                      mx-4
                      bg-main
                      rounded-xl
                      shadow-sm
                      p-4
                      flex
                      items-center
                      justify-center
                      min-w-[150px]
                      flex-shrink-0
                      cursor-pointer
                    "
                  >
                    <img
                      src={logo}
                      alt="Partner Logo"
                      className="h-14 w-28 object-contain opacity-80 hover:opacity-100 transition"
                    />
                  </div>
                ))}

              </div>
            </div>

          </div>
        </div>
      </div>

      {/* SCROLL + HOVER PAUSE */}
      <style>
        {`
          .animate-scroll {
            animation: scroll 20s linear infinite;
          }

          /* ⭐ Pause animation on hover */
          .slider-wrapper:hover .animate-scroll {
            animation-play-state: paused;
          }

          @keyframes scroll {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }
        `}
      </style>
    </section>
  );
};

export default Home3;
