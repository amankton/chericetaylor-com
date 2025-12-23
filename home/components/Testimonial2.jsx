"use client";

import React from "react";

export function Testimonial2() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            What listeners say
          </h1>
          <p className="md:text-md">Real voices, real impact</p>
        </div>
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-8 lg:gap-16">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="mb-6 md:mb-8">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg"
                alt="Webflow logo 1"
                className="max-h-14"
              />
            </div>
            <blockquote className="text-md font-bold leading-[1.4] md:text-xl">
              "This podcast gave me the courage to make a change I'd been
              putting off for years."
            </blockquote>
            <div className="mt-6 flex flex-col items-center justify-center md:mt-8">
              <div className="mb-3 md:mb-4">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  alt="Testimonial avatar 1"
                  className="size-16 min-h-16 min-w-16 rounded-full object-cover"
                />
              </div>
              <p className="font-semibold">Sarah Mitchell</p>
              <p>Teacher, Portland</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center text-center">
            <div className="mb-6 md:mb-8">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg"
                alt="Webflow logo 1"
                className="max-h-14"
              />
            </div>
            <blockquote className="text-md font-bold leading-[1.4] md:text-xl">
              "Cherice's honesty about the hard parts of leadership helped me
              stop pretending and start leading."
            </blockquote>
            <div className="mt-6 flex flex-col items-center justify-center md:mt-8">
              <div className="mb-3 md:mb-4">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  alt="Testimonial avatar 1"
                  className="size-16 min-h-16 min-w-16 rounded-full object-cover"
                />
              </div>
              <p className="font-semibold">James Rodriguez</p>
              <p>Principal, Denver</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
