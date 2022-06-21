import { View, Text, Button, StyleSheet, TextInput, TouchableWithoutFeedback, ScrollView } from "react-native"
import React, { useState } from "react"
import { useNavigation } from "@react-navigation/native"
import { SafeAreaView } from "react-native-safe-area-context"
import MaterialIcon from "react-native-vector-icons/MaterialIcons"
import { styles, toastConfig } from "../../../style"
import Toast from "react-native-toast-message"
import Checkbox from "expo-checkbox"
import { useRegisterUserMutation } from "../../../services/userAuthApi"
import { storeToken } from "../../../services/AsyncStorageService"
import {MaterialCommunityIcons} from '@expo/vector-icons';

import Background from "../../../features/Background"
import Logo from "../../../features/logo"
import BackButton from "../../../features/BackButton"
import { Card } from "react-native-paper"
import { TouchableOpacity } from "react-native-gesture-handler"

const RegistrationScreen = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [password_confirmation, setPassword_confirmation] = useState("")
  const [tc, setTc] = useState(false)

  const clearTextInput = () => {
    setName("")
    setEmail("")
    setPassword("")
    setPassword_confirmation("")
    setTc(false)
  }
  const navigation = useNavigation()

  const [registerUser] = useRegisterUserMutation()

  const handleFormSubmit = async () => {
    if (name && email && password && password_confirmation && tc) {
      if (password === password_confirmation) {
        const formData = { name, email, password, password_confirmation, tc }
        const res = await registerUser(formData)
        if (res.data.status === "success") {
          await storeToken(res.data.token) // Store Token in Storage
          clearTextInput()
          navigation.navigate("Choose")
        }
        if (res.data.status === "failed") {
          Toast.show({
            type: "warning",
            position: "top",
            topOffset: 0,
            text1: res.data.message,
          })
        }
      } else {
        Toast.show({
          type: "warning",
          position: "top",
          topOffset: 0,
          text1: "Password and Confirm Password doesn't match",
        })
      }
    } else {
      Toast.show({
        type: "warning",
        position: "top",
        topOffset: 0,
        text1: "All fields are Required",
      })
    }
  }
  const[show,setShow]=React.useState(false);
  const[visible,setVisible]=React.useState(true);

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Toast config={toastConfig} />
      <SafeAreaView>
        
        <ScrollView keyboardShouldPersistTaps="handled">
          <Card>
            <Card.Content>
              <View style={{ marginHorizontal: 30 }}>
                <View style={styles.inputWithLabel}>
                  <Text style={styles.labelText}>Name</Text>
                  <TextInput style={styles.input} value={name} onChangeText={setName} placeholder="Write Your Name" />
                </View>
                <View style={[styles.inputWithLabel, { marginBottom: 10 }]}>
                  <Text style={styles.labelText}>Email</Text>
                  <TextInput style={styles.input} value={email} onChangeText={setEmail} placeholder="Write Your Email" keyboardType="email-address" />
                </View>
                <View style={styles.inputWithLabel}>
                  <Text style={styles.labelText}>Password</Text>
                  <TextInput style={styles.input} value={password} onChangeText={setPassword} placeholder="Write Your Password" secureTextEntry={visible} />
                  <TouchableOpacity style={styles.btnEye} onPress={()=>{
                      setVisible(!visible)
                      setShow(!show)
                    }
                  }>
                  <MaterialCommunityIcons 
                  name={show === false ? 'eye-outline':'eye-off-outline'}
                  size={30}
                  color={'rgba(225,225,225,0.7'}
                  />
                  </TouchableOpacity>
                </View>

                <View style={styles.inputWithLabel}>
                  <Text style={styles.labelText}>Confirm Password</Text>
                  <TextInput style={styles.input} value={password_confirmation} onChangeText={setPassword_confirmation} placeholder="Write Your Confirm Password" secureTextEntry={visible} />
                  <TouchableOpacity style={styles.btnEye} onPress={()=>{
                      setVisible(!visible)
                      setShow(!show)
                    }
                  }>
                  <MaterialCommunityIcons 
                  name={show === false ? 'eye-outline':'eye-off-outline'}
                  size={30}
                  color={'rgba(225,225,225,0.7'}
                  />
                  </TouchableOpacity>
                </View>
                <View style={{ flex: 1, flexDirection: "row" }}>
                  <Checkbox value={tc} onValueChange={setTc} color={tc ? "black" : undefined} />
                  <Text style={styles.labelText}>I agree to term and condition.</Text>
                </View>
                <View style={{ width: 200, alignSelf: "center", margin: 20 }}>
                  <Button title="Join" onPress={handleFormSubmit} color="#F8772E" />
                </View>
                <View style={{ alignItems: "flex-end" }}>
                  <TouchableWithoutFeedback
                    onPress={() => {
                      navigation.navigate("UserLogin")
                    }}
                  >
                    <Text style={{ fontWeight: "bold" }}>Already Registered ? Login</Text>
                  </TouchableWithoutFeedback>
                </View>
              </View>
            </Card.Content>
          </Card>
        </ScrollView>
      </SafeAreaView>
    </Background>
  )
}

export default RegistrationScreen