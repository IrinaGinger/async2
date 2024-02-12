import GameSavingLoader from './classes/gamesaving'

export default async function savingLoader() {
  try {
    const saving = await GameSavingLoader.load();
    return saving;
  }
  catch(e) {
    return e;
  }
}