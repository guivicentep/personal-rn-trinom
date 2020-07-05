import React from 'react';

import { ScrollView, Post, View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Rajdhani_400Regular, useFonts, Rajdhani_600SemiBold, } from '@expo-google-fonts/rajdhani';
import { AntDesign } from '@expo/vector-icons';
import { AppLoading } from 'expo';
import  imgEbook  from '../../assets/capa_ebook1.png';
import  imgEbook2 from '../../assets/capa_ebook2.png';
import  imgEbook3 from '../../assets/capa_ebook3.png';
import  imgEbook4 from '../../assets/capa_ebook4.png';
import  imgEbook5 from '../../assets/capa_ebook5.png';
import imgUser from '../../assets/icon_user.png';
import imgLogo from '../../assets/logoT.png';

import styles from './styles';

export default function Ebooks() {
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
                    <Text style={styles.txtHeader}>E-books</Text>
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
                    <View style={styles.containerEbook}>
                        <Image source={imgEbook} style={styles.imgEbook}></Image>
                        <View style={styles.txtEbook}>
                            <Text style={styles.titleContainer}>Marketing Digital na Prática</Text>
                            <Text style={styles.subTitleContainer}>Autor: Paulo Fastino</Text>
                        </View>
                        <TouchableOpacity style={styles.buttonDownload}>
                            <AntDesign name="download" size={32} color="black"></AntDesign>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.containerEbook}>
                        <Image source={imgEbook2} style={styles.imgEbook}></Image>
                        <View style={styles.txtEbook}>
                            <Text style={styles.titleContainer}>Small data </Text>
                            <Text style={styles.subTitleContainer}>Autor: Martin Lindstrom</Text>
                        </View>
                        <TouchableOpacity style={styles.buttonDownload}>
                            <AntDesign name="download" size={32} color="black"></AntDesign>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.containerEbook}>
                        <Image source={imgEbook3} style={styles.imgEbook}></Image>
                        <View style={styles.txtEbook}>
                            <Text style={styles.titleContainer}>Crie seu mercado no mundo digital </Text>
                            <Text style={styles.subTitleContainer}>Autor: Bruno de Oliveira</Text>
                        </View>
                        <TouchableOpacity style={styles.buttonDownload}>
                            <AntDesign name="download" size={32} color="black"></AntDesign>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.containerEbook}>
                        <Image source={imgEbook4} style={styles.imgEbook}></Image>
                        <View style={styles.txtEbook}>
                            <Text style={styles.titleContainer}>Neuromarketing </Text>
                            <Text style={styles.subTitleContainer}>Autor: Darrer Bridger</Text>
                        </View>
                        <TouchableOpacity style={styles.buttonDownload}>
                            <AntDesign name="download" size={32} color="black"></AntDesign>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.containerLastEbook}>
                        <Image source={imgEbook5} style={styles.imgEbook}></Image>
                        <View style={styles.txtEbook}>
                            <Text style={styles.titleContainer}>A lógica do consumo </Text>
                            <Text style={styles.subTitleContainer}>Autor: Martin Lindstrom</Text>
                        </View>
                        <TouchableOpacity style={styles.buttonDownload}>
                            <AntDesign name="download" size={32} color="black"></AntDesign>
                        </TouchableOpacity>
                    </View>
                    

                </ScrollView>
            </View>

        );
    }
}