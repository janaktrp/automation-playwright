import { CustomerInfo } from "./customerinfo.type"
import{faker} from "@faker-js/faker";

export function createfakeCustomerData(): CustomerInfo{

    return{
        title: 'Mr.',
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        emailAddress: faker.internet.email(),
        password: faker.internet.password(),
        date: String(faker.date.birthdate().getDay()),
        month: String(faker.date.birthdate().getMonth()),
        year: String(faker.date.birthdate().getFullYear())
    }
    
}