import React from 'react';
import style from 'styled-components';
import tw from 'twin.macro';
import NavBar from '../../components/navBar';
import TopSection from './topSection';

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
            <TopSection />
        </PageContainer>
    );
};

export default HomePage;
