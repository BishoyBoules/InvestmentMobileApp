import { useEffect } from 'react'
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native'
import Segment from '@segment/analytics-react-native'
import { useGlobalContext } from '../hooks/GlobalContext'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../App'

type PortfolioDetailsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'PortfolioDetailsScreen'
>

const PortfolioDetailsScreen = ({
  navigation
}: PortfolioDetailsScreenProps) => {
  const context = useGlobalContext()

  const portfolio = {
    goalName: context.goalName,
    initialGoalAmount: context.initialGoalAmount,
    goalDeadline: context.goalDeadline,
    selectedPortfolio: context.selectedPortfolio,
    setSelectedPortfolio: context.setSelectedPortfolio,
    paymentRecurrence: context.paymentRecurrence
  }

  useEffect(() => {
    Segment.screen('Portfolio Details', {
      section: 'Investments',
      goalName: portfolio.goalName,
      initialGoalAmount: portfolio.initialGoalAmount,
      goalDeadline: portfolio.goalDeadline,
      selectedPortfolio: portfolio.selectedPortfolio,
      setSelectedPortfolio: portfolio.setSelectedPortfolio,
      paymentRecurrence: portfolio.paymentRecurrence
    })
  }, [])

  const handleInvestNow = () => {
    Segment.track('Invest Now Clicked', {
      goalName: portfolio.goalName,
      initialGoalAmount: portfolio.initialGoalAmount,
      goalDeadline: portfolio.goalDeadline,
      selectedPortfolio: portfolio.selectedPortfolio,
      setSelectedPortfolio: portfolio.setSelectedPortfolio,
      paymentRecurrence: portfolio.paymentRecurrence
    })
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.goal}>{portfolio.goalName}</Text>
      <Text style={styles.goalAmount}>{portfolio.initialGoalAmount}</Text>

      <View style={styles.detailsContainer}>
        <Text style={styles.detailTitle}>Deadline:</Text>
        <Text style={styles.detailText}>{portfolio.goalDeadline}</Text>

        <Text style={styles.detailTitle}>Selected portfolio:</Text>
        <Text style={styles.detailText}>{portfolio.selectedPortfolio}</Text>

        <Text style={styles.detailTitle}>Payment recurrence:</Text>
        <Text style={styles.detailText}>{portfolio.paymentRecurrence}</Text>
      </View>

      <Button title='Invest Now' onPress={handleInvestNow} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff'
  },
  goal: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8
  },
  goalAmount: {
    fontSize: 16,
    marginBottom: 16,
    color: '#333'
  },
  detailsContainer: {
    marginBottom: 24
  },
  detailTitle: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 4,
    color: '#666'
  },
  detailText: {
    fontSize: 16,
    marginBottom: 12,
    color: '#000'
  }
})

export default PortfolioDetailsScreen
