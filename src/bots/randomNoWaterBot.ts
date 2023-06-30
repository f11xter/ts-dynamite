import {BotSelection, Gamestate} from '../models/gamestate';

class Bot {
    dynamite = 100;

    makeMove(gamestate: Gamestate): BotSelection {
        const options: BotSelection[] = ['R', 'P', 'S', 'D'];
        let sel: BotSelection;

        do {
            sel = options[Math.floor(Math.random() * options.length)];
        } while (sel === 'D' && --this.dynamite < 0)

        return sel;
    }
}

export = new Bot();
