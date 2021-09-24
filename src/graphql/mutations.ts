/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createHobbies = /* GraphQL */ `
  mutation CreateHobbies(
    $input: CreateHobbiesInput!
    $condition: ModelHobbiesConditionInput
  ) {
    createHobbies(input: $input, condition: $condition) {
      id
      name
      description
      memberID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateHobbies = /* GraphQL */ `
  mutation UpdateHobbies(
    $input: UpdateHobbiesInput!
    $condition: ModelHobbiesConditionInput
  ) {
    updateHobbies(input: $input, condition: $condition) {
      id
      name
      description
      memberID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteHobbies = /* GraphQL */ `
  mutation DeleteHobbies(
    $input: DeleteHobbiesInput!
    $condition: ModelHobbiesConditionInput
  ) {
    deleteHobbies(input: $input, condition: $condition) {
      id
      name
      description
      memberID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createMember = /* GraphQL */ `
  mutation CreateMember(
    $input: CreateMemberInput!
    $condition: ModelMemberConditionInput
  ) {
    createMember(input: $input, condition: $condition) {
      id
      forename
      surname
      birthDate
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Hobbies {
        nextToken
        startedAt
      }
    }
  }
`;
export const updateMember = /* GraphQL */ `
  mutation UpdateMember(
    $input: UpdateMemberInput!
    $condition: ModelMemberConditionInput
  ) {
    updateMember(input: $input, condition: $condition) {
      id
      forename
      surname
      birthDate
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Hobbies {
        nextToken
        startedAt
      }
    }
  }
`;
export const deleteMember = /* GraphQL */ `
  mutation DeleteMember(
    $input: DeleteMemberInput!
    $condition: ModelMemberConditionInput
  ) {
    deleteMember(input: $input, condition: $condition) {
      id
      forename
      surname
      birthDate
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Hobbies {
        nextToken
        startedAt
      }
    }
  }
`;
