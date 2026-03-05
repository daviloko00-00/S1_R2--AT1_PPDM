import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      
      <View style={styles.boxContainer}>
        <View style={[styles.box, styles.box1]} />
        <View style={[styles.box, styles.box2]} />
        <View style={[styles.box, styles.box3]} />
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

  boxContainer: {
    flexDirection: "row",
    justifyContent: "space-between"
  },

  box: {
    width: 80,
    height: 80,
  },

  box1: {
    backgroundColor: "red",
  },

  box2: {
    backgroundColor: "blue",
  },

  box3: {
    backgroundColor: "green",
  }
});