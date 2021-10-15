// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Pet, OfficeWorkedIn, Person } = initSchema(schema);

export {
  Pet,
  OfficeWorkedIn,
  Person
};