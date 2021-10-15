/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePet = /* GraphQL */ `
  subscription OnCreatePet {
    onCreatePet {
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
export const onUpdatePet = /* GraphQL */ `
  subscription OnUpdatePet {
    onUpdatePet {
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
export const onDeletePet = /* GraphQL */ `
  subscription OnDeletePet {
    onDeletePet {
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
export const onCreateOfficeWorkedIn = /* GraphQL */ `
  subscription OnCreateOfficeWorkedIn {
    onCreateOfficeWorkedIn {
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
export const onUpdateOfficeWorkedIn = /* GraphQL */ `
  subscription OnUpdateOfficeWorkedIn {
    onUpdateOfficeWorkedIn {
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
export const onDeleteOfficeWorkedIn = /* GraphQL */ `
  subscription OnDeleteOfficeWorkedIn {
    onDeleteOfficeWorkedIn {
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
export const onCreatePerson = /* GraphQL */ `
  subscription OnCreatePerson {
    onCreatePerson {
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
export const onUpdatePerson = /* GraphQL */ `
  subscription OnUpdatePerson {
    onUpdatePerson {
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
export const onDeletePerson = /* GraphQL */ `
  subscription OnDeletePerson {
    onDeletePerson {
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
