import { NativeStackScreenProps } from 'react-native-screens/lib/typescript/native-stack/types'
import { Button, Image, StyleSheet, Text, View } from 'react-native'
import { RootStackParamList } from '../App'

type UnderstandingProfileProps = NativeStackScreenProps<
  RootStackParamList,
  'UnderstandingProfile'
>

const UnderstandingProfile = ({ navigation }: UnderstandingProfileProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Understanding your risk profile</Text>
      <Text style={styles.subtitle}>
        Answer 6 easy questions to help us recommend an investment profile
        suitable for you.
      </Text>
      <View style={styles.imgContainer}>
        <Image source={require('../assets/suitable.png')} style={styles.img} />
        <Text style={styles.imgText}>Find the suitable portfolio for you</Text>
      </View>
      <Button
        title="Let's start"
        onPress={() => {
          navigation.navigate('FirstQuestionScreen')
        }}
      />
    </View>
  )
}

export default UnderstandingProfile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 100,
    backgroundColor: '#fff'
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
  imgContainer: {
    flex: 1,
    padding: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  img: {
    width: 300,
    height: 180
  },
  imgText: {
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    width: 250
  }
})
