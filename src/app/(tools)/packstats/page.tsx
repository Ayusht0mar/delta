"use client"

import { useState } from "react"
import { fetchNpmStats } from "../../actions/fetchNpmStats"
import DownloadChart from "../../../components/DownloadChart"
import type { NpmStats, TimeRange } from "../../../types/NpmStats"
import "chart.js/auto"

export default function PackStatsHome() {
  const [packageName, setPackageName] = useState("")
  const [timeRange, setTimeRange] = useState<TimeRange>("last30days")
  const [stats, setStats] = useState<NpmStats | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      const result = await fetchNpmStats(packageName, timeRange)
      setStats(result)
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="max-w-[96vw] md:max-w-[90vw] mx-auto mb-40 pt-16">
      <h1 className="text-xl md:text-3xl font-bold mb-4 text-neutral-500">Check the download statistics of your favorite npm package</h1>
      <form onSubmit={handleSubmit} className="mb-4 space-y-2">
        <input
          type="text"
          value={packageName}
          onChange={(e) => setPackageName(e.target.value)}
          placeholder="Enter package name"
          className="w-full max-w-[400px] text-neutral-200 border border-neutral-700 invalid:border-rose-500 invalid:text-rose-600 focus:border-neutral-500 focus:outline focus:outline-neutral-500 focus:invalid:border-rose-500 focus:invalid:outline-rose-500 disabled:bg-none disabled:shadow-none disabled:border-neutral-200 disabled:placeholder:text-neutral-300 dark:disabled:border-neutral-800 dark:disabled:placeholder:text-neutral-700 dark:bg-neutral-950 placeholder:text-neutral-500 rounded py-1.5 px-2 shadow"
        />
        <div className="space-x-2">
            <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value as TimeRange)}
            className="text-neutral-200 border border-neutral-700 invalid:border-rose-500 invalid:text-rose-600 focus:border-neutral-500 focus:outline focus:outline-neutral-500 focus:invalid:border-rose-500 focus:invalid:outline-rose-500 disabled:bg-none disabled:shadow-none disabled:border-neutral-200 disabled:placeholder:text-neutral-300 dark:disabled:border-neutral-800 dark:disabled:placeholder:text-neutral-700 dark:bg-neutral-950 placeholder:text-neutral-500 rounded py-1.5 px-2 shadow"
            >
            <option value="today">Today</option>
            <option value="last7days">Last 7 Days</option>
            <option value="last30days">Last 30 Days</option>
            <option value="thisyear">This Year</option>
            <option value="alltime">All Time</option>
            </select>
            <button type="submit" disabled={isLoading} className="bg-blue-500 text-white px-2 py-1 rounded">
            {isLoading ? "Loading..." : "Get Stats"}
            </button>
        </div>
      </form>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {stats && (
        <div>
          <h2 className="text-2xl font-semibold mb-2">{stats.packageName}</h2>
          <p className="mb-4">
            Total Downloads ({getTimeRangeLabel(stats.timeRange)}): {stats.totalDownloads.toLocaleString()}
          </p>
          <div className="max-w-[90vw] mx-auto bg-neutral-900 p-4 rounded-2xl">
            <DownloadChart stats={stats}/>
          </div>
        </div>
      )}
    </main>
  )
}

function getTimeRangeLabel(timeRange: TimeRange): string {
  switch (timeRange) {
    case "today":
      return "Today"
    case "last7days":
      return "Last 7 Days"
    case "last30days":
      return "Last 30 Days"
    case "thisyear":
      return "This Year"
    case "alltime":
      return "All Time"
  }
}

