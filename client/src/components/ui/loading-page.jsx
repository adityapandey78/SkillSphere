import { Loader2 } from "lucide-react";

function LoadingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="text-center space-y-6">
        {/* Animated Loader Icon */}
        <div className="relative">
          <div className="absolute inset-0 blur-3xl opacity-30">
            <div className="w-32 h-32 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          </div>
          <Loader2 className="h-20 w-20 text-blue-600 animate-spin mx-auto relative z-10" />
        </div>

        {/* Loading Text */}
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-gray-800 animate-pulse">
            Preparing your learning...
          </h2>
          <p className="text-gray-600 text-sm">
            Please wait while we set things up for you
          </p>
        </div>

        {/* Progress Dots */}
        <div className="flex gap-2 justify-center">
          <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
          <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></div>
          <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
        </div>
      </div>
    </div>
  );
}

export default LoadingPage;
