import React from 'react';

function MinMax({ min, max }) {
  let maiorValor = '';

  if (min > max) {
    maiorValor = `${min} é maior que ${max}`;
  } else if (max > min) {
    maiorValor = `${max} é maior que ${min}`;
  } else {
    maiorValor = `${min} e ${max} são iguais`;
  }

  return (
    <div>
      <p>{maiorValor}</p>
    </div>
  );
}

export default MinMax;
