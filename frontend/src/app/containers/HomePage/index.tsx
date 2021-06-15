import React from 'react';
import style from 'styled-components';
import tw from 'twin.macro';
import NavBar from '../../components/navBar';

const PageContainer = style.div`
    ${tw`
        flex
        flex-col
        w-full
        h-full
        items-center
        overflow-x-hidden
    `}
`;

const HomePage = () => {
    return (
        <PageContainer>
            <NavBar />
        </PageContainer>
    );
};

export default HomePage;
