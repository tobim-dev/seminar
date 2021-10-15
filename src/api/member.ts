import API, { graphqlOperation } from "@aws-amplify/api";
import { CreatePersonInput } from "../API";
import { createPerson } from "../graphql/mutations";

export const addMember = async (person: CreatePersonInput) => {
  await API.graphql(graphqlOperation(createPerson, { input: person }));
};
