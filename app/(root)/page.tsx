import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { CheckCircle2 } from 'lucide-react'

export default function HeroSection() {
  return (
    <main className="overflow-hidden bg-gradient-to-b from-background via-background/95 to-background">
      {/* Hero Section */}
      <section className="relative">
        <div className="mx-auto max-w-screen-xl px-6 py-16">
          <div className="text-center lg:text-left">
            <h1 className="font-bold tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              Modern Solutions for <br className="hidden md:block" /> Customer Engagement
            </h1>

            <p className="mt-6 max-w-2xl text-lg text-muted-foreground mx-auto lg:mx-0">
              Highly customizable components for building modern websites and applications
              that look and feel exactly the way you mean it.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
              <Button asChild size="lg" className="rounded-xl px-6 text-base">
                <Link href="#link">Start Building</Link>
              </Button>
              <Button asChild size="lg" variant="ghost" className="rounded-xl px-6">
                <Link href="#link">Request a Demo</Link>
              </Button>
            </div>
          </div>

          <div className="mt-14 lg:mt-20">
            <div className="relative mx-auto max-w-5xl overflow-hidden rounded-2xl border shadow-lg ring-1 ring-border">
              <Image
                src="/show.png"
                alt="app screen"
                width={1920}
                height={1080}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-background border-t">
        <div className="mx-auto max-w-screen-xl px-6 py-20">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold sm:text-4xl">Why Choose Us?</h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
              Everything you need to build modern, fast, and scalable applications without the headache.
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Fully Customizable',
                description:
                  'Easily adapt every component to match your brand and style.',
              },
              {
                title: 'Responsive by Default',
                description:
                  'Looks great on every screen size without additional setup.',
              },
              {
                title: 'Developer Friendly',
                description:
                  'Clean code, clear documentation, and modern frameworks.',
              },
            ].map((feature, index) => (
              <div key={index} className="flex gap-4">
                <CheckCircle2 className="text-primary w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold">{feature.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
