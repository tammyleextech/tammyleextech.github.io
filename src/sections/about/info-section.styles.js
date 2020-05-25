import styled from 'styled-components';
import { EmojiSpan } from "../../components";

export const Section = styled.div`
    padding: 0px 15px 5px;
    margin-top: 0;
    color: #808080;
`;

export const SubSection = styled.div`
    margin: 6px;
`;

export const InfoSectionTitle = styled.h4`
    color: #008080;
    line-height: 24px;
    margin: 0;
    font-weight: 400;
    font-size: 24px;
    display: inline;
`;

export const SectionEmoji = styled(EmojiSpan)`
    margin-right: 6px !important;
`;

export const InfoSectionSubtitle = styled.p`
    font-weight: bold;
    margin: 0;
`;

export const ExperienceDuration = styled.span`
    font-size: 16px;
`

export const ExperienceInfo = styled.p`
    font-size: 12px;
    margin-top: 4px;
`