import { useState } from 'react'
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Switch,
  TouchableOpacity,
  KeyboardAvoidingView,
  Alert
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { NativeStackScreenProps } from 'react-native-screens/lib/typescript/native-stack/types'
import { RootStackParamList } from '../App'
import InputField from '../components/InputField'
import BackBtn from '../components/BackBtn'
import NextBtn from '../components/NextBtn'

type InitialAmountScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'InitialAmountScreen'
>

const InitialAmountScreen = ({ navigation }: InitialAmountScreenProps) => {
  const [amount, setAmount] = useState('')
  const [isMonthlyDeposit, setIsMonthlyDeposit] = useState(false)

  const isAmountValid = () => {
    return amount.trim() !== '' && parseFloat(amount) > 0
  }

  const handleNext = () => {
    if (isAmountValid()) {
      navigation.navigate('MonthlyTopUpScreen')
    } else {
      Alert.alert('Enter a valid amount')
    }
  }

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Your Initial amount</Text>
        <Text style={styles.subtitle}>
          Enter the amount you will start investing to achieve this goal.
        </Text>

        <InputField
          label='Enter amount in AED'
          value={amount}
          onChangeText={setAmount}
          placeholder='Enter amount'
          type='numeric'
        />

        <View style={styles.switchContainer}>
          <Text style={styles.switchLabel}>Schedule a monthly deposit</Text>
          <Switch
            value={isMonthlyDeposit}
            onValueChange={value => setIsMonthlyDeposit(value)}
          />
        </View>

        <Text style={styles.infoText}>
          <Ionicons
            name='information-circle-outline'
            size={16}
            color='#6B4EFF'
          />{' '}
          All bank transfers will require your explicit confirmation.
        </Text>
      </View>
      <View style={styles.buttons}>
        <BackBtn onPress={() => navigation.goBack()} />
        <NextBtn strValid={!!amount} handleNext={handleNext} />
      </View>
    </KeyboardAvoidingView>
  )
}

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

export default InitialAmountScreen
