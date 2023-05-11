import { FC } from 'react';
import { docs } from '../docs/docs';
import { DocState } from './Docs';

type DocColumnProps = {
  doc: DocState;
  appendDocumentation: (type: string, order: number) => void;
  order: number;
};

const DocColumn: FC<DocColumnProps> = ({ appendDocumentation, doc, order }) => {
  if (!docs[doc.type]) return <></>;
  const list = Object.entries(docs[doc.type]);
  return (
    <ul className='border-2 border-rose-600 w-52 flex flex-col gap-y-2 p-2'>
      {list.map(([key, value], i) => (
        <li key={i}>
          <a
            className='border-2 border-indigo-500/75 cursor-pointer block w-[100%] p-1'
            onClick={() => appendDocumentation(value, order)}
          >
            {key}: {value}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default DocColumn;
