import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        
        paddingTop: Constants.statusBarHeight + 6,
        backgroundColor: '#FFF',
    },
    header: {
        flexDirection: 'row',
        height: '9%',
        width: '100%',
        backgroundColor: '#FFF',
        paddingHorizontal: 25,
    },
    imgUserHeader:{
        borderRadius: 25,
        borderWidth: 1,
        marginLeft: '3%'
    },
    imgLogoHeader: {
        marginLeft: '18%',
    },
    txtHeader: {
        fontFamily: 'Rajdhani_600SemiBold',
        fontSize: 25,
        marginLeft: '15%',
        marginTop: '1%'
    },

    buttonsNavigation: {
        flexDirection: 'row'
    },
    buttonBack:{
        marginTop: '5%',
        marginLeft: '5%'
    },
    buttonSearch:{
        marginTop: '5%',
        marginRight: '8%',
        marginLeft: 'auto'
    },
    bodyImg: {
        borderRadius: 5,
        marginHorizontal: '6%',
        marginTop: '8%'
    },
    bodyImg2: {
        borderRadius: 5,
        marginHorizontal: '6%',
        marginTop: '7%'
    },


    body: {
        backgroundColor: '#1D3570',
        width: '100%',
        height: '91%',
        marginHorizontal: 0,
        
    },
    scrollBody: {
        backgroundColor: '#1D3570',
        width: '100%',
    },

    title: {
        fontFamily: 'Rajdhani_600SemiBold',
        fontSize: 20,
        marginTop: '3%',
        paddingHorizontal: '3%'
    },

    subTitle: {
        fontFamily: 'Rajdhani_400Regular',
        fontSize: 18,
        marginTop: '2%',
        marginBottom: '3%',
        marginHorizontal: '3%'
    },

    bodyText: {
        backgroundColor: '#FFF',
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 5,
        marginHorizontal: '6%'

    },



})
