import CloseIcon from './CloseIcon';

interface BurgerIconProps {
  open: string;
  setOpen: React.Dispatch<React.SetStateAction<string>>;
}

const BurgerIcon = ({ setOpen, open }: BurgerIconProps) => {
  const toggleOpenMenu = () => {
    setOpen((state) => (state === 'hidden' ? '' : 'hidden'));
  };

  return (
    <>
      <div className={` burger-icon space-y-2 md:hidden mr-4`} onClick={toggleOpenMenu}>
        {open === 'hidden' ? (
          <>
            <p className='w-8 h-0.5 bg-gray-600'></p>
            <p className='w-8 h-0.5 bg-gray-600'></p>
            <p className='w-8 h-0.5 bg-gray-600'></p>
          </>
        ) : (
          <CloseIcon />
        )}
      </div>
    </>
  );
};

export default BurgerIcon;
