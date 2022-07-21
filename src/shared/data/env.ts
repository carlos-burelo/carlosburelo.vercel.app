import { shikiPath } from '#libs/highlight'

export const IS_DEV = process.env.NODE_ENV === 'development'
export const EDGE_PATH =
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe'

export const logger = () => {
  console.log('#########################################################')
  console.log('IS_DEV: ', IS_DEV)
  console.log('EDGE_PATH: ', EDGE_PATH)
  console.log('SHIKI_PATH: ', shikiPath)
  console.log('#########################################################')
}
