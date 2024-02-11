import GameSavingLoader from './classes/gamesavingloader'

export default async function savingLoader() {
  try {
    return await GameSavingLoader.load();
  }
  catch(e) {
    return e;
  }
}