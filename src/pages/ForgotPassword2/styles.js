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
        marginTop: '20%',
        alignItems: 'center',
    },

    txtHelp: {
        fontFamily: "Rajdhani_400Regular", 
        marginTop: '20%', 
        fontSize: 36, 
        color: '#85EAD5',
        textAlign: 'center'
    },

    txtEmail: {
        fontFamily: "Rajdhani_400Regular", 
        fontSize: 20, 
        color: '#FFF',
        textAlign: 'center',
        marginTop: '10%'
    },

    btnLogin: {
        marginTop: '12%',
        borderRadius: 20,
        backgroundColor: '#85EAD5',
        borderWidth: 0.5,
        width:'95%',
        height: 46,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnLoginText: {
        fontFamily: "Rajdhani_400Regular",
        fontSize: 20,
        color: '#1D3570'
    },


});