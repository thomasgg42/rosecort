import fs from 'fs';

interface CarSpecifications {
  electric: boolean,
  fourWheelDrive: boolean,
  used: boolean
}

// The specific car is created (implemented) with provided specifications 
// and a certificate is stored in database.
// TODO: Hva er riktig bruk av parametere inn i funksjonen?
const createCar = (specs: CarSpecifications) => (brand: string, model: string, date: Date): boolean => {
  console.log('Car create ' + brand + ' ' + model);
  logCarBirthCertificate(brand, model, date);
  notifyThirdPartyNewsPaper();
  return true
}

const logCarBirthCertificate = (brand: string, model: string, date: Date): void => {
  // Ex: Database queries, ex to store car birth certificate
  const carBirthCertificate = {
    brand: brand,
    model: model,
    date: date
  }
  fs.writeFileSync('carBirthCertificate.json', JSON.stringify(carBirthCertificate));
}

const notifyThirdPartyNewsPaper = (): void => {
  // Ex: API calls to third party APIs
  console.log('Third party news paper notified');
}

export const makeCarFactory = (specs: CarSpecifications) => {
  return {
    createCar: createCar(specs),
  }
}