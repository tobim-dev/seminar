// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Location, Hobbies, Member } = initSchema(schema);

export {
  Location,
  Hobbies,
  Member
};