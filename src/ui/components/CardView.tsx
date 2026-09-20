import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

interface CardProps {
  card: {
    id: string;
    name: string;
    faction: string;
    cost: number;
    attack: number;
    defense: number;
    flavor: string;
  };
}

const FACTION_COLORS: Record<string, string> = {
  'União Vermelha': '#8B0000',
  'Terceiro Bloco Puro': '#00008B',
  'Aliança dos Aliados': '#006400',
  'A Liga Paramilitar': '#2F2F2F',
};

const CardView: React.FC<CardProps> = ({ card }) => {
  const borderColor = FACTION_COLORS[card.faction] || '#2F2F2F';

  return (
    <View style={[styles.card, { borderColor }]}>
      <View style={styles.header}>
        <Text style={styles.name}>{card.name}</Text>
        <View style={[styles.costContainer, { backgroundColor: borderColor }]}>
          <Text style={styles.cost}>{card.cost}</Text>
        </View>
      </View>

      <Text style={styles.faction}>{card.faction}</Text>

      <Text style={styles.flavor}>&ldquo;{card.flavor}&rdquo;</Text>

      <View style={styles.stats}>
        <View style={styles.stat}>
          <Text style={styles.statLabel}>ATK</Text>
          <Text style={styles.statValue}>{card.attack}</Text>
        </View>
        <View style={styles.statDivider} />
        <View style={styles.stat}>
          <Text style={styles.statLabel}>DEF</Text>
          <Text style={styles.statValue}>{card.defense}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 280,
    height: 380,
    backgroundColor: '#1a1a1a',
    borderWidth: 3,
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 8,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    flex: 1,
    marginRight: 8,
  },
  costContainer: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cost: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  faction: {
    fontSize: 12,
    color: '#aaa',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 16,
  },
  flavor: {
    fontSize: 13,
    color: '#ccc',
    fontStyle: 'italic',
    lineHeight: 18,
    marginBottom: 20,
    flex: 1,
  },
  stats: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#333',
    paddingTop: 12,
  },
  stat: {
    flex: 1,
    alignItems: 'center',
  },
  statLabel: {
    fontSize: 11,
    color: '#888',
    textTransform: 'uppercase',
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  statDivider: {
    width: 1,
    height: 40,
    backgroundColor: '#333',
  },
});

export default CardView;