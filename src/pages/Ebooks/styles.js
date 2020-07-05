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

    txtHeader: {
        fontFamily: 'Rajdhani_600SemiBold',
        fontSize: 25,
        marginLeft: 'auto',
        marginTop: '1%'
    },

    imgLogoHeader: {
        marginLeft: 'auto',
    },

    imgEbook: {
        borderRadius: 5,
        marginTop: '3%',
        marginLeft: '4%',
        marginBottom: '3%'
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

    containerEbook: {
        backgroundColor: '#FFF',
        borderRadius: 10, 
        marginHorizontal: '6%',
        marginTop: '8%',
        flexDirection: 'row',
        height: 108

    },
    containerLastEbook: {
        backgroundColor: '#FFF',
        borderRadius: 10, 
        marginHorizontal: '6%',
        marginTop: '8%',
        flexDirection: 'row',
        height: 108,
        marginBottom: 30

    },
    txtEbook:{
        justifyContent: 'space-between'
    },

    titleContainer: {
        fontFamily: 'Rajdhani_600SemiBold',
        fontSize: 17,
        marginTop: '8%',
        marginLeft: '3%'
    },

    subTitleContainer: {
        fontFamily: 'Rajdhani_400Regular',
        fontSize: 14,
        marginVertical: '10%',
        marginHorizontal: '3%'
    },
    buttonDownload:{
        marginTop: 'auto',
        marginBottom: '5%',
        marginLeft: 'auto',
        marginRight: '5%'
    },






})
