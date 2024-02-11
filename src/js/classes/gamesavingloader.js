import read from '../modules/reader';
import json from '../modules/parser';

export default class GameSavingLoader {
  static async load() {
    const response1 = await read();
    const response2 = await json(response1);
    return JSON.parse(response2);
  }
}