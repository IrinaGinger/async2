import read from '../modules/reader';
import json from '../modules/parser';

export default class GameSavingLoader {
  static load() {
    read()
      .then(response => {
        return json(response);
      })
        .then(value => {
          return new Promise(resolve => {
            setTimeout(() => {
              resolve(JSON.parse(value));
            }, 0);
          });
        });
  }
}