import Carousel, { Dots, slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { createSelector, Dispatch } from '@reduxjs/toolkit';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';
import tw from 'twin.macro';
import { ICar } from '../../../typings/car';
import Car from '../../components/car';
import { SCREENS } from '../../components/responsive';
import carService from '../../services/carService';
import { getCars_cars } from '../../services/carService/__generated__/getCars';
import { makeSelectTopCars } from './selectors';
import { setTopCars } from './slice';

const TopCarsContainer = styled.div`
    ${tw`
    max-w-screen-lg
    w-full
    flex
    flex-col
    items-center
    justify-center
    pr-4
    pl-4
    md:pl-0
    md:pr-0
    mb-10 
 `};
`;

const CarsContainer = styled.div`
    ${tw`
    w-full
    flex
    flex-wrap
    justify-center
    mt-7
    md:mt-10
    
 `};
`;

const Title = styled.h2`
    ${tw`
    text-3xl
    lg:text-5xl
    text-black
    font-extrabold
 `};
`;

const EmptyCars = styled.div`
    ${tw`
    flex
    items-center
    justify-center
    w-full
    text-sm
    text-gray-500
 `};
`;

// * Actions
const actionDispatch = (dispatch: Dispatch) => ({
    setTopCars: (cars: getCars_cars[]) => dispatch(setTopCars(cars)),
});

const stateSelector = createSelector(makeSelectTopCars, (topCars) => ({
    topCars,
}));

const TopCarsSection = () => {
    const [current, setCurrent] = useState(0);
    const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });

    const { topCars } = useSelector(stateSelector);
    const { setTopCars } = actionDispatch(useDispatch());

    /**
     * Fetch cars from API
     */
    const fetchTopCars = async () => {
        const cars = await carService.getCars().catch((err) => {
            console.log('Error', err);
        });

        if (cars) {
            setTopCars(cars);
        }
    };

    const testCar: ICar = {
        name: 'Audi S3 Car',
        mileage: '10k',
        thumbnailSrc: 'https://cdn.jdpower.com/Models/640x480/2017-Audi-S3-PremiumPlus.jpg',
        dailyPrice: 70,
        monthlyPrice: 1600,
        gearType: 'Auto',
        gas: 'Petrol',
    };

    const testCar2: ICar = {
        name: 'HONDA cITY 5 Seater Car',
        mileage: '20k',
        thumbnailSrc: 'https://shinewiki.com/wp-content/uploads/2019/11/honda-city.jpg',
        dailyPrice: 50,
        monthlyPrice: 1500,
        gearType: 'Auto',
        gas: 'Petrol',
    };

    const isEmptyTopCars = !topCars || topCars.length === 0;

    const cars = (!isEmptyTopCars && topCars.map((car) => <Car {...car} thumbnailSrc={car.thumbnailUrl} />)) || [];
    const numberOfDots = isMobile ? cars.length : Math.ceil(cars.length / 3);

    useEffect(() => {
        fetchTopCars();
    }, []);

    if (isEmptyTopCars) {
        return null;
    }

    return (
        <TopCarsContainer>
            <Title>Explore Our Top Deals</Title>
            {!isEmptyTopCars ? (
                <CarsContainer>
                    <Carousel
                        value={current}
                        onChange={setCurrent}
                        slides={cars}
                        plugins={[
                            'clickToChange',
                            {
                                resolve: slidesToShowPlugin,
                                options: {
                                    numberOfSlides: 3,
                                },
                            },
                        ]}
                        breakpoints={{
                            640: {
                                plugins: [
                                    {
                                        resolve: slidesToShowPlugin,
                                        options: {
                                            numberOfSlides: 1,
                                        },
                                    },
                                ],
                            },
                            900: {
                                plugins: [
                                    {
                                        resolve: slidesToShowPlugin,
                                        options: {
                                            numberOfSlides: 2,
                                        },
                                    },
                                ],
                            },
                        }}
                    />
                    <Dots value={current} onChange={setCurrent} number={numberOfDots} />
                </CarsContainer>
            ) : (
                <EmptyCars>No Cars to Show</EmptyCars>
            )}
        </TopCarsContainer>
    );
};

export default TopCarsSection;
