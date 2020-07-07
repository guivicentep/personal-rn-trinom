import React, {useState} from 'react';
import { ScrollView, View, Text, TouchableOpacity, Picker } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons'; 
import { Rajdhani_400Regular, useFonts } from '@expo-google-fonts/rajdhani';
import { AppLoading } from 'expo';

import styles from './styles';

import { TextInput } from 'react-native-gesture-handler';
import { onChange } from 'react-native-reanimated';

export default function Login() {
    let [fontsLoaded] = useFonts({
        Rajdhani_400Regular
      });

    const navigation = useNavigation();
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

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
                       Vamos começar?</Text>
                    <TextInput style={styles.txtInputEmail} placeholder="E-mail" />
                    <TextInput style={styles.txtInputEmail} placeholder="Gênero" />
                    <TextInput style={styles.txtInputEmail} placeholder="        /         /  " />
                    <TextInput style={styles.txtInputEmail} placeholder="E-mail" />
                    <TextInput style={styles.txtInputEmail} placeholder="E-mail" />

                </View>

            </View>
    );
    }
}