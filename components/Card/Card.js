import { Chip } from "../Chip/Chip";
import { CodebaseIcon, DemoIcon } from "./../../utils/SvgIcon.js";
import Link from "next/link";

export function Card(props) {
  const { projectData } = props;
  const { projectTitle, shortDescription, techStack, demoLink, codeBaseLink } = projectData;

  return (
    <div className="border border-custom_black-500 rounded-[4px] py-5 px-5 shadow-sm hover:shadow-xl mb-7">
      <div className="text-base font-semibold text-custom_black-800 ">
        {projectTitle}
      </div>
      <div className="text-tiny mt-[12px] text-textPrimary">
        {shortDescription}
      </div>
      <div className="flex mt-[12px]">
        {techStack.map((tech, index) => {
          return <Chip key={index}>{tech}</Chip>;
        })}
      </div>
      <div className="flex items-center mt-[12px]">
        <Link href={demoLink}>
          <a
            target="_blank"
            className="py-[2px] px-[6px] rounded-sm flex items-center mr-[30px] text-tiny text-primaryColor font-medium cursor-pointer hover:bg-primaryColor/[0.1]"
          >
            Demo <DemoIcon className={"ml-[6px]"} />
          </a>
        </Link>
        <Link href={codeBaseLink}>
          <a
            target="_blank"
            className="py-[2px] px-[6px] rounded-sm flex items-center text-tiny  text-primaryColor font-medium cursor-pointer hover:bg-primaryColor/[0.1]"
          >
            CodeBase <CodebaseIcon className={"ml-[6px]"} />
          </a>
        </Link>
      </div>
    </div>
  );
}
