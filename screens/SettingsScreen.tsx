import { View, Text, StyleSheet } from 'react-native'

const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Settings Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f9f9f9'
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16
  }
})

export default SettingsScreen
