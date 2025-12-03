import { resume } from "@/data/resume";
import { Mail } from "lucide-react";
import { SiLinkedin, SiInstagram, SiWhatsapp } from "react-icons/si";
import { Card, CardContent } from "@/components/ui/card";
import { FadeIn } from "@/components/FadeIn";

export function Contact() {
  const contactLinks = [
    {
      name: "Email",
      icon: <Mail className="h-6 w-6" />,
      value: resume.basicInfo.email,
      href: `mailto:${resume.basicInfo.email}`,
      color: "hover:text-red-500",
    },
    {
      name: "LinkedIn",
      icon: <SiLinkedin className="h-6 w-6" />,
      value: "LinkedIn",
      href: resume.basicInfo.linkedin,
      color: "hover:text-blue-600",
    },
    {
      name: "Instagram",
      icon: <SiInstagram className="h-6 w-6" />,
      value: "Instagram",
      href: "https://instagram.com", // Placeholder, update in resume.ts if needed
      color: "hover:text-pink-600",
    },
    {
      name: "WhatsApp",
      icon: <SiWhatsapp className="h-6 w-6" />,
      value: "WhatsApp",
      href: `https://wa.me/${resume.basicInfo.phone}`, // Using phone from resume
      color: "hover:text-green-500",
    },
  ];

  return (
    <section id="contact" className="py-12 md:py-16 lg:py-20">
      <div className="container max-w-6xl mx-auto px-4 md:px-6">
        <FadeIn className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Get in Touch
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Feel free to reach out for collaborations or just a friendly hello.
          </p>
        </FadeIn>

        <div className="grid gap-4 grid-cols-2 lg:grid-cols-4 justify-center">
          {contactLinks.map((link, index) => (
            <FadeIn key={link.name} delay={index * 0.1}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
                <Card className="h-full transition-all hover:shadow-lg hover:-translate-y-1">
                  <CardContent className="flex flex-col items-center justify-center p-6 gap-4">
                    <div
                      className={`p-3 rounded-full bg-gray-100 dark:bg-gray-800 transition-colors ${link.color}`}
                    >
                      {link.icon}
                    </div>
                    <div className="text-center">
                      <h3 className="font-bold text-lg">{link.name}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 break-all">
                        {link.name === "Email" ? "Send an email" : "Connect"}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
