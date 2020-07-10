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
        marginTop: '10%', 
        fontSize: 36, 
        color: '#85EAD5',
    },

    txtInputAll: {
        height: 47,
        width: '95%',
        backgroundColor: '#FFFFFF',
        borderRadius: 15,
        marginTop: '5%',
        fontSize: 28,
        paddingHorizontal: 15,
        fontFamily: "Rajdhani_400Regular"
    },
    txtInputDate: {
        height: 47,
        width: '75%',
        backgroundColor: '#FFFFFF',
        borderRadius: 15,
        marginTop: '3%',
        fontSize: 28,
        paddingHorizontal: 10,
        fontFamily: "Rajdhani_400Regular"
    },
    txtDate: {
        fontFamily: "Rajdhani_400Regular", 
        color: '#fff',
        fontSize: 20,
        marginTop: '5%'
    },
    containerDate: {
        flexDirection: 'row'
    },
    calendar: {
        marginTop: '3%',
        marginLeft: 'auto',
        marginRight: '10%'

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
    containerCheckBox: {
        flexDirection: 'row' 
    },
    txtCheckBox: {
        fontFamily: "Rajdhani_400Regular", 
        color: '#fff',
        fontSize: 17,
        marginTop: '5%'
    },
    checkBox: {
        marginRight: '5%',
        marginTop: '5%'
    },


});