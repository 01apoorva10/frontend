import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import UserLoginScreen from "./app/screen/auth/UserLoginScreen"
import ShopTab from "./app/screen/shop/ShopTab"
import RegistrationScreen from "./app/screen/auth/RegistrationScreen"
import SendPasswordResetEmailScreen from "./app/screen/auth/SendPasswordResetEmailScreen"
import UserPanelTab from "./app/screen/UserPanelTab"
import { store } from "./app/store"
import { Provider } from "react-redux"

import SplashScreen from "./app/screen/auth/SplashScreen"
import StartScreen from "./features/StartScreen"
// import levels from "./app/screen/auth/levels"
import Choose from "./app/screen/auth/Choose"
// import Quiz1 from "./app/screen/auth/Quiz1"
import uploadphoto from "./app/screen/auth/uploadphoto"


const Stack = createNativeStackNavigator()

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="StartScreen" component={StartScreen} options={{ headerShown: false }} />
        <Stack.Screen name="UserLogin" component={UserLoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Registration" component={RegistrationScreen} options={{ headerShown: false }} />
        {/* <Stack.Screen name="levels" component={levels} options={{ headerShown: false }} /> */}
        <Stack.Screen name="Choose" component={Choose} options={{ headerShown: false }} />
        {/* <Stack.Screen name="Quiz1" component={Quiz1} options={{ headerShown: false }} /> */}
        <Stack.Screen name="uploadphoto" component={uploadphoto} options={{ headerShown: false }} />
        <Stack.Screen name="SendPasswordResetEmail" component={SendPasswordResetEmailScreen} options={{ title: "Forgot Password" }} />
        <Stack.Screen name="UserPanelTab" component={UserPanelTab} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}
