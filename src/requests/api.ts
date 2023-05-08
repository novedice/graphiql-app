// const query1 = `query ExampleQuery( $find: ShipsFind) {
//   ships(find: $find) {
//     year_built
//     name
//   }
// }`;

// const query = `query Query {
//   country(code: "BR") {
//     name
//     native
//     emoji
//     currency
//     languages {
//       code
//       name
//     }
//   }
// }`;

// const url = "https://spacex-production.up.railway.app/";
const url2 = 'https://countries.trevorblades.com/graphql';

const request = async (query: string) => {
  const resp2 = await fetch(url2, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ query }),
  });

  return resp2.json();
};

export { request };
