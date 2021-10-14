import API, { graphqlOperation } from "@aws-amplify/api";
import { createMember } from "../graphql/mutations";
import { Member } from "../models";

export const addMember = async (member: Member) => {
  await API.graphql(graphqlOperation(createMember, { input: member }));
};
