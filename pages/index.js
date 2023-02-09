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
    <div>
      <Head>
        <title>Arunkumar R R</title>
        <meta name="description" content="Arunkumar R R, Frontend developer" />
      </Head>
      <main className="flex flex-col lg:w-auto w-[700px] lg:px-4 justify-center item-center mx-auto">
        <section className="my-[74px]">
          <animated.div style={{ ...springs }}>
            <h1 className="text-xl font-semibold text-custom_black-800	leading-[36px]">
              Arunkumar R R
            </h1>
            <div className="flex items-center flex-wrap mt-2">
              <div className="text-tiny text-textPrimary mr-8">
                Frontend Developer
              </div>
              <Link href={"./Arunkumar R R (Frontend developer).pdf"}>
                <a
                  target="_blank"
                  className="p-[4px] rounded-sm flex text-tiny font-medium text-primaryColor cursor-pointer custom_sm:mt-[12px] hover:bg-primaryColor/[0.1]"
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
              Hello there, Iam Arunkumar working in <strong>TCS</strong> as
              Front-End Developer with client <strong>Credit Suisse</strong>.
              Over past two years, i’ve build Components, written unit
              testcases, Fixed production UI Bugs. I have strong passion for
              building Functional User Interface, Reusable and accessible
              Components.
            </p>
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
