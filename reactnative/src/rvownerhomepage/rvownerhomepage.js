import React, { useState, useEffect } from 'react';
import { Text, View, Image, TouchableOpacity, ToastAndroid, KeyboardAvoidingView, Dimensions, Keyboard, ScrollView, useWindowDimensions } from "react-native";

import style from './rvOwnerHomePageStyleSheet';
import { REACT_APP_GOOGLE_API_KEY } from '@env';
import { loadCustomFonts } from '../Custom_Font/Custom_Font_Component';

import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { LinearGradient } from 'expo-linear-gradient';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

export default function RvOwnerHomePage({ route }) {

    // get a params value from another file
    // const { pointerAddress } = route && route.params;

    // set a navigation
    const navigation = useNavigation();

    // set a state variable
    const [services, setServices] = useState(null);
    const [locationData, setLocationData] = useState();
    const [locationDetails, setLocationDetails] = useState();
    const [address, setAddress] = useState();
    const [newAddress, setNewAddress] = useState();
    const [fontLoaded, setFontLoaded] = useState(false);

    const AutocompleteRef = React.createRef();

    // set a screen width, height and also font size
    const windowWidth = useWindowDimensions().width;
    const windowHeight = useWindowDimensions().height;
    const fontSize = useWindowDimensions().width / 12;
    const fontSizeTwo = useWindowDimensions().width / 20;
    const fontSizeThree = useWindowDimensions().width / 25;

    // radio button options
    const options = [
        { label: 'Repair/Maintenance', value: 0 },
        { label: 'Emergency Roadside Assistance', value: 1 },
        { label: 'Virtual Technician Consultation', value: 2 },
        { label: 'Wash/Details', value: 3 },
        { label: 'Tow', value: 4 },
        { label: 'Storage', value: 5 },
        { label: 'Inspection', value: 6 },
    ];

    // navigate function for signUp
    const signUp = () => {
        navigation.navigate('RvOwnerSignUpPage')
    }

    const signIn = () => {
        console.log('sign in');
        navigation.navigate('RvOwnerSignInPage')
    }

    // navigate function for map pointer
    const mapPointer = () => {
        navigation.navigate('MapPointer')
    }

    // set a autocomplete text change function
    const onAutocompleteTextChange = (text) => {
        setNewAddress(text);
        if (!text) {
            setLocationData(null);
            setLocationDetails(null);
            setNewAddress(null);
        }
    };

    // navigate function for schedule service button
    const scheduleButton = async (locationData, locationDetails, services, newAddress, address) => {

        if ((services === 0 || services) && (locationData || address || newAddress)) {
            if (locationData)
                await AsyncStorage.setItem('@storage_Key/locationData', JSON.stringify(locationData));
            if (locationDetails)
                await AsyncStorage.setItem('@storage_Key/locationDetails', JSON.stringify(locationDetails));
            if (services)
                await AsyncStorage.setItem('@storage_Key/newAddress', JSON.stringify(newAddress));
            if (address)
                await AsyncStorage.setItem('@storage_Key/address', JSON.stringify(address));
            navigation.navigate('RvOwnerScheduleServicePage');
        } else {
            ToastAndroid.showWithGravityAndOffset(
                'Please fill all fields!',
                ToastAndroid.SHORT,
                ToastAndroid.BOTTOM,
                25,
                50,
            );
        }

    };

    // set a map pointer
    const renderLeftButton = () => {
        return (
            <TouchableOpacity onPress={mapPointer} style={{ width: 30, height: 50, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
                <Image source={require('../../assets/location_pointer.png')} style={{ width: 20, height: 25 }} />
            </TouchableOpacity>
        );
    };

    useEffect(() => {

        // set a current location from mapPointer
        // setAddress(pointerAddress);

        // setting a custom font
        const loadFonts = async () => {
            await loadCustomFonts();
            setFontLoaded(true);
        }
        loadFonts()
    }, [])

    return (
        // whole body for RvOwner Homepage container
        <View>
            {/* set a linear gradient background for whole page */}
            < LinearGradient colors={['#DDA50A', '#FFC30D', '#FFD927']} style={style.linearGradient} >
                {/* whole view for top all items */}
                < View style={style.top_icons} >
                    {/* RV-Hero logo container */}
                    < View style={style.logo_container} >
                        {/* RV-Hero logo */}
                        <Image Image style={style.logo_icon} source={require('../../assets/RVlogo.png')} ></Image >
                    </View >
                    {/* whole view for signIn */}
                    < View style={style.signin_container} >
                        {/* Touchable tag for signIn */}
                        < TouchableOpacity style={style.signin_touchable_container} onPress={signIn} >
                            {/* text tag for signIn */}
                            <Text Text style={style.signin_text} > Sign In</Text >
                        </TouchableOpacity >
                    </View >
                    {/* whole view for signUp */}
                    < View style={style.signup_container} >
                        {/* Touchable tag for signUp */}
                        < TouchableOpacity style={style.signup_touchable_container} onPress={signUp} >
                            {/* text tag for signUp */}
                            <Text Text style={style.signup_text} > Sign up</Text >
                        </TouchableOpacity >
                    </View >
                </View >
                {/* whole view for heading container */}
                <View View style={style.top_heading} >
                    <Text style={{ fontSize: fontSize, fontFamily: 'UberMove-Bold' }}>Book RV services anytime, anywhere</Text>
                    {/* <Text style={{ fontSize: fontSize, fontFamily: 'UberMove-Bold' }}></Text> */}
                </View >
                {/* whole view for google auto complete component */}
                <View View style={style.google_location_search} >
                    {/* google autocomplete component */}
                    {
                        address === ('' || null || undefined) ?
                            <View>
                                <GooglePlacesAutocomplete
                                    placeholder="Enter service address"
                                    onPress={(locData, locDetails = null) => {
                                        setLocationData(locData);
                                        setLocationDetails(locDetails);
                                    }}
                                    ref={AutocompleteRef}
                                    query={{ key: REACT_APP_GOOGLE_API_KEY }}
                                    fetchDetails={true}
                                    onFail={(error) => console.log(error)}
                                    onNotFound={() => console.log('no results')}
                                    renderLeftButton={renderLeftButton}
                                    styles={{
                                        container: {
                                            flex: 0,
                                            marginTop: 5,

                                        },
                                        textInput: {
                                            borderRadius: 0,
                                            height: 50,
                                            fontSize: 17,
                                            fontFamily: 'UberMove-Regular'
                                        },
                                        description: {
                                            color: '#000',
                                            fontSize: 16,
                                            overflow: 'scroll',
                                        },
                                        predefinedPlacesDescription: {
                                            color: '#3caf50',
                                            innerHeight: '100%',
                                            outerHeight: '100%',
                                        },
                                    }}
                                    textInputProps={{
                                        onChangeText: onAutocompleteTextChange,
                                        ref: (input) => {
                                            AutocompleteRef.current = input;
                                        },
                                    }}
                                />
                            </View> :
                            <View>
                                <GooglePlacesAutocomplete
                                    placeholder="Enter service address"
                                    onPress={(locData, locDetails = null) => {
                                        setLocationData(locData);
                                        setLocationDetails(locDetails.formatted_address);
                                    }}
                                    ref={AutocompleteRef}
                                    query={{ key: REACT_APP_GOOGLE_API_KEY }}
                                    fetchDetails={true}
                                    onFail={(error) => console.log(error)}
                                    onNotFound={() => console.log('no results')}
                                    renderLeftButton={renderLeftButton}
                                    styles={{
                                        container: {
                                            flex: 0,
                                            marginTop: 5,
                                        },
                                        textInput: {
                                            borderRadius: 0,
                                            height: 50,
                                            fontSize: 17,
                                            fontFamily: 'UberMove-Regular'
                                        },
                                        description: {
                                            color: '#000',
                                            fontSize: 16,
                                            overflow: 'scroll',
                                        },
                                        predefinedPlacesDescription: {
                                            color: '#3caf50',
                                            innerHeight: '100%',
                                            outerHeight: '100%',
                                        },
                                    }}
                                    textInputProps={{
                                        color: 'black',
                                        onChangeText: onAutocompleteTextChange,
                                        editable: false,
                                        defaultValue: address,
                                        value: address,
                                        ref: (input) => {
                                            AutocompleteRef.current = input;
                                        },
                                    }}
                                />
                            </View>
                    }

                </View >
                {/* whole view for radio button container */}
                < View style={style.service_radio_button} >
                    {/* text tag for question */}
                    < Text style={{ fontSize: fontSizeTwo, fontFamily: 'UberMove-Bold' }
                    }> What type of service do you need ?</Text >
                    {/* radio button component */}
                    < RadioForm style={style.rvowner_radio_button_conatiner} >
                        {
                            options.map((obj, index) => (
                                <RadioButton key={index}>
                                    {/* radio button */}
                                    <RadioButtonInput
                                        obj={obj}
                                        index={index}
                                        isSelected={index === services}
                                        onPress={(index) => setServices(index)}
                                        borderWidth={1.5}
                                        buttonInnerColor='#7F7E7A'
                                        buttonInnerSize={5}
                                        buttonOuterColor={index === services && '#7F7E7A'}
                                        buttonSize={13}
                                        buttonWrapStyle={{ marginRight: 10, backgroundColor: 'white', borderRadius: 14, margin: 3 }}
                                    />

                                    {/* label for radio button */}
                                    <RadioButtonLabel
                                        obj={obj}
                                        index={index}
                                        onPress={(services) => setServices(services)}
                                        labelStyle={{
                                            color: index === services && 'black',
                                            fontSize: fontSizeThree,
                                            fontFamily: 'UberMove-Bold'
                                        }}
                                    />

                                </RadioButton>
                            ))
                        }
                    </RadioForm >
                </View >
                {/* whole div schedule service button container */}
                < View style={style.schedule_button} >
                    <TouchableOpacity style={style.schedule_button_background} onPress={() => scheduleButton(locationData, locationDetails, services, newAddress, address)}>
                        <Text style={style.schedule_button_text}>Schedule Service</Text>
                    </TouchableOpacity>
                </View >
            </LinearGradient >
        </View>

    );



};