import * as React from "react";

// Image preloading utilities
export const preloadImages = (urls: string[]): Promise<void[]> => {
  return Promise.all(
    urls.map(url => {
      return new Promise<void>((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve();
        img.onerror = () => resolve(); // Don't fail on individual image errors
        img.src = url;
      });
    })
  );
};

export const useImagePreloader = (imageUrls: string[]) => {
  const [loaded, setLoaded] = React.useState(false);

  React.useEffect(() => {
    if (imageUrls.length === 0) return;

    preloadImages(imageUrls).then(() => setLoaded(true));
  }, [imageUrls]);

  return loaded;
};
