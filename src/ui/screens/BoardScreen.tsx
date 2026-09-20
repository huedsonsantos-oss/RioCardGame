import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, StatusBar } from 'react-native';
import CardView from '../components/CardView';
import { Card } from '../../data/cards';
import { GameState, createInitialDeck } from '../../core/GameState';

const BoardScreen: React.FC = () => {
  const [hand, setHand] = useState<Card[]>([]);
  const [deckCount, setDeckCount] = useState(0);
  const [gameState] = useState(() => {
    const allCards = require('../../data/cards.json') as Card[];
    const deck = createInitialDeck(allCards);
    const gs = new GameState(deck, deck);
    gs.shuffleDeck('player1');
    return gs;
  });

  useEffect(() => {
    const drawn = gameState.drawInitialHand('player1', 5);
    setHand(drawn);
    setDeckCount(gameState.getDeckCount('player1'));
  }, [gameState]);

  const handleDraw = () => {
    const card = gameState.drawCard('player1');
    if (card) {
      setHand([...hand, card]);
      setDeckCount(gameState.getDeckCount('player1'));
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0a0a0a" />

      <View style={styles.header}>
        <Text style={styles.title}>RioCardGame</Text>
        <Text style={styles.deckInfo}>Deck: {deckCount} cartas</Text>
      </View>

      <ScrollView
        horizontal
        contentContainerStyle={styles.handContainer}
        showsHorizontalScrollIndicator={false}
      >
        {hand.map((card) => (
          <CardView key={card.id} card={card} />
        ))}
      </ScrollView>

      <View style={styles.actionBar}>
        <Text style={styles.turnIndicator}>Sua vez - Jogador 1</Text>
        <View style={styles.actions}>
          <Text style={[styles.actionBtn, styles.drawBtn]} onPress={handleDraw}>
            Comprar (1)
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0a0a',
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#222',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    letterSpacing: 1,
  },
  deckInfo: {
    fontSize: 14,
    color: '#888',
  },
  handContainer: {
    paddingVertical: 16,
    gap: 12,
    paddingBottom: 24,
  },
  actionBar: {
    position: 'absolute',
    bottom: 0,
    left: 16,
    right: 16,
    paddingBottom: 32,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#222',
  },
  turnIndicator: {
    fontSize: 14,
    color: '#aaa',
    textAlign: 'center',
    marginBottom: 12,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 12,
  },
  actionBtn: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
    fontWeight: 'bold',
  },
  drawBtn: {
    backgroundColor: '#8B0000',
    color: '#fff',
  },
});

export default BoardScreen;