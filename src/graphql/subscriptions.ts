/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateHobbies = /* GraphQL */ `
  subscription OnCreateHobbies {
    onCreateHobbies {
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
export const onUpdateHobbies = /* GraphQL */ `
  subscription OnUpdateHobbies {
    onUpdateHobbies {
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
export const onDeleteHobbies = /* GraphQL */ `
  subscription OnDeleteHobbies {
    onDeleteHobbies {
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
export const onCreateMember = /* GraphQL */ `
  subscription OnCreateMember {
    onCreateMember {
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
export const onUpdateMember = /* GraphQL */ `
  subscription OnUpdateMember {
    onUpdateMember {
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
export const onDeleteMember = /* GraphQL */ `
  subscription OnDeleteMember {
    onDeleteMember {
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