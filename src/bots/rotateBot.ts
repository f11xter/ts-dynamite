import {BotSelection, Gamestate} from '../models/gamestate';

class Bot {
    dynamite = 100;

    makeMove(gamestate: Gamestate): BotSelection {
        const options: BotSelection[] = ['R', 'P', 'S'];

        if (gamestate.rounds.length === 0) return options[Math.floor(Math.random() * options.length)];

        if (Math.random() < 0.07 && this.dynamite-- > 0)
            return 'D';

        return options[(options.indexOf(gamestate.rounds[gamestate.rounds.length - 1].p1) + 1) % 3];
    }
}

export = new Bot();
