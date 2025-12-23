"use client";

import { Button, Input } from "@relume_io/relume-ui";
import React from "react";

export function Cta32() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container flex flex-col items-center">
        <div className="mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Get updates in your inbox
          </h2>
          <p className="md:text-md">
            New episodes and insights delivered straight to you
          </p>
          <div className="mx-auto mt-6 w-full max-w-sm md:mt-8">
            <form className="rb-4 mb-4 grid max-w-sm grid-cols-1 gap-y-3 sm:grid-cols-[1fr_max-content] sm:gap-4">
              <Input id="email" type="email" placeholder="Your email address" />
              <Button
                title="Subscribe"
                variant="primary"
                size="sm"
                className="items-center justify-center px-6 py-3"
              >
                Subscribe
              </Button>
            </form>
            <p className="text-xs">
              By subscribing you agree to receive updates about new episodes and
              content from chericetaylor.com.
            </p>
          </div>
        </div>
        <img
          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
          className="size-full object-cover"
          alt="Relume placeholder image"
        />
      </div>
    </section>
  );
}
