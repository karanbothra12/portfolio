import { resume } from "@/data/resume";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FadeIn } from "@/components/FadeIn";
import { techIcons, FallbackIcon } from "@/lib/icons";

export function Skills() {
  const skillCategories = [
    { name: "Programming Languages", skills: resume.skills.languages },
    { name: "Frontend Development", skills: resume.skills.frontend },
    { name: "Backend Development", skills: resume.skills.backend },
    { name: "DevOps/VCS", skills: resume.skills.devops },
    { name: "Testing", skills: resume.skills.testing },
    { name: "Miscellaneous", skills: resume.skills.miscellaneous },
    { name: "Nontechnical Skills", skills: resume.skills.nonTechnical },
  ];

  return (
    <section
      id="skills"
      className="py-12 md:py-16 lg:py-20 bg-gray-50 dark:bg-gray-900/50 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 opacity-30 dark:opacity-10 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-purple-500/20 blur-[100px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-blue-500/20 blur-[120px]"></div>
      </div>

      <div className="container max-w-6xl mx-auto px-4 md:px-6">
        <FadeIn className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-block rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-800 dark:bg-purple-900/30 dark:text-purple-300">
            Expertise
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Skills & Technologies
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed">
            My technical toolbox and proficiencies.
          </p>
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <FadeIn key={category.name} delay={index * 0.1}>
              <Card className="h-full border-none shadow-sm bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    {category.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="px-3 py-2 text-sm font-normal bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all flex items-center gap-2"
                      >
                        <span className="text-lg">
                          {techIcons[skill] ?? <FallbackIcon />}
                        </span>
                        {skill}
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
