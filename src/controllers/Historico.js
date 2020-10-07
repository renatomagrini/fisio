import React, { useEffect } from 'react';
import { setData, getId, getNome, getUrl } from '../../global';

export const getHistorico = async (paciente) => {
  // return retorno; // testando sem conecca
  console.log(`este devia ser o paciente${paciente}`);
  const retorno = [];
  const rota = `${getUrl()}/atendimento_pac_emp/${paciente}/${getId()}`;

  const response = await fetch(rota);

  const json = await response.json();

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
