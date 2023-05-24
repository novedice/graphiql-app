import { useEffect, useRef, useState } from 'react';
import DocColumn from './DocColumn';
import { fetchDocSchema } from '../../../store/slices/docSlice';
import { useAppDispatch, useTypeSelector } from '../../../hooks/redux-hooks';
import { openModalWindow } from '../../../store/slices/modalWindowSlice';
import { Spinner } from 'flowbite-react';

const Docs = () => {
  const dispatch = useAppDispatch();
  const [isShow, setShow] = useState(false);
  const { schema, docList, status } = useTypeSelector((state) => state.docSchema);
  const refLastElement = useRef<HTMLDivElement>(null);

  const toggleShow = () => {
    setShow((prev) => !prev);
    if (!schema) {
      dispatch(fetchDocSchema());
    }
  };

  useEffect(() => {
    if (status === 'failed') {
      console.log('open modal in docs useEffect');
      dispatch(openModalWindow());
    }
  }, [status, dispatch]);

  useEffect(() => {
    refLastElement.current?.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  }, [docList]);

  return (
    <section className=' z-9 flex items-center absolute top-0 right-0 max-h-[90%] h-[100%] max-w-[100%] overflow-x-auto'>
      <button
        className='z-10 h-min fixed top-[350px] right-0 bg-yellow-300 p-2'
        onClick={toggleShow}
      >
        Docs
        {status === 'pending' && (
          <div className='absolute top-[8px] left-[-25px]'>
            <Spinner />
          </div>
        )}
      </button>
      <div
        className={`documentation h-[100%] transition duration-500 ease-in-out opacity-0 transform -translate-x-100 ${
          isShow ? 'opacity-100 translate-x-0' : ''
        }`}
      >
        <div className='flex h-[100%] py-4'>
          {docList.map((doc, i) => (
            <DocColumn key={doc.id} doc={doc} args={doc.args} order={i} />
          ))}
          <div ref={refLastElement}></div>
        </div>
      </div>
    </section>
  );
};

export default Docs;
