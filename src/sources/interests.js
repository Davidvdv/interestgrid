import uuid from 'uuid';

const interests = [
  { id: uuid.v4(), text: 'React', relevance: 0, siblings: ['Redux', 'Router']},
  { id: uuid.v4(), text: 'Angular 2', relevance: 0, siblings: ['ngrx', 'Typescript', 'Observables']},
  { id: uuid.v4(), text: 'Ember', relevance: 0, siblings: []},
  { id: uuid.v4(), text: 'NodeJS', relevance: 0, siblings: ['Express']},
];

export default interests;
