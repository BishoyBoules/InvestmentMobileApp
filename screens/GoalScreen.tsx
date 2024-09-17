import { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
  StatusBar
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import * as ImagePicker from 'expo-image-picker'
import { RootStackParamList } from '../App'
import InputField from '../components/InputField'
import BackBtn from '../components/BackBtn'
import NextBtn from '../components/NextBtn'

type GoalScreenProps = NativeStackScreenProps<RootStackParamList, 'GoalScreen'>
const GoalScreen = ({ navigation }: GoalScreenProps) => {
  const [goalName, setGoalName] = useState('')
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const alert = 'Please write your goal name'

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync()
    if (status !== 'granted') {
      Alert.alert('Permission denied')
      return
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1
    })

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri)
    }
  }

  const handleNext = () => {
    if (goalName.trim()) {
      navigation.navigate('InitialAmountScreen')
    } else {
      Alert.alert('Enter your goal name first')
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} />
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.closeButton}
      >
        <Ionicons name='close' size={28} color='black' />
      </TouchableOpacity>
      <Text style={styles.title}>Create a Goal</Text>
      <Text style={styles.subtitle}>
        Write the name of the item or experience you're saving for.
      </Text>

      <View style={styles.goalCard}>
        <Image
          source={
            selectedImage
              ? { uri: selectedImage }
              : require('../assets/dummy.png')
          }
          style={styles.icon}
        />
        <TouchableOpacity style={styles.editIcon} onPress={pickImage}>
          <Ionicons name='pencil' size={16} color='#6B4EFF' />
        </TouchableOpacity>
      </View>

      <InputField
        label='Goal Name'
        value={goalName}
        onChangeText={setGoalName}
        placeholder='Goal Name'
        type='default'
      />

      <View style={styles.buttonContainer}>
        <BackBtn onPress={() => navigation.goBack()} />
        <NextBtn strValid={!!goalName} handleNext={handleNext} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
    paddingTop: 80
  },
  closeButton: {
    alignSelf: 'flex-start'
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 20
  },
  subtitle: {
    fontSize: 16,
    color: '#7d7d7d',
    marginTop: 10
  },
  goalCard: {
    backgroundColor: '#e9eaff',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    height: 120
  },
  icon: {
    width: '100%',
    height: '100%',
    borderRadius: 16
  },
  editIcon: {
    position: 'absolute',
    bottom: 15,
    right: 15,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 5
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#6B4EFF',
    fontSize: 18,
    marginTop: 30,
    paddingVertical: 5
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20
  }
})

export default GoalScreen
