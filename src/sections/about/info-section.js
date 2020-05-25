import React from "react";
import {
  InfoSectionTitle,
  Section,
  SectionEmoji,
  InfoSectionSubtitle,
  ExperienceDuration,
  ExperienceInfo,
  SubSection
} from "./info-section.styles";

const InfoSection = ({ title, sections, icon }) => {
  const formattedSections = sections.map((section) => (
    <SubSection>
      <InfoSectionSubtitle>{section.experienceTitle}</InfoSectionSubtitle>
      <ExperienceDuration>{section.experienceDuration}</ExperienceDuration>
      <ExperienceInfo>{section.experienceInfo}</ExperienceInfo>
    </SubSection>
  ));

  return (
    <Section>
      <SectionEmoji>{icon}</SectionEmoji>
      <InfoSectionTitle>{title}</InfoSectionTitle>
      {formattedSections}
    </Section>
  );
};


export default InfoSection;
