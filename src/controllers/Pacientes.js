import React, { useEffect } from 'react';
import { setData, getId, getNome, getUrl } from '../../global';

export const getPacientes = async (id) => {
  // return retorno; // testando sem conecca
  console.log('entramos no getpaciente');
  const retorno = [];
  const rota = `${getUrl()}/pacientes`;

  const response = await fetch(rota);

  const json = await response.json();

  // console.log(json);
  return json;
  /*
  fetch(rota)
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson);
      retorno = responseJson;
    })
    .catch((error) => {
      console.error(error);
    });
    

  console.log(retorno);
  return retorno;

 */
};
