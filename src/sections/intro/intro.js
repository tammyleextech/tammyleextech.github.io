/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";
import { Typewritter, IntroContainer, PersonalPhoto } from "./intro.styles";
import Photo from '../../images/personal-photo.jpg';
import { EmojiSpan } from "../../components";

const Intro = () => (
  <IntroContainer>
    <Typewritter>
      Hi, I'm Tammy. <EmojiSpan ariaLabel="Waving">👋</EmojiSpan>
    </Typewritter>
    <PersonalPhoto src={Photo} />
  </IntroContainer>
);

export default Intro;
