/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";
import { FadeInSection, EmojiSpan } from "../../components";
import { AboutContainer, AboutMeTitle, AboutSection } from "./about.styles";
import InfoSection from "./info-section";

const About = () => {
  const sectionData = [
    {
      title: "Experience",
      sections: [
        {
          experienceTitle: "Software Application Developer | CNN",
          experienceDuration: "Oct 2019 - Present",
          experienceInfo: "Currently work on a team dedicated to discovering new potential products for CNN.com that increase relevance to users. Collaborate cross-functionally with design and QA to quickly develop and deploy new features to production. Contributed largely to user registration that was recently launched on CNN.com.",
        },
        {
            experienceTitle: "Software Engineer | Honeywell",
            experienceDuration: "Dec 2018 - Oct 2019",
            experienceInfo: "Worked on a team that launched Honeywell's first APIaaS product for buildings technology. Contributed to service that connected internal APIs to API gateway and transformed data to be publicly consumed."
        }
      ],
      icon: "👩‍💻",
    },
    {
        title: "Education",
        sections: [
            {
                experienceTitle: "University of West Georgia | Bachelors of Computer Science",
                experienceDuration: "Graduated Dec 2018 - Cum Laude",
                experienceInfo: "President of Computer Science Honor Society, First President of ACM-W Chapter, GPA: 3.7"
            }
        ],
        icon: "📚"
    }
  ];

  const sections = sectionData.map((section) => (
    <InfoSection
      title={section.title}
      sections={section.sections}
      icon={section.icon}
    />
  ));

  return (
    <AboutContainer>
      <FadeInSection>
        <EmojiSpan ariaLabel="Sparkle">✨</EmojiSpan>
        <AboutMeTitle>About Me</AboutMeTitle>
        <EmojiSpan ariaLabel="Sparkle">✨</EmojiSpan>
        <AboutSection>{sections}</AboutSection>
      </FadeInSection>
    </AboutContainer>
  );
};

export default About;
