import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({

    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight + 6,
        backgroundColor: '#FFFFFF',
    },

    header: {
        flexDirection: 'row',
        height: '9%',
        width: '100%'
    },
    txtHello: {
        fontFamily: 'Rajdhani_400Regular',
        fontSize: 25,
        marginLeft: '5%',
        marginTop: '1%'
    },

    txtHelloBold: {
        fontFamily: 'Rajdhani_400Regular',
        fontWeight: 'bold'
    },


    imgUser:{
        borderRadius: 25,
        borderWidth: 1,
        marginLeft: '5%'
    },
    imgLogo: {
        marginLeft: '25%'
    },

    body: {
        height: '91%',
        backgroundColor: '#1D3570',
        paddingHorizontal: 25,
        width: '100%'
    },
    
    txtBody: {
        fontFamily: 'Rajdhani_400Regular',
        color: '#FFF',
        fontSize: 23, 
        marginTop: '10%'
    },

    txtNwOne: {
        fontFamily: 'Rajdhani_400Regular',
        fontSize: 23,
    },

    txtNwTwo: {
        fontFamily: 'Rajdhani_600SemiBold',
        fontSize: 33,
    },

    btnNw: {
        backgroundColor: '#FFF',
        borderRadius: 10,
        paddingHorizontal: 15,
        marginTop: 30,
        height: 117,
        justifyContent: 'center',
        flexWrap: 'wrap',
        width: '100%'
    },

    arrow1: {
        marginLeft: '45%'
    },

    arrow2: {
        marginLeft: '60%'
    }
});
