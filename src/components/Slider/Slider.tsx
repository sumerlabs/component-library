import React, { cloneElement, ElementType, useEffect, useRef, useState } from "react";
import { Dot, Dots, ScrollElement } from "./Slider.styled";
import { SliderProps } from "./Slider.type";

const Slider = ({
                  children,
                  hideArrows,
                  hideDots,
                  iconBackArrow,
                  iconNextArrow,
                  dragMode,
                  dotsStyle
                }: SliderProps) => {
  const slider = useRef<any>(null);
  const childrenValues = children as React.ElementType[];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [dots, setDots] = useState(0);
  const arrayNumber = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

  let [isDown] = useState(false);
  let [startX] = useState<number>();
  let [scrollLeft] = useState<number>();

  useEffect(() => {
    if(dragMode){
      slider?.current?.addEventListener('mousedown', (e: any) => {
        isDown = true;
        startX = e.pageX - slider?.current.offsetLeft;
        scrollLeft = slider?.current.scrollLeft;
      });

      slider?.current?.addEventListener('mouseleave', () => {
        isDown = false;
      });

      slider?.current?.addEventListener('mouseup', () => {
        isDown = false;
      });

      slider?.current?.addEventListener('mousemove', (e: any) => {
        if(!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider?.current?.offsetLeft;
        const walk = (x - (startX as number)) * 3;
        slider.current.scrollLeft = (scrollLeft as number) - walk;
      });
    }
  }, [dragMode])

  const onNext = () => {
    moveFromDots(currentSlide + 1);
  }

  const onBack = () => {
    moveFromDots(currentSlide - 1);
  }

  const range = (start: number, end: number, step = 1) => {
    const len = Math.floor((start - end) / step);
    return Math.abs(len);
  }

  useEffect(() => {
    const calc = Math.round(slider?.current?.scrollWidth / slider?.current?.clientWidth);

    if(calc){
      setDots(Math.round(slider?.current?.scrollWidth / slider?.current?.clientWidth))
    }
  }, [setDots, slider])

  const moveFromDots = (index: number) => {
    const operation = range(currentSlide, index);
    if(index > currentSlide){
      const left = slider.current.scrollLeft + (slider.current.offsetWidth * operation);
      const moveTo = index + 1 === dots ? left + 350 : left;
      slider.current.scrollTo({
        left: moveTo,
        behavior: 'smooth'
      });
    } else if(index < currentSlide){
      const left = slider.current.scrollLeft - (slider.current.offsetWidth * operation);
      const moveTo = index === 0 ? left - 350 : left;
      slider.current.scrollTo({
        left: moveTo,
        behavior: 'smooth'
      });
    }
    setCurrentSlide(index);
  }

  return (
      <ScrollElement dragMode={dragMode}>
        <div className="items" ref={slider}>
          {children ?
              children :
              arrayNumber.map(
                  (item: number, index) => <h1 key={index} style={{minWidth: '150px'}}>Hola slide {item}</h1>
              )
          }
        </div>
        {
            !hideArrows && !dragMode &&
            (<>
              {(currentSlide !== 0) &&
                  <button
                      className="arrowBtn back"
                      onClick={onBack}
                  >
                    {iconBackArrow ? iconBackArrow : "<"}
                  </button>
              }
              {(currentSlide !== dots - 1) &&
                  <>
                    <button
                        className="arrowBtn next"
                        onClick={onNext}
                    >
                      {iconNextArrow ? iconNextArrow: ">"}
                    </button>
                  </>
              }
            </>)
        }
        { !hideDots && !dragMode && (
            <Dots>
              {[...Array(dots)].map((dot, index) =>
                  <Dot
                      type={dotsStyle?.type}
                      width={dotsStyle?.width}
                      height={dotsStyle?.height}
                      backgroundColor={dotsStyle?.backgroundColor}
                      className={`${currentSlide === index && 'active'}`}
                      key={index}
                      onClick={() => moveFromDots(index)}>
                  </Dot>)}
            </Dots>
        )
        }
      </ScrollElement>
  );
}

export default Slider;