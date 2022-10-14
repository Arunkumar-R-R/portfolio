import Link from "next/link";
import { animated, useSpring, useSpringRef } from "@react-spring/web";
import { useEffect } from "react";

export function SocialIcon(props) {
  const { data } = props;
  const { icon, label, source } = data;

  const socialSpring = useSpring({
    from: { y: 10, opacity: 0 },
    to: { y: 0, opacity: 1 },
    delay: 300,
  });

  return (
    <animated.div style={{ ...socialSpring }}>
      <Link href={source}>
        <a
          target="_blank"
          className="cursor-pointer hover:shadow-md border border-custom_black-500 h-[36px] w-[36px] mr-[16px] flex justify-center items-center rounded-[4px]"
        >
          {icon}
        </a>
      </Link>
    </animated.div>
  );
}
