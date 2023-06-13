'use client';

import {
  Deck,
  DefaultTemplate,
  SpectacleThemeOverrides,
} from 'spectacle';
import { MDXProvider } from '@mdx-js/react'

import { SpectacleSlides } from '@/app/slides';

const theme: SpectacleThemeOverrides = {
  colors: {
    primary: 'white', // text
    secondary: 'white', // heading
    tertiary: '#202124', // background
    quaternary: 'white',
    quinary: 'white'
  }
};

export const SpectacleDeck = () => {
  return (
      <Deck className={'prose-headings:text-white bg'} theme={theme} template={<DefaultTemplate />}>
        <SpectacleSlides />
      </Deck>
  );
};