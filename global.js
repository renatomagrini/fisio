import React from 'react';

let idEmpregado = 0;
let NomeEmpregado = null;

const url = 'https://fisiobackend.herokuapp.com';

export function setData(id, nome) {
  idEmpregado = id;
  NomeEmpregado = nome;
}

export function getId() {
  return idEmpregado;
}

export function getNome() {
  return NomeEmpregado;
}

export function getUrl() {
  return url;
}
