import { AppState } from "../AppState.js"
import { WordMumbles } from "../models/WordMumbles.js";

class WordMumblesService {
  createMumble(formData) {
    // throw new Error("Method not implemented.");
    AppState.wordMumble.push(new WordMumbles(formData))
  }

  selectActiveMumble(mumbleId) {
    console.log('🗃️', mumbleId)
    const selectedMumble = AppState.wordMumble.find(mum => mumbleId == mum.id)
    console.log(selectedMumble, '🪼');

    AppState.activeMumble = selectedMumble


  }





}
export const wordMumblesService = new WordMumblesService()