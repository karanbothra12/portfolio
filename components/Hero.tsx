import { resume } from "@/data/resume";
import { Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/FadeIn";
import { TypewriterEffect } from "@/components/TypewriterEffect";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden py-12 md:py-16 lg:py-20 bg-gray-50 dark:bg-gray-950"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-gray-950 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-blue-500 opacity-20 blur-[100px] dark:opacity-20"></div>
      </div>

      <div className="container max-w-6xl mx-auto relative z-10 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
          <FadeIn viewport={false} className="space-y-4">
            <div className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 mb-4">
              Available for Freelance & Full-time
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Hi there, I'm <br className="hidden sm:inline" />
              <TypewriterEffect
                text={resume.basicInfo.name}
                className="text-blue-600 dark:text-blue-400"
              />
            </h1>
            <p className="mx-auto max-w-[700px] text-xl text-gray-500 dark:text-gray-400 md:text-2xl font-light">
              Product-minded engineer leading modern frontends end-to-end with
              full-stack awareness and obsessive detail.
            </p>
          </FadeIn>

          <FadeIn
            viewport={false}
            delay={0.2}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Button asChild size="lg" className="gap-2 rounded-full px-8">
              <a href="#contact">Let's Talk</a>
            </Button>
          </FadeIn>

          <FadeIn viewport={false} delay={0.4} className="flex gap-6 pt-4">
            <a
              href={resume.basicInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
            >
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href={resume.basicInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 transition-colors"
            >
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </a>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
