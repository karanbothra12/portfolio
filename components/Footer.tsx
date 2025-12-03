import { resume } from "@/data/resume"
import { Github, Linkedin, Mail } from "lucide-react"
import { ThemeToggle } from "@/components/ThemeToggle"

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-950">
      <div className="container max-w-6xl mx-auto px-4 py-8 md:px-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} {resume.basicInfo.name}. All rights reserved.
          </p>
          <div className="flex w-full items-center justify-between gap-4 md:w-auto md:justify-end">
            <div className="flex gap-4">
              <a
                href={resume.basicInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href={resume.basicInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href={`mailto:${resume.basicInfo.email}`}
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </div>
            <div className="ml-auto md:ml-4">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

