"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

type ImageCarouselProps = {
  images: string[];
  title: string;
};

export function ImageCarousel({ images, title }: ImageCarouselProps) {
  const [index, setIndex] = useState(0);
  const currentImage = images[index];

  function showPrevious() {
    setIndex((value) => (value === 0 ? images.length - 1 : value - 1));
  }

  function showNext() {
    setIndex((value) => (value === images.length - 1 ? 0 : value + 1));
  }

  return (
    <div className="glass-panel overflow-hidden rounded-lg">
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImage}
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.28 }}
            className="absolute inset-0"
          >
            <Image src={currentImage} alt={`${title} 截图 ${index + 1}`} fill className="object-cover" />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-slate-950/85 to-transparent p-4">
          <button
            type="button"
            onClick={showPrevious}
            aria-label="上一张截图"
            className="rounded-md border border-line bg-slate-950/70 p-2 text-white backdrop-blur transition hover:border-cyan-signal"
          >
            <ChevronLeft size={18} />
          </button>
          <div className="flex gap-2">
            {images.map((image, imageIndex) => (
              <button
                key={image}
                type="button"
                onClick={() => setIndex(imageIndex)}
                aria-label={`查看第 ${imageIndex + 1} 张截图`}
                className={`h-1.5 rounded-full transition ${
                  imageIndex === index ? "w-7 bg-cyan-signal" : "w-2 bg-slate-500"
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={showNext}
            aria-label="下一张截图"
            className="rounded-md border border-line bg-slate-950/70 p-2 text-white backdrop-blur transition hover:border-cyan-signal"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
