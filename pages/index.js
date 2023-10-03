import Head from "next/head";
import Link from "next/link";
import { Card } from "../components/Card/Card";
import { Chip } from "../components/Chip/Chip";
import { SocialIcon } from "../components/SocialIcon/SocialIcon";
import {
  areaOfInterest,
  Projects,
  skills,
  socialMediaLinks,
} from "./../utils/portfolioData";
import { PdfIcon } from "./../utils/SvgIcon.js";
import { animated, useSpring, useSpringRef } from "@react-spring/web";
import { useEffect } from "react";

export default function Home() {
  const api = useSpringRef();
  const springs = useSpring({
    ref: api,
    from: { y: 10, opacity: 0 },
  });

  useEffect(() => {
    api.start({
      to: { y: 0, opacity: 1 },
      delay: 100,
    });
  }, [api]);

  return (
    <div className="w-full flex justify-center">
      <Head>
        <title>Arunkumar R R</title>
        <meta name="description" content="Arunkumar R R, Frontend developer" />
      </Head>
      <main className="flex flex-col w-full max-w-4xl px-4 lg:w-auto lg:px-4 sm:px-2 justify-center item-center mx-auto">
        <section className="my-[74px]">
          <animated.div style={{ ...springs }}>
            <h1 className="text-3xl font-semibold text-custom_black-800	leading-[36px]">
              Arunkumar R R
            </h1>
            <div className="flex items-center flex-wrap mt-3">
              <div className="text-xl text-textPrimary mr-8">
                Frontend Engineer
              </div>
              <Link href={"./Arunkumar R R.pdf"}>
                <a
                  target="_blank"
                  className="p-2 rounded-sm flex text-tiny font-medium text-blue-500 cursor-pointer hover:bg-blue-100"
                >
                  <PdfIcon className={"mr-1"} />
                  View Resume
                </a>
              </Link>
            </div>
            <div className="flex my-6 flex-wrap">
              {areaOfInterest.map((interest, index) => {
                return <Chip key={index}>{interest}</Chip>;
              })}
            </div>
          </animated.div>
          <div className="flex flex-wrap">
            {socialMediaLinks.map((socialMediaLink, index) => {
              return (
                <SocialIcon key={index} data={socialMediaLink}></SocialIcon>
              );
            })}
          </div>
        </section>
        <section className="mb-[54px] w-full">
          <animated.div style={{ ...springs }}>
            <h2 className="text-lg font-semibold">About Me</h2>
            <p className="text-tiny my-[14px] text-textPrimary">
              Hello there, Iam Arunkumar working in <strong>Zuper</strong> as
              Frontend Engineer. Previously, i worked in <strong>TCS</strong> as Frontend Developer for about 2 years 8 months. </p>
            <div className="flex flex-col">
              <h3 className="text-base font-semibold">Skills</h3>
              <div className="flex flex-wrap my-[14px]">
                {skills.map((skill, index) => {
                  return (
                    <Chip key={index}>
                      <div className="mr-[6px]">{skill.icon}</div>
                      {skill.tech}
                    </Chip>
                  );
                })}
              </div>
            </div>
          </animated.div>
        </section>
        <section className="mb-[74px]">
          <animated.div style={{ ...springs }}>
            <h2 className="text-lg font-semibold">Side Project</h2>
            <div className="mt-[16px]">
              {Projects.map((project, index) => {
                return <Card key={index} projectData={project}></Card>;
              })}
            </div>
          </animated.div>
        </section>
      </main>
    </div>
  );
}
