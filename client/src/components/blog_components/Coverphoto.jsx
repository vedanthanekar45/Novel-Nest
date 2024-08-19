import React from 'react'
import cover from "../../hooks/cover"

export const Coverphoto = () => {
    const [randomImage, setRandomImage] = React.useState(null);
  
    React.useEffect(() => {
      function getRandomImage() {
        const randomIndex = Math.floor(Math.random() * cover.length);
        return cover[randomIndex];
      }
      setRandomImage(getRandomImage());
    }, []);

    if (!randomImage) return <div>Loading...</div>;
    return (
        <div className="object-fill">
            <img src={randomImage.src}/>
        </div>
    )
}