export const getAbsoluteURL = (path: string) => {
  const baseURL = process.env.NODE_ENV === 'development'
    ? 'http://localhost:3003'
    : 'https://carlosburelo.vercel.app'
  return baseURL + path
}
