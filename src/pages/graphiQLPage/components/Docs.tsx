import { useEffect, useRef, useState } from 'react';
import { Spinner } from './index';
import { fetchDocSchema } from '../../../store/slices/docSlice';
import { useAppDispatch, useTypeSelector } from '../../../hooks/redux-hooks';
import { openModalWindow } from '../../../store/slices/modalWindowSlice';
import DocColumn from './DocColumn';

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
      dispatch(openModalWindow());
    }
  }, [status, dispatch]);

  useEffect(() => {
    refLastElement.current?.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  }, [docList]);

  return (
    <section className='docs z-9 flex items-center fixed top-[120px] bottom-[10px] right-0 max-h-[75%] max-w-[100%] overflow-auto'>
      <button
        className='docs-btn z-10 h-min fixed top-[45%] right-0 bg-yellow-300 p-2'
        onClick={toggleShow}
      >
        Docs
        {status === 'pending' && (
          <div className='absolute top-0 left-[-42px]'>
            <Spinner />
          </div>
        )}
      </button>
      <div
        className={`docs-wrapper flex h-[100%] transition duration-500 ease-in-out opacity-0 transform -translate-x-100 ${
          isShow ? 'opacity-100 translate-x-0' : 'hidden'
        }`}
      >
        {docList.map((doc, i) => (
          <DocColumn key={doc.id} doc={doc} args={doc.args} order={i} />
        ))}
        <div ref={refLastElement}></div>
      </div>
    </section>
  );
};

export default Docs;
