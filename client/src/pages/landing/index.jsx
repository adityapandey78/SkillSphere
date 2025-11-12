import LandingHeader from "@/components/landing-page/header";
import LoadingPage from "@/components/ui/loading-page";
import { useContext, useEffect, lazy, Suspense } from "react";
import { AuthContext } from "@/context/auth-context";
import { useNavigate } from "react-router-dom";

// Lazy load heavy sections
const HeroSection = lazy(() => import("@/components/landing-page/hero-section"));
const CategoriesSection = lazy(() => import("@/components/landing-page/categories-section"));
const FeaturesSection = lazy(() => import("@/components/landing-page/features-section"));
const TestimonialsSection = lazy(() => import("@/components/landing-page/testimonials-section"));
const CtaSection = lazy(() => import("@/components/landing-page/cta-section"));
const Footer = lazy(() => import("@/components/landing-page/footer"));

function LandingPage() {
  const { auth } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    // If user is already authenticated, redirect them to their dashboard
    if (auth?.authenticate) {
      if (auth?.user?.role === 'instructor') {
        navigate('/instructor');
      } else {
        navigate('/home');
      }
    }
  }, [auth, navigate]);

  // Show landing page only for unauthenticated users
  if (auth?.authenticate) {
    return null;
  }

  return (
    <div className="min-h-screen bg-white">
      <LandingHeader />
      <Suspense fallback={
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading content...</p>
          </div>
        </div>
      }>
        <HeroSection />
        <CategoriesSection />
        <FeaturesSection />
        <TestimonialsSection />
        <CtaSection />
        <Footer />
      </Suspense>
    </div>
  );
}

export default LandingPage;
