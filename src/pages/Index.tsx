import { Hero3DWebGL as Hero3D } from "@/components/hero-webgl"
import { CTASection } from "@/components/cta-section"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function Index() {
  return (
    <div className="dark">
      <Navbar />
      <main>
        <Hero3D />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}