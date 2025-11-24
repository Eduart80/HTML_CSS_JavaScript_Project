"use strict"

export class NetworkError extends Error {
  constructor(message) {
    super(message);
    this.name = 'NetworkError from error class';
  }
}

export class DataError extends Error {
  constructor(message) {
    super(message);
    this.name = 'DataError from error class';
  }
}
