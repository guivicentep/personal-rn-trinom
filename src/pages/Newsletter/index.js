import React from 'react';

import { ScrollView, Post, View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Rajdhani_400Regular, useFonts, Rajdhani_600SemiBold, } from '@expo-google-fonts/rajdhani';
import { AntDesign } from '@expo/vector-icons';
import { AppLoading } from 'expo';
import  imgNw  from '../../assets/capa_news1.png';
import  imgNw2  from '../../assets/capa_news2.png';
import imgUser from '../../assets/icon_user.png';
import imgLogo from '../../assets/logoT.png';

import styles from './styles';

export default function Newsletter() {
    let [fontsLoaded] = useFonts({
        Rajdhani_400Regular, 
        Rajdhani_600SemiBold,
      });

      const navigation = useNavigation();

      function navigateToHome() {
          navigation.navigate('Home');
      }

      if(!fontsLoaded){
        return <AppLoading />
    } else {
        return(
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image style={styles.imgUserHeader} source={imgUser}></Image>
                    <Text style={styles.txtHeader}>Newsletters</Text>
                    <Image style={styles.imgLogoHeader} source={imgLogo}></Image>
                </View>

                <ScrollView style={styles.body}>
                    <View style={styles.buttonsNavigation}>
                        <TouchableOpacity style={styles.buttonBack} onPress={navigateToHome}>
                            <AntDesign name="left" size={40} color="white"></AntDesign>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonSearch}>
                            <AntDesign name="search1" size={40} color="white"></AntDesign>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.bodyImg}>
                        <Image source={imgNw}></Image>
                    </View>
                    <View style={styles.bodyText}>
                        <Text style={styles.title}>Atrair clientes pelo Instagram</Text>
                        <Text style={styles.subTitle}>Veja nossas dicas de como impulsionar suas vendas com uma conta comercial!</Text>
                    </View>
                    <View style={styles.bodyImg2}>
                        <Image source={imgNw2}></Image>
                    </View>
                    <View style={styles.bodyText}>
                        <Text style={styles.title}>Atrair clientes pelo Instagram</Text>
                        <Text style={styles.subTitle}>Crie uma conta para sua empresa e melhore a experiência do seu usuário.</Text>
                    </View>
                </ScrollView>
            </View>

        );
    }
}