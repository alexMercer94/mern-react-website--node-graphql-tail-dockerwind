/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getCars
// ====================================================

export interface getCars_cars {
    __typename: 'Car';
    id: string;
    name: string;
    mileage: string;
    gearType: string;
    gas: string;
    thumbnailUrl: string;
    dailyPrice: number;
    monthlyPrice: number;
}

export interface getCars {
    cars: getCars_cars[];
}
