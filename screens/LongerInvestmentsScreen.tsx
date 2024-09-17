import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { NativeStackScreenProps } from 'react-native-screens/lib/typescript/native-stack/types'
import { RootStackParamList } from '../App'

type LongerInvestmentsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'LongerInvestmentsScreen'
>

const LongerInvestmentsScreen = ({
  navigation
}: LongerInvestmentsScreenProps) => {
  const onGoToSavings = () => {
    navigation.navigate('SavingsScreen')
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name='arrow-back-outline' size={24} color='black' />
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>All good things in life take time!</Text>

      <Text style={styles.description}>
        Based on the time horizon you selected, we recommend you invest in our
        flexible savings account.
      </Text>

      <Image
        source={require('../assets/investment.png')}
        style={styles.image}
        resizeMode='contain'
      />

      <Text style={styles.infoText}>
        Investments require longer time horizons to materialize gains. Usually
        longer than 3 years.
      </Text>

      <View style={styles.footer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onGoToSavings} style={styles.savingsButton}>
          <Text style={styles.savingsButtonText}>Go to savings</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333'
  },
  description: {
    fontSize: 16,
    color: '#6c757d',
    marginBottom: 24
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 24
  },
  infoText: {
    fontSize: 16,
    color: '#6c757d',
    marginBottom: 24,
    textAlign: 'center'
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 'auto'
  },
  backButton: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    width: '50%'
  },
  backButtonText: {
    textAlign: 'center',
    color: '#6B4EFF',
    fontSize: 16
  },
  savingsButton: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    backgroundColor: '#6B4EFF',
    borderRadius: 8
  },
  savingsButtonText: {
    color: 'white',
    fontSize: 16
  }
})

export default LongerInvestmentsScreen
