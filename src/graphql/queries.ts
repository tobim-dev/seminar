/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPet = /* GraphQL */ `
  query GetPet($id: ID!) {
    getPet(id: $id) {
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
export const listPets = /* GraphQL */ `
  query ListPets(
    $filter: ModelPetFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        kind
        personID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPets = /* GraphQL */ `
  query SyncPets(
    $filter: ModelPetFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPets(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        kind
        personID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getOfficeWorkedIn = /* GraphQL */ `
  query GetOfficeWorkedIn($id: ID!) {
    getOfficeWorkedIn(id: $id) {
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
export const listOfficeWorkedIns = /* GraphQL */ `
  query ListOfficeWorkedIns(
    $filter: ModelOfficeWorkedInFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOfficeWorkedIns(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        personID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncOfficeWorkedIns = /* GraphQL */ `
  query SyncOfficeWorkedIns(
    $filter: ModelOfficeWorkedInFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncOfficeWorkedIns(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        personID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getPerson = /* GraphQL */ `
  query GetPerson($id: ID!) {
    getPerson(id: $id) {
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
export const listPeople = /* GraphQL */ `
  query ListPeople(
    $filter: ModelPersonFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPeople(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPeople = /* GraphQL */ `
  query SyncPeople(
    $filter: ModelPersonFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPeople(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      }
      nextToken
      startedAt
    }
  }
`;
