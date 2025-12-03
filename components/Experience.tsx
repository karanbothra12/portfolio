import { resume } from "@/data/resume";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/FadeIn";
import { Briefcase } from "lucide-react";

export function Experience() {
  return (
    <section
      id="experience"
      className="py-12 md:py-16 lg:py-20 bg-gray-50 dark:bg-gray-900/30 relative"
    >
      <div className="container max-w-6xl mx-auto px-4 md:px-6">
        <FadeIn className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-block rounded-full bg-orange-100 px-3 py-1 text-sm font-medium text-orange-800 dark:bg-orange-900/30 dark:text-orange-300">
            Career Path
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Work Experience
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed">
            My professional journey in the tech industry.
          </p>
        </FadeIn>

        <div className="max-w-4xl mx-auto">
          <div className="relative border-l border-gray-200 dark:border-gray-800 ml-4 md:ml-6 space-y-12">
            {resume.experience.map((job, index) => (
              <FadeIn
                key={index}
                delay={index * 0.1}
                className="relative pl-8 md:pl-12"
              >
                {/* Timeline dot */}
                <div className="absolute -left-[5px] md:-left-[7px] top-0 h-3 w-3 md:h-4 md:w-4 rounded-full border-2 border-white bg-blue-600 dark:border-gray-950 dark:bg-blue-500 shadow-sm mt-1.5" />

                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between mb-2">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                      {job.role}
                    </h3>
                    <div className="flex items-center gap-2 mt-1 text-blue-600 dark:text-blue-400 font-medium">
                      <Briefcase className="h-4 w-4" />
                      {job.company}
                    </div>
                  </div>
                  <Badge variant="secondary" className="w-fit shrink-0">
                    {job.date}
                  </Badge>
                </div>

                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-gray-400"></span>
                  {job.location}
                </p>

                <Card className="border-none shadow-sm bg-white dark:bg-gray-900">
                  <CardContent className="p-4 sm:p-6">
                    <ul className="list-disc pl-4 space-y-2 text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                      {job.points.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
