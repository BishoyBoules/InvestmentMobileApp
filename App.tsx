import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { GlobalProvider } from './hooks/GlobalContext'
import ExploreScreen from './screens/ExploreScreen'
import AcademyScreen from './screens/AcademyScreen'
import SavingsScreen from './screens/SavingsScreen'
import ServicesScreen from './screens/ServicesScreen'
import SettingsScreen from './screens/SettingsScreen'
import {
  AnalyticsProvider,
  createClient
} from '@segment/analytics-react-native'
import { AmplitudeSessionPlugin } from '@segment/analytics-react-native-plugin-amplitude-session'
import { FirebasePlugin } from '@segment/analytics-react-native-plugin-firebase'
import { IdfaPlugin } from '@segment/analytics-react-native-plugin-idfa'
import { View } from 'react-native'
import GoalScreen from './screens/GoalScreen'
import InitialAmountScreen from './screens/InitialAmountScreen'
import MonthlyTopUpScreen from './screens/MonthlyTopUpScreen'
import UnderstandingProfile from './screens/UnderstandingProfile'
import FirstQuestionScreen from './screens/FirstQuestionScreen'
import LongerInvestmentsScreen from './screens/LongerInvestmentsScreen'
import SecondQuestionScreen from './screens/SecondQuestionScreen'
import PortfolioDetailsScreen from './screens/PortfolioDetailsScreen'
import { ID, KEY } from '@env'

const segmentClient = createClient({
  writeKey: KEY
})

segmentClient.add({ plugin: new AmplitudeSessionPlugin() })
segmentClient.add({ plugin: new FirebasePlugin() })
segmentClient.add({ plugin: new IdfaPlugin() })

const Tab = createBottomTabNavigator()

export type RootStackParamList = {
  ExploreScreen: undefined
  GoalScreen: undefined
  MonthlyTopUpScreen: undefined
  InitialAmountScreen: undefined
  FirstQuestionScreen: undefined
  SecondQuestionScreen: undefined
  UnderstandingProfile: undefined
  LongerInvestmentsScreen: undefined
  SavingsScreen: undefined
  PortfolioDetailsScreen: undefined
}

export interface GoalData {
  goalName: string
  initialAmount: number
  deadline: string
  recurrence: string
}

const ExploreStack = createNativeStackNavigator<RootStackParamList>()

function ExploreStackScreen () {
  return (
    <ExploreStack.Navigator initialRouteName='ExploreScreen'>
      <ExploreStack.Screen
        name='ExploreScreen'
        component={ExploreScreen}
        options={{ headerShown: false }}
      />
      <ExploreStack.Screen
        name='GoalScreen'
        component={GoalScreen}
        options={{ headerShown: false }}
      />
      <ExploreStack.Screen
        name='InitialAmountScreen'
        component={InitialAmountScreen}
        options={{ headerShown: false }}
      />
      <ExploreStack.Screen
        name='MonthlyTopUpScreen'
        component={MonthlyTopUpScreen}
        options={{ headerShown: false }}
      />
      <ExploreStack.Screen
        name='UnderstandingProfile'
        component={UnderstandingProfile}
        options={{ headerShown: false }}
      />
      <ExploreStack.Screen
        name='FirstQuestionScreen'
        component={FirstQuestionScreen}
        options={{ headerShown: false }}
      />
      <ExploreStack.Screen
        name='SecondQuestionScreen'
        component={SecondQuestionScreen}
        options={{ headerShown: false }}
      />
      <ExploreStack.Screen
        name='LongerInvestmentsScreen'
        component={LongerInvestmentsScreen}
        options={{ headerShown: false }}
      />
      <ExploreStack.Screen
        name='SavingsScreen'
        component={SavingsScreen}
        options={{ headerShown: false }}
      />
      <ExploreStack.Screen
        name='PortfolioDetailsScreen'
        component={PortfolioDetailsScreen}
        options={{ headerShown: false }}
      />
    </ExploreStack.Navigator>
  )
}

export default function App () {
  return (
    <GlobalProvider>
      <View style={{ flex: 1, backgroundColor: '#6B4EFF' }}>
        <AnalyticsProvider client={segmentClient}>
          <NavigationContainer>
            <Tab.Navigator>
              <Tab.Screen
                name='Explore'
                component={ExploreStackScreen}
                options={{ headerShown: false }}
              />
              <Tab.Screen name='Academy' component={AcademyScreen} />
              {/* <Tab.Screen name='SavingsScreen' component={SavingsScreen} /> */}
              <Tab.Screen name='Services' component={ServicesScreen} />
              <Tab.Screen name='Settings' component={SettingsScreen} />
            </Tab.Navigator>
          </NavigationContainer>
        </AnalyticsProvider>
      </View>
    </GlobalProvider>
  )
}
