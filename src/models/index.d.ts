import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type PetMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type OfficeWorkedInMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PersonMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Pet {
  readonly id: string;
  readonly kind?: string;
  readonly personID?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Pet, PetMetaData>);
  static copyOf(source: Pet, mutator: (draft: MutableModel<Pet, PetMetaData>) => MutableModel<Pet, PetMetaData> | void): Pet;
}

export declare class OfficeWorkedIn {
  readonly id: string;
  readonly name?: string;
  readonly personID?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<OfficeWorkedIn, OfficeWorkedInMetaData>);
  static copyOf(source: OfficeWorkedIn, mutator: (draft: MutableModel<OfficeWorkedIn, OfficeWorkedInMetaData>) => MutableModel<OfficeWorkedIn, OfficeWorkedInMetaData> | void): OfficeWorkedIn;
}

export declare class Person {
  readonly id: string;
  readonly surveyPosition?: number;
  readonly currentOffice?: string;
  readonly wishOffice?: string;
  readonly superheroAbility?: string;
  readonly projectFantasyName?: string;
  readonly jobForOneDay?: string;
  readonly newHobby?: string;
  readonly pizzaEstimate?: number;
  readonly wishForNextBereichsseminar?: string;
  readonly productIdea?: string;
  readonly OfficeWorkedIns?: (OfficeWorkedIn | null)[];
  readonly Pets?: (Pet | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Person, PersonMetaData>);
  static copyOf(source: Person, mutator: (draft: MutableModel<Person, PersonMetaData>) => MutableModel<Person, PersonMetaData> | void): Person;
}