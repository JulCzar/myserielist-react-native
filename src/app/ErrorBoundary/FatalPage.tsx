import {
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import { styles } from './styles';
import { colors } from '../../constants';

interface iFatalPage {
  onButtonPress(): void;
}

const Button: React.FC<{ onPress(): void; title: string }> = ({
  onPress,
  title,
}) => (
  <Pressable onPress={onPress}>
    <View style={styles.button}>
      <Text style={styles.buttonText}>{title}</Text>
    </View>
  </Pressable>
);

const FatalPage: React.FC<iFatalPage> = ({ onButtonPress }) => {
  const backgroundStyle = {
    backgroundColor: colors.background,
  };

  return (
    <View style={[StyleSheet.absoluteFill, backgroundStyle]}>
      <SafeAreaView style={StyleSheet.absoluteFill}>
        <StatusBar barStyle="dark-content" />
        <View style={styles.errorContainer}>
          <View style={styles.errorTitleContainer}>
            <Text style={styles.errorTitle}>Oops!</Text>
            <Text style={styles.errorSubtitle}>Houve uma falha inesperada</Text>
          </View>
          <Text style={styles.errorMessage}>
            O app não conseguiu processar sua solicitação e precisa ser
            reiniciado. Essa falha foi enviada para nossa equipe e será
            corrigida.
          </Text>
          <Button title="Reiniciar o app" onPress={onButtonPress} />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default FatalPage;
