import { AppState } from "../AppState.js"

class WordMumblesService {

  selectActiveMumble(mumbleId) {
    console.log('🗃️', mumbleId)
    const selectedMumble = AppState.wordMumble.find(mum => mumbleId == mum.id)
    console.log(selectedMumble, '🪼');

    AppState.activeMumble = selectedMumble


  }





}
export const wordMumblesService = new WordMumblesService()