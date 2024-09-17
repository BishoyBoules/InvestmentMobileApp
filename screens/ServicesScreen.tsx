import { View, Text, StyleSheet } from 'react-native'

const ServicesScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Services Screen</Text>
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

export default ServicesScreen
