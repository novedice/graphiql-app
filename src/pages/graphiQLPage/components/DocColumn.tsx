import { FC } from 'react';

import { useAppDispatch, useTypeSelector } from '../../../hooks/redux-hooks';
import { ArgType, SchemaItem } from 'types';
import { DocState, updateDoc } from '../../../store/slices/docSlice';

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
      className={`w-[280px] h-[100%] flex flex-col gap-y-2 p-2 shadow-md  shadow-gray-700 bg-rose-100  ${
        order % 2 && 'shadow-inner'
      }`}
    >
      <h2 className='border-b-2 border-gray-300 pb-2'>{type.name}</h2>
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
                  {item.name}
                  {!!item.args.length && '(...)'}: {item.typeName}
                </a>
              </li>
            ))}
        </ul>
      )}
      {args && (
        <div className='border-t-2 border-gray-300 pt-2'>
          <h2>Arguments:</h2>
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
