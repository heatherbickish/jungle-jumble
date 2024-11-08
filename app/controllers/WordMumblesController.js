import { AppState } from "../AppState.js";
import { wordMumblesService } from "../services/WordMumblesService.js";

export class WordMumblesController {
  constructor() {
    console.log('jfdkljfs');

    this.drawWordMumble()
    AppState.on('activeMumble', this.drawActiveMumble)
    // this.drawActiveMumble()
  }



  drawWordMumble() {
    console.log('🧠')

    const wordMumbleElm = document.getElementById('mumble-list')
    wordMumbleElm.innerHTML = ''
    AppState.wordMumble.forEach(mumble => wordMumbleElm.innerHTML += mumble.mumbleListTemplate)

  }

  drawActiveMumble() {
    console.log('🐒🐆')
    const activeMumbleElm = document.getElementById('active-mumble')
    activeMumbleElm.innerHTML = AppState.activeMumble.activeMumbleTemplate
  }

  selectActiveMumble(mumbleId) {
    console.log('🎨', mumbleId)
    wordMumblesService.selectActiveMumble(mumbleId)
  }

  createMumble() {
    console.log('🍦')
    event.preventDefault()
    const mumElm = event.target
    const formData = {

      name: mumElm.name.value,
      body: mumElm.body.value
    }
    console.log(formData);
    wordMumblesService.createMumble(formData)




  }

}