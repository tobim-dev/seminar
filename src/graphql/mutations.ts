/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPet = /* GraphQL */ `
  mutation CreatePet(
    $input: CreatePetInput!
    $condition: ModelPetConditionInput
  ) {
    createPet(input: $input, condition: $condition) {
      id
      kind
      personID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updatePet = /* GraphQL */ `
  mutation UpdatePet(
    $input: UpdatePetInput!
    $condition: ModelPetConditionInput
  ) {
    updatePet(input: $input, condition: $condition) {
      id
      kind
      personID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deletePet = /* GraphQL */ `
  mutation DeletePet(
    $input: DeletePetInput!
    $condition: ModelPetConditionInput
  ) {
    deletePet(input: $input, condition: $condition) {
      id
      kind
      personID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createOfficeWorkedIn = /* GraphQL */ `
  mutation CreateOfficeWorkedIn(
    $input: CreateOfficeWorkedInInput!
    $condition: ModelOfficeWorkedInConditionInput
  ) {
    createOfficeWorkedIn(input: $input, condition: $condition) {
      id
      name
      personID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateOfficeWorkedIn = /* GraphQL */ `
  mutation UpdateOfficeWorkedIn(
    $input: UpdateOfficeWorkedInInput!
    $condition: ModelOfficeWorkedInConditionInput
  ) {
    updateOfficeWorkedIn(input: $input, condition: $condition) {
      id
      name
      personID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteOfficeWorkedIn = /* GraphQL */ `
  mutation DeleteOfficeWorkedIn(
    $input: DeleteOfficeWorkedInInput!
    $condition: ModelOfficeWorkedInConditionInput
  ) {
    deleteOfficeWorkedIn(input: $input, condition: $condition) {
      id
      name
      personID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createPerson = /* GraphQL */ `
  mutation CreatePerson(
    $input: CreatePersonInput!
    $condition: ModelPersonConditionInput
  ) {
    createPerson(input: $input, condition: $condition) {
      id
      surveyPosition
      currentOffice
      wishOffice
      superheroAbility
      projectFantasyName
      jobForOneDay
      newHobby
      pizzaEstimate
      wishForNextBereichsseminar
      productIdea
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Pets {
        nextToken
        startedAt
      }
      OfficeWorkedIns {
        nextToken
        startedAt
      }
    }
  }
`;
export const updatePerson = /* GraphQL */ `
  mutation UpdatePerson(
    $input: UpdatePersonInput!
    $condition: ModelPersonConditionInput
  ) {
    updatePerson(input: $input, condition: $condition) {
      id
      surveyPosition
      currentOffice
      wishOffice
      superheroAbility
      projectFantasyName
      jobForOneDay
      newHobby
      pizzaEstimate
      wishForNextBereichsseminar
      productIdea
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Pets {
        nextToken
        startedAt
      }
      OfficeWorkedIns {
        nextToken
        startedAt
      }
    }
  }
`;
export const deletePerson = /* GraphQL */ `
  mutation DeletePerson(
    $input: DeletePersonInput!
    $condition: ModelPersonConditionInput
  ) {
    deletePerson(input: $input, condition: $condition) {
      id
      surveyPosition
      currentOffice
      wishOffice
      superheroAbility
      projectFantasyName
      jobForOneDay
      newHobby
      pizzaEstimate
      wishForNextBereichsseminar
      productIdea
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Pets {
        nextToken
        startedAt
      }
      OfficeWorkedIns {
        nextToken
        startedAt
      }
    }
  }
`;
