'use client';

import { 
  StatementSlide, 
  FullSlide,
  TwoColumnSlide,
  ImageSlide,
  FullImageSlide,
  VideoSlide
} from '@/app/ui/Slide';

import ExampleMDX from './example.mdx';

export const Slides = () => {
  return (
    <>
      <StatementSlide content={<ExampleMDX />} />
      <FullSlide content={<ExampleMDX />} />
      <TwoColumnSlide left={<ExampleMDX />} right={<ExampleMDX />} />
      <ImageSlide src="/images/dino-example.webp" />
      <FullImageSlide src="/images/dino-example.webp" />
      <VideoSlide src="/video/example-video.mp4" />
    </>
  );
};