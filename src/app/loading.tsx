export default function loading() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        {/* Spinner */}
        <div className="w-12 h-12 rounded-full border-4 border-gray-200 border-t-green-600 animate-spin" />

        {/* Text */}
        <p className="text-sm text-gray-400 font-medium animate-pulse">
          Loading, please wait...
        </p>
      </div>
    </div>
  );
}
