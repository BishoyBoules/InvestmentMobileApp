import { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import BackBtn from '../components/BackBtn'
import NextBtn from '../components/NextBtn'
import { NativeStackScreenProps } from 'react-native-screens/lib/typescript/native-stack/types'
import { RootStackParamList } from '../App'

type FirstQuestionScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'FirstQuestionScreen'
>

const FirstQuestionScreen = ({ navigation }: FirstQuestionScreenProps) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null)

  const options = [
    { id: 1, label: 'Less than 3 years' },
    { id: 2, label: '3-5 years' },
    { id: 3, label: '6-10 years' },
    { id: 4, label: '+11 years' }
  ]

  const onSelectOption = (id: number) => {
    setSelectedOption(id)
  }

  const onNext = () => {
    if (selectedOption !== null) {
      navigation.navigate('SecondQuestionScreen')
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name='arrow-back-outline' size={24} color='black' />
        </TouchableOpacity>
        <Text style={styles.headerText}>
          For how long do you plan to keep investing for this goal?
        </Text>
      </View>

      <Text style={styles.description}>
        It’s important to understand the time horizon of your investment to
        provide a suitable portfolio.
      </Text>

      {options.map(option => (
        <TouchableOpacity
          key={option.id}
          style={[
            styles.optionButton,
            selectedOption === option.id && styles.selectedOption
          ]}
          onPress={() => onSelectOption(option.id)}
        >
          <Text style={styles.optionText}>{option.label}</Text>
        </TouchableOpacity>
      ))}

      <View style={styles.btns}>
        <BackBtn onPress={() => navigation.goBack()} />
        <NextBtn strValid={!!selectedOption} handleNext={onNext} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 50,
    backgroundColor: 'white'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 8
  },
  description: {
    fontSize: 16,
    color: '#6c757d',
    marginBottom: 24
  },
  optionButton: {
    paddingVertical: 16,
    paddingHorizontal: 12,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: '#e9ecef'
  },
  selectedOption: {
    backgroundColor: '#6B4EFF',
    borderColor: '#6B4EFF'
  },
  optionText: {
    fontSize: 16,
    color: '#343a40'
  },
  btns: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10
  },
  backButton: {
    paddingVertical: 12,
    paddingHorizontal: 24
  },
  backButtonText: {
    color: '#007bff',
    fontSize: 16
  },
  nextButton: {
    padding: 16,
    backgroundColor: '#007bff',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  disabledButton: {
    backgroundColor: '#adb5bd'
  }
})

export default FirstQuestionScreen
