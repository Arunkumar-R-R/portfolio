import { Chip } from "../Chip/Chip";
import { CodebaseIcon, DemoIcon } from "./../../utils/SvgIcon.js";
import Link from "next/link";

export function Card(props) {
  const { projectData } = props;
  const { projectTitle, shortDescription, techStack, demoLink, codeBaseLink } = projectData;

  return (
    <div className="w-full border  rounded-[4px] py-5 px-5 shadow-sm hover:shadow-lg mb-7">
      <div className="text-base font-semibold text-custom_black-800 ">
        {projectTitle}
      </div>
      <div className="text-tiny mt-[12px] text-textPrimary">
        {shortDescription}
      </div>
      <div className="flex flex-wrap mt-[12px]">
        {techStack.map((tech, index) => {
          return <Chip key={index}>{tech}</Chip>;
        })}
      </div>
      <div className="flex items-center mt-[12px]">
        <Link href={demoLink}>
          <a
            target="_blank"
            className="py-2 px-3 rounded-sm flex items-center mr-[30px] text-tiny text-blue-500 font-medium cursor-pointer hover:bg-blue-100"
          >
            Demo <DemoIcon className={"ml-[6px]"} />
          </a>
        </Link>
        <Link href={codeBaseLink}>
          <a
            target="_blank"
            className="py-2 px-3 rounded-sm flex items-center text-tiny  text-blue-500 font-medium cursor-pointer hover:bg-blue-100"
          >
            CodeBase <CodebaseIcon className={"ml-[6px]"} />
          </a>
        </Link>
      </div>
    </div>
  );
}
