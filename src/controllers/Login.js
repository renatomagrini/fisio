import React, { useEffect } from 'react';
import { setData, getId, getNome } from '../../global';

let retorno = 'sucess';

const getResults = async () => {
  const rota = 'http://localhost:3000/login';

  fetch(rota, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: 'renato',
      password: '123456',
    }),
  })
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson);

      // setData(responseJson.idEmpregado, responseJson.nome);
      // console.log(getId());
      // console.log(getNome());
      retorno = 'sucess';
    })
    .catch((error) => {
      retorno = 'error';
    });
};

export const efetuaLogin = (props) => {
  // const result = getResults();

  if (retorno == 'sucess') return 'sucess';
  if (retorno == 'error') return 'error';
};
