export interface SEOProps {
  title: string
  description: string
  keywords: string
  image: string
  url: string
}
export interface SeoMap {
  [key: string]: SEOProps
}
interface PostInterface {
  id: string
  title: string
  date: string
  tags: string[]
  content: string
  image: string
  description: string
}
interface SnippetInterface {
  id: string
  type: string
  title: string
  description: string
  content: string
}
interface PackageInterface extends ProjectInterface {
  package?: PackageProps
}
export interface PackageProps {
  version: string
  url: string
}
interface Stack {
  name: string
  percent?: number
}
interface ProjectInterface {
  id: string
  name: string
  description: string
  url: string
  repo: string
  image: string
  stack: Stack[]
  content: string
}
export type TableRow = {
  '#': string
  '+'?: Table
}

export type Table = TableRow[]

export interface TableProps {
  data: Table
}
