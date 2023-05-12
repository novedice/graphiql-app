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
    <ul
      className={` w-52 flex flex-col gap-y-2 p-2 font-semibold shadow-md  shadow-gray-700 bg-rose-100 ${
        order % 2 && 'shadow-inner'
      }`}
    >
      {list.map(([key, value], i) => (
        <li key={i}>
          <a
            className='cursor-pointer block w-[100%] p-1 hover:text-blue-700 duration-300'
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
