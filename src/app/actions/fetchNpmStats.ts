"use server"

import type { NpmStats, TimeRange } from "../../types/NpmStats"

export async function fetchNpmStats(packageName: string, timeRange: TimeRange): Promise<NpmStats> {
  let url: string
  const currentDate = new Date()
  const year = currentDate.getFullYear()
  const month = String(currentDate.getMonth() + 1).padStart(2, "0")
  const day = String(currentDate.getDate()).padStart(2, "0")

  switch (timeRange) {
    case "today":
      url = `https://api.npmjs.org/downloads/point/${year}-${month}-${day}/${packageName}`
      break
    case "last7days":
      url = `https://api.npmjs.org/downloads/range/last-week/${packageName}`
      break
    case "last30days":
      url = `https://api.npmjs.org/downloads/range/last-month/${packageName}`
      break
    case "thisyear":
      url = `https://api.npmjs.org/downloads/range/${year}-01-01:${year}-${month}-${day}/${packageName}`
      break
    case "alltime":
      url = `https://api.npmjs.org/downloads/range/1000-01-01:${year}-${month}-${day}/${packageName}`
      break
    default:
      throw new Error("Invalid time range")
  }

  const response = await fetch(url)

  if (!response.ok) {
    throw new Error("Failed to fetch npm stats")
  }

  const data = await response.json()

  let totalDownloads: number
  let dailyDownloads: { day: string; downloads: number }[]

  if (timeRange === "today") {
    totalDownloads = data.downloads
    dailyDownloads = [{ day: data.day, downloads: data.downloads }]
  } else {
    dailyDownloads = data.downloads
    totalDownloads = dailyDownloads.reduce((sum: number, day: { downloads: number }) => sum + day.downloads, 0)
  }

  return {
    packageName,
    totalDownloads,
    dailyDownloads,
    timeRange,
  }
}

