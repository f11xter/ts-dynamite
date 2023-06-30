import {BotSelection, Gamestate} from '../models/gamestate';

class Bot {
    p1dynamite = 100;
    p2dynamite = 100;

    makeMove(gamestate: Gamestate): BotSelection {
        const wins: {} = {'R': 'P', 'P': 'S', 'S': 'R', 'D': 'W', 'W': 'R'};

        if (gamestate.rounds.length === 0) return this.chooseMove();

        if (gamestate.rounds[gamestate.rounds.length - 1].p1 === 'D') this.p1dynamite--;
        if (gamestate.rounds[gamestate.rounds.length - 1].p2 === 'D') this.p2dynamite--;

        if (gamestate.rounds.length >= 3) {
            for (let length = Math.max(Math.floor(gamestate.rounds.length / 2), 3); length >= 3; length--) {
                for (let start = gamestate.rounds.length - length - 1; start >= 0; start--) {
                    let match = true;

                    for (let offset = 0; offset < length; offset++) {
                        if (gamestate.rounds[start + offset].p2 !== gamestate.rounds[gamestate.rounds.length - length + offset].p2) {
                            match = false;
                            break;
                        }
                    }

                    if (match) {
                        if (gamestate.rounds[start + length].p2 === 'D' && this.p2dynamite <= 0) continue;
                        return wins[gamestate.rounds[start + length].p2];
                    }
                }
            }
        }

        return this.chooseMove();
    }

    chooseMove() {
        if (this.p1dynamite > 0) return 'D';
        return 'P';
    }
}

export = new Bot();