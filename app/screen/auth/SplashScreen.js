import React from "react"
import { Text } from "react-native-paper"
import SplashBG from "../../../features/SplashBG"
import Background from "../../../features/Background"
import Logo from "../../../features/logo"
import Button from "../../../features/Button"


export default function SplashScreen({ navigation }) {
  return (
    <SplashBG>
      <Logo />
      <Text>Its helluva start, lets hunt the heist.</Text>
      <Button mode="contained" onPress={() => navigation.navigate("StartScreen")} color='#F8772E'>
        Start
      </Button>
    </SplashBG>
  )
}
