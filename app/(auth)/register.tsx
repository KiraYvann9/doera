import {Image, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {Feather} from "@expo/vector-icons";
import {SocialLogin} from "@/components";
import {useState} from "react";
import {Link} from "expo-router";

import {z} from "zod"
import {useForm} from "react-hook-form";
import {zodResolver} from '@hookform/resolvers/zod'

export default function RegisterScreen(){
    const [showPWD, setShowPWD] = useState(false)
    return(
        <View style={styles.container}>
            <Image style={styles.logo} source={require('@/assets/dorea_logo.png')} alt={'logo'}/>

            <View style={styles.form}>
                <Text style={styles.title}> Créer un compte</Text>

                <TextInput style={styles.inputField} keyboardType={'default'} placeholder={'eamil ou N°Téléphone'}/>
                <View style={styles.passwordInput}>
                    <TextInput secureTextEntry={showPWD} style={styles.inputField} keyboardType={'default'} placeholder={'Mot de passe'}/>
                    <Feather onPress={()=>setShowPWD((value)=>!value)} name={showPWD?'eye-off':'eye'} size={18} style={{position: 'absolute', top: 13, right: 10}} color={"#c1c1c1"}/>
                </View>
                <View style={styles.passwordInput}>
                    <TextInput secureTextEntry={showPWD} style={styles.inputField} keyboardType={'default'} placeholder={'Confirmer mot de passe'}/>
                    <Feather onPress={()=>setShowPWD((value)=>!value)} name={showPWD?'eye-off':'eye'} size={18} style={{position: 'absolute', top: 13, right: 10}} color={"#c1c1c1"}/>
                </View>

                <Link href={'/verification'} asChild>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.btn_text}>S'inscrire</Text>
                    </TouchableOpacity>
                </Link>

                <Text>Vous avez déjà un compte ? <Link href={"/"} style={{color: 'blue'}}>Connectez vous</Link></Text>


                <SocialLogin/>
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
        marginBottom: 30,
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
    inputField:{
        width: '100%',
        height: 44,
        borderStyle: 'solid',
        borderWidth: .5,
        borderRadius: 3,
        borderColor: '#c1c1c1',
        fontSize: 16,
        paddingHorizontal: 10
    },
    passwordInput:{
        width: "100%",
        position: "relative"
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
    }
})