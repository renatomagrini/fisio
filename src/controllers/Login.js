import React, { useEffect } from 'react';
import { setData, getId, getNome } from '../../global';

let retorno = '1';

export const getResults = async (username, password) => {
  const rota = 'http://ec2-18-215-253-190.compute-1.amazonaws.com:3000/login';

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
