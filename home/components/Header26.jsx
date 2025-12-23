"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Header26() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="rb-12 mb-12 text-center md:mb-18 lg:mb-20">
            <div className="w-full max-w-lg">
              <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
                Better together, always
              </h1>
              <p className="md:text-md">
                Thirty-six years of teaching, consulting, and living have shaped
                what Cherice Taylor brings to the Time Matters Podcast. She
                believes that when we all do better, then we all do better.
                Listen in as she shares the wisdom that has guided educators,
                parents, and professionals through their toughest decisions.
              </p>
              <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
                <Button title="Listen">Listen</Button>
                <Button title="Learn" variant="secondary">
                  Learn
                </Button>
              </div>
            </div>
          </div>
          <div>
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
              className="size-full object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
