import { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Alert
} from 'react-native'
import { NativeStackScreenProps } from 'react-native-screens/lib/typescript/native-stack/types'
import { RootStackParamList } from '../App'
import InputField from '../components/InputField'
import BackBtn from '../components/BackBtn'
import NextBtn from '../components/NextBtn'

type MonthlyTopUpScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'MonthlyTopUpScreen'
>

const MonthlyTopUpScreen = ({ navigation }: MonthlyTopUpScreenProps) => {
  const [amount, setAmount] = useState('')
  const [monthDay, setMonthDay] = useState('')
  const [isMonthlyDeposit, setIsMonthlyDeposit] = useState(false)

  const isAmountValid = () => {
    return amount.trim() !== '' && parseFloat(amount) > 0
  }

  const handleNext = () => {
    if (isAmountValid()) {
      navigation.navigate('UnderstandingProfile')
    } else {
      Alert.alert('Enter a valid amount')
    }
  }

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Your monthly top up</Text>
        <Text style={styles.subtitle}>
          We'll remind you on a monthly basis to add this amount towards your
          goal.
        </Text>
        <InputField
          label='Enter amount in AED'
          value={amount}
          onChangeText={setAmount}
          placeholder='Enter amount'
          type='numeric'
        />
        <InputField
          label='On this day (monthly)'
          value={monthDay + ''}
          onChangeText={e => {
            setMonthDay(e)
            if (+e > 31) {
              setMonthDay('31')
            } else if (+e < 1) {
              setMonthDay('1')
            } else {
              setMonthDay(e)
            }
          }}
          placeholder='Enter day (1-31)'
          type='numeric'
        />
      </View>
      <View style={styles.buttons}>
        <BackBtn onPress={() => navigation.goBack()} />
        <NextBtn strValid={!!amount} handleNext={handleNext} />
      </View>
    </KeyboardAvoidingView>
  )
}
export default MonthlyTopUpScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 100,
    backgroundColor: '#fff'
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20
  },
  content: {
    flex: 1
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20
  },
  input: {
    borderWidth: 1,
    borderColor: '#6B4EFF',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 20
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20
  },
  switchLabel: {
    fontSize: 16,
    color: '#333'
  },
  infoText: {
    fontSize: 14,
    color: '#666',
    marginTop: 10
  }
})
