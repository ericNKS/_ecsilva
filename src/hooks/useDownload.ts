import { useCallback } from 'react';

export const useDownload = () => {
  const download = useCallback((url: string, fileName: string | undefined) => {
    if (!url) return;

    const link = document.createElement('a');
    link.href = url;

    if (fileName) {
      link.setAttribute('download', fileName);
    }

    link.style.display = 'none';
    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
  }, []);

  return { download };
};
