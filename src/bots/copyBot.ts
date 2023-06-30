import { Gamestate, BotSelection } from '../models/gamestate';

class Bot {
    makeMove(gamestate: Gamestate): BotSelection {
        if (gamestate.rounds.length === 0) return 'S';
        return gamestate.rounds[gamestate.rounds.length - 1].p2;
    }
}

export = new Bot();
