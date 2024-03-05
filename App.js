import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Rebecca Morandini Dos Santos</Text>
      <Text>Pedro Augusto Salla</Text>
      <Text>05/03/2024</Text>
      <Text>Novo Comit Clone</Text>
      <Text>Novo Comit Clone</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
