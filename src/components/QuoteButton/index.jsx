import React from 'react'

const URL  = 'https://api.tronalddump.io/random/quote'

const QuoteButton = ({ setQuote }) => {
  
  const handleQuote = async () => {

    const result = await  fetch(`${URL}`)

    const res = await  result.json()

    setQuote(res)

    // console.log(res);
    
  }
  return (
    <div>
      <button onClick={handleQuote} className='px-3 py-2 border border-black rounded-md hover:bg-gray-700 hover:text-white transition-all duration-300 ease-in-out'>Random Quote 👿</button>
    </div>
  )
}

export default QuoteButton