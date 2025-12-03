import { resume } from "@/data/resume";
import { Card, CardContent } from "@/components/ui/card";
import { FadeIn } from "@/components/FadeIn";

export function About() {
  const stats = [
    { label: "Years crafting products", value: "4+" },
    { label: "Products shipped", value: "25+" },
    { label: "Performance gains", value: "30% faster" },
  ];

  const highlights = [
    "Next.js and React specialist with a love for composable design systems.",
    "Blend of product thinking and engineering rigour—owning the journey from wireframe to launch.",
    "Lean, async-first collaborator across founders, PMs, and designers.",
  ];

  const quickFacts = [
    { label: "Role", value: resume.basicInfo.role },
    { label: "Focus", value: "Frontend · DX · Product strategy" },
    { label: "Stack sweet spot", value: "Next.js · React · Edge runtimes" },
    { label: "Languages", value: "Hindi, English, German" },
  ];

  return (
    <section
      id="about"
      className="py-12 md:py-16 lg:py-20 bg-white dark:bg-gray-950"
    >
      <div className="container max-w-6xl mx-auto px-4 md:px-6 space-y-10">
        <FadeIn className="space-y-6 text-center md:text-left">
          <p className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700 dark:bg-blue-900/40 dark:text-blue-200">
            Story · Craft · Momentum
          </p>
          <div className="grid gap-10 md:grid-cols-[3fr_2fr] items-start">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Building digital experiences that feel premium without feeling
                heavy.
              </h2>
              <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                {resume.profile}
              </p>
              <div className="grid gap-4 md:grid-cols-3">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-gray-100 bg-white p-4 text-center shadow-sm dark:border-gray-800 dark:bg-gray-900"
                  >
                    <p className="text-2xl font-semibold text-gray-900 dark:text-gray-50">
                      {stat.value}
                    </p>
                    <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <Card className="border-gray-100 bg-white/70 backdrop-blur dark:border-gray-800 dark:bg-gray-900/70">
              <CardContent className="space-y-4 p-6">
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                  Quick snapshot
                </p>
                <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                  {quickFacts.map((fact) => (
                    <div
                      key={fact.label}
                      className="flex items-start justify-between gap-4 border-b border-gray-100 pb-3 last:border-b-0 dark:border-gray-800"
                    >
                      <span className="font-medium text-gray-500 dark:text-gray-400">
                        {fact.label}
                      </span>
                      <span className="text-right text-gray-900 dark:text-gray-100">
                        {fact.value}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </FadeIn>

        <FadeIn className="rounded-2xl border border-gray-100 bg-gray-50 p-6 dark:border-gray-800 dark:bg-gray-900">
          <h3 className="mb-4 text-xl font-semibold">Ways I add value</h3>
          <div className="grid gap-6 md:grid-cols-3">
            {highlights.map((item) => (
              <div key={item} className="space-y-2">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
                  ✦
                </span>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
