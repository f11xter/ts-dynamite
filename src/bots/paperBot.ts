import { Gamestate, BotSelection } from '../models/gamestate';

class Bot {
    dynamite = 100;

    makeMove(gamestate: Gamestate): BotSelection {
        if (Math.random() < 0.07 && this.dynamite-- > 0)
            return 'D';
        return 'P';
    }
}

export = new Bot();
