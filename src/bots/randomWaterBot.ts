import {BotSelection, Gamestate} from '../models/gamestate';

class Bot {
    dynamite = 100;
    water = 100;

    makeMove(gamestate: Gamestate): BotSelection {
        const options: BotSelection[] = ['R', 'P', 'S', 'D', 'W'];
        let sel: BotSelection;

        if (gamestate.rounds.length > 0 && gamestate.rounds[gamestate.rounds.length - 1].p2 === 'D') {
            this.water--;
        }

        do {
            sel = options[Math.floor(Math.random() * options.length)];
        } while (sel === 'D' && --this.dynamite < 0 || sel === 'W' && this.water <= 0)

        return sel;
    }
}

export = new Bot();
