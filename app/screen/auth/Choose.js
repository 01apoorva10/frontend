import React from "react"
import { Text } from "react-native-paper"
import Background from "../../../features/Background"
import Button from "../../../features/Button"
import BackButton from '../../../features/BackButton';
// import uploadphoto from '../../screen/auth/uploadphoto'

export default function Choose({ navigation }) {
    return (
        <Background>
            <BackButton goBack={navigation.goBack} />
            <Button mode="contained" onPress={() => navigation.navigate("Quiz1")} color='#F8772E'>
                Quiz
            </Button>
            <Button mode="contained" onPress={() => navigation.navigate("uploadphoto")} color='#F8772E'>
                Upload Picture
            </Button>
            <Button mode="contained" onPress={() => navigation.navigate("Quiz1")} color='#F8772E'>
                QR Scan
            </Button>
        </Background>

    )
}
