import { useRef } from 'react';

const useDebounce = () => {
  const timeOut = useRef(null);

  const debounced = (cb) => {
    if (timeOut.current) {
      clearTimeout(timeOut.current);
    }
    timeOut.current = setTimeout(() => {
      cb();
    }, 500);
  };
  return { debounced };
};

export default useDebounce;
