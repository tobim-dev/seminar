/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreatePetInput = {
  id?: string | null,
  kind?: string | null,
  personID?: string | null,
  _version?: number | null,
};

export type ModelPetConditionInput = {
  kind?: ModelStringInput | null,
  personID?: ModelIDInput | null,
  and?: Array< ModelPetConditionInput | null > | null,
  or?: Array< ModelPetConditionInput | null > | null,
  not?: ModelPetConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type Pet = {
  __typename: "Pet",
  id: string,
  kind?: string | null,
  personID?: string | null,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdatePetInput = {
  id: string,
  kind?: string | null,
  personID?: string | null,
  _version?: number | null,
};

export type DeletePetInput = {
  id: string,
  _version?: number | null,
};

export type CreateOfficeWorkedInInput = {
  id?: string | null,
  name?: string | null,
  personID?: string | null,
  _version?: number | null,
};

export type ModelOfficeWorkedInConditionInput = {
  name?: ModelStringInput | null,
  personID?: ModelIDInput | null,
  and?: Array< ModelOfficeWorkedInConditionInput | null > | null,
  or?: Array< ModelOfficeWorkedInConditionInput | null > | null,
  not?: ModelOfficeWorkedInConditionInput | null,
};

export type OfficeWorkedIn = {
  __typename: "OfficeWorkedIn",
  id: string,
  name?: string | null,
  personID?: string | null,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdateOfficeWorkedInInput = {
  id: string,
  name?: string | null,
  personID?: string | null,
  _version?: number | null,
};

export type DeleteOfficeWorkedInInput = {
  id: string,
  _version?: number | null,
};

export type CreatePersonInput = {
  id?: string | null,
  surveyPosition?: number | null,
  currentOffice?: string | null,
  wishOffice?: string | null,
  superheroAbility?: string | null,
  projectFantasyName?: string | null,
  jobForOneDay?: string | null,
  newHobby?: string | null,
  pizzaEstimate?: number | null,
  wishForNextBereichsseminar?: string | null,
  productIdea?: string | null,
  _version?: number | null,
};

export type ModelPersonConditionInput = {
  surveyPosition?: ModelIntInput | null,
  currentOffice?: ModelStringInput | null,
  wishOffice?: ModelStringInput | null,
  superheroAbility?: ModelStringInput | null,
  projectFantasyName?: ModelStringInput | null,
  jobForOneDay?: ModelStringInput | null,
  newHobby?: ModelStringInput | null,
  pizzaEstimate?: ModelIntInput | null,
  wishForNextBereichsseminar?: ModelStringInput | null,
  productIdea?: ModelStringInput | null,
  and?: Array< ModelPersonConditionInput | null > | null,
  or?: Array< ModelPersonConditionInput | null > | null,
  not?: ModelPersonConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Person = {
  __typename: "Person",
  id: string,
  surveyPosition?: number | null,
  currentOffice?: string | null,
  wishOffice?: string | null,
  superheroAbility?: string | null,
  projectFantasyName?: string | null,
  jobForOneDay?: string | null,
  newHobby?: string | null,
  pizzaEstimate?: number | null,
  wishForNextBereichsseminar?: string | null,
  productIdea?: string | null,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  createdAt: string,
  updatedAt: string,
  Pets?: ModelPetConnection | null,
  OfficeWorkedIns?: ModelOfficeWorkedInConnection | null,
};

export type ModelPetConnection = {
  __typename: "ModelPetConnection",
  items?:  Array<Pet | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelOfficeWorkedInConnection = {
  __typename: "ModelOfficeWorkedInConnection",
  items?:  Array<OfficeWorkedIn | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type UpdatePersonInput = {
  id: string,
  surveyPosition?: number | null,
  currentOffice?: string | null,
  wishOffice?: string | null,
  superheroAbility?: string | null,
  projectFantasyName?: string | null,
  jobForOneDay?: string | null,
  newHobby?: string | null,
  pizzaEstimate?: number | null,
  wishForNextBereichsseminar?: string | null,
  productIdea?: string | null,
  _version?: number | null,
};

export type DeletePersonInput = {
  id: string,
  _version?: number | null,
};

export type ModelPetFilterInput = {
  id?: ModelIDInput | null,
  kind?: ModelStringInput | null,
  personID?: ModelIDInput | null,
  and?: Array< ModelPetFilterInput | null > | null,
  or?: Array< ModelPetFilterInput | null > | null,
  not?: ModelPetFilterInput | null,
};

export type ModelOfficeWorkedInFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  personID?: ModelIDInput | null,
  and?: Array< ModelOfficeWorkedInFilterInput | null > | null,
  or?: Array< ModelOfficeWorkedInFilterInput | null > | null,
  not?: ModelOfficeWorkedInFilterInput | null,
};

export type ModelPersonFilterInput = {
  id?: ModelIDInput | null,
  surveyPosition?: ModelIntInput | null,
  currentOffice?: ModelStringInput | null,
  wishOffice?: ModelStringInput | null,
  superheroAbility?: ModelStringInput | null,
  projectFantasyName?: ModelStringInput | null,
  jobForOneDay?: ModelStringInput | null,
  newHobby?: ModelStringInput | null,
  pizzaEstimate?: ModelIntInput | null,
  wishForNextBereichsseminar?: ModelStringInput | null,
  productIdea?: ModelStringInput | null,
  and?: Array< ModelPersonFilterInput | null > | null,
  or?: Array< ModelPersonFilterInput | null > | null,
  not?: ModelPersonFilterInput | null,
};

export type ModelPersonConnection = {
  __typename: "ModelPersonConnection",
  items?:  Array<Person | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type CreatePetMutationVariables = {
  input: CreatePetInput,
  condition?: ModelPetConditionInput | null,
};

export type CreatePetMutation = {
  createPet?:  {
    __typename: "Pet",
    id: string,
    kind?: string | null,
    personID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePetMutationVariables = {
  input: UpdatePetInput,
  condition?: ModelPetConditionInput | null,
};

export type UpdatePetMutation = {
  updatePet?:  {
    __typename: "Pet",
    id: string,
    kind?: string | null,
    personID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePetMutationVariables = {
  input: DeletePetInput,
  condition?: ModelPetConditionInput | null,
};

export type DeletePetMutation = {
  deletePet?:  {
    __typename: "Pet",
    id: string,
    kind?: string | null,
    personID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateOfficeWorkedInMutationVariables = {
  input: CreateOfficeWorkedInInput,
  condition?: ModelOfficeWorkedInConditionInput | null,
};

export type CreateOfficeWorkedInMutation = {
  createOfficeWorkedIn?:  {
    __typename: "OfficeWorkedIn",
    id: string,
    name?: string | null,
    personID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateOfficeWorkedInMutationVariables = {
  input: UpdateOfficeWorkedInInput,
  condition?: ModelOfficeWorkedInConditionInput | null,
};

export type UpdateOfficeWorkedInMutation = {
  updateOfficeWorkedIn?:  {
    __typename: "OfficeWorkedIn",
    id: string,
    name?: string | null,
    personID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteOfficeWorkedInMutationVariables = {
  input: DeleteOfficeWorkedInInput,
  condition?: ModelOfficeWorkedInConditionInput | null,
};

export type DeleteOfficeWorkedInMutation = {
  deleteOfficeWorkedIn?:  {
    __typename: "OfficeWorkedIn",
    id: string,
    name?: string | null,
    personID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreatePersonMutationVariables = {
  input: CreatePersonInput,
  condition?: ModelPersonConditionInput | null,
};

export type CreatePersonMutation = {
  createPerson?:  {
    __typename: "Person",
    id: string,
    surveyPosition?: number | null,
    currentOffice?: string | null,
    wishOffice?: string | null,
    superheroAbility?: string | null,
    projectFantasyName?: string | null,
    jobForOneDay?: string | null,
    newHobby?: string | null,
    pizzaEstimate?: number | null,
    wishForNextBereichsseminar?: string | null,
    productIdea?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    Pets?:  {
      __typename: "ModelPetConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    OfficeWorkedIns?:  {
      __typename: "ModelOfficeWorkedInConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type UpdatePersonMutationVariables = {
  input: UpdatePersonInput,
  condition?: ModelPersonConditionInput | null,
};

export type UpdatePersonMutation = {
  updatePerson?:  {
    __typename: "Person",
    id: string,
    surveyPosition?: number | null,
    currentOffice?: string | null,
    wishOffice?: string | null,
    superheroAbility?: string | null,
    projectFantasyName?: string | null,
    jobForOneDay?: string | null,
    newHobby?: string | null,
    pizzaEstimate?: number | null,
    wishForNextBereichsseminar?: string | null,
    productIdea?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    Pets?:  {
      __typename: "ModelPetConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    OfficeWorkedIns?:  {
      __typename: "ModelOfficeWorkedInConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type DeletePersonMutationVariables = {
  input: DeletePersonInput,
  condition?: ModelPersonConditionInput | null,
};

export type DeletePersonMutation = {
  deletePerson?:  {
    __typename: "Person",
    id: string,
    surveyPosition?: number | null,
    currentOffice?: string | null,
    wishOffice?: string | null,
    superheroAbility?: string | null,
    projectFantasyName?: string | null,
    jobForOneDay?: string | null,
    newHobby?: string | null,
    pizzaEstimate?: number | null,
    wishForNextBereichsseminar?: string | null,
    productIdea?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    Pets?:  {
      __typename: "ModelPetConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    OfficeWorkedIns?:  {
      __typename: "ModelOfficeWorkedInConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type GetPetQueryVariables = {
  id: string,
};

export type GetPetQuery = {
  getPet?:  {
    __typename: "Pet",
    id: string,
    kind?: string | null,
    personID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPetsQueryVariables = {
  filter?: ModelPetFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPetsQuery = {
  listPets?:  {
    __typename: "ModelPetConnection",
    items?:  Array< {
      __typename: "Pet",
      id: string,
      kind?: string | null,
      personID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncPetsQueryVariables = {
  filter?: ModelPetFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncPetsQuery = {
  syncPets?:  {
    __typename: "ModelPetConnection",
    items?:  Array< {
      __typename: "Pet",
      id: string,
      kind?: string | null,
      personID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetOfficeWorkedInQueryVariables = {
  id: string,
};

export type GetOfficeWorkedInQuery = {
  getOfficeWorkedIn?:  {
    __typename: "OfficeWorkedIn",
    id: string,
    name?: string | null,
    personID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListOfficeWorkedInsQueryVariables = {
  filter?: ModelOfficeWorkedInFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOfficeWorkedInsQuery = {
  listOfficeWorkedIns?:  {
    __typename: "ModelOfficeWorkedInConnection",
    items?:  Array< {
      __typename: "OfficeWorkedIn",
      id: string,
      name?: string | null,
      personID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncOfficeWorkedInsQueryVariables = {
  filter?: ModelOfficeWorkedInFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncOfficeWorkedInsQuery = {
  syncOfficeWorkedIns?:  {
    __typename: "ModelOfficeWorkedInConnection",
    items?:  Array< {
      __typename: "OfficeWorkedIn",
      id: string,
      name?: string | null,
      personID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetPersonQueryVariables = {
  id: string,
};

export type GetPersonQuery = {
  getPerson?:  {
    __typename: "Person",
    id: string,
    surveyPosition?: number | null,
    currentOffice?: string | null,
    wishOffice?: string | null,
    superheroAbility?: string | null,
    projectFantasyName?: string | null,
    jobForOneDay?: string | null,
    newHobby?: string | null,
    pizzaEstimate?: number | null,
    wishForNextBereichsseminar?: string | null,
    productIdea?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    Pets?:  {
      __typename: "ModelPetConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    OfficeWorkedIns?:  {
      __typename: "ModelOfficeWorkedInConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type ListPeopleQueryVariables = {
  filter?: ModelPersonFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPeopleQuery = {
  listPeople?:  {
    __typename: "ModelPersonConnection",
    items?:  Array< {
      __typename: "Person",
      id: string,
      surveyPosition?: number | null,
      currentOffice?: string | null,
      wishOffice?: string | null,
      superheroAbility?: string | null,
      projectFantasyName?: string | null,
      jobForOneDay?: string | null,
      newHobby?: string | null,
      pizzaEstimate?: number | null,
      wishForNextBereichsseminar?: string | null,
      productIdea?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncPeopleQueryVariables = {
  filter?: ModelPersonFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncPeopleQuery = {
  syncPeople?:  {
    __typename: "ModelPersonConnection",
    items?:  Array< {
      __typename: "Person",
      id: string,
      surveyPosition?: number | null,
      currentOffice?: string | null,
      wishOffice?: string | null,
      superheroAbility?: string | null,
      projectFantasyName?: string | null,
      jobForOneDay?: string | null,
      newHobby?: string | null,
      pizzaEstimate?: number | null,
      wishForNextBereichsseminar?: string | null,
      productIdea?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreatePetSubscription = {
  onCreatePet?:  {
    __typename: "Pet",
    id: string,
    kind?: string | null,
    personID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePetSubscription = {
  onUpdatePet?:  {
    __typename: "Pet",
    id: string,
    kind?: string | null,
    personID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePetSubscription = {
  onDeletePet?:  {
    __typename: "Pet",
    id: string,
    kind?: string | null,
    personID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateOfficeWorkedInSubscription = {
  onCreateOfficeWorkedIn?:  {
    __typename: "OfficeWorkedIn",
    id: string,
    name?: string | null,
    personID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateOfficeWorkedInSubscription = {
  onUpdateOfficeWorkedIn?:  {
    __typename: "OfficeWorkedIn",
    id: string,
    name?: string | null,
    personID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteOfficeWorkedInSubscription = {
  onDeleteOfficeWorkedIn?:  {
    __typename: "OfficeWorkedIn",
    id: string,
    name?: string | null,
    personID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePersonSubscription = {
  onCreatePerson?:  {
    __typename: "Person",
    id: string,
    surveyPosition?: number | null,
    currentOffice?: string | null,
    wishOffice?: string | null,
    superheroAbility?: string | null,
    projectFantasyName?: string | null,
    jobForOneDay?: string | null,
    newHobby?: string | null,
    pizzaEstimate?: number | null,
    wishForNextBereichsseminar?: string | null,
    productIdea?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    Pets?:  {
      __typename: "ModelPetConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    OfficeWorkedIns?:  {
      __typename: "ModelOfficeWorkedInConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type OnUpdatePersonSubscription = {
  onUpdatePerson?:  {
    __typename: "Person",
    id: string,
    surveyPosition?: number | null,
    currentOffice?: string | null,
    wishOffice?: string | null,
    superheroAbility?: string | null,
    projectFantasyName?: string | null,
    jobForOneDay?: string | null,
    newHobby?: string | null,
    pizzaEstimate?: number | null,
    wishForNextBereichsseminar?: string | null,
    productIdea?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    Pets?:  {
      __typename: "ModelPetConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    OfficeWorkedIns?:  {
      __typename: "ModelOfficeWorkedInConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type OnDeletePersonSubscription = {
  onDeletePerson?:  {
    __typename: "Person",
    id: string,
    surveyPosition?: number | null,
    currentOffice?: string | null,
    wishOffice?: string | null,
    superheroAbility?: string | null,
    projectFantasyName?: string | null,
    jobForOneDay?: string | null,
    newHobby?: string | null,
    pizzaEstimate?: number | null,
    wishForNextBereichsseminar?: string | null,
    productIdea?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    Pets?:  {
      __typename: "ModelPetConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    OfficeWorkedIns?:  {
      __typename: "ModelOfficeWorkedInConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};
