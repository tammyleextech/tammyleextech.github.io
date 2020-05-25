import styled, { keyframes } from 'styled-components';

const typing = keyframes`
    0% {
        width: 0;
    }
    100% {
        width: 100%;
    }
`;

const blinkCaret = keyframes`
    0% {
        border-color: transparent;
    }
    50% {
        border-color: #E6E6FA;
    }
    100% {
        border-color: transparent;
    }
`;

export const Typewritter = styled.h1`
    font-size: 36px;
    overflow: hidden;
    border-right: .15em solid #E6E6FA;
    white-space: nowrap;
    margin: 0 auto;
    letter-spacing: .15em;
    animation: 
        ${typing} 1s steps(40, end),
        ${blinkCaret} .75s step-end infinite;
`;

export const IntroContainer = styled.div`
    width: 375px;
    height: 650px;
    margin-top: 150px;
`;

export const PersonalPhoto = styled.img`
    height: 300px;
    margin-top: 80px;
    border: 5px inset #48D1CC;
    outline: 5px solid #AFEEEE;
` ;