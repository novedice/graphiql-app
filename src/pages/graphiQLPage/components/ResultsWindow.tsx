import { useTypeSelector } from '../../../hooks/hooks';

const ResultWindow = () => {
  const { resultValue } = useTypeSelector((state) => state.resultValue);

  return (
    <>
      <div className='w-[50%] h-[50vh]'>
        <p>Results</p>
        <div className='whitespace-pre-wrap'>{resultValue}</div>
      </div>
    </>
  );
};

export default ResultWindow;
