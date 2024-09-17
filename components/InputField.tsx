import { TextInput, Text, StyleSheet, View } from 'react-native'

type inputField = {
  placeholder: string
  value: string
  onChangeText: (text: string) => void
  label: string
  type: 'numeric' | 'default'
}

const InputField = ({
  placeholder,
  value,
  onChangeText,
  label,
  type
}: inputField) => (
  <View style={styles.container}>
    <Text style={styles.label}>{label}</Text>
    <TextInput
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      style={styles.input}
      keyboardType={type}
    />
  </View>
)

const styles = StyleSheet.create({
  container: {
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderColor: '#6B4EFF',
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 10
  },
  label: {
    color: '#6B4EFF'
  },
  input: {
    marginVertical: 10,
    borderWidth: 0
  }
})

export default InputField
