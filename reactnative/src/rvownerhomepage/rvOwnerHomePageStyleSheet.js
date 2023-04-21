import { StyleSheet } from "react-native";

export default StyleSheet.create({

    // css for linear gradient background
    linearGradient: {
        paddingRight: 15,
        paddingLeft: 15,
        height: '100%',
        // ...StyleSheet.absoluteFillObject,
    },

    // css for top all items
    top_icons: {
        flexDirection: 'row',
        // marginTop: 10,
        justifyContent: 'space-around'
    },

    // css for RV-Hero logo
    logo_icon: {
        height: 110,
        width: 110,
        // marginTop: 30
    },

    // css for RV-Hero logo container
    logo_container: {
        width: '40%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    // css for signin container
    signin_container: {
        width: '40%',
        alignItems: 'center',
        justifyContent: 'center',
        alignItems: 'flex-end',
        marginRight: 15
    },

    signin_touchable_container: {
        // alignItems: 'flex-end',
    },

    // css for signin text
    signin_text: {
        textDecorationLine: 'underline',
        fontFamily: 'UberMove-Regular',
        color: 'black',
        textDecorationColor: 'black'
    },

    // css for signup container
    signup_container: {
        width: '20%',
        justifyContent: 'center'
    },

    // css for signup touchable container
    signup_touchable_container: {
        width: '90%',
        height: 30,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },

    // css for signup text
    signup_text: {
        color: 'white',
        fontFamily: 'UberMove-Regular',
    },

    top_heading: {
        justifyContent: 'space-around'
    },

    // css for googlw auto complete component
    google_location_search: {
        marginTop: 5,
        justifyContent: 'space-around'
    },

    // css for radio button
    service_radio_button: {
        marginTop: 5,
        // alignItems: 'center',
        justifyContent: 'space-around'
    },

    // css for radio button container
    rvowner_radio_button_conatiner: {
        justifyContent: 'flex-start',
        marginLeft: 30,
        marginTop: 10
    },

    // css for schedule button container 
    schedule_button: {
        marginTop: 10,
        // alignItems: 'center',
        justifyContent: 'space-around'
    },

    // css for schedule button background
    schedule_button_background: {
        backgroundColor: 'black',
        height: 50,
        borderRadius: 10,
        marginTop: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },

    // css for schedule button text
    schedule_button_text: {
        color: 'white',
        fontSize: 18,
        fontFamily: 'UberMove-Medium'
    },
});