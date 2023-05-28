import {
  buildClientSchema,
  IntrospectionQuery,
  GraphQLInputObjectType,
  GraphQLFieldMap,
  GraphQLInputFieldMap,
  GraphQLArgument,
  getNamedType,
  isScalarType,
  isObjectType,
  isInputObjectType,
  isNonNullType,
  isListType,
} from 'graphql';

const getArgumentValues = (args: readonly GraphQLArgument[]) => {
  if (!args) return null;
  const argsValues = args.map((a) => {
    const name = a.name;
    let typeName: string;
    if (isNonNullType(a.type) && isScalarType(a.type.ofType)) {
      typeName = a.type.ofType.name + '!';
    } else {
      const t = a.type as GraphQLInputObjectType;
      typeName = t.name;
    }
    return { name, typeName };
  });
  return argsValues;
};

const inputFieldsProcces = (fields: GraphQLInputFieldMap) => {
  const type = Object.values(fields).map((v) => {
    return {
      name: v.name,
      typeName: `${
        isListType(v.type) ? `[${getNamedType(v.type).name}!]` : getNamedType(v.type).name
      }`,
      args: [],
    };
  });
  return type;
};

const fieldsProcces = (fields: GraphQLFieldMap<string, string>) => {
  const type = Object.values(fields).map((v) => {
    const name = v.name;
    const args = getArgumentValues(v.args);
    let typeName: string;
    if (isScalarType(v.type)) {
      typeName = v.type.name;
      return { name, typeName, args };
    }
    if (isObjectType(v.type)) {
      typeName = v.type.name;
      return { name, typeName, args };
    }
    if (isNonNullType(v.type) && isScalarType(v.type.ofType)) {
      typeName = v.type.ofType.name + '!';
      return { name, typeName, args };
    }
    if (isNonNullType(v.type) && isObjectType(v.type.ofType)) {
      typeName = v.type.ofType.name + '!';
      return { name, typeName, args };
    }
    if (
      isNonNullType(v.type) &&
      isListType(v.type.ofType) &&
      isNonNullType(v.type.ofType.ofType) &&
      isObjectType(v.type.ofType.ofType.ofType)
    ) {
      typeName = `[${v.type.ofType.ofType.ofType.name}!]!`;
      return { name, typeName, args };
    }
    if (
      isNonNullType(v.type) &&
      isListType(v.type.ofType) &&
      isNonNullType(v.type.ofType.ofType) &&
      isScalarType(v.type.ofType.ofType.ofType)
    ) {
      typeName = `[${v.type.ofType.ofType.ofType.name}!]!`;
      return { name, typeName, args };
    }
  });
  return type;
};

export const parseSchema = (data: IntrospectionQuery) => {
  const schema = buildClientSchema(data);
  const types = Object.entries(schema.getTypeMap())
    .filter(([typeName]) => typeName[0] !== '_') // <--  ('_')  lol
    .map(([typeName, type]) => {
      if (isScalarType(type)) {
        return {
          name: typeName,
          description: type.description,
        };
      }
      if (isObjectType(type)) {
        return {
          name: typeName,
          description: null,
          fields: fieldsProcces(type.getFields()),
        };
      }
      if (isInputObjectType(type)) {
        return {
          name: typeName,
          description: null,
          fields: inputFieldsProcces(type.getFields()),
        };
      }
    });
  return types;
};
