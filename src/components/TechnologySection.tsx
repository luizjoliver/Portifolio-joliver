"use client"

import { carouselStack } from "@/constants/stack";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay"

export default function TechnologySection() {
  return (
    <section className="w-full flex justify-center items-center mt-10 lg:mt-0 h-[20dvh]">
      <Carousel
        plugins={[
          Autoplay({
            delay: 1500,
          }),
        ]}
        className="w-full"
      >
        <CarouselContent className="-ml-1">
          {carouselStack.map((item, index) => (
            <CarouselItem 
              key={index} 
              className="pl-1 basis-1/4 sm:basis-1/5 md:basis-1/6 lg:basis-1/8 xl:basis-1/12 relative group flex flex-col justify-center items-center"
              aria-label={item.name}
            >
              <div className="text-4xl sm:text-5xl rounded-xl p-1 sm:p-2 h-14 w-14 sm:h-20 sm:w-20 flex items-center justify-center opacity-35 group-hover:opacity-100 duration-300 transition-transform transform group-hover:scale-125 text-zinc-100">
                {item.logo}
              </div>

              <span className="opacity-0 group-hover:opacity-100 px-2 py-1 rounded-xl text-center text-sm font-semibold duration-300 animate-fade-in text-nowrap text-zinc-100">
                {item.name}
              </span>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  )
}