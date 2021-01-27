import Entity from './Entity.js';

export default class StarWarsUnivers {
  constructor() {
    this.entities = [];
  }

  async init() {
    let response = await fetch('https://swapi.dev/api/');

    let data = await response.json();
    let entity;
    for (let [name, url] of Object.entries(data)) {
      response = await fetch(`${url}`);
      data = await response.json();
      entity = new Entity(name, data);
      this.entities.push(entity);
    }
  }
}
