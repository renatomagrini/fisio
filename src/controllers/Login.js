import React, { useEffect } from 'react';
import { setData, getId, getNome, getUrl } from '../../global';

let retorno = 'sucess';

export const getResults = async (username, password) => {
  // return retorno; // testando sem conecca
  const rota = `${getUrl()}/login`;

  const consulta = await fetch(rota, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      password,
    }),
  })
    .then((response) => response.json())
    .then((responseJson) => {
      setData(responseJson.idEmpregado, responseJson.nome);
      retorno = 'sucess';
    })
    .catch((error) => {
      retorno = 'error';
    });

  return retorno;
};
