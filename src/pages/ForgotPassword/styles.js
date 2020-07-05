import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({

    container: {
        flex: 1,
        paddingHorizontal: 25,
        paddingTop: Constants.statusBarHeight + 6,
        backgroundColor: '#1D3570',
    },


    body: {
        marginTop: '20%'
    },
    btnBack: {
        flexDirection: 'row'
    },
    
    txtBack: {
        fontFamily: "Rajdhani_400Regular",
        fontSize: 20,
        color: '#fff',
        marginTop: 4

    },

    txtHelp: {
        fontFamily: "Rajdhani_400Regular", 
        marginTop: '20%', 
        fontSize: 36, 
        color: '#85EAD5',
    },

    txtEmail: {
        fontFamily: "Rajdhani_400Regular",
        fontSize: 20,
        color: '#fff',
        marginTop: '15%'

    },

    txtInputEmail: {
        height: 47,
        width: '90%',
        backgroundColor: '#FFFFFF',
        borderRadius: 15,
        marginTop: '5%',
        fontSize: 28,
        paddingHorizontal: 15,
        fontFamily: "Rajdhani_400Regular"

    },
    btnNext: {
        flexDirection: 'row',
        marginTop: '15%',
        marginLeft: 'auto'
    },

    txtNext: {
        fontFamily: "Rajdhani_400Regular",
        fontSize: 20,
        color: '#fff',
        marginTop: 4

    },


});