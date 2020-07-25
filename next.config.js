/* eslint-disable */
const remarkMath = require('remark-math');
const rehypeKatex = require('rehype-katex');
const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/,
    options: {
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
    },
});
module.exports = withMDX({
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
});
