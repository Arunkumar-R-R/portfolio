import Link from "next/link";

export function SocialIcon(props) {
  const { data } = props;
  const { icon, label, source } = data;
  return (
    <Link href={source}>
      <a
        target="_blank"
        className="cursor-pointer hover:shadow-md border border-custom_black-500 h-[36px] w-[36px] mr-[16px] flex justify-center items-center rounded-[4px]">
        {icon}
      </a>
    </Link>
  );
}
