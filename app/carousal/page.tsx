'use client'
import React, { useEffect, useCallback, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { imgsArray } from '../utils'
import Image from 'next/image'
import Lion from '../assets/carousal/lion.jpeg'

const EmblaCarousel = () => {
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel()
  const [selectedIndex, setSelectedIndex] = useState(1);
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
  });

  const onThumbClick = useCallback(
    (index :any) => {
      if (!emblaMainApi || !emblaThumbsApi) return;
      emblaMainApi.scrollTo(index);
    },
    [emblaMainApi, emblaThumbsApi],
  );

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return;
    setSelectedIndex(emblaMainApi.selectedScrollSnap());
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaMainApi) return;
    onSelect();
    emblaMainApi.on("select", onSelect);
    emblaMainApi.on("reInit", onSelect);
  }, [emblaMainApi, onSelect]);

  const scrollPrev = useCallback(() => {
    if (emblaMainApi) emblaMainApi.scrollPrev()
  }, [emblaMainApi])

  const scrollNext = useCallback(() => {
    if (emblaMainApi) emblaMainApi.scrollNext()
  }, [emblaMainApi])

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaMainRef}>
       <div className="embla__container">
          {imgsArray.map((num, ind) => {
            if (ind === 0) {
              return (
                <div key={ind}>
                  <Image src={Lion} alt='video' />
                </div>
              );
            } else {
              return (
                <div key={ind} className="embla__slide">
                  <Image src={num.imgSrc} alt={num.name} className='w-full h-44 md:max-h-auto lg:h-72 object-cover' />
                </div>
              );
            }
          })}
        </div>

      </div>

      <div className='embla-thumbs'>
        <div className='embla-thumbs__viewport ' ref={emblaThumbsRef}>
          <div className="embla-thumbs__container w-min">
            {imgsArray.map((num,ind) => (
              <div key={ind} className={`embla-thumbs__slide${ind === selectedIndex ? ' embla-thumbs__slide--selected ' : ' opacity-25 bg-opacity-75 '}`}>
                <button
                  onClick={() => onThumbClick(ind)}
                  // className={`embla-thumbs__slide__button${ind === selectedIndex ? ' embla-thumbs__slide--selected' : ''}`}
                  type="button">
                  <div className="embla-thumbs__slide__number">
                    <span>{num.id}</span>
                  </div>
                  <Image src={num.imgSrc} alt={num.name}  className="embla-thumbs__slide__img  w-full h-20 md:h-full lg:h-full  object-cover" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
       <div className='flex justify-between py-3'>
      <button className="embla__prev bg-indigo-400 px-3 py-2 rounded-md font-bold" onClick={scrollPrev}>
        Prev
      </button>
      <button className="embla__next bg-indigo-400 px-3 py-2 rounded-md font-bold" onClick={scrollNext}>
        Next
      </button>
       </div>
    </div>
  )
}

export default EmblaCarousel
