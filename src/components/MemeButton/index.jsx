import React from 'react';

const MEME_API_URL = 'https://api.tronalddump.io/random/meme';

const MemeButton = ({ setMeme }) => {
  const handleMeme = async () => {
    try {
      const response = await fetch(MEME_API_URL);

      // Check if the response is OK
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // If the response is an image, set the image URL directly
      const blob = await response.blob();
      const imageUrl = URL.createObjectURL(blob); // Now this will refer to the global URL object
      
      // Update the state with the new meme image URL
      setMeme(imageUrl);
    } catch (error) {
      console.error("Error fetching meme:", error);
    }
  };

  return (
    <div>
      <button
        onClick={handleMeme}
        className='px-3 py-2 border border-black rounded-md hover:bg-gray-700 hover:text-white transition-all duration-300 ease-in-out'
      >
        Random Meme 😂
      </button>
    </div>
  );
};

export default MemeButton;
