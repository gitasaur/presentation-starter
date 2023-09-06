const { remarkCodeHike } = require('@code-hike/mdx');

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: [
        "ts", "tsx", "js", 
        "jsx", "md", "mdx"
    ],
}

const withMDX = require("@next/mdx")({
    extension: /\.mdx?$/,
    options: {
      remarkPlugins: [
        [remarkCodeHike, { theme: "material-palenight" }]
      ],
    },
  })

 module.exports = withMDX(nextConfig);