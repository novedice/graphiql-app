import { url } from './constants';

export type RequestParamsType = {
  query: string;
  variables?: object;
  header?: object;
};

export const request = async (params: RequestParamsType) => {
  const headers = params.header
    ? { ...params.header, 'Content-type': 'application/json' }
    : { 'Content-type': 'application/json' };
  const resp2 = await fetch(url, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({
      query: params.query,
      variables: params.variables,
    }),
  });
  const r = await resp2.json();
  return r;
};
