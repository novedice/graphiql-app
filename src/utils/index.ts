import {
  buildClientSchema,
  IntrospectionQuery,
  GraphQLScalarType,
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLFieldMap,
  GraphQLNonNull,
  GraphQLList,
  GraphQLInputFieldMap,
  GraphQLArgument,
  getNamedType,
} from 'graphql';

const getArgumentValues = (args: readonly GraphQLArgument[]) => {
  if (!args) return null;
  const argsValues = args.map((a) => {
    const name = a.name;
    let typeName: string;
    if (a.type instanceof GraphQLNonNull && a.type.ofType instanceof GraphQLScalarType) {
      typeName = a.type.ofType.name;
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
    const isList = v.type instanceof GraphQLList;
    return {
      name: v.name,
      typeName: `${isList ? `[${getNamedType(v.type).name}]` : getNamedType(v.type).name}`,
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
    if (v.type instanceof GraphQLScalarType) {
      typeName = v.type.name;
      return { name, typeName, args };
    }
    if (v.type instanceof GraphQLObjectType) {
      typeName = v.type.name;
      return { name, typeName, args };
    }
    if (v.type instanceof GraphQLNonNull && v.type.ofType instanceof GraphQLScalarType) {
      typeName = v.type.ofType.name;
      return { name, typeName, args };
    }
    if (v.type instanceof GraphQLNonNull && v.type.ofType instanceof GraphQLObjectType) {
      typeName = v.type.ofType.name;
      return { name, typeName, args };
    }
    if (
      v.type instanceof GraphQLNonNull &&
      v.type.ofType instanceof GraphQLList &&
      v.type.ofType.ofType instanceof GraphQLNonNull &&
      v.type.ofType.ofType.ofType instanceof GraphQLObjectType
    ) {
      typeName = `[${v.type.ofType.ofType.ofType.name}]`;
      return { name, typeName, args };
    }
    if (
      v.type instanceof GraphQLNonNull &&
      v.type.ofType instanceof GraphQLList &&
      v.type.ofType.ofType instanceof GraphQLNonNull &&
      v.type.ofType.ofType.ofType instanceof GraphQLScalarType
    ) {
      typeName = `[${v.type.ofType.ofType.ofType.name}]`;
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
      if (type instanceof GraphQLScalarType) {
        return {
          name: typeName,
          description: type.description,
        };
      }
      if (type instanceof GraphQLObjectType) {
        return {
          name: typeName,
          description: null,
          fields: fieldsProcces(type.getFields()),
        };
      }
      if (type instanceof GraphQLInputObjectType) {
        return {
          name: typeName,
          description: null,
          fields: inputFieldsProcces(type.getFields()),
        };
      }
    });
  return types;
};
