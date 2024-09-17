import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const NextBtn = ({
  strValid,
  handleNext
}: {
  strValid: boolean
  handleNext: (event: GestureResponderEvent) => void
}) => {
  return (
    <TouchableOpacity
      pressRetentionOffset={{}}
      onPress={handleNext}
      style={[
        styles.nextButton,
        {
          opacity: strValid ? 1 : 0.5,
          backgroundColor: strValid ? '#6B4EFF' : '#ccc'
        }
      ]}
    >
      <Ionicons
        name='arrow-forward'
        size={24}
        color={strValid ? '#fff' : 'gray'}
      />
    </TouchableOpacity>
  )
}

export default NextBtn

const styles = StyleSheet.create({
  nextButton: {
    marginTop: 40,
    padding: 20,
    borderRadius: 50
  }
})
