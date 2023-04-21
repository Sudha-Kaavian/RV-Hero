import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';

// Getting Token and checking before storing
const checkToken = async (checkboxValue, checkboxKey, mainMenuKey, mainMenuValue) => {

    const [latitude , setLatitude] = useState();
    const [longitude , setLongitude] = useState();

    const locationData = await AsyncStorage.getItem('@storage_key/locationDetails')

    const latLngData = locationData.map((latLng)=> {
            setLatitude(latLng.geomentry.location.lat),
            setLongitude(latLng.geomentry.location.lng) 
    })

    // getting token from internal storage
    const token = await AsyncStorage.getItem('@Token');

    console.log(token ,1);
    // If token is present then sending value to store in DB
    if (token !== null) {
        const TokenData = token.map((id)=> {
            id.UserId
        })

        await fetch('http://192.168.0.147:3001/api/rvowner/serviceRequest', {
            method: 'POST',
            body: JSON.stringify({ 'subMenuValue' : checkboxValue, 'subMenuKey' : checkboxKey , mainMenuValue , mainMenuKey , token , 'userID' :  TokenData , latitude , longitude }),
            headers: {'content-type':'application/json'},
        })
        .then(res => res.json())
        .then((data)=> {
            console.log(data);
        })

        // if token is not present
    } else {
        console.log('lol');

        //Storing Requested Data in Mobile Internal Storage
        const StoreRequestedData = async (key, value) => {
            try {
                const jsonValue = JSON.stringify(value);
                await AsyncStorage.setItem(key, jsonValue)
                    .then(

                    //After Storaing in Mobile Internal Storage Navigating to Register Page.
                    navigation.navigate('RvOwnerSignInPage')
                )
            } catch (err) {  
                console.log('the err is:', err.message);
            }
        }

        // storing the required data in a variable to pass it as a value
        const dataToStore = { 'subMenuValue' : checkboxValue, 'subMenuKey' : checkboxKey , mainMenuValue , mainMenuKey };

        // Calling the function with required parameter
        StoreRequestedData('@RV_Owner_Requested_Data', dataToStore)
}

    const TestRetrive = await AsyncStorage.getItem('@RV_Owner_Requested_Data');
    console.log(TestRetrive);
}

export default checkToken;