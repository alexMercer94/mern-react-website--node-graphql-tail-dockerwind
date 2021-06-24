import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import JeepImg from '../../../assets/images/jeep.png';
import { SCREENS } from '../../components/responsive';

const AboutUsContainer = styled.div`
    ${tw`
    w-full
    flex
    flex-wrap
    items-center
    justify-center
    pt-4
    pb-4
    pr-7
    pl-7
    md:pl-0
    md: pr-0
    bg-white
 `};
`;

const CardContainer = styled.div`
    width: auto;
    height: 15em;
    margin-left: -30px;

    img {
        width: auto;
        height: 100%;
    }

    @media (min-width: ${SCREENS.md}) {
        height: 28em;
    }

    @media (min-width: ${SCREENS.lg}) {
        height: 30em;
    }

    @media (min-width: ${SCREENS['2xl']}) {
        height: 35em;
        margin-left: 0;
    }
`;

const InfoContainer = styled.div`
    ${tw`
    md:w-1/2
    flex
    flex-col
    md:ml-6
    2xl:ml-16 
 `};
`;

const Title = styled.h1`
    ${tw`
    text-black
    text-2xl
    md:text-5xl
    font-extrabold
    md:font-black
    md:leading-normal
 `};
`;

const InfoText = styled.p`
    ${tw`
    text-gray-500
    text-sm
    md:text-base
    md:max-w-2xl
    mt-4
    font-normal
 `};
`;

const AboutUs = () => {
    return (
        <AboutUsContainer>
            <CardContainer>
                <img src={JeepImg} />
            </CardContainer>
            <InfoContainer>
                <Title>Fell The Best Experience With Out Rental Deals</Title>
                <InfoText>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit placeat ea, dignissimos
                    quaerat fuga, dolorem veritatis quidem amet ipsam eum temporibus repellendus, vero quasi laboriosam
                    doloribus dicta accusantium quas molestias. Lorem ipsum dolor sit, amet consectetur adipisicing
                    elit. Omnis mollitia hic maxime nobis, perspiciatis eum architecto eaque error id optio vero at
                    quibusdam possimus adipisci iste minima incidunt harum quis.
                </InfoText>
            </InfoContainer>
        </AboutUsContainer>
    );
};

export default AboutUs;
