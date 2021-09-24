// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Hobbies, Member } = initSchema(schema);

export {
  Hobbies,
  Member
};