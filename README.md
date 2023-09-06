# Slides

Slides is a presentation framework starter written with [Next.js](https://nextjs.org/) and [Spectacle](https://formidable.com/open-source/spectacle/) with MDX support. It can be used to create dynamic presentations. I've hacked this together in the wee hours prior to presenting at conferences, so beware.

## Install
```
pnpm install
```

## Run
```
pnpm dev
```

## Usage
1. Fork/clone this repo
1. Write your slides in Markdown (see `example.mdx`)
1. Import your mdx slides to `app/slides/index.tsx`
1. Wrap with one of the Slides.

## Slides
These are helpers which usually wrap Spectacle's [Slide Layouts](https://formidable.com/open-source/spectacle/docs/slide-layouts).
```
<StatementSlide content={<ExampleMDX />} />
<FullSlide content={<ExampleMDX />} />
<TwoColumnSlide left={<ExampleMDX />} right={<ExampleMDX />} />
<ImageSlide src="/images/dino-example.webp" />
<FullImageSlide src="/images/dino-example.webp" />
<VideoSlide src="/video/example-video.mp4" />
```