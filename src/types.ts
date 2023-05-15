/* eslint-disable @typescript-eslint/no-explicit-any */
interface IUser {
  name: string;
  lang: 'en' | 'rus';
}

export type { IUser };

export interface Root {
  data: Data;
}

export interface Data {
  __schema: Schema;
}

export interface Schema {
  queryType: QueryType;
  mutationType: any;
  subscriptionType: any;
  types: Type[];
  directives: Direc[];
}

export interface QueryType {
  name: string;
}

export interface Type {
  kind: string;
  name: string;
  description?: string;
  fields?: Field[];
  inputFields?: InputField[];
  interfaces?: any[];
  enumValues?: EnumValue[];
  possibleTypes: any;
}

export interface Field {
  name: string;
  description?: string;
  args: Arg[];
  type: Type3;
  isDeprecated: boolean;
  deprecationReason: any;
}

export interface Arg {
  name: string;
  description: any;
  type: Type2;
  defaultValue?: string;
}

export interface Type2 {
  kind: string;
  name?: string;
  ofType?: OfType;
}

export interface OfType {
  kind: string;
  name: string;
  ofType: any;
}

export interface Type3 {
  kind: string;
  name?: string;
  ofType?: OfType2;
}

export interface OfType2 {
  kind: string;
  name?: string;
  ofType?: OfType3;
}

export interface OfType3 {
  kind: string;
  name?: string;
  ofType?: OfType4;
}

export interface OfType4 {
  kind: string;
  name: string;
  ofType: any;
}

export interface InputField {
  name: string;
  description: any;
  type: Type4;
  defaultValue: any;
}

export interface Type4 {
  kind: string;
  name?: string;
  ofType?: OfType5;
}

export interface OfType5 {
  kind: string;
  name: any;
  ofType: OfType6;
}

export interface OfType6 {
  kind: string;
  name: string;
  ofType: any;
}

export interface EnumValue {
  name: string;
  description: string;
  isDeprecated: boolean;
  deprecationReason: any;
}

export interface Direc {
  name: string;
  description: string;
  locations: string[];
  args: Arg2[];
}

export interface Arg2 {
  name: string;
  description: string;
  type: Type5;
  defaultValue?: string;
}

export interface Type5 {
  kind: string;
  name?: string;
  ofType?: OfType7;
}

export interface OfType7 {
  kind: string;
  name: string;
  ofType: any;
}
