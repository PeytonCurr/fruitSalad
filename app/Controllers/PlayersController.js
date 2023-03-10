import { appState } from "../AppState.js";
import { playersService } from "../Services/PlayersService.js";
import { setHTML } from "../Utils/Writer.js";
import { getFormData } from "../Utils/FormHandler.js"

function _drawPlayers() {
    let template = ``
    appState.players.forEach(p => template += p.playerTemplate)
    setHTML(`players`, template)

}

function _drawActive() {
    let player = appState.activePlayer
    setHTML('activePlayer', player.activeTemplate)
}



export class PlayersController {
    constructor() {
        // console.log(appState.players);
        _drawPlayers()
        appState.on('players', _drawPlayers)
        appState.on('activePlayer', _drawActive)
    }

    createPlayer() {
        window.event.preventDefault()
        let newPlayer = event.target
        let formData = getFormData(newPlayer)
        // console.log(formData)
        playersService.createPlayer(formData)
    }

    checkSpelling() {
        window.event.preventDefault()
        let formData = event.target
        let submittedWord = getFormData(formData)
        playersService.checkSpelling(submittedWord)
    }

}