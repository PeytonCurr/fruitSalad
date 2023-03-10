import { appState } from "../AppState.js";
import { Player } from "../Models/Player.js";
import { EventEmitter } from "../Utils/EventEmitter.js";
import { Pop } from "../Utils/Pop.js";



class PlayersService {
    async createPlayer(formData) {

        let newPlayer = new Player(formData)
        let foundPlayer = appState.players.find(p => p.name == newPlayer.name)
        if (foundPlayer) {
            const yes = await Pop.confirm('This player already exists do you wish to continue?')
            if (yes) {
                appState.activePlayer = foundPlayer
            }
        } else {
            console.log(newPlayer)
            appState.players.push(newPlayer)
            appState.emit('players')
            appState.activePlayer = newPlayer
        }
    }

    checkSpelling(submittedWord) {
        let word = submittedWord
        if (word == appState.currentWord) {
            activePlayer.score++
        }
    }
}

export const playersService = new PlayersService();
