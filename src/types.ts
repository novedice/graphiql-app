/* eslint-disable @typescript-eslint/no-explicit-any */
interface IUser {
  lang: 'en' | 'rus';
}

export type { IUser };

export type ArgType = {
  name: string;
  typeName: string;
};

export type FieldType = {
  name: string;
  typeName: string;
  args: ArgType[];
};

export type SchemaItem = {
  name: string;
  description?: string;
  fields?: FieldType[];
};
