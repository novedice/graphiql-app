import { url } from './constants';

export type RequestParamsType = {
  query: string;
  variables?: object;
  header?: object;
};

export const request = async (params: RequestParamsType) => {
  const resp2 = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      query: params.query,
      variables: params.variables,
      header: params.header,
    }),
  });
  const r = await resp2.json();
  return r;
};
