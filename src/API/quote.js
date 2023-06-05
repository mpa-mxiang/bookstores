import React, { useState, useEffect } from 'react';

const Quote = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await fetch('https://api.api-ninjas.com/v1/quotes?category=computers', {
          headers: { 'X-Api-Key': 'RqzsYlbztfomeiY69G9HwopQnjZEHkdl4qtqckB4' },
        });
        if (!response.ok) {
          throw new Error('Failed to fetch quote');
        }
        const data = await response.json();
        setQuote(data[0].quote);
        setAuthor(data[0].author);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchQuote();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        Error:
        {error}
      </div>
    );
  }

  return (
    <p className="quote">
      {quote}
      <br />
      {' - '}
      {author}
    </p>
  );
};

export default Quote;
