"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const carouselItems = [
  {
    id: 0,
    type: "video",
    title: "Preview Video",
    description: (
      <>
        Modern Family: S4 E21. This was a hilarious review of the extension converting a price of prices even in movies to sol by {" "}
        <a href="https://x.com/ruggedmf" target="_blank" rel="noopener noreferrer" className="underline text-blue-400 hover:text-blue-600">@ruggedmf</a>
      </>
    ),
    video: "https://ik.imagekit.io/mmnldm/Preview.mp4?updatedAt=1750689776306",
    alt: "Modern Family: S4 E21. This was a hilarious review of the extension converting a price of prices even in movies to sol by",
  },
  {
    id: 1,
    type: "image",
    title: "Tesla Example",
    description: "See Tesla prices converted to SOL automatically",
    image: "/images/tesla.png",
    alt: "Tesla website with SOL prices",
  },
  {
    id: 2,
    type: "image",
    title: "Airbnb Example",
    description: "Book accommodations while seeing costs in SOL",
    image: "/images/airbnb.png",
    alt: "Airbnb with SOL prices",
  },
  {
    id: 3,
    type: "image",
    title: "Adidas Store",
    description: "Shop for sportswear with prices in Solana",
    image: "/images/adidas.jpeg",
    alt: "Adidas store with SOL prices",
  },
]

export default function SeeItInAction() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselItems.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselItems.length) % carouselItems.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <section className="py-16 bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-950">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-slate-900 dark:text-white">See It in Action</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Experience real-time SOL conversion on popular platforms like Tesla, Airbnb, and Adidas
            </p>
          </div>

          <div className="relative">
            {/* Carousel Container */}
            <div className="relative overflow-hidden rounded-xl bg-white/10 dark:bg-slate-800/50 backdrop-blur-sm shadow-2xl">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {carouselItems.map((item) => (
                  <div key={item.id} className="w-full flex-shrink-0">
                    <div className="aspect-w-16 aspect-h-9 flex items-center justify-center bg-black">
                      {item.type === "video" ? (
                        <video
                          src={item.video}
                          controls
                          autoPlay
                          className="w-full h-full object-contain rounded-xl"
                          poster="/images/poster.png"
                        />
                      ) : (
                        <Image src={item.image || "/placeholder.svg"} alt={item.alt} fill className="object-contain" priority />
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Arrows */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white border-0 h-8 w-8"
                onClick={prevSlide}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white border-0 h-8 w-8"
                onClick={nextSlide}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {carouselItems.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide ? "bg-blue-500" : "bg-slate-600 hover:bg-slate-500"
                    }`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Current Slide Info */}
            <div className="text-center mt-6">
              <h3 className="text-xl font-semibold text-white mb-2">{carouselItems[currentSlide].title}</h3>
              <p className="text-slate-300">{carouselItems[currentSlide].description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
