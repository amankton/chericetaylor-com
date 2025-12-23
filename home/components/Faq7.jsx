"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Faq7() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container w-full max-w-lg">
        <div className="rb-12 mb-12 text-center md:mb-18 lg:mb-20">
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Questions
          </h2>
          <p className="md:text-md">
            Find answers about the podcast and how to get involved
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-12 gap-y-10 md:gap-y-12">
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Where can I listen?
            </h2>
            <p>
              The Time Matters Podcast is available on all major platforms
              including Apple Podcasts, Spotify, and Google Podcasts. You can
              also listen directly from this website.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              How often are episodes released?
            </h2>
            <p>
              New episodes drop every other week. Subscribe to stay updated on
              the latest conversations and insights from Cherice.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Can I suggest a topic?
            </h2>
            <p>
              Absolutely. Cherice values listener input and considers topic
              suggestions when planning future episodes. Reach out through the
              contact page.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Is there a transcript available?
            </h2>
            <p>
              Yes. Full transcripts are provided for each episode to make the
              content more accessible and easier to reference later.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              How do I contact Cherice?
            </h2>
            <p>
              Use the contact form on this site to send a message directly.
              Cherice reads all inquiries and responds when she can.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-md text-center md:mt-18 lg:mt-20">
          <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
            More to ask?
          </h4>
          <p className="md:text-md">Get in touch and let's talk</p>
          <div className="mt-6 md:mt-8">
            <Button title="Contact" variant="secondary">
              Contact
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
