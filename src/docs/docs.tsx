export const docs: { [key: string]: { [key: string]: string } } = {
  Query: {
    continents: '[Continent]',
    'continent(code: String)': 'Continent',
    countries: '[Country]',
    'country(code: String)': 'Country',
    languages: '[Language]',
    'language(code: String)': 'Language',
  },
  Continent: {
    code: 'String',
    name: 'String',
    countries: '[Country]',
  },
  Country: {
    code: 'String',
    name: 'String',
    native: 'String',
    phone: 'String',
    continent: 'Continent',
    currency: 'String',
    languages: '[Language]',
    emoji: 'String',
    emojiU: 'String',
    states: '[State]',
  },
  Language: {
    code: 'String',
    name: 'String',
    native: 'String',
    rtl: 'Int',
  },
  State: {
    code: 'String',
    name: 'String',
    country: 'Country',
  },
  String: {
    String: `The String scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.`,
  },
  Int: {
    Int: `Boolean! The Boolean scalar type represents true or false.`,
  },
};
