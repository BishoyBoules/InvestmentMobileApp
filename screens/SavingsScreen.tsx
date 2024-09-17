import { View, Text, StyleSheet } from 'react-native'
import { NativeStackScreenProps } from 'react-native-screens/lib/typescript/native-stack/types'
import { RootStackParamList } from '../App'

type SavingsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'SavingsScreen'
>

const SavingsScreen = ({ navigation }: SavingsScreenProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Savings Screen</Text>
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

export default SavingsScreen
