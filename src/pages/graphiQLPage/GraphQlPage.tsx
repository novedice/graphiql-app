import ResultWindow from '../../components/ResultsWindow';
import RequestEditor from '../../components/RequestEditor';
import VariablesEditor from '../../components/VariablesEditor';

const GraphQlPage = () => {
  return (
    <>
      <div className={`w-full bg-slate-300`}>
        <div className='w-[98%] flex m-3 justify-center'>
          <div className='w-[64%] m-2 mr-1 flex flex-col'>
            <RequestEditor />
            <VariablesEditor />
          </div>
          <div className='w-[34%] h-[100%] ml-0 m-2 flex flex-col'>
            <ResultWindow />
          </div>
        </div>
      </div>
    </>
  );
};

export default GraphQlPage;
