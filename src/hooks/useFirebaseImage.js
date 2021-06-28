import React from "react";
import {storage} from "../firebase";
 
export const useFirebaseImage = (urlToImage) => {
  const [url, setUrl] = React.useState();

  // mount effect
  React.useEffect(() => {
    async function fetchImage() {
      const imageUrl = await await storage.refFromURL(urlToImage).getDownloadURL();
      setUrl(imageUrl);
    }
    fetchImage();
  }, [urlToImage]);

  return [url];
};
