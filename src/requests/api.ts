const url = 'https://countries.trevorblades.com/graphql';

const request = async (query: string, variables?: string, header?: object) => {
  const resp = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      query,
      variables: variables ? JSON.parse(variables) : '',
      header: header,
    }),
  });
  const r = await resp.json();
  console.log(r);
  return r;
};

export { request };
