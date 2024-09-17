import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import { useForm, Controller } from 'react-hook-form'
import { useAnalytics } from '@segment/analytics-react-native'

const InvestmentGoalScreen = () => {
  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      goalName: '',
      initialAmount: '',
      goalDeadline: '',
      chosenPortfolio: '',
      paymentRecurrence: ''
    }
  })

  const onSubmit = (data: any) => {
    const { track } = useAnalytics()
    track('Investment Goal Created', {
      goalName: data.goalName,
      initialGoalAmount: data.initialAmount,
      goalDeadline: data.goalDeadline,
      chosenPortfolio: data.chosenPortfolio,
      paymentRecurrence: data.paymentRecurrence
    })
    reset()
  }

  return (
    <View style={styles.container}>
      <Text>Set Investment Goal</Text>
      <Controller
        control={control}
        name='goalName'
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholder='Goal Name'
            onChangeText={onChange}
            value={value}
            style={styles.input}
          />
        )}
      />
      <Controller
        control={control}
        name='initialAmount'
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholder='Initial Goal Amount'
            onChangeText={onChange}
            value={value}
            style={styles.input}
            keyboardType='numeric'
          />
        )}
      />
      <Controller
        control={control}
        name='goalDeadline'
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholder='Goal Deadline'
            onChangeText={onChange}
            value={value}
            style={styles.input}
          />
        )}
      />
      <Controller
        control={control}
        name='chosenPortfolio'
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholder='Chosen Portfolio'
            onChangeText={onChange}
            value={value}
            style={styles.input}
          />
        )}
      />
      <Controller
        control={control}
        name='paymentRecurrence'
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholder='Payment Recurrence'
            onChangeText={onChange}
            value={value}
            style={styles.input}
          />
        )}
      />
      <Button title='Submit Goal' onPress={handleSubmit(onSubmit)} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8
  }
})

export default InvestmentGoalScreen
