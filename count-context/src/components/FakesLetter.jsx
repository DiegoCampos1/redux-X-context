import React, { useEffect } from 'react';

function FakesLetter({ newLetter }) {
  useEffect(() => {
    console.log(`Componente FakesLetter foi renderizado`);
  });

  return <h3>Olá eu sou a fake news número: {newLetter}</h3>;
}

export default FakesLetter;
