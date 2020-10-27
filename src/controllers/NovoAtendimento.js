import React, { useEffect } from 'react';
import { setData, getId, getNome, getUrl } from '../../global';

let retorno = '';

export const postAtendimento = async (
  idPaciente,
  evolucao,
  resumo,
  atendimento,
  dia,
  mes,
  ano,
  idEmpregado = 0
) => {
  // return retorno; // testando sem conecca
  const rota = `http://localhost:8080/novo_atendimento`;
  const evolucaoInt = parseInt(evolucao);
  const data = `${dia}/${mes}/${ano}`;
  console.log(dia);
  console.log(mes);
  console.log(ano);

  const consulta = await fetch(rota, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      idPaciente,
      idEmpregado,
      resumo,
      atendimento,
      evolucaoInt,
      data,
    }),
  })
    .then(() => {
      retorno = 'sucess';
      console.log('DDEU BOA');
    })
    .catch((error) => {
      retorno = 'error';
      console.log(error);
    });
  console.log(retorno);
};
