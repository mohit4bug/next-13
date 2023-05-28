import Carousel from "./components/Carousel"
import Featured from "./components/Featured"
import Navbar from "./components/Navbar"

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <Featured />
      <Carousel />
      <Carousel />
      <Carousel />
    </main>
  )
}