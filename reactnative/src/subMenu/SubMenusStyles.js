import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    //Main or Top Heading
    SubMenuMainHeading: {
        fontFamily: 'UberMove-Bold',
        fontSize: 22,
    },

    //Second heading after main heading
    SubMenuSubHeading: {
        fontFamily: 'UberMove-Medium',
        fontSize: 19,
        color: '#333333',
        marginTop: 5,
        // fontWeight: 500
    },

    // View form both top heading
    SubMenuHeading: {
        marginLeft: 10,
    },

    //Main touchable opacity of Main Menu
    mainMenus: {
        marginTop: 2.5,
        marginBottom: 2.5
    },

    //view that seperates main heading and menu's
    SpaceBetweenHeadingAndMenus: {
        marginTop: 11
    },

    //second View in sub-menu or checkbox render
    subMenuView: {
        marginLeft: 50,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },

    //main view of the return
    MainViews: {
        backgroundColor: '#ffffff',
    },

    //checkbox Text style
    subMenuText: {
        fontFamily: 'UberMove-Bold',
    },

    //main menu Text tag
    mainMenuText: {
        fontSize: 14,
        fontFamily: 'UberMove-Bold',
        // fontWeight: 800
    },

    //over view of image and mainMenuText 
    mainMenuStyles: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 13,
        backgroundColor: '#f8f8f8',
        paddingTop: 36,
        paddingBottom: 36
    },

    //style for image tag
    Images: {
        marginLeft: 20,
        height: '250%',
        width: '12%',
    },

    //touchable opacity of confirm button
    ConfirmButton: {
        backgroundColor: '#ffd927',
        width: "50%",
        borderRadius: 10,
    },

    //text tag of confirm button
    confirmButtonText: {
        color: 'black',
        textAlign: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        fontSize: 18,
        // fontWeight: 700,
        fontFamily: 'UberMove-Bold'
    },

    //main view of confirm button
    confirmButtonMainView: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5
    },
    
    //main view the wrap both main menu and sub menu
    viewWrap: {
        backgroundColor: '#f8f8f8',
    },
});

export default styles;
