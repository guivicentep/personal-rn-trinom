import React from 'react';
import { ScrollView, View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import imgLogo from '../../assets/img_logoTrinom.png';
import { Rajdhani_400Regular, useFonts } from '@expo-google-fonts/rajdhani';
import { AppLoading } from 'expo';

import styles from './styles';

import { TextInput } from 'react-native-gesture-handler';

export default function Login() {
    let [fontsLoaded] = useFonts({
        Rajdhani_400Regular
      });

    const navigation = useNavigation();

    function navigateToHome() {
        navigation.navigate('Home');
    }

    function navigateToForgotPassword() {
        navigation.navigate('ForgotPassword');
    }
    if (!fontsLoaded){
        return <AppLoading />
    } else {
    
    return (
            <ScrollView style={styles.container}>

                <View style={styles.body}>
                    <Image source={imgLogo} style={styles.imgLogo} />
                    <Text style={styles.txtWelcome}>
                        Seja bem vindo!</Text>

                    <TextInput style={styles.txtLogin} placeholder="Login" />
                    <TextInput style={styles.txtLogin} placeholder="Senha" />

                    <TouchableOpacity style={styles.btnLogin} onPress={navigateToHome}>
                        <Text style={styles.btnLoginText}>Entrar</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.footer}>
                    <TouchableOpacity style={styles.btnPassword} onPress={navigateToForgotPassword}>
                        <Text style={styles.txtFooter}>Esqueci a senha</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnRegister}>
                        <Text style={styles.txtFooter}>Cadastrar</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
    );
    }
}