/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getHobbies = /* GraphQL */ `
  query GetHobbies($id: ID!) {
    getHobbies(id: $id) {
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
export const listHobbies = /* GraphQL */ `
  query ListHobbies(
    $filter: ModelHobbiesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listHobbies(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncHobbies = /* GraphQL */ `
  query SyncHobbies(
    $filter: ModelHobbiesFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncHobbies(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getMember = /* GraphQL */ `
  query GetMember($id: ID!) {
    getMember(id: $id) {
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
export const listMembers = /* GraphQL */ `
  query ListMembers(
    $filter: ModelMemberFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMembers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        forename
        surname
        birthDate
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
export const syncMembers = /* GraphQL */ `
  query SyncMembers(
    $filter: ModelMemberFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncMembers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        forename
        surname
        birthDate
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
