import { appState } from "../AppState.js"
import { generateId } from "../Utils/generateId.js"



export class Player {

    constructor(data) {
        this.id = generateId()
        this.name = data.name
        this.highScore = 0
        this.score = 0
    }

    get playerTemplate() {
        return `
        <section class="row">
        <div class="col-6">
          <h1>${this.name}</h1>
        </div>
        <div class="col-6">
          <h1>Highscore: ${this.highScore}</h1>
        </div>
      </section>
      `
    }

    get activeTemplate() {
        return `
        <section class="row">
        <div class="col-6">
          <h1>${this.name}</h1>
        </div>
        <div class="col-6">
          <h1>Highscore: ${appState.score}</h1>
        </div>
      </section>
      `
    }
}