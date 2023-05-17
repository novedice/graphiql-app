import { FC } from 'react';

import { useAppDispatch, useTypeSelector } from '../hooks/redux-hooks';
import { ArgType, SchemaItem } from 'types';
import { DocState, updateDoc } from '../store/slices/docSlice';

type DocColumnProps = {
  doc: DocState;
  order: number;
  args: ArgType | null;
};

const DocColumn: FC<DocColumnProps> = ({ doc, order, args }) => {
  const { schema } = useTypeSelector((state) => state.docSchema);
  const dispatch = useAppDispatch();

  const appendDocumentation = (type: string, args: ArgType | null, order: number) => {
    dispatch(updateDoc({ type, args, order }));
  };

  if (!schema) return <></>;

  const type = schema.find((t) => t.name === doc.type) as SchemaItem;
  const list = type.fields;
  return (
    <div
      className={`w-52 flex flex-col gap-y-2 p-2 shadow-md  shadow-gray-700 bg-rose-100  ${
        order % 2 && 'shadow-inner'
      }`}
    >
      <h2>{type.name}</h2>
      {type.description ? (
        <p>{type.description}</p>
      ) : (
        <ul className='flex flex-col gap-y-2 p-2 font-semibold overflow-y-auto'>
          {list &&
            list.map((item, i) => (
              <li key={i}>
                <a
                  className='cursor-pointer block w-[100%] p-1 hover:text-blue-700 duration-300'
                  onClick={() => appendDocumentation(item.typeName, item.args[0] || null, order)}
                >
                  {item.name}: {item.typeName}
                </a>
              </li>
            ))}
        </ul>
      )}
      {args && (
        <div>
          <h2>Arguments</h2>
          <a
            className='cursor-pointer block w-[100%] p-1 hover:text-blue-700 duration-300'
            onClick={() => appendDocumentation(args.typeName, null, order)}
          >
            {args.name}: {args.typeName}
          </a>
        </div>
      )}
    </div>
  );
};

export default DocColumn;
