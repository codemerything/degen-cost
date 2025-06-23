import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">About Degen Cost</h2>

          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-2/3">
              <h3 className="text-xl md:text-2xl font-semibold mb-4">Why I Built This</h3>
              <div className="space-y-4 text-slate-700 dark:text-slate-300">
                <p>
                  Degen Cost was built as a reality check — a way for degens to rethink what their money is actually
                  worth in Solana terms. In a time where hyper-gambling and financial chaos are the norm, this tool
                  offers perspective.
                </p>
                <p>
                  The goal is simple: to help people start thinking in terms of Solana's sound money principles and make
                  it easier to mentally bridge everyday spending with Solana.
                </p>
                <p>
                  Built for speed and privacy, Degen Cost runs entirely in your browser. No trackers. No data
                  collection. Just a tool to help you zoom out.
                </p>
              </div>
            </div>

            <div className="md:w-1/3 flex flex-col items-center justify-center">
              <div className="mb-4">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-xSHejwO2XoCoSI7DhGEAIivS2wH0DT.png"
                  alt="Zima Profile"
                  width={120}
                  height={120}
                  className="rounded-full"
                />
              </div>
              <div className="text-center">
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Created by{" "}
                  <a
                    href="https://twitter.com/zimaab"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-600"
                  >
                    Zima
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
