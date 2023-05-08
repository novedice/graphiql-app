// const url = "https://spacex-production.up.railway.app/";
const url2 = 'https://countries.trevorblades.com/graphql';

const request = async (query: string, variables?: string) => {
  const resp2 = await fetch(url2, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ query, variables: variables ? JSON.parse(variables) : '' }),
  });

  return resp2.json();
};

export { request };
