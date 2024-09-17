import { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { NativeStackScreenProps } from 'react-native-screens/lib/typescript/native-stack/types'
import { RootStackParamList } from '../App'
import BackBtn from '../components/BackBtn'
import NextBtn from '../components/NextBtn'

type SecondQuestionScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'SecondQuestionScreen'
>

const SecondQuestionScreen = ({ navigation }: SecondQuestionScreenProps) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null)

  const options = [
    { id: 1, label: 'Little or no ups and downs in value, lower returns' },
    {
      id: 2,
      label: 'Moderate ups and downs in value, slightly higher returns'
    },
    { id: 3, label: 'Extreme ups and downs in value, high potential returns' }
  ]

  const onSelectOption = (id: number) => {
    setSelectedOption(id)
  }

  const onNext = () => {
    if (selectedOption !== null) {
      navigation.navigate('LongerInvestmentsScreen')
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name='arrow-back-outline' size={24} color='black' />
        </TouchableOpacity>
        <Text style={styles.headerText}>
          Which of the following outcomes do you prefer?
        </Text>
      </View>

      <Text style={styles.description}>
        Different people have different preferences. understanding yours helps
        us provide a more suitable portfolio.
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

export default SecondQuestionScreen

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
    marginHorizontal: 8
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
    borderColor: '#6B4EFF',
    color: '#fff'
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
    paddingHorizontal: 24,
    width: '100%',
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
