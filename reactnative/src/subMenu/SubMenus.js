// Libirary's 
import React, { useEffect, useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View, Image } from "react-native";
import { CheckBox } from 'react-native-elements';

// Own components and files
import styles from './SubMenusStyles';
import checkToken from './TokenCheckBeforeStoring';
import { customFonts, loadCustomFonts } from '../Custom_Font/Custom_Font_Component';
import AsyncStorage from '@react-native-async-storage/async-storage';

// A Function to render Menu's with sub-Menus
const SubMenu = () => {
    const [menuData, setMenuData] = useState([]);
    const [subMenuData, setSubMenuData] = useState([]);

    const [mainMenuKey, setMainMenuKey] = useState([]);
    const [mainMenuValue, setMainMenuValue] = useState([]);

    const [selectedParentMenu, setSelectedParentMenu] = useState(null);

    const [checkedItem, setCheckedItem] = useState([]);
    const [checkedKey, setCheckedKey] = useState([]);

    const [parentMenuValue, setParentMenuValue] = useState([]);
    const [parentMenuKey, setParentMenuKey] = useState([]);

    const [selectedSubMenu, setSelectedSubMenu] = useState([]);

    const [fontLoaded, setFontLoaded] = useState(false);

    //Icons for ParentMenu
    const ImageIcons = [
        require('../../assets/IconsImages/wrench-and-screwdriver-crossed.png'),
        require('../../assets/IconsImages/cleaning-2.png'),
        require('../../assets/IconsImages/tow-truck.png'),
        require('../../assets/IconsImages/garage.png'),
        require('../../assets/IconsImages/checked.png')
    ];

    // Getting MenuData from Back-End 
    const getMenuData = () => {
        // fetch(`${process.env.REACT_APP_SERVER_PREFIX}/api/owner/menuData`, {
        fetch('http://192.168.0.147:3001/api/owner/menuData', {
            method: 'POST',
            body: JSON.stringify({}),
            headers: {'content-type' : 'application/json'}
        })
            .then(res => res.json())
            .then((data) => {
                setMenuData(data.menuItem);
                setSubMenuData(data.subMenuItem);
                seperatingParentMenu()
            })
            .catch((err) => {
                console.log('the err is:', err);
            });
    };


    // seprerating ManiMenu (Parent Menu) by key and vale
    const seperatingParentMenu = () => {
        const Key = menuData.map(key => key.key)
        setMainMenuKey(Key);
        const Value = menuData.map(value => value.value)
        setMainMenuValue(Value);
    }

    // handling mainMenu
    const handleParentMenuSelection = (parentMenuKey) => {
        setSelectedParentMenu(selectedParentMenu === parentMenuKey ? null : parentMenuKey);

        // filter the subMenu based on mainMenu
        const subMenuPrefix = `${parentMenuKey}/`;
        const subMenus = subMenuData.filter((subMenu) => subMenu.key.startsWith(subMenuPrefix));
        setSelectedSubMenu(subMenus);
    };


    /**CheckBox Select Indication and Its value storing
     * getting Main Menu key and value */
    const handleCheckBoxClick = (value, key) => {
        if (checkedItem.includes(value) && checkedKey.includes(key)) {
            const remainingItem = checkedItem.filter(item => item !== value);
            const remainingKey = checkedKey.filter(item => item !== key);
            setCheckedItem(remainingItem);
            setCheckedKey(remainingKey);
        } else {
            setCheckedItem(prevCheckedItems => [...prevCheckedItems, value]);
            setCheckedKey(prevCheckedIKeys => [...prevCheckedIKeys, key]);

            const parentMenu = menuData.find((menuItem) => menuItem.key === key.split('/')[0]);

            // check if parent menu key is already present
            if (!parentMenuKey.includes(parentMenu.key)) {
                setParentMenuKey((prevParentMenuKeys) => [...prevParentMenuKeys, parentMenu.key]);
            }

            // check if parent menu value is already present
            if (!parentMenuValue.includes(parentMenu.value)) {
                setParentMenuValue((prevParentMenuValues) => [...prevParentMenuValues, parentMenu.value]);
            }
        }
    };

    // calling the token checking funtion
    const tokenChecking = () => {
        checkToken(checkedItem, checkedKey, parentMenuKey, parentMenuValue  )
    };

    useEffect(() => {
        /**Calling the GetMenuData function when opended */
        getMenuData()

        // to load custom fonts
        const loadFonts = async () => {
            await loadCustomFonts();
            setFontLoaded(true)
        }
        loadFonts()
    }, []);

    return (
        //to make the scrollable
        <ScrollView>

            {/* overall mainview */}
            <View style={styles.MainViews}>

                {/* Top heading and its Sub heading */}
                        <View style={styles.SubMenuHeading}>
                            <Text style={styles.SubMenuMainHeading}>Request New Service</Text>
                            <Text style={styles.SubMenuSubHeading}>Select type of Service</Text>
                        </View> 
                
                {/* mainMenu rendering */}
                <View style={ styles.SpaceBetweenHeadingAndMenus }>
                    {menuData.map((menuItem, index) => (

                        <TouchableOpacity style={styles.mainMenus} key={menuItem.key} onPress={() => handleParentMenuSelection(menuItem.key)}>

                            <View style={styles.viewWrap}>

                                {/* mainMenu Text and its according image rendering */}
                                <View style={styles.mainMenuStyles}>
                                    <Image source={ImageIcons[index]} style={styles.Images} />
                                    <Text style={styles.mainMenuText} >{menuItem.value}</Text>
                                </View>

                                {/* subMenu Rendering based on using main Menu key */}
                                {selectedParentMenu === menuItem.key && (

                                    <View>

                                        {/* checkbox rendering area */}
                                        {selectedSubMenu.map((subMenuItem) => (
                                            <View key={subMenuItem.key} style={styles.subMenuView}>
                                                <CheckBox
                                                    // title={subMenuItem.value}
                                                    checked={checkedItem.includes(subMenuItem.value)}
                                                    onPress={() => handleCheckBoxClick(subMenuItem.value, subMenuItem.key)}
                                                />
                                                <Text style={styles.subMenuText}>{subMenuItem.value}</Text>
                                            </View>

                                        ))}

                                    </View>
                                )}

                            </View>

                        </TouchableOpacity>
                    ))}

                </View>

            </View>

            {/* Confirm Button to call Token check function */}
            <View style={styles.confirmButtonMainView}>
                <TouchableOpacity onPress={tokenChecking} style={styles.ConfirmButton}>
                    <Text style={styles.confirmButtonText}>Confirm</Text>
                </TouchableOpacity>
            </View>

        </ScrollView>

    );
}

export default SubMenu;
