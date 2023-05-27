import { Transition } from '@headlessui/react';
import { useAppDispatch, useTypeSelector } from '../hooks/redux-hooks';
import { closeModalWindow } from '../store/slices/modalWindowSlice';

type ModalProps = {
  children: React.ReactNode;
};

const ModalWindow = ({ children }: ModalProps) => {
  const { show } = useTypeSelector((state) => state.modalWindow);
  const dispatch = useAppDispatch();

  const handleCloseModal = () => {
    document.body.classList.remove('overflow-hidden');
    dispatch(closeModalWindow());
  };

  return (
    <>
      <Transition
        show={show}
        enter='transition-opacity duration-300'
        enterFrom='opacity-0'
        enterTo='opacity-100'
        leave='transition-opacity duration-300'
        leaveFrom='opacity-100'
        leaveTo='opacity-0'
        className='fixed inset-0 z-50 bg-black bg-opacity-50'
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            handleCloseModal();
          }
        }}
      >
        <div
          className={`w-auto fixed z-50 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-slate-800 rounded-lg p-8`}
        >
          {children}
        </div>
      </Transition>
    </>
  );
};

export default ModalWindow;
