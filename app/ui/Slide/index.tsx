'use client';

import {
  Appear,
  Slide,
  SlideLayout,
  useSteps
} from 'spectacle';
import Image from 'next/image'
import { createRef, useEffect } from 'react';


export const StatementSlide = ({ content }: any) => {
  return (
    <SlideLayout.Statement>
      { content }
    </SlideLayout.Statement>
  )
}

export const FullSlide = ({ content }: any) => {
  return (
    <SlideLayout.Full>
      { content }
    </SlideLayout.Full>
  )
}

export const TwoColumnSlide = (props: any) => {
  return (
    <SlideLayout.TwoColumn {...props} />
  )
}

export const ImageSlide = ({ src }: any) => {
  return (
    <SlideLayout.Center>
      <Image
      src={src}
      fill={true}
      alt="slide picture"
      />
    </SlideLayout.Center>
  )
}

export const FullImageSlide = ({ src }: any) => {
  return (
    <SlideLayout.FullBleedImage src={src} alt='Slide image' />
  )
}

const VideoContent = ({ src, type = 'video/mp4' }: any) => {
  const { stepId, isActive, step, placeholder } = useSteps(2);
  const videoRef: React.RefObject<HTMLVideoElement> = createRef();
  
  useEffect(() => {
    if (step == 0) {
      videoRef.current?.play();
    } else {
      videoRef.current?.pause();
    }
  });

  return (
    <>
      { placeholder }
      <video ref={videoRef}>
        <source src={src} type={type} />
      </video>
    </>
  )
} 

export const VideoSlide = (props: any) => {
  return (
    <SlideLayout.Center>
      <VideoContent { ...props } />
    </SlideLayout.Center>
  )
}