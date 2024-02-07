import GameSavingLoader from './classes/gamesavingloader'

export default function savingLoader() {
  GameSavingLoader.load().then(saving => {
    return saving;
  }, 
  error => {
    return error;
  }); 
}