import { Root, Type } from 'types';

const filedsProcces = (types: Type[], typeName: string) => {
  const type = types.find((t) => t.name === typeName);
  const processed = type?.fields?.map((f) => {
    const name = f.name;
    let typeName: string;
    if (f.type.name) typeName = f.type.name;
    else if (f.type.ofType?.kind === 'LIST') typeName = `[${f.type.ofType?.ofType?.ofType?.name}]`;
    else typeName = f.type.ofType?.name as string;
    return [name, typeName];
  });
  return processed;
};

export const parseSchema = (data: Root) => {
  const { types } = data.data.__schema;

  return {
    Query: {
      title: 'Queries',
      fields: filedsProcces(types, 'Query'),
    },
    Continent: {
      title: 'Continent',
      fields: filedsProcces(types, 'Continent'),
    },
    Country: {
      title: 'Country',
      fields: filedsProcces(types, 'Country'),
    },
    Language: {
      title: 'Language',
      fields: filedsProcces(types, 'Language'),
    },
    State: {
      title: 'State',
      fields: filedsProcces(types, 'State'),
    },
    Subdivision: {
      title: 'Subdivision',
      fields: filedsProcces(types, 'Subdivision'),
    },
  };
};
