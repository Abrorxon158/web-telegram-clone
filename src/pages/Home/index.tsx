import React, { useEffect } from 'react';

const fetchUser = async () => {
  const rawResponse = await fetch('https://httpbin.org/post', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({a: 1, b: 'Textual content'})
  });
  return await rawResponse.json();
}

const Home = async () => {


  console.log( await fetchUser());

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
