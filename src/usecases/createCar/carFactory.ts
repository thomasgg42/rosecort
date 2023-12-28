import Car from '../../domain/Car';

// The CarFactory adapter
interface CarFactory {
    createCar(brand: string, model: string, date: Date): boolean;
}

// Use case module
// The build car function takes a defined
// Car object as an argument and returns a boolean.
interface CreateCar {
    createCar(car: Car): boolean;
}

const createCar = (carFactory: CarFactory) => (car: Car): boolean => {
    return carFactory.createCar(car.brand, car.model, car.date);
}

// The makeCarBuilder function takes a CarFactory, the adapter,
// with a matching set of functions, mathching our use case module.
// CarFactory is in this case the port definition.
// Pitfall warning: "Leaky abstractions"
export const makeCarBuilder = (carFactory: CarFactory): CreateCar => {
    return {
        createCar: createCar(carFactory)
    }
}