import { resume } from "@/data/resume";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";

export function Education() {
  return (
    <section id="education" className="py-12 md:py-16 lg:py-20">
      <div className="container max-w-6xl mx-auto px-4 md:px-6">
        <FadeIn className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Education
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            My academic background.
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {resume.education.map((edu, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <Card className="h-full">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="rounded-full bg-blue-100 p-2 dark:bg-blue-900">
                    <GraduationCap className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{edu.institution}</CardTitle>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {edu.degree}
                    </p>
                  </div>
                </CardHeader>
                <CardContent>
                  {edu.year && (
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      {edu.year}
                    </p>
                  )}
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
