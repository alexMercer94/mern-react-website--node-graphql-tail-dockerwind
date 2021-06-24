import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import CarLogoDarkImg from '../../../assets/images/car-logo-dark.png';
import CarLogoImg from '../../../assets/images/car-logo.png';

interface ILogoProps {
    color?: 'white' | 'dark';
    bgColor?: 'white' | 'dark';
}

const LogoContainer = styled.div`
    ${tw`
        flex
        items-center
    `}
`;

const LogoText = styled.div`
    ${tw`
        text-xl
        md:text-2xl
        font-bold
        text-black
        m-1
    `}
    ${({ color }: any) => (color === 'white' ? tw`text-white` : tw`text-black`)}
` as any;

const Image = styled.div`
    ${tw`
        h-6
        md:h-9
    `}

    img {
        width: auto;
        height: 100%;
    }
`;

const Logo = ({ color, bgColor }: ILogoProps) => {
    return (
        <LogoContainer>
            <Image>
                <img src={bgColor === 'dark' ? CarLogoDarkImg : CarLogoImg} />
            </Image>
            <LogoText color={color || 'dark'}>Car Rent Website</LogoText>
        </LogoContainer>
    );
};

export default Logo;
