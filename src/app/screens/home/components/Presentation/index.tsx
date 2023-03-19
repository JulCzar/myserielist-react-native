import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../../../../constants';

const Presentation: React.FC = () => (
  <View style={styles.container}>
    <View style={styles.greetingsContainer}>
      <Text style={styles.greetings}>Seja Bem Vindo ao </Text>
      <Text style={styles.appName}>My Serie List</Text>
      <Text style={styles.greetings}>!</Text>
    </View>
    <View style={styles.column}>
      <View style={styles.column}>
        <Text style={styles.description}>
          My Serie List é um serviço que utiliza a api do The Movie DB para
          listar os seriados mais populares e manter o controle sobre os
          episódios já assistidos.
        </Text>
        <Text style={styles.description}>
          Para usar é simples, basta buscar o seriado na lista abaixo com a
          ajuda de nossos filtros e então marcar os episódios vistos, o
          histórico será mantido junto ao seu navegador, então lembre-se de
          exportá-lo caso deseje salvar o progresso antes de formatar o
          computador ou trocar de navegador
        </Text>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    gap: 32,
    paddingVertical: 32,
  },
  greetingsContainer: {
    flexDirection: 'row',
  },
  greetings: {
    color: colors['font.600'],
    fontSize: 24,
  },
  appName: {
    color: colors['accent.400'],
    fontSize: 24,
  },
  column: {
    flexDirection: 'column',
    gap: 16,
  },
  description: {
    color: colors['font.400'],
    fontSize: 10,
    textAlign: 'justify',
  },
});

export default Presentation;
