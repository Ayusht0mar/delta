"use client"
import { Chart, TimeScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js"
import { Line } from "react-chartjs-2"
import "chartjs-adapter-date-fns"
import type { NpmStats, TimeRange } from "../types/NpmStats.js"

Chart.register(TimeScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

interface DownloadChartProps {
  stats: NpmStats
}

export default function DownloadChart({ stats }: DownloadChartProps) {
  const chartData = {
    labels: stats.dailyDownloads.map((day) => new Date(day.day)),
    datasets: [
      {
        label: "Downloads",
        data: stats.dailyDownloads.map((day) => ({ x: new Date(day.day), y: day.downloads })),
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  }

  const options = {
    responsive: true,
    scales: {
      x: {
        type: "time" as const,
        time: {
          unit: getTimeUnit(stats.timeRange),
        },
      },
      y: {
        beginAtZero: true,
      },
    },
  }

  return <Line data={chartData} options={options} />
}

function getTimeUnit(timeRange: TimeRange): "day" | "week" | "month" {
  switch (timeRange) {
    case "today":
    case "last7days":
      return "day"
    case "last30days":
      return "week"
    case "thisyear":
    case "alltime":
      return "month"
  }
}

