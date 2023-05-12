import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';

const useAppDispatch = () => useDispatch<AppDispatch>();
const useTypeSelector: TypedUseSelectorHook<RootState> = useSelector;

export { useTypeSelector, useAppDispatch };
