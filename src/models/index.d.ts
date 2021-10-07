import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type LocationMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type HobbiesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type MemberMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Location {
  readonly id: string;
  readonly name?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Location, LocationMetaData>);
  static copyOf(source: Location, mutator: (draft: MutableModel<Location, LocationMetaData>) => MutableModel<Location, LocationMetaData> | void): Location;
}

export declare class Hobbies {
  readonly id: string;
  readonly name?: string;
  readonly description?: string;
  readonly memberID?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Hobbies, HobbiesMetaData>);
  static copyOf(source: Hobbies, mutator: (draft: MutableModel<Hobbies, HobbiesMetaData>) => MutableModel<Hobbies, HobbiesMetaData> | void): Hobbies;
}

export declare class Member {
  readonly id: string;
  readonly forename?: string;
  readonly surname?: string;
  readonly birthDate?: string;
  readonly Hobbies?: (Hobbies | null)[];
  readonly Location?: Location;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Member, MemberMetaData>);
  static copyOf(source: Member, mutator: (draft: MutableModel<Member, MemberMetaData>) => MutableModel<Member, MemberMetaData> | void): Member;
}