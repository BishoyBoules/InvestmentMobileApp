import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'

const BackBtn = ({
  onPress
}: {
  onPress: (event: GestureResponderEvent) => void
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.backText}>Back</Text>
    </TouchableOpacity>
  )
}

export default BackBtn

const styles = StyleSheet.create({
  button: {
    marginTop: 50
  },
  backText: {
    color: '#6B4EFF',
    fontWeight: 'bold',
    fontSize: 16
  }
})
