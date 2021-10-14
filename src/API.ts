/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateLocationInput = {
  id?: string | null,
  name?: string | null,
  _version?: number | null,
};

export type ModelLocationConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelLocationConditionInput | null > | null,
  or?: Array< ModelLocationConditionInput | null > | null,
  not?: ModelLocationConditionInput | null,
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

export type Location = {
  __typename: "Location",
  id: string,
  name?: string | null,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdateLocationInput = {
  id: string,
  name?: string | null,
  _version?: number | null,
};

export type DeleteLocationInput = {
  id: string,
  _version?: number | null,
};

export type CreateHobbiesInput = {
  id?: string | null,
  name?: string | null,
  description?: string | null,
  memberID?: string | null,
  _version?: number | null,
};

export type ModelHobbiesConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  memberID?: ModelIDInput | null,
  and?: Array< ModelHobbiesConditionInput | null > | null,
  or?: Array< ModelHobbiesConditionInput | null > | null,
  not?: ModelHobbiesConditionInput | null,
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

export type Hobbies = {
  __typename: "Hobbies",
  id: string,
  name?: string | null,
  description?: string | null,
  memberID?: string | null,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdateHobbiesInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  memberID?: string | null,
  _version?: number | null,
};

export type DeleteHobbiesInput = {
  id: string,
  _version?: number | null,
};

export type CreateMemberInput = {
  id?: string | null,
  forename?: string | null,
  surname?: string | null,
  birthDate?: string | null,
  _version?: number | null,
  memberLocationId?: string | null,
};

export type ModelMemberConditionInput = {
  forename?: ModelStringInput | null,
  surname?: ModelStringInput | null,
  birthDate?: ModelStringInput | null,
  and?: Array< ModelMemberConditionInput | null > | null,
  or?: Array< ModelMemberConditionInput | null > | null,
  not?: ModelMemberConditionInput | null,
};

export type Member = {
  __typename: "Member",
  id: string,
  forename?: string | null,
  surname?: string | null,
  birthDate?: string | null,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  createdAt: string,
  updatedAt: string,
  Location?: Location | null,
  Hobbies?: ModelHobbiesConnection | null,
};

export type ModelHobbiesConnection = {
  __typename: "ModelHobbiesConnection",
  items?:  Array<Hobbies | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type UpdateMemberInput = {
  id: string,
  forename?: string | null,
  surname?: string | null,
  birthDate?: string | null,
  _version?: number | null,
  memberLocationId?: string | null,
};

export type DeleteMemberInput = {
  id: string,
  _version?: number | null,
};

export type ModelLocationFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelLocationFilterInput | null > | null,
  or?: Array< ModelLocationFilterInput | null > | null,
  not?: ModelLocationFilterInput | null,
};

export type ModelLocationConnection = {
  __typename: "ModelLocationConnection",
  items?:  Array<Location | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelHobbiesFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  memberID?: ModelIDInput | null,
  and?: Array< ModelHobbiesFilterInput | null > | null,
  or?: Array< ModelHobbiesFilterInput | null > | null,
  not?: ModelHobbiesFilterInput | null,
};

export type ModelMemberFilterInput = {
  id?: ModelIDInput | null,
  forename?: ModelStringInput | null,
  surname?: ModelStringInput | null,
  birthDate?: ModelStringInput | null,
  and?: Array< ModelMemberFilterInput | null > | null,
  or?: Array< ModelMemberFilterInput | null > | null,
  not?: ModelMemberFilterInput | null,
};

export type ModelMemberConnection = {
  __typename: "ModelMemberConnection",
  items?:  Array<Member | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type CreateLocationMutationVariables = {
  input: CreateLocationInput,
  condition?: ModelLocationConditionInput | null,
};

export type CreateLocationMutation = {
  createLocation?:  {
    __typename: "Location",
    id: string,
    name?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateLocationMutationVariables = {
  input: UpdateLocationInput,
  condition?: ModelLocationConditionInput | null,
};

export type UpdateLocationMutation = {
  updateLocation?:  {
    __typename: "Location",
    id: string,
    name?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteLocationMutationVariables = {
  input: DeleteLocationInput,
  condition?: ModelLocationConditionInput | null,
};

export type DeleteLocationMutation = {
  deleteLocation?:  {
    __typename: "Location",
    id: string,
    name?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateHobbiesMutationVariables = {
  input: CreateHobbiesInput,
  condition?: ModelHobbiesConditionInput | null,
};

export type CreateHobbiesMutation = {
  createHobbies?:  {
    __typename: "Hobbies",
    id: string,
    name?: string | null,
    description?: string | null,
    memberID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateHobbiesMutationVariables = {
  input: UpdateHobbiesInput,
  condition?: ModelHobbiesConditionInput | null,
};

export type UpdateHobbiesMutation = {
  updateHobbies?:  {
    __typename: "Hobbies",
    id: string,
    name?: string | null,
    description?: string | null,
    memberID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteHobbiesMutationVariables = {
  input: DeleteHobbiesInput,
  condition?: ModelHobbiesConditionInput | null,
};

export type DeleteHobbiesMutation = {
  deleteHobbies?:  {
    __typename: "Hobbies",
    id: string,
    name?: string | null,
    description?: string | null,
    memberID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateMemberMutationVariables = {
  input: CreateMemberInput,
  condition?: ModelMemberConditionInput | null,
};

export type CreateMemberMutation = {
  createMember?:  {
    __typename: "Member",
    id: string,
    forename?: string | null,
    surname?: string | null,
    birthDate?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    Location?:  {
      __typename: "Location",
      id: string,
      name?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    Hobbies?:  {
      __typename: "ModelHobbiesConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type UpdateMemberMutationVariables = {
  input: UpdateMemberInput,
  condition?: ModelMemberConditionInput | null,
};

export type UpdateMemberMutation = {
  updateMember?:  {
    __typename: "Member",
    id: string,
    forename?: string | null,
    surname?: string | null,
    birthDate?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    Location?:  {
      __typename: "Location",
      id: string,
      name?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    Hobbies?:  {
      __typename: "ModelHobbiesConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type DeleteMemberMutationVariables = {
  input: DeleteMemberInput,
  condition?: ModelMemberConditionInput | null,
};

export type DeleteMemberMutation = {
  deleteMember?:  {
    __typename: "Member",
    id: string,
    forename?: string | null,
    surname?: string | null,
    birthDate?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    Location?:  {
      __typename: "Location",
      id: string,
      name?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    Hobbies?:  {
      __typename: "ModelHobbiesConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type GetLocationQueryVariables = {
  id: string,
};

export type GetLocationQuery = {
  getLocation?:  {
    __typename: "Location",
    id: string,
    name?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListLocationsQueryVariables = {
  filter?: ModelLocationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLocationsQuery = {
  listLocations?:  {
    __typename: "ModelLocationConnection",
    items?:  Array< {
      __typename: "Location",
      id: string,
      name?: string | null,
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

export type SyncLocationsQueryVariables = {
  filter?: ModelLocationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncLocationsQuery = {
  syncLocations?:  {
    __typename: "ModelLocationConnection",
    items?:  Array< {
      __typename: "Location",
      id: string,
      name?: string | null,
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

export type GetHobbiesQueryVariables = {
  id: string,
};

export type GetHobbiesQuery = {
  getHobbies?:  {
    __typename: "Hobbies",
    id: string,
    name?: string | null,
    description?: string | null,
    memberID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListHobbiesQueryVariables = {
  filter?: ModelHobbiesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListHobbiesQuery = {
  listHobbies?:  {
    __typename: "ModelHobbiesConnection",
    items?:  Array< {
      __typename: "Hobbies",
      id: string,
      name?: string | null,
      description?: string | null,
      memberID?: string | null,
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

export type SyncHobbiesQueryVariables = {
  filter?: ModelHobbiesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncHobbiesQuery = {
  syncHobbies?:  {
    __typename: "ModelHobbiesConnection",
    items?:  Array< {
      __typename: "Hobbies",
      id: string,
      name?: string | null,
      description?: string | null,
      memberID?: string | null,
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

export type GetMemberQueryVariables = {
  id: string,
};

export type GetMemberQuery = {
  getMember?:  {
    __typename: "Member",
    id: string,
    forename?: string | null,
    surname?: string | null,
    birthDate?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    Location?:  {
      __typename: "Location",
      id: string,
      name?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    Hobbies?:  {
      __typename: "ModelHobbiesConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type ListMembersQueryVariables = {
  filter?: ModelMemberFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMembersQuery = {
  listMembers?:  {
    __typename: "ModelMemberConnection",
    items?:  Array< {
      __typename: "Member",
      id: string,
      forename?: string | null,
      surname?: string | null,
      birthDate?: string | null,
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

export type SyncMembersQueryVariables = {
  filter?: ModelMemberFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncMembersQuery = {
  syncMembers?:  {
    __typename: "ModelMemberConnection",
    items?:  Array< {
      __typename: "Member",
      id: string,
      forename?: string | null,
      surname?: string | null,
      birthDate?: string | null,
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

export type OnCreateLocationSubscription = {
  onCreateLocation?:  {
    __typename: "Location",
    id: string,
    name?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateLocationSubscription = {
  onUpdateLocation?:  {
    __typename: "Location",
    id: string,
    name?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteLocationSubscription = {
  onDeleteLocation?:  {
    __typename: "Location",
    id: string,
    name?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateHobbiesSubscription = {
  onCreateHobbies?:  {
    __typename: "Hobbies",
    id: string,
    name?: string | null,
    description?: string | null,
    memberID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateHobbiesSubscription = {
  onUpdateHobbies?:  {
    __typename: "Hobbies",
    id: string,
    name?: string | null,
    description?: string | null,
    memberID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteHobbiesSubscription = {
  onDeleteHobbies?:  {
    __typename: "Hobbies",
    id: string,
    name?: string | null,
    description?: string | null,
    memberID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateMemberSubscription = {
  onCreateMember?:  {
    __typename: "Member",
    id: string,
    forename?: string | null,
    surname?: string | null,
    birthDate?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    Location?:  {
      __typename: "Location",
      id: string,
      name?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    Hobbies?:  {
      __typename: "ModelHobbiesConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type OnUpdateMemberSubscription = {
  onUpdateMember?:  {
    __typename: "Member",
    id: string,
    forename?: string | null,
    surname?: string | null,
    birthDate?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    Location?:  {
      __typename: "Location",
      id: string,
      name?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    Hobbies?:  {
      __typename: "ModelHobbiesConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type OnDeleteMemberSubscription = {
  onDeleteMember?:  {
    __typename: "Member",
    id: string,
    forename?: string | null,
    surname?: string | null,
    birthDate?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    Location?:  {
      __typename: "Location",
      id: string,
      name?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    Hobbies?:  {
      __typename: "ModelHobbiesConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};
