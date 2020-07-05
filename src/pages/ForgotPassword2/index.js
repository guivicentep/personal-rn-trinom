import React from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons'; 
import { Rajdhani_400Regular, useFonts } from '@expo-google-fonts/rajdhani';
import { AppLoading } from 'expo';

import styles from './styles';

import { TextInput } from 'react-native-gesture-handler';

export default function Login() {
    let [fontsLoaded] = useFonts({
        Rajdhani_400Regular
      });

    const navigation = useNavigation();

    function navigateToLogin() {
        navigation.navigate('Login');
    }
    if (!fontsLoaded){
        return <AppLoading />
    } else {
    
    return (
            <View style={styles.container}>
                <View style={styles.body}>
                    <Text style={styles.txtHelp}>
                    Enviamos um e-mail pra você.</Text>
                    <Text style={styles.txtEmail}>Para redefinir sua senha acesse o link que está no seu e-mail.</Text>
                    <TouchableOpacity style={styles.btnLogin} onPress={navigateToLogin}>
                        <Text style={styles.btnLoginText}>Entendi</Text>
                    </TouchableOpacity>
                </View>

            </View>
    );
    }
}