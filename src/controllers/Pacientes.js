import React, { useEffect } from 'react';
import { setData, getId, getNome, getUrl } from '../../global';

export const getPacientes = async (id) => {
  // return retorno; // testando sem conecca
  console.log('entramos no getpaciente');
  const retorno = [];
  const rota = `${getUrl()}/pacientes_emp/0`;

  const response = await fetch(rota);

  const json = await response.json();

  return json;
};
