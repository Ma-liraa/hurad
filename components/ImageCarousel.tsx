"use client";
import {
  Carousel,
  CarouselContent,
  CarouselNavigation,
  CarouselIndicator,
  CarouselItem,
} from "@/components/motion-primitives/carousel";
import Image from "next/image"; // اگر از Next.js استفاده نمی‌کنید، این خط را حذف کنید

interface ImageCarouselProps {
  images: string[];
}

export function ImageCarousel({ images }: ImageCarouselProps) {
  if (!images || images.length === 0) return null;
  console.log(images);

  return (
    <div className="group relative h-full w-full overflow-hidden rounded-2xl ">
      <Carousel className="h-full w-full ">
        <CarouselContent className="ml-0">
          {images.map((src, index) => (
            <CarouselItem key={index} className="pl-0">
              <div className="relative aspect-video w-full overflow-hidden">
                <Image
                  src={src}
                  alt={`Project slide ${index + 1}`}
                  fill
                  className="pointer-events-none object-cover select-none"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* نویگیشن که با هاور ظاهر می‌شود */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-between p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <CarouselNavigation alwaysShow className="text-white" />
        </div>

        {/* نشانگر پایین صفحه */}
        <div className="absolute inset-x-0 bottom-4 flex justify-center">
          <CarouselIndicator />
        </div>
      </Carousel>
    </div>
  );
}
