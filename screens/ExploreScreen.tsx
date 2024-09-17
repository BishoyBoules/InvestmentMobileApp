import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  StatusBar
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../App'

const servicesData = [
  {
    id: '1',
    title: 'Health Insurance',
    icon: require('../assets/dummy.png')
  },
  { id: '2', title: 'Tax Advisory', icon: require('../assets/dummy.png') }
]
type ExploreScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'ExploreScreen'
>
const ExploreScreen = ({ navigation }: ExploreScreenProps) => {
  const renderServiceItem = ({
    item
  }: {
    item: { id: string; title: string; icon: any }
  }) => (
    <View style={styles.serviceItem}>
      <Image source={item.icon} style={styles.serviceIcon} />
      <Text style={styles.serviceTitle}>{item.title}</Text>
    </View>
  )
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://via.placeholder.com/32' }}
          style={styles.profileImage}
        />
        <Ionicons
          name='notifications-outline'
          size={24}
          color='white'
          style={styles.notificationIcon}
        />
      </View>
      <ScrollView style={styles.content}>
        <View style={styles.planOverview}>
          <View>
            <Text style={styles.planTitle}>Gratuity Plan</Text>
            <Text style={styles.planAmount}>10,984</Text>
            <Text style={styles.currency}>AED</Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.viewMoreText}>View More</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.details}>
          <View style={styles.quickActions}>
            <TouchableOpacity
              style={styles.actionButton}
              onPress={() => navigation.navigate('GoalScreen')}
            >
              <View style={styles.actionIcon}>
                <Ionicons name='add' size={24} color='#6B4EFF' />
              </View>
              <Text style={styles.actionText}>New goal</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <View style={styles.actionIcon}>
                <Ionicons name='arrow-forward' size={24} color='#6B4EFF' />
              </View>
              <Text style={styles.actionText}>Add fund</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <View style={styles.actionIcon}>
                <Ionicons name='list' size={24} color='#6B4EFF' />
              </View>
              <Text style={styles.actionText}>Statement</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.promotionContainer}>
            <TouchableOpacity style={styles.promotionCard}>
              <Text style={styles.promotionTitle}>
                Earn daily on your savings!
              </Text>
              <Text style={styles.promotionAction}>START SAVING</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.promotionCard}>
              <Text style={styles.promotionTitle}>
                Invest and grow your money today!
              </Text>
              <Text style={styles.promotionAction}>START INVESTING</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Service Hub</Text>
            <Ionicons
              name='chevron-forward-outline'
              size={20}
              color='#6B4EFF'
            />
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.horizontalScroll}
          >
            <TouchableOpacity style={styles.serviceCard}>
              <Ionicons name='add-outline' size={40} color='#6B4EFF' />
              <Text style={styles.serviceTitle}>Cash in advance</Text>
              <Text style={styles.serviceSubtitle}>
                You can now avail up to 50% of your total balance
              </Text>
              <TouchableOpacity>
                <Text style={styles.requestCashButton}>Request Cash</Text>
              </TouchableOpacity>
            </TouchableOpacity>

            <TouchableOpacity style={styles.serviceCard}>
              <Image
                source={require('../assets/car.png')}
                style={styles.serviceImage}
              />
              <Text style={styles.serviceTitle}>Car Insurance</Text>
            </TouchableOpacity>
          </ScrollView>

          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Financial Academy</Text>
            <Ionicons
              name='chevron-forward-outline'
              size={20}
              color='#6B4EFF'
            />
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.horizontalScroll}
          >
            <TouchableOpacity style={styles.academyCard}>
              <Image
                source={require('../assets/car.png')}
                style={styles.academyImage}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.academyCard}>
              <Image
                source={require('../assets/car.png')}
                style={styles.academyImage}
              />
            </TouchableOpacity>
          </ScrollView>
          <FlatList
            data={servicesData}
            renderItem={renderServiceItem}
            keyExtractor={item => item.id}
            horizontal
            contentContainerStyle={styles.servicesList}
          />
        </View>
      </ScrollView>
    </View>
  )
}

export default ExploreScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6B4EFF',
    paddingTop: 80,
    position: 'relative'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    position: 'absolute',
    top: 60,
    left: 20,
    width: '100%'
  },
  content: {
    flex: 1,
    marginTop: 30
  },
  details: {
    backgroundColor: '#fff',
    borderTopEndRadius: 20,
    borderTopLeftRadius: 20,
    paddingBottom: 20,
    paddingHorizontal: 30
  },
  profileImage: {
    width: 32,
    height: 32,
    borderRadius: 16
  },
  notificationIcon: {
    backgroundColor: '#6B4EFF',
    padding: 6,
    borderRadius: 20
  },
  planOverview: {
    backgroundColor: '#6B4EFF',
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 20,
    marginBottom: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'relative'
  },
  planTitle: {
    color: 'white',
    fontSize: 16,
    marginBottom: 8
  },
  planAmount: {
    color: 'white',
    fontSize: 45,
    fontWeight: '700'
  },
  currency: {
    color: 'white',
    fontSize: 16,
    top: 60,
    left: 150,
    position: 'absolute'
  },
  viewMoreText: {
    color: 'white',
    textDecorationLine: 'none',
    marginTop: 70
  },
  quickActions: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 24,
    marginTop: 24
  },
  actionButton: {
    alignItems: 'center',
    marginHorizontal: 5
  },
  actionIcon: {
    padding: 12,
    marginBottom: 8,
    borderRadius: 15,
    borderColor: 'lightgray',
    borderWidth: 1
  },
  actionText: {
    marginTop: 8,
    color: '#000',
    fontSize: 14
  },
  promotionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24
  },
  promotionCard: {
    flex: 1,
    marginHorizontal: 4,
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3
  },
  promotionTitle: {
    fontSize: 16,
    marginBottom: 8
  },
  promotionAction: {
    color: '#6B4EFF',
    fontWeight: 'bold'
  },
  servicesHeader: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 16
  },
  servicesHeaderTitle: {
    color: '#6B4EFF',
    fontWeight: 'bold'
  },
  servicesList: {
    paddingVertical: 16
  },
  serviceItem: {
    alignItems: 'center',
    marginHorizontal: 12
  },
  serviceIcon: {
    width: 60,
    height: 60,
    marginBottom: 8
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  horizontalScroll: {
    marginBottom: 24
  },
  serviceCard: {
    width: 150,
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginRight: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    alignItems: 'center'
  },
  serviceTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 8
  },
  serviceSubtitle: {
    fontSize: 12,
    textAlign: 'center',
    color: '#777',
    marginTop: 4
  },
  requestCashButton: {
    marginTop: 8,
    color: '#6B4EFF',
    fontWeight: 'bold'
  },
  serviceImage: {
    width: 50,
    height: 50,
    marginBottom: 8
  },
  academyCard: {
    width: 150,
    height: 150,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    marginRight: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3
  },
  academyImage: {
    width: '100%',
    height: '100%',
    borderRadius: 12
  }
})
