export type TimeRange = "today" | "last7days" | "last30days" | "thisyear" | "alltime"

export interface NpmStats {
  packageName: string
  totalDownloads: number
  dailyDownloads: { day: string; downloads: number }[]
  timeRange: TimeRange
}

