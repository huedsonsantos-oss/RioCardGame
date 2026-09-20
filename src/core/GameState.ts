import { Card } from '../data/cards';

export interface GameStateData {
  player1: {
    deck: Card[];
    hand: Card[];
    field: Card[];
  };
  player2: {
    deck: Card[];
    hand: Card[];
    field: Card[];
  };
}

export class GameState {
  state: GameStateData;

  constructor(deck1: Card[], deck2: Card[]) {
    this.state = {
      player1: {
        deck: [...deck1],
        hand: [],
        field: [],
      },
      player2: {
        deck: [...deck2],
        hand: [],
        field: [],
      },
    };
  }

  shuffleDeck(player: 'player1' | 'player2'): void {
    const deck = this.state[player].deck;
    for (let i = deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }
  }

  drawCard(player: 'player1' | 'player2'): Card | null {
    const deck = this.state[player].deck;
    if (deck.length === 0) return null;

    const card = deck.pop()!;
    this.state[player].hand.push(card);
    return card;
  }

  drawInitialHand(player: 'player1' | 'player2', count: number = 5): Card[] {
    const drawn: Card[] = [];
    for (let i = 0; i < count; i++) {
      const card = this.drawCard(player);
      if (card) drawn.push(card);
    }
    return drawn;
  }

  playCard(player: 'player1' | 'player2', cardIndex: number): Card | null {
    const hand = this.state[player].hand;
    if (cardIndex < 0 || cardIndex >= hand.length) return null;

    const [card] = hand.splice(cardIndex, 1);
    this.state[player].field.push(card);
    return card;
  }

  getHand(player: 'player1' | 'player2'): Card[] {
    return [...this.state[player].hand];
  }

  getField(player: 'player1' | 'player2'): Card[] {
    return [...this.state[player].field];
  }

  getDeckCount(player: 'player1' | 'player2'): number {
    return this.state[player].deck.length;
  }
}

export const createInitialDeck = (cards: Card[]): Card[] => {
  const deck: Card[] = [];
  cards.forEach((card) => {
    for (let i = 0; i < 3; i++) {
      deck.push({ ...card });
    }
  });
  return deck;
};