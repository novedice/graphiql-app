import Spinner from './Spinner';

interface LoadProps {
  color: string;
}

const Loading = ({ color }: LoadProps) => {
  return (
    <div className='w-full h-[25vh] flex items-center justify-center'>
      <Spinner />
      <p className={`text-${color} text-2xl ml-1`}>Loading...</p>
    </div>
  );
};

export default Loading;
