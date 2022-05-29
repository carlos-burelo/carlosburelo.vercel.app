import { useRouter } from "next/router"
import { getAbsoluteURL } from "#utils/router"

export default function useOpenGraph(type: "project" | "post") {
  const router = useRouter()
  const absoluteUrl = getAbsoluteURL(router.asPath)
  const url = new URL(absoluteUrl)
  const searchParams = new URLSearchParams()
  const path = `${url.origin}/og/${type}/${url.pathname.split("/").pop()}`
  searchParams.set("path", path)
  const fullImageURL = getAbsoluteURL(`/api/open-graph?${searchParams}`)
  return { ogImage: fullImageURL }
}
