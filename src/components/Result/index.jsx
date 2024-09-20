import React from 'react';

const Result = ({ quote, meme }) => {
  return (
    <div>
      {quote.value && (
        <p className='py-10 text-2xl italic'>{quote.value}</p>
      )}
      {quote.tags && quote.tags.length > 0 && (
        <p>
          {quote.tags.map((tag, id) => (
            <span key={id}> on {tag} </span>
          ))}
        </p>
      )}
      {meme && <img className='h-[400px] my-5 mx-auto' src={meme} alt='Meme' />}
    </div>
  );
};

export default Result;
