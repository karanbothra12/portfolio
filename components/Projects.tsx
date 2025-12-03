import { resume } from "@/data/resume";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/FadeIn";
import { getTechIcon } from "@/lib/icons";

export function Projects() {
  return (
    <section
      id="projects"
      className="py-12 md:py-16 lg:py-20 bg-white dark:bg-gray-950"
    >
      <div className="container max-w-6xl mx-auto px-4 md:px-6">
        <FadeIn className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-block rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800 dark:bg-green-900/30 dark:text-green-300">
            Portfolio
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Featured Projects
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed">
            A selection of my recent work.
          </p>
        </FadeIn>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {resume.projects.map((project, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <Card className="flex h-full flex-col overflow-hidden border-gray-200 dark:border-gray-800 transition-all hover:shadow-lg hover:-translate-y-1 group">
                <div className="h-48 bg-gray-100 dark:bg-gray-900 relative overflow-hidden">
                  {/* Tech Stack Icons Display */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 text-gray-400 opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
                    {project.tech.map((tech) => (
                      <div key={tech} title={tech}>
                        {getTechIcon(tech, { className: "h-8 w-8" }) ||
                          getTechIcon(tech.split(" ")[0], {
                            className: "h-8 w-8",
                          })}
                      </div>
                    ))}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-bold text-xl">
                      {project.title}
                    </h3>
                  </div>
                </div>
                <CardContent className="flex-1 p-6">
                  <p className="text-gray-500 dark:text-gray-400 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
