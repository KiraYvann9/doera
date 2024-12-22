import {Image, Pressable, StyleSheet, Text, View} from "react-native";

export const SocialLogin =()=>{
    return(
        <View style={styles.container}>
            <Pressable style={styles.btn}>
                <Image style={styles.img} source={require('@/assets/socials/google.png')} width={40} height={40}/>
            </Pressable>
            <Text>ou</Text>
            <Pressable style={styles.btn}>
                <Image style={styles.img} source={require('@/assets/socials/apple.png')} width={40} height={40}/>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    btn:{
        marginTop: 20,
        width: '40%',
        height: 40,
        borderStyle: "solid",
        borderColor: '#c1c1c1',
        borderWidth: .2,
        borderRadius: 5,
        display: 'flex',
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    img:{
        resizeMode: "contain",
        height: 30,
        width: 30

    }
})