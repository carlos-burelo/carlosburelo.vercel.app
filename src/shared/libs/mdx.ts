import { readFileSync, readdirSync, existsSync } from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

type Folder = 'posts' | 'snippets' | 'projects'

export const absoluteFolderPath = (folder: Folder) =>
  join(process.cwd(), 'public', 'content', folder)

export function getMetaData(fileData: string) {
  const { data, content } = matter(fileData)
  return { data, content }
}

export function getSlugs(folder: Folder) {
  const files = readdirSync(absoluteFolderPath(folder), 'utf-8')
  return files.map(file => ({ params: { id: file } }))
}
export function getMetaDataFromFiles(folder: Folder) {
  const files = readdirSync(absoluteFolderPath(folder), 'utf-8')
  return files.map(src => {
    const filePath = join(absoluteFolderPath(folder), src, 'index.mdx')
    const { data } = getMetaData(readFileSync(filePath, 'utf-8'))
    return {
      ...data,
      id: src,
      ...(data.date && { date: data.date.toString() }),
    }
  })
}
export function getDataFromMdx(folder: Folder, id: string) {
  const filePath = join(absoluteFolderPath(folder), id, `index.mdx`)
  const contentTablePath = join(absoluteFolderPath(folder), id, `index.json`)
  const { content, data } = getMetaData(readFileSync(filePath, 'utf-8'))
  let tableData: any = null
  if (existsSync(contentTablePath)) {
    tableData = JSON.parse(readFileSync(contentTablePath, 'utf-8'))
  }
  return {
    ...data,
    ...(data.date && { date: data.date.toString() }),
    ...(tableData && { table: tableData }),
    id,
    content,
  }
}
export const getMetaDataFromJson = () => {
  const filePath = join(
    process.cwd(),
    'public',
    'static',
    'content',
    'dependencies.json'
  )
  return JSON.parse(readFileSync(filePath, 'utf-8'))
}

export const getDependecies = () => {
  const meta = getMetaDataFromFiles('projects')
  return meta.filter(data => data.package)
}
