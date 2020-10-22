import React, { useEffect } from 'react';
import { setData, getId, getNome, getUrl } from '../../global';

export const postAtendimento = async (
  idPaciente,
  evolucao,
  resumo,
  atendimento
) => {
  // return retorno; // testando sem conecca
  // const rota = `${getUrl()}/login`;

  console.log(`id ${idPaciente}evolução ${evolucao}`);

  /*
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
    */
};
