import React, {useState} from 'react';
import { ScrollView, View, Text, TouchableOpacity, Picker } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign, FontAwesome5, Ionicons } from '@expo/vector-icons'; 
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
                    <TouchableOpacity style={styles.btnBack} onPress={navigateToLogin}>
                        <AntDesign name="left" size={33} color="white" />
                        <Text style={styles.txtBack}>Login</Text>
                    </TouchableOpacity>
                        <Text style={styles.txtHelp}>
                        Vamos começar?</Text>
                        <TextInput style={styles.txtInputAll} placeholder="Nome completo" />
                        <TextInput style={styles.txtInputAll} placeholder="Gênero" />
                        <Text style={styles.txtDate}>Data de nascimento</Text>
                        <View style={styles.containerDate}>
                        <TextInput style={styles.txtInputDate} placeholder="        /         /  " />
                        <FontAwesome5 name="calendar-alt" size={35} color="white" style={styles.calendar}/>
                        </View>
                        <TextInput style={styles.txtInputAll} placeholder="Eu sou" />
                        <TextInput style={styles.txtInputAll} placeholder="E-mail" />
                    <View style={styles.containerCheckBox}>
                        <Ionicons name="md-checkbox-outline" size={24} color="white" style={styles.checkBox}/>
                        <Text style={styles.txtCheckBox}>Desejo receber notificações de novas postagens</Text>
                    </View>
                        <TouchableOpacity style={styles.btnLogin} onPress={navigateToLogin}>
                        <Text style={styles.btnLoginText}>Continuar</Text>
                    </TouchableOpacity>

                </View>

            </View>
    );
    }
}