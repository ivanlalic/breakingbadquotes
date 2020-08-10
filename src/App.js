import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled';
import Quote from './components/quote';

const Container = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`; 

const Button = styled.button`
  background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #ffffff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  transition: background-size 0.8s ease;

  :hover {
    cursor: pointer;
    background-size: 400px;
  }
`;


function App() {

  //States
  const [quote, setQuote] = useState({});


  //FETCH
  // const callAPI = () => {
  //   const URL = fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes')
  //   const quote = URL.then(answer => answer.json());
  //   quote.then( result => console.log(result) )
  // }

  //ASYNC AWAIT
  const callAPI = async () => {
    const URL = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes')
    const quote = await URL.json();
    setQuote(quote[0]);
  }

  //useEffect is like DOMContentLoader (check when launch DOM)
  //Load quote

  useEffect( () => {
    callAPI()
  }, [] ) // Dependence is [], so it will load at least once



  return (
    <Container>
      <Quote 
        quote={quote}
      />
      <Button
        onClick={callAPI}
      >
        Get Quotes 
      </Button>
    </Container>
  );
}

export default App;
