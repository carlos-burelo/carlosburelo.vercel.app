import { readFileSync, readdirSync } from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

type Folder = 'posts' | 'snippets' | 'projects'

export const absoluteFolderPath = (folder: Folder) =>
  join(process.cwd(), 'public', 'static', 'content', folder)

export function getMetaData(fileData: string) {
  const { data, content } = matter(fileData)
  return { data, content }
}

export function getSlugs(folder: Folder) {
  const files = readdirSync(absoluteFolderPath(folder), 'utf-8')
  return files.map(file => ({
    params: {
      id: file.replace(/\.mdx$/, ''),
    },
  }))
}
export function getMetaDataFromFiles(folder: Folder) {
  const files = readdirSync(absoluteFolderPath(folder), 'utf-8')
  return files.map(file => {
    const { data } = getMetaData(
      readFileSync(join(absoluteFolderPath(folder), file), 'utf-8')
    )
    return {
      ...data,
      id: file.replace(/\.mdx$/, ''),
      ...(data.date && { date: data.date.toString() }),
    }
  })
}
export function getDataFromMdx(folder: Folder, id: string) {
  const filePath = join(absoluteFolderPath(folder), `${id}.mdx`)
  const { content, data } = getMetaData(readFileSync(filePath, 'utf-8'))
  return {
    ...data,
    ...(data.date && { date: data.date.toString() }),
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
