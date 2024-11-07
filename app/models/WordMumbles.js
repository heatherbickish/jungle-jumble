import { generateId } from "../utils/GenerateId.js";

export class WordMumbles {
  constructor(data) {
    this.id = generateId()
    this.name = data.name
    this.body = data.body
  }


  get mumbleListTemplate() {
    return `
  <div class="d-flex justify-content-end align-items-center mb-2 p-4">
      <div>
        <button onclick="app.WordMumblesController.selectActiveMumble('${this.id}')"  class="btn btn-success fw-bold" type="button" title="start">Start
        </button>
        <b>${this.name}</b>
      </div>
  `
  }

  get activeMumbleTemplate() {
    return `
    <div class="col-md-8">
        <div class="text-center">
          <h2>${this.name}</h2>
          <p>${this.body}</p>
        </div>
        <br>
        <div class="border border-3 shadow">
        <form onsubmit="app.WordMumblesController.submitActiveMumble()">
        
        <textarea name="description" class="form-control" rows="25"></textarea>
        <button class="btn btn-success w-100">Submit</button>
        </form>
        </div>
      </div>
    `
  }
}