import { gql } from '@apollo/client';

export const GET_ALL_CARS = gql`
    query getCars {
        cars {
            id
            name
            mileage
            gearType
            gas
            thumbnailUrl
            dailyPrice
            monthlyPrice
        }
    }
`;
