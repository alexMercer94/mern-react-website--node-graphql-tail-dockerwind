import { apolloClient } from '../../graphql';
import { GET_ALL_CARS } from './queries';
import { getCars_cars } from './__generated__/getCars';

class CarService {
    public async getCars(): Promise<getCars_cars[]> {
        const response = await apolloClient.query({ query: GET_ALL_CARS }).catch((err) => {
            throw err;
        });

        if (response && response.data && response.data.cars) {
            return response.data.cars as getCars_cars[];
        }

        return [];
    }
}

export default new CarService();
