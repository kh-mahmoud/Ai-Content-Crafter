import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { CheckCircle2, Sparkles } from "lucide-react";
import { features } from "@/constants";

export default function page() {
  return (
    <main className="overflow-hidden bg-gradient-to-b from-background via-background/95 to-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#f8fafc] to-white">
        {/* subtle gradient blobs */}
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-primary/20 blur-3xl opacity-30" />
        <div className="absolute top-20 -right-40 w-96 h-96 rounded-full bg-purple-400/20 blur-3xl opacity-30" />

        <div className="relative mx-auto max-w-screen-xl px-6 py-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div className="text-center lg:text-left">
              {/* badge */}
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-primary text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                AI-Powered Content Generator
              </div>

              <h1 className="font-bold tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl">
                Create Smarter Content with{" "}
                <span className="text-primary relative inline-block">
                  Verbi AI
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg text-muted-foreground mx-auto lg:mx-0">
                Generate high-quality titles, blog posts, YouTube tags, code snippets, and
                more — all powered by AI templates designed to save you time and boost
                creativity.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <Button asChild size="lg" className="rounded-xl px-6 text-base">
                  <Link href="/dashboard">Start Creating</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-xl px-6"
                >
                  <Link href="#features">Explore Features</Link>
                </Button>
              </div>
            </div>

            {/* Right preview image */}
            <div className="relative">
              <div className="relative mx-auto max-w-xl rounded-3xl border bg-white shadow-xl ring-1 ring-border overflow-hidden">
                <Image
                  src="/show.png"
                  alt="Verbi AI app preview"
                  width={1920}
                  height={1080}
                  priority
                  className="rounded-3xl"
                />
              </div>
              {/* floating effect */}
              <div className="absolute -z-10 inset-0 blur-2xl bg-gradient-to-tr from-primary/30 to-purple-300/30 rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-background border-t">
        <div className="mx-auto max-w-screen-xl px-6 py-20">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold sm:text-4xl">Why Verbi AI?</h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
              Stop wasting hours brainstorming. Verbi AI gives you instant, relevant,
              and engaging content ideas tailored to your needs.
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex gap-4 p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition"
              >
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
  );
}
