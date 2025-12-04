import React from "react";
import { cn } from "@/lib/utils";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiDart,
  SiNextdotjs,
  SiReact,
  SiSass,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiSocketdotio,
  SiDocker,
  SiAmazon,
  SiGit,
  SiGithub,
  SiFirebase,
  SiUbuntu,
  SiJest,
  SiCypress,
  SiTestinglibrary,
  SiMongodb,
  SiFigma,
  SiFlutter,
  SiSwift,
  SiTailwindcss,
  SiJira,
  SiTrello,
  SiPostgresql,
  SiRedis,
  SiFramer,
  SiVuedotjs,
} from "react-icons/si";
import { MdCode, MdLightbulb, MdGroups, MdAnalytics } from "react-icons/md";

/**
 * Centralized icon mapping for the entire website
 * All technology icons with their brand colors
 */
export const techIcons: Record<string, React.ReactNode> = {
  // Programming Languages
  JavaScript: <SiJavascript className="text-[#F7DF1E]" />,
  TypeScript: <SiTypescript className="text-[#3178C6]" />,
  Dart: <SiDart className="text-[#0175C2]" />,

  // Frontend
  "Next.js": <SiNextdotjs className="text-black dark:text-white" />,
  "React.js": <SiReact className="text-[#61DAFB]" />,
  React: <SiReact className="text-[#61DAFB]" />,
  HTML: <SiHtml5 className="text-[#E34F26]" />,
  CSS: <SiCss3 className="text-[#1572B6]" />,
  SASS: <SiSass className="text-[#CC6699]" />,
  "Redux Toolkit": <SiRedux className="text-[#764ABC]" />,
  Redux: <SiRedux className="text-[#764ABC]" />,
  Tailwind: <SiTailwindcss className="text-[#06B6D4]" />,
  "Tailwind CSS": <SiTailwindcss className="text-[#06B6D4]" />,

  // Backend
  "Node.js": <SiNodedotjs className="text-[#339933]" />,
  "Express.js": <SiExpress className="text-black dark:text-white" />,
  Express: <SiExpress className="text-black dark:text-white" />,
  "Socket.io": <SiSocketdotio className="text-black dark:text-white" />,

  // DevOps
  Docker: <SiDocker className="text-[#2496ED]" />,
  AWS: <SiAmazon className="text-[#FF9900]" />,
  Git: <SiGit className="text-[#F05032]" />,
  GitHub: <SiGithub className="text-black dark:text-white" />,

  // Databases
  MongoDB: <SiMongodb className="text-[#47A248]" />,
  PostgreSQL: <SiPostgresql className="text-[#4169E1]" />,
  Redis: <SiRedis className="text-[#DC382D]" />,

  // Miscellaneous
  Firebase: <SiFirebase className="text-[#FFCA28]" />,
  Ubuntu: <SiUbuntu className="text-[#E95420]" />,

  // Testing
  Jest: <SiJest className="text-[#C21325]" />,
  Cypress: <SiCypress className="text-[#17202C] dark:text-white" />,
  "React Testing Library": <SiTestinglibrary className="text-[#E33332]" />,

  // Mobile
  Flutter: <SiFlutter className="text-[#02569B]" />,
  Swift: <SiSwift className="text-[#F05138]" />,

  // Design & Tools
  Figma: <SiFigma className="text-[#F24E1E]" />,
  Jira: <SiJira className="text-[#0052CC]" />,
  Trello: <SiTrello className="text-[#0079BF]" />,

  // Other Frameworks
  "Framer Motion": <SiFramer className="h-8 w-8" />,
  "Vue.js": <SiVuedotjs className="text-[#4FC08D]" />,

  // Nontechnical (using generic icons)
  "Problem Solving": <MdLightbulb className="text-yellow-500" />,
  Collaboration: <MdGroups className="text-blue-500" />,
  "Analytical Skills": <MdAnalytics className="text-purple-500" />,
};

/**
 * Fallback icon component
 */
export const FallbackIcon = () => <MdCode />;

/**
 * Get icon for a technology name
 * @param name - Technology name
 * @param size - Optional size class (e.g., "h-8 w-8")
 * @returns React node with icon or fallback
 */
export function getTechIcon(
  name: string,
  options?: { className?: string }
): React.ReactNode {
  const icon = techIcons[name];
  if (!icon) {
    return <FallbackIcon />;
  }

  if (options?.className) {
    const element = icon as React.ReactElement<{ className?: string }>;
    return React.cloneElement(element, {
      className: cn(element.props.className, options.className),
    });
  }

  return icon;
}
