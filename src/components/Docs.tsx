import { useEffect, useRef, useState } from 'react';
import DocColumn from './DocColumn';

// const typeDetails = {
//   ID: 'The ID scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as "4") or integer (such as 4) input value will be accepted as an ID.',
// };

// const instanses = {
//   code: {
//     field: [],
//     value: 'code',
//     type: 'ID!',
//     title: 'code: ID!',
//     details: typeDetails['ID'],
//     args: '',
//   },
//   Continent: {
//     fields: ['code: ID!', 'countries', 'name'],
//     value: continent(...): Continent,
//     title: `continent(
//       code: ID!
//       ): Continent`

//   },
// };

export type DocState = {
  type: string;
  id: number;
};

const Docs = () => {
  const [isShow, setShow] = useState(false);
  const [docs, setDocs] = useState([{ type: 'Query', id: Date.now() }]);
  const refToRight = useRef<HTMLDivElement>(null);
  const toggleShow = () => setShow((prev) => !prev);
  const appendDocumentation = (type: string, order: number) => {
    setDocs((prev) => [
      ...prev.slice(0, order + 1),
      { type: type.replace('[', '').replace(']', ''), id: Date.now() },
    ]);
  };

  useEffect(() => {
    refToRight.current?.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  }, [docs]);
  return (
    <section className='flex items-center absolute right-0 h-[100%] max-w-[100%] overflow-x-auto'>
      <button className='h-min bg-yellow-300 p-2' onClick={toggleShow}>
        Docs
      </button>
      {isShow && (
        <div className='h-[100%] bg-slate-50 text-black p-10 '>
          <h3>Documentation</h3>
          <div className='flex gap-x-2 h-[100%]'>
            {docs.map((doc, i) => (
              <DocColumn
                key={doc.id}
                doc={doc}
                appendDocumentation={appendDocumentation}
                order={i}
              />
            ))}
            <div ref={refToRight}></div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Docs;
