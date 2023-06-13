'use client';

import {
  Slide,
  SlideLayout,
} from 'spectacle';

import IntroTitle from './intro/title.mdx';
import IntroHistory from './intro/history.mdx';
import IntroExampleVariables from './intro/examples/variables.mdx';

export const SpectacleSlides = () => {
  return (
    <>
      <SlideLayout.Center>
        <IntroTitle />
      </SlideLayout.Center>
      <SlideLayout.Center>
        <IntroHistory />
      </SlideLayout.Center>
      <SlideLayout.Center>
        <IntroExampleVariables />
      </SlideLayout.Center>
    </>
  );
};