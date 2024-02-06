import { useEffect } from 'react';

const useScrollToTop = () => {
  useEffect(() => {
    window.scrollTo({
      top: '56px',
      left: 0,
      behavior: 'smooth',
    });
  }, []);
  return null;
};
export default useScrollToTop;
