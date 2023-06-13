import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <h1 className="text-happy">{children}</h1>,
    h2: ({ children }) => <h2 className="text-happy">{children}</h2>,
    h3: ({ children }) => <h3 className="text-happy">{children}</h3>,
    ...components,
  }
}