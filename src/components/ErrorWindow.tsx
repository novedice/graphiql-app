import { useTypeSelector } from '../hooks/redux-hooks';

const ErrorWindow = () => {
  const { message } = useTypeSelector((state) => state.modalWindow);
  return (
    <>
      <div className='absolute top-5 left-5 text-4xl'>{`Something went wrong... Error: ${message} `}</div>
    </>
  );
};

export default ErrorWindow;
