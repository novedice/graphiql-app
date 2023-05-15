import { FC } from 'react';
import { DocState } from './Docs';
import { useTypeSelector } from '../hooks/redux-hooks';

type DocColumnProps = {
  doc: DocState;
  appendDocumentation: (type: string, order: number) => void;
  order: number;
};

const DocColumn: FC<DocColumnProps> = ({ appendDocumentation, doc, order }) => {
  const { schema } = useTypeSelector((state) => state.docSchema);
  if (!schema || !schema[doc.type]) return <></>;
  const list = schema[doc.type].fields as string[][];
  return (
    <div
      className={`flex flex-col gap-y-2 p-2 shadow-md  shadow-gray-700 bg-rose-100  ${
        order % 2 && 'shadow-inner'
      }`}
    >
      <h2>{schema[doc.type].title}</h2>
      <ul className='w-52 flex flex-col gap-y-2 p-2 font-semibold '>
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
    </div>
  );
};

export default DocColumn;
