import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import imgUser from '../../assets/icon_user.png';
import imgLogo from '../../assets/logoT.png';
import { Rajdhani_400Regular, Rajdhani_600SemiBold, useFonts } from '@expo-google-fonts/rajdhani';
import { AppLoading } from 'expo';

import styles from './styles';

export default function Home() {
    let [fontsLoaded] = useFonts({
        Rajdhani_400Regular, 
        Rajdhani_600SemiBold
      });

      const navigation = useNavigation();

      function navigateToNewsletter() {
          navigation.navigate('Newsletter');
      }

        function navigateToEbooks() {
        navigation.navigate('Ebooks');
        }


        
    
    if(!fontsLoaded){
        return <AppLoading />
    } else {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image style={styles.imgUser} source={imgUser}></Image>
                    <Text style={styles.txtHello}>Olá, <Text style={styles.txtHelloBold}>Leticia!</Text></Text>
                    <Image style={styles.imgLogo} source={imgLogo}></Image>
                </View>
                <View style={styles.body}>
                    <Text style={styles.txtBody}>O que você deseja fazer?</Text>

                    <View style={styles.btnNw}>
                        <View>
                        <Text style={styles.txtNwOne}>Ler</Text>
                        <Text style={styles.txtNwTwo}>Newsletters</Text>
                        </View>
                        <View>
                        <TouchableOpacity style={styles.arrow1} onPress={navigateToNewsletter}>
                            <Ionicons name="ios-arrow-dropright" size={50}/>
                        </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.btnNw}>
                        <View>
                        <Text style={styles.txtNwOne}>Baixar</Text>
                        <Text style={styles.txtNwTwo}>E-books</Text>
                        </View>
                        <View>
                        <TouchableOpacity style={styles.arrow2} onPress={navigateToEbooks}>
                            <Ionicons name="ios-arrow-dropright" size={50}/>
                        </TouchableOpacity>
                        </View>
                    </View>

                </View>
                
            </View>
        );
    }
}