import {SafeAreaView, StyleSheet} from "react-native";
import {Stack} from "expo-router";

export default function AuthLayout(){
    return(
        <SafeAreaView style={styles.container}>
            <Stack>
                <Stack.Screen name={'index'} options={{headerShown: false}}/>
            </Stack>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})