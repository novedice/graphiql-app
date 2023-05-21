import { url } from './constants';

const request = async (query: string, variables?: string, header?: object) => {
  let result;
  let error;

  try {
    const resp2 = await fetch(url, {
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
    const r = await resp2.json();
    result = r;
  } catch (e) {
    error = (e as Error).message;
  }

  return { result, error };
};

export { request };
