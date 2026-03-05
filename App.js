import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      
      <View style={styles.viewDasCaixinhas}>
        <View style={[styles.caixa, styles.cor1]} />
        <View style={[styles.caixa, styles.cor2]} />
        <View style={[styles.caixa, styles.cor3]} />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20
  },

  viewDasCaixinhas: {
    flexDirection: "row",
    justifyContent: "space-between"
  },

  caixa: {
    width: 80,
    height: 80,
    margin: 20
  },

  cor1: {
    backgroundColor: "red",
  },

  cor2: {
    backgroundColor: "blue",
  },

  cor3: {
    backgroundColor: "green",
  }
});