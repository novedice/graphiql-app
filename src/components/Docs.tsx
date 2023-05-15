import { useEffect, useRef, useState } from 'react';
import DocColumn from './DocColumn';
import { fetchDocSchema } from '../store/slices/docSlice';
import { useAppDispatch } from '../hooks/redux-hooks';

export type DocState = {
  type: string;
  id: number;
};

const Docs = () => {
  const dispatch = useAppDispatch();
  const [isShow, setShow] = useState(false);
  const [docs, setDocs] = useState([{ type: 'Query', id: Date.now() }]);
  const refLastElement = useRef<HTMLDivElement>(null);
  const toggleShow = () => setShow((prev) => !prev);
  const appendDocumentation = (type: string, order: number) => {
    setDocs((prev) => [
      ...prev.slice(0, order + 1),
      { type: type.replace('[', '').replace(']', ''), id: Date.now() },
    ]);
  };
  useEffect(() => {
    dispatch(fetchDocSchema());
  }, []);
  useEffect(() => {
    refLastElement.current?.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  }, [docs]);

  return (
    <section className='flex items-center absolute right-0 h-[100%] max-w-[100%] overflow-x-auto'>
      <button className='fixed right-0 h-min bg-yellow-300 p-2' onClick={toggleShow}>
        Docs
      </button>
      <div
        className={`h-full transition duration-500 ease-in-out opacity-0 transform -translate-x-100 ${
          isShow ? 'opacity-100 translate-x-0' : ''
        }`}
      >
        <div className='flex h-[100%] py-4'>
          {docs.map((doc, i) => (
            <DocColumn key={doc.id} doc={doc} appendDocumentation={appendDocumentation} order={i} />
          ))}
          <div ref={refLastElement}></div>
        </div>
      </div>
    </section>
  );
};

export default Docs;
