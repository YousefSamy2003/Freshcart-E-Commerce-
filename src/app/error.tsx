'use client'
import { useRouter } from "next/navigation"
import { FiAlertTriangle, FiRefreshCw, FiHome } from "react-icons/fi"

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-10 max-w-md w-full text-center">

        {/* Icon */}
        <div className="flex items-center justify-center w-16 h-16 bg-red-50 rounded-full mx-auto mb-5">
          <FiAlertTriangle className="text-red-500" size={28} />
        </div>

        {/* Title */}
        <h1 className="text-xl font-bold text-gray-900 mb-2">Something went wrong</h1>
        <p className="text-sm text-gray-500 mb-4">
          We're working on fixing the problem. Please try again or go back to the home page.
        </p>

        {/* Error message */}
        {error?.message && (
          <div className="bg-red-50 border border-red-100 rounded-xl px-4 py-3 mb-6 text-left">
            <p className="text-xs font-semibold text-red-500 mb-1">Error details</p>
            <p className="text-xs text-red-400 break-words">{error.message}</p>
          </div>
        )}

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            onClick={reset}
            className="flex-1 flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold py-2.5 rounded-xl transition-colors"
          >
            <FiRefreshCw size={15} />
            Try Again
          </button>
          <button
            onClick={() => router.push("/")}
            className="flex-1 flex items-center justify-center gap-2 border border-gray-200 hover:bg-gray-50 text-gray-700 text-sm font-semibold py-2.5 rounded-xl transition-colors"
          >
            <FiHome size={15} />
            Go Home
          </button>
        </div>

      </div>
    </div>
  )
}