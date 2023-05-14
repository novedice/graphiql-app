const findVariables = (strReq: string) => {
  const variables: string[] = [];
  for (let i = 0; i < strReq.length; i++) {
    console.log('letter', strReq[i]);
    if (strReq[i] === '$') {
      console.log('start');
      let v = '';
      for (let j = i + 1; j < strReq.length; j++) {
        console.log('j:', j, 'strReq[j]:', strReq[j]);
        if (strReq[j] === ':' || strReq[j] === ')') {
          i = j;
          break;
        }
        v += strReq[j];
        console.log('var', v);
      }

      variables.push(v.trim());
    }
  }
  return variables;
};

export { findVariables };
