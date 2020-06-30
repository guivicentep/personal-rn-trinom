import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({

    container: {
        flex: 1,
        paddingHorizontal: 25,
        paddingTop: Constants.statusBarHeight + 6,
        backgroundColor: '#1D3570',
    },

    imgLogo: {
        resizeMode: 'contain',
        marginTop: '32%'
    },

    body: {
        alignItems: 'center'
    },

    txtLogin: {
        height: 57,
        width: '90%',
        backgroundColor: '#FFFFFF',
        borderRadius: 15,
        marginTop: '10%',
        fontSize: 28,
        paddingHorizontal: 15,
        fontFamily: "Rajdhani_400Regular"

    },

    txtWelcome: {
        fontFamily: "Rajdhani_400Regular", 
        marginTop: '20%', 
        fontSize: 36, 
        color: '#85EAD5',
    },

    btnLogin: {
        marginTop: '12%',
        borderRadius: 20,
        borderColor: '#FFFFFF',
        borderWidth: 0.5,
        width:'45%',
        height: 42,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnLoginText: {
        fontFamily: "Rajdhani_400Regular",
        fontSize: 20,
        color: '#FFFFFF'
    },
    footer:{
        marginTop: '40%',
        flexDirection: 'row',
        marginBottom: '15%'
    },
    btnPassword:{
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnRegister: {
        marginLeft: '13%',
        borderRadius: 20,
        borderColor: '#FFFFFF',
        borderWidth: 0.5,
        width:'45%',
        height: 42,
        alignItems: 'center',
        justifyContent: 'center',
        
    }
});