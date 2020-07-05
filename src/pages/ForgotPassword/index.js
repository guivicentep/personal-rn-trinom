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

    function navigateToNextStep() {
        navigation.navigate('ForgotPassword2');
    }

    if (!fontsLoaded){
        return <AppLoading />
    } else {
    
    return (
            <View style={styles.container}>
                <View style={styles.body}>
                <TouchableOpacity style={styles.btnBack} onPress={navigateToLogin}>
                    <AntDesign name="left" size={33} color="white" />
                    <Text style={styles.txtBack}>Login</Text>
                </TouchableOpacity>
                    <Text style={styles.txtHelp}>
                        A gente te ajuda!</Text>
                    <Text style={styles.txtEmail}>Qual é o seu e-mail?</Text>
                    <TextInput style={styles.txtInputEmail} placeholder="E-mail" />
                </View>
                <TouchableOpacity style={styles.btnNext} onPress={navigateToNextStep}>
                    <Text style={styles.txtNext}>Próximo</Text>
                    <AntDesign name="right" size={33} color="white" />
                </TouchableOpacity>
            </View>
    );
    }
}