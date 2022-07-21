interface HexColor {
  orange: [string, string]
  yellow: [string, string]
  green: [string, string]
  emerald: [string, string]
  teal: [string, string]
  cyan: [string, string]
  blue: [string, string]
  indigo: [string, string]
  violet: [string, string]
  purple: [string, string]
  fuchsia: [string, string]
  pink: [string, string]
  rose: [string, string]
  red: [string, string]
  slate: [string, string]
}
export type Color = keyof HexColor

export const hexColors: HexColor = {
  orange: ['#f97316', '#f973161c'],
  yellow: ['#eab308', '#eab3081c'],
  green: ['#22c55e', '#22c55e1c'],
  emerald: ['#10b981', '#10b9811c'],
  teal: ['#14b8a6', '#14b8a61c'],
  cyan: ['#06b6d4', '#06b6d41c'],
  blue: ['#3b82f6', '#3b83f61c'],
  indigo: ['#6366f1', '#6366f11c'],
  violet: ['#8b5cf6', '#8b5cf61c'],
  purple: ['#a855f7', '#a855f71c'],
  fuchsia: ['#d946ef', '#d946ef1c'],
  pink: ['#ec4899', '#ec48991c'],
  rose: ['#f43f5e', '#f43f5e1c'],
  red: ['#ef4444', '#ef44441c'],
  slate: ['#334155', '#3341551c'],
}

interface ColorMap {
  [key: string]: [string, string]
}
export const colors: ColorMap = {
  java: hexColors['indigo'],
  css: hexColors['blue'],
  scss: hexColors['pink'],
  javascript: hexColors['yellow'],
  typescript: hexColors['blue'],
  python: hexColors['yellow'],
  nodemon: hexColors['green'],
  vercel: hexColors['slate'],
}
interface Logos {
  [key: string]: string
}
export const logoColors: Logos = {
  typescript: '#007acc ',
  javascript: '#F0DB4F ',
  java: '#b07219 ',
  scss: '#cd6799 ',
  sass: '#cd6799 ',
  css: '#264de4  ',
  html: '#e34c26 ',
  python: '#FFE873 ',
  graphql: '#E535AB ',
}
