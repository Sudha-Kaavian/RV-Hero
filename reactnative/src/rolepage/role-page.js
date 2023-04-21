import { StatusBar } from 'expo-status-bar';
import { View, Text, Image, TouchableOpacity, Button } from 'react-native';
import { RadioButton } from 'react-native-paper';
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from './rolepage-css';
import { useNavigation } from '@react-navigation/native';
import { customFonts, loadCustomFonts } from '../Custom_Font/Custom_Font_Component';

export default function RolePage() {
  const navigation = useNavigation();
  const [role, setRole] = useState();
  const [fontLoaded, setFontLoaded] = useState(false);

  // TO STORE A USER ROLE IN LOCALSTORAGE
  const storeData = async () => {
    try {
      await AsyncStorage.setItem('@storage_Key', JSON.stringify(role));
      navigation.navigate('Home')
    } catch (e) {
      console.log('the err is :', e);
    }
  }

  useEffect(() => {

    // setting a custom font
    const loadFonts = async () => {
      await loadCustomFonts();
      setFontLoaded(true);
    }
    loadFonts()
  }, [])


  return (

    <View style={styles.rolepage_container}
    >
      {/* RV HERO LOGO */}
      <Image
        source={require('../../assets/RVlogo.png')}
        style={styles.rv_logo_image_box}
      />
      <StatusBar style="auto" />

      <View style={styles.main}>
        <Text style={styles.heading} > I am a </Text>
      </View>

      <View style={styles.role_rv}>

        <RadioButton.Group
          onValueChange={newRole => setRole(newRole)}
          value={role}
        >
          {/*RADIO BUTTON FOR SERIVCE PROVIDER  */}
          <RadioButton.Item
            value='Service provider'
            color='black'
            style={styles.service_provider_box}
          />
        </RadioButton.Group>
        {/* IMAGE FOR SERVICE PROVIDER  */}
        <Image
          source={require('../../assets/service_provider_image.png')}
          style={styles.service_provider_image}
        />
      </View>
      {/* LABEL FOR A SERVICE PROVIDER */}
      <View>
        <Text style={styles.head} > Service Provider </Text>
      </View>

      <View style={styles.role_rv_service}
      >
        <RadioButton.Group
          onValueChange={newRole => setRole(newRole)}
          value={role}
        >
          {/* BUTTON FOR RV OWNER */}
          <RadioButton.Item value='RV Owner'
            style={styles.rv_owner_radio}
          />
        </RadioButton.Group>
        {/* TO SET A RV OWNER IMAGE */}
        <Image source={require('../../assets/rv_owner.png')}
          style={styles.rv_owner_image}
        />
      </View>
      {/* LABEL FOR RV OWNER */}
      <View>
        <Text style={styles.header}> RV Owner </Text>
      </View>
      <View >
        {/* BUTTON FOR CONFRIM A ROLE */}
        <TouchableOpacity
          style={styles.role_button}
          onPress={storeData}>
          {/* LABEL FO A HERE WE GO BUTTON */}
          <Text style={styles.gobutton} > Here we go </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}