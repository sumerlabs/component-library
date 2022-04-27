import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { ScrollElement } from "./Slider.styled";
import { SliderProps } from "./Slider.type";

const Slider = ({
  children,
  hideArrows,
  dragMode,
  iconBackArrow,
  iconNextArrow
}: SliderProps) => {
  const slider = useRef<any>(null);
  let [isDown] = useState(false);
  let [startX] = useState<number>();
  let [scrollLeft] = useState<number>();

  const [nextButton, setNextButton] = useState(true);
  const [backButton, setBackButton] = useState(true);

  const arrayNumber = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

  useEffect(() => {
    validArrows();

    if(dragMode){ // that works in compiled time
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
        validArrows();
      });
    }
  }, [dragMode])
  
  const onNext = () => {
    slider.current.scrollTo({
      left: slider.current.scrollLeft + 350,
      behavior: 'smooth'
    });
    validArrows();
  }

  const onBack = () => {
    slider.current.scrollTo({
      left: slider.current.scrollLeft - 350,
      behavior: 'smooth'
    });
    validArrows();
  }

  const validArrows = () => {
    setTimeout(() => {
      setNextButton(!(slider.current.scrollWidth - slider.current.scrollLeft === slider.current.clientWidth))
    }, 500)
    setTimeout(() => {
      setBackButton(!(slider.current.scrollLeft === 0))
    }, 500)
  }

  const SliderContent = (
    <ScrollElement>
      <div className="items" ref={slider}>
        {children ? 
          children :
          arrayNumber.map(
            (item: number) => <h1 style={{minWidth: '200px'}}>Hola slide {item}</h1>
          )
        }
      </div>
      {
        !hideArrows && 
        <>
          {backButton &&
            <button
              className="arrowBtn back"
              onClick={onBack}
            >
              {iconBackArrow ? iconBackArrow : "<"}
            </button>
          }
          {nextButton &&
            <>
              <button
                className="arrowBtn next"
                onClick={onNext}
              >
                {iconNextArrow ? iconNextArrow: ">"}
              </button>
            </>
          }
        </>
      }
    </ScrollElement>
  )

  return SliderContent;
}

export default Slider;
