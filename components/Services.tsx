import { resume } from "@/data/resume";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FadeIn } from "@/components/FadeIn";
import { techIcons } from "@/lib/icons";
export function Services() {
  return (
    <section
      id="services"
      className="py-12 md:py-16 lg:py-20 bg-gray-50 dark:bg-gray-900/30"
    >
      <div className="container max-w-6xl mx-auto px-4 md:px-6">
        <FadeIn className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
            What I Do
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Services
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            I help bring your ideas to life with a comprehensive range of
            technical services.
          </p>
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {resume.services.map((service, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <Card className="h-full border-gray-100 dark:border-gray-800 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group bg-white dark:bg-gray-900/50">
                <CardHeader>
                  <div className="mb-4 flex gap-3">
                    {service.icons.map((iconName) => (
                      <div
                        key={iconName}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 dark:bg-blue-900/20 text-2xl transition-colors"
                      >
                        {techIcons[iconName]}
                      </div>
                    ))}
                  </div>
                  <CardTitle className="text-xl group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
