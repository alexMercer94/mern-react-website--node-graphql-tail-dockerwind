import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

interface IButtonProps {
    theme?: 'filled' | 'outlined';
    text: string;
    className?: string;
}

const BaseButton = styled.button`
    ${tw`
        pl-5
        pr-5
        pt-3
        pb-3
        outline-none
        rounded-md
        text-white
        text-xs
        font-semibold
        border-transparent
        border-2
        border-solid
        focus:outline-none
        transition-all
        duration-200
        ease-in-out
        m-1

    `}
`;

const OutlinedButtton = styled(BaseButton)`
    ${tw`
        bg-red-500
        hover:bg-transparent
        hover:text-red-500
        hover:border-red-500 
    `}
`;
const FilleddButtton = styled(BaseButton)`
    ${tw`
        border-red-500
        text-red-500
        bg-transparent
        hover:bg-red-500
        hover:text-white
        hover:border-transparent
    `}
`;

const Button = ({ theme, text, className }: IButtonProps) => {
    if (theme === 'filled') {
        return <FilleddButtton className={className}>{text}</FilleddButtton>;
    } else {
        return <OutlinedButtton className={className}>{text}</OutlinedButtton>;
    }
};

export default Button;
