import {useRef, useState} from "react";
import {Image, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {SocialLogin} from "@/components";

import { OtpInput } from "react-native-otp-entry";

import LottieView from 'lottie-react-native';

export default function VerificationScreen(){

    const animation = useRef<LottieView>(null);
    const [otpChecked, setOptChecked] = useState<boolean>(false)

    return(
        <View style={styles.container}>
            <Image style={styles.logo} source={require('@/assets/dorea_logo.png')} alt={'logo'}/>

            <View style={styles.form}>
                <Text style={styles.title}>{!otpChecked? 'Vérification':'Félicitation'}</Text>

                <Text style={{textAlign: "center", marginBottom: 50}}>
                    {!otpChecked?
                    `un message contenant un code à 4 caractère vous envoyé par mail ou SMS. Veuillez le renseigner dans le champ ci-dessous.`:`Votre compte à été vérifié avec succès, veuillez completer votre profil`
                    }
                </Text>

                {!otpChecked?
                    <OtpInput numberOfDigits={4} onTextChange={(text) => console.log(text)}
                        theme={{
                            containerStyle: styles.pinsContainer,
                            pinCodeContainerStyle: styles.pinContainer,
                            focusStickStyle: styles.focus,
                            focusedPinCodeContainerStyle: styles.focus
                        }}
                    />
                        :
                    <LottieView autoPlay ref={animation}
                    style={{width: 200, height: 200}} source={require("@/assets/animation/checked-animation.json")}/>
                }

                {
                    !otpChecked?
                    <TouchableOpacity style={styles.btn} onPress={()=>setOptChecked(value => !value)}>
                        <Text style={styles.btn_text}>Vérifier</Text>
                    </TouchableOpacity>
                        :
                    <TouchableOpacity style={styles.btn} onPress={()=>setOptChecked(value => !value)}>
                        <Text style={styles.btn_text}>Complèter</Text>
                    </TouchableOpacity>
                }

                {
                    !otpChecked &&
                        <Pressable>
                            <Text>Renvoyer le code</Text>
                        </Pressable>

                }
                {
                    !otpChecked &&
                    <SocialLogin/>
                }

            </View>
        </View>
    )
}


const styles = StyleSheet.create({

    container:{
        flex: 1,
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        textAlign: 'center'
    },
    logo:{
        resizeMode: 'contain',
        width: 150,
        height: 45,
    },
    title:{
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: "center"
    },
    form:{
        width: '70%',
        display: 'flex',
        flexDirection: 'column',
        textAlign: "center",
        alignItems: "center",
        gap: 15
    },
    btn:{
        backgroundColor: 'red',
        height: 44,
        width: '100%',
        borderRadius: 3,
        display: 'flex',
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center"
    },
    btn_text:{
        color: '#fff',
        fontSize: 16
    },
    pinsContainer:{
        display: "flex",
        flexDirection: "row",
        gap: 4
    },
    pinContainer: {
        borderRadius: 5,
        flex: 1
    },
    focus:{

    },
    stick:{
        borderStyle: "solid",
        borderColor: "red",
        color: "red",
        backgroundColor: "red"
    }
})