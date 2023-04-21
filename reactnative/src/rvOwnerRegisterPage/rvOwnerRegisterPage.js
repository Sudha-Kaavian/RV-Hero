import React, { useEffect, useState } from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView, ImageBackground, TextInput, useWindowDimensions, FlatList, VirtualizedList } from "react-native";

import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';

import style from './rvOwnerRegisterPageStylesheet';

export default function RvOwnerRegisterpage() {

    const windowHeight = useWindowDimensions().height;
    const windowWidth = useWindowDimensions().width;
    const maxHeight = useWindowDimensions().height * 2;
    const maxHeightTwo = useWindowDimensions().height * 3;
    const fontSize = useWindowDimensions().width / 13;
    const fontSizeTwo = useWindowDimensions().width / 28;

    const [firstName, setFirstName] = useState('');
    const [firstNameValid, setFirstNameValid] = useState(true);
    const [lastName, setLastName] = useState('');
    const [lastNameValid, setLastNameValid] = useState(true);
    const [zipCode, setZipCode] = useState('');
    const [zipCodeValid, setZipCodeValid] = useState(true);
    const [isClickedYear, setIsClickedYear] = useState(false);
    const [selectedYear, setSelectedYear] = useState('');
    const [isClickedType, setIsClickedType] = useState(false);
    const [selectedType, setSelectedType] = useState('');
    const [isClickedMake, setIsClickedMake] = useState(false);
    const [selectedMake, setSelectedMake] = useState('');
    const [isClickedModel, setIsClickedModel] = useState(false);
    const [selectedModel, setSelectedModel] = useState('');
    const [isClickedTrim, setIsClickedTrim] = useState(false);
    const [selectedTrim, setSelectedTrim] = useState('');
    const [isClickedFeetLength, setIsClickedFeetLength] = useState(false);
    const [selectedFeetLength, setSelectedFeetLength] = useState('');
    const [make, setMake] = useState();
    const [model, setModel] = useState();
    const [trim, setTrim] = useState()
    const [enabled, setEnabled] = useState(true);
    const [feetLength, setFeetLength] = useState([...Array(41).keys()].map(num => num + 10));
    const [registrationOption, setRegistrationOption] = useState(null);
    const [allInputValid, setAllInputValid] = useState(true);

    const types = [
        "Class A",
        "Class B",
        "Class C",
        "Fifth Wheel",
        "Fish House",
        "Park Model",
        "Pop Up Camper",
        "Toy Hauler",
        "Travel Trailer",
        "Truck Camper"
    ];

    const registrationOptions = [
        { label: "Yes, I want to help", value: 0 },
        { label: "No thanks, I'll trust the others", value: 1 },
    ];

    const currentYear = new Date().getFullYear();
    const years = Array.from(new Array(currentYear - 1899), (val, index) => 1900 + index).sort((a, b) => b - a);
    const splitedYear = years.join().split(',');

    const firstNameChange = (firsttext) => {
        if (/^[a-zA-Z]+$/.test(firsttext) && firsttext.length > 3) {
            console.log('qwert');
            setFirstName(firsttext);
            setFirstNameValid(true);
        } else {
            setFirstName(firsttext);
            setFirstNameValid(false);
        }
    }

    const lastNameChange = (lasttext) => {
        if (/^[a-zA-Z]+$/.test(lasttext) && lasttext.length > 3) {
            setLastName(lasttext);
            setLastNameValid(true);
        } else {
            setLastName(lasttext);
            setLastNameValid(false);
        }
    }

    const zipCodeChange = (zipnumber) => {
        if (/^\d{5}(?:[-\s]\d{4})?$/.test(zipnumber)) {
            setZipCode(zipnumber);
            setZipCodeValid(true);
        } else {
            setZipCode(zipnumber);
            setZipCodeValid(false);
        }
    }

    const clearYear = () => {
        setSelectedYear('');
    }

    const clearType = () => {
        setSelectedType('');
    }

    const clearMake = () => {
        setSelectedMake('');
        setSelectedModel('');
        setSelectedTrim('');
    }

    const clearModel = () => {
        setSelectedModel('');
        setSelectedTrim('');
    }

    const clearTrim = () => {
        setSelectedTrim('');
    }

    const clearFeetLength = () => {
        setSelectedFeetLength('');
    }

    const createProfile = () => {
        // console.log(firstName.length);
        // console.log(lastName.length);
        // if ((firstName.length > 3) && (lastName.length > 3) && (zipCode.length === 5)) {
        //     console.log('eee');
        // }
        if ((firstName.length > 3) && (lastName.length > 3) && (zipCode.length === 5) && selectedYear && selectedType && selectedModel && selectedTrim && selectedFeetLength && (registrationOption === 0 || registrationOption === 1)) {
            console.log('helo');

        }
        // if ((firstName.length < 3) && (lastName.length < 3) && (zipCode.length < 5) && (selectedYear === '') && (selectedType === '') && (sele)) {
        //     console.log('eeee');
        //     setAllInputValid(false);
        // } else {
        //     setAllInputValid(true)
        // }
    }

    useEffect(() => {
        if (selectedYear === '') {
            // console.log('eee');
            setAllInputValid(false);
        } else {
            setAllInputValid(true);
        }
    }, [])

    useEffect(() => {

        // for (let i = 1; i <= 50; i++) {
        //     // console.log(i);
        //     setFeetLength([i]);
        // }
        fetch('https://rvhero-server-cpki4.ondigitalocean.app/api/rv-owner-registration-make').then(res => res.json())
            .then(({ rvOwnerMake }) => {
                setMake(rvOwnerMake)
            })
    }, []);
    // console.log(make);
    useEffect(() => {
        if (selectedMake) {
            fetch('https://rvhero-server-cpki4.ondigitalocean.app/api/rv-owner-registration-model', {
                method: 'POST',
                body: JSON.stringify({ makeChosen: selectedMake }),
                headers: {
                    'content-type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(({ rvOwnerModel }) => {
                    if (rvOwnerModel.length === 0) {
                        setModel(['No Result Found']);
                    } else {
                        setModel(rvOwnerModel);
                    }
                });
        } else {
            setModel(['No Result Found']);
        }
    }, [selectedMake]);

    useEffect(() => {
        if (selectedModel) {
            fetch('https://rvhero-server-cpki4.ondigitalocean.app/api/rv-owner-registration-trim', {
                method: 'POST',
                body: JSON.stringify({ modelChosen: selectedModel }),
                headers: {
                    'content-type': 'application/json'
                }
            }).then(res => res.json())
                .then(({ rvOwnerTrim }) => {
                    if (rvOwnerTrim.length === 0) {
                        setTrim(['No Result Found']);
                    } else {
                        setTrim(rvOwnerTrim);
                    }
                });
        } else {
            setTrim(['No Result Found']);
        }
    }, [selectedModel]);

    return (
        <ScrollView
            scrollEnabled={enabled}
        >
            <View style={{ minHeight: maxHeight, }}>
                <ImageBackground source={require('../../assets/image.png')} resizeMode="cover" style={style.background_image}>
                    <Image source={require('../../assets/RVHEROLogoDesign(White).png')} style={style.rv_logo}></Image>
                    <Text style={{ fontSize: fontSize, color: 'white', textAlign: 'center', fontWeight: 'bold' }}>Find & book RV services anytime, anywhere.</Text>
                </ImageBackground>
                <View style={style.whole_container}>
                    <Text style={style.profile_text}>Let's finish your profile</Text>
                    <View style={style.text_label_container}>
                        <View style={style.first_name_label_container}>
                            <Text style={style.first_name_label}>First Name*</Text>
                            <TextInput
                                value={firstName}
                                onChangeText={firstNameChange}
                                style={[
                                    style.firstname_textbox,
                                    !firstNameValid && { borderColor: 'red' },
                                    !allInputValid && { borderColor: 'red' }
                                ]}
                            />
                        </View>
                        <View style={style.text_inputbox_container}>
                            <Text style={style.last_name_label}>Last Name*</Text>
                            <TextInput
                                value={lastName}
                                onChangeText={lastNameChange}
                                style={[
                                    style.lastname_textbox,
                                    !lastNameValid && { borderColor: 'red' },
                                    // !allInputValid && { borderColor: 'red' }
                                ]}></TextInput>
                        </View>
                    </View>
                    <View style={style.para_container}>
                        <Text style={style.para_heading}>Tell us about your Primary RV</Text>
                        <Text style={{ fontSize: fontSizeTwo, color: '#374151', lineHeight: 20 }}>We collect this information only once to save you from having to enter it each time you make a request. You can modify this information later, including changing location and adding additional RV's </Text>
                    </View>
                    <View style={style.information_container}>
                        <View>
                            <Text style={style.zip_code_label}>RV Location Zip*</Text>
                            <TextInput
                                value={zipCode}
                                style={[
                                    style.zip_code_textbox,
                                    !zipCodeValid && { borderColor: 'red' },
                                    // !allInputValid && { borderColor: 'red' }
                                ]}
                                onChangeText={zipCodeChange}>
                            </TextInput>
                        </View>
                        <View>
                            <Text style={style.year_label}>Year*</Text>
                            <View style={[style.year_picker, !allInputValid && { borderColor: 'red' }]}>
                                <View style={[style.year_picker_container, !setAllInputValid && { borderColor: 'red' }]}>
                                    <TouchableOpacity style={style.placeholder_container} onPress={() => {
                                        setIsClickedYear(!isClickedYear);
                                        setIsClickedMake(false);
                                        setIsClickedType(false);
                                        setIsClickedModel(false);
                                        setIsClickedTrim(false);
                                        setEnabled(false)
                                    }}>
                                        {selectedYear ? <Text style={style.dropdown_placeholder}>{selectedYear}</Text> : <Text style={style.dropdown_placeholder}>Select a Year</Text>}
                                    </TouchableOpacity>
                                    <View style={style.dropdown_arrow_icon_container} >
                                        {selectedYear
                                            ?
                                            <TouchableOpacity onPress={clearYear} style={style.dropdown_arrow_icon}>
                                                <Image source={require('../../assets/cancel.png')} style={style.dropdown_arrow_icon}></Image>
                                            </TouchableOpacity>
                                            :
                                            <TouchableOpacity onPress={() => {
                                                setIsClickedYear(!isClickedYear);
                                                setIsClickedMake(false);
                                                setIsClickedType(false);
                                                setIsClickedModel(false);
                                                setIsClickedTrim(false);
                                                setEnabled(false)
                                            }}>
                                                <Image source={require('../../assets/dropdoen_arrow.png')} style={style.dropdown_arrow_icon}></Image>
                                            </TouchableOpacity>
                                        }
                                    </View>
                                </View>
                            </View>


                            {isClickedYear ?
                                <ScrollView
                                    onTouchStart={() => {

                                        setEnabled(false)
                                    }}
                                    onMomentumScrollEnd={() => { setEnabled(true) }}
                                    onScrollEndDrag={() => { setEnabled(true) }}
                                    style={{ maxHeight: 200, backgroundColor: 'white', borderRadius: 10, elevation: 10 }} >
                                    {splitedYear.map((year, index) => (
                                        <View key={index}>
                                            <TouchableOpacity style={style.listOf_years} onPress={() => {
                                                setSelectedYear(year);
                                                setIsClickedYear(false);
                                                setEnabled(true)
                                            }}>
                                                <Text>{year}</Text>
                                            </TouchableOpacity>
                                        </View>
                                    ))}
                                </ScrollView> : null}
                        </View>
                        <View>
                            <Text style={style.year_label}>Type*</Text>
                            <View style={style.year_picker}>
                                <View style={style.year_picker_container}>
                                    <TouchableOpacity style={style.placeholder_container} onPress={() => {
                                        setIsClickedType(!isClickedType);
                                        setIsClickedMake(false);
                                        setIsClickedYear(false);
                                        setIsClickedModel(false);
                                        setIsClickedTrim(false);
                                        setEnabled(false);
                                    }}>
                                        {selectedType ? <Text style={style.dropdown_placeholder}>{selectedType}</Text> : <Text style={style.dropdown_placeholder}>Select a Type</Text>}
                                    </TouchableOpacity>
                                    <View style={style.dropdown_arrow_icon_container} >
                                        {selectedType
                                            ?
                                            <TouchableOpacity onPress={clearType} style={style.dropdown_arrow_icon}>
                                                <Image source={require('../../assets/cancel.png')} style={style.dropdown_arrow_icon}></Image>
                                            </TouchableOpacity>
                                            :
                                            <TouchableOpacity onPress={() => {
                                                setIsClickedType(!isClickedType);
                                                setIsClickedMake(false);
                                                setIsClickedYear(false);
                                                setIsClickedModel(false);
                                                setIsClickedTrim(false);
                                                setEnabled(false);
                                            }}>
                                                <Image source={require('../../assets/dropdoen_arrow.png')} style={style.dropdown_arrow_icon}></Image>
                                            </TouchableOpacity>
                                        }
                                    </View>
                                </View>
                            </View>
                            {isClickedType ?
                                <ScrollView
                                    onTouchStart={() => {
                                        setEnabled(false)
                                    }}
                                    onMomentumScrollEnd={() => { setEnabled(true) }}
                                    onScrollEndDrag={() => { setEnabled(true) }}
                                    style={{ maxHeight: 200, backgroundColor: 'white', borderRadius: 10, elevation: 10 }} >
                                    {types.map((type, index) => (
                                        <View key={index}>
                                            <TouchableOpacity style={style.listOf_years} onPress={() => {
                                                setSelectedType(type);
                                                setIsClickedType(false);
                                                setEnabled(true)
                                            }}>
                                                <Text>{type}</Text>
                                            </TouchableOpacity>
                                        </View>
                                    ))}
                                </ScrollView> : null}
                        </View>
                        <View>
                            <Text style={style.year_label}>Make*</Text>
                            <View style={style.year_picker}>
                                <View style={style.year_picker_container}>
                                    <TouchableOpacity style={style.placeholder_container} onPress={() => {
                                        setIsClickedMake(!isClickedMake);
                                        setIsClickedType(false);
                                        setIsClickedYear(false);
                                        setIsClickedModel(false);
                                        setIsClickedTrim(false);
                                        setEnabled(false);
                                    }}>
                                        {selectedMake ? <Text style={style.dropdown_placeholder}>{selectedMake}</Text> : <Text style={style.dropdown_placeholder}>Select a Make</Text>}
                                    </TouchableOpacity>
                                    <View style={style.dropdown_arrow_icon_container} >
                                        {selectedMake
                                            ?
                                            <TouchableOpacity onPress={clearMake} style={style.dropdown_arrow_icon}>
                                                <Image source={require('../../assets/cancel.png')} style={style.dropdown_arrow_icon}></Image>
                                            </TouchableOpacity>
                                            :
                                            <TouchableOpacity onPress={() => {
                                                setIsClickedMake(!isClickedMake);
                                                setIsClickedType(false);
                                                setIsClickedYear(false);
                                                setIsClickedModel(false);
                                                setIsClickedTrim(false);
                                                setEnabled(false);
                                            }}>
                                                <Image source={require('../../assets/dropdoen_arrow.png')} style={style.dropdown_arrow_icon}></Image>
                                            </TouchableOpacity>
                                        }
                                    </View>
                                </View>
                            </View>
                            {isClickedMake ?
                                <ScrollView
                                    onTouchStart={() => {
                                        setEnabled(false)
                                    }}
                                    onMomentumScrollEnd={() => { setEnabled(true) }}
                                    onScrollEndDrag={() => { setEnabled(true) }}
                                    style={{ maxHeight: 200, backgroundColor: 'white', borderRadius: 10, elevation: 10 }} >
                                    {make.map((make, index) => (
                                        <View key={index}>
                                            <TouchableOpacity style={style.listOf_years} onPress={() => {
                                                setSelectedMake(make);
                                                setIsClickedMake(false);
                                                setEnabled(true)
                                            }}>
                                                <Text>{make}</Text>
                                            </TouchableOpacity>
                                        </View>
                                    ))}
                                </ScrollView> : null}
                        </View>
                        <View>
                            <Text style={style.year_label}>Model*</Text>
                            <View style={style.year_picker}>
                                <View style={style.year_picker_container}>
                                    <TouchableOpacity style={style.placeholder_container} onPress={() => {
                                        setIsClickedModel(!isClickedModel);
                                        setIsClickedType(false);
                                        setIsClickedYear(false);
                                        setIsClickedMake(false);
                                        setIsClickedTrim(false);
                                        setEnabled(false)
                                    }}>
                                        {selectedModel ? <Text style={style.dropdown_placeholder}>{selectedModel}</Text> : <Text style={style.dropdown_placeholder}>Select a Model</Text>}
                                    </TouchableOpacity>
                                    <View style={style.dropdown_arrow_icon_container} >
                                        {selectedModel
                                            ?
                                            <TouchableOpacity onPress={clearModel} style={style.dropdown_arrow_icon}>
                                                <Image source={require('../../assets/cancel.png')} style={style.dropdown_cancel_icon}></Image>
                                            </TouchableOpacity>
                                            :
                                            <TouchableOpacity onPress={() => {
                                                setIsClickedModel(!isClickedModel);
                                                setIsClickedType(false);
                                                setIsClickedYear(false);
                                                setIsClickedMake(false);
                                                setIsClickedTrim(false);
                                                setEnabled(false)
                                            }}>
                                                <Image source={require('../../assets/dropdoen_arrow.png')} style={style.dropdown_arrow_icon}></Image>
                                            </TouchableOpacity>
                                        }
                                    </View>
                                </View>
                            </View>
                            {isClickedModel ?
                                <ScrollView
                                    onTouchStart={() => {
                                        setEnabled(true)
                                    }}
                                    onMomentumScrollEnd={() => { setEnabled(true) }}
                                    onScrollEndDrag={() => { setEnabled(true) }}
                                    style={{ maxHeight: 200, backgroundColor: 'white', borderRadius: 10, elevation: 10 }}
                                >
                                    {model.map((model, index) => (
                                        <View key={index}>
                                            {model === 'No Result Found' ? (
                                                <View style={style.listOf_years} disabled={true} >
                                                    <Text style={{ color: 'grey' }}>{model}</Text>
                                                </View>
                                            ) : (
                                                <TouchableOpacity style={style.listOf_years} onPress={() => {
                                                    setSelectedModel(model);
                                                    setIsClickedModel(false);
                                                    setEnabled(true)
                                                }}>
                                                    <Text>{model}</Text>
                                                </TouchableOpacity>
                                            )}
                                        </View>
                                    ))}
                                </ScrollView>
                                : null}

                        </View>
                        <View>
                            <Text style={style.year_label}>Trim*</Text>
                            <View style={style.year_picker}>
                                <View style={style.year_picker_container}>
                                    <TouchableOpacity style={style.placeholder_container} onPress={() => {
                                        setIsClickedTrim(!isClickedTrim);
                                        setIsClickedType(false);
                                        setIsClickedYear(false);
                                        setIsClickedMake(false);
                                        setIsClickedModel(false);
                                        setEnabled(false)
                                    }}>
                                        {selectedTrim ? <Text style={style.dropdown_placeholder}>{selectedTrim}</Text> : <Text style={style.dropdown_placeholder}>Select a Trim</Text>}
                                    </TouchableOpacity>
                                    <View style={style.dropdown_arrow_icon_container} >
                                        {selectedTrim
                                            ?
                                            <TouchableOpacity onPress={clearTrim} style={style.dropdown_arrow_icon}>
                                                <Image source={require('../../assets/cancel.png')} style={style.dropdown_cancel_icon}></Image>
                                            </TouchableOpacity>
                                            :
                                            <TouchableOpacity onPress={() => {
                                                setIsClickedTrim(!isClickedTrim);
                                                setIsClickedType(false);
                                                setIsClickedYear(false);
                                                setIsClickedMake(false);
                                                setIsClickedModel(false);
                                                setEnabled(false)
                                            }}>
                                                <Image source={require('../../assets/dropdoen_arrow.png')} style={style.dropdown_arrow_icon}></Image>
                                            </TouchableOpacity>
                                        }
                                    </View>
                                </View>
                            </View>
                            {isClickedTrim ?
                                <ScrollView
                                    onTouchStart={() => {
                                        setEnabled(true)
                                    }}
                                    onMomentumScrollEnd={() => { setEnabled(true) }}
                                    onScrollEndDrag={() => { setEnabled(true) }}
                                    style={{ maxHeight: 200, backgroundColor: 'white', borderRadius: 10, elevation: 10 }} >
                                    {trim.map((trim, index) => (
                                        <View key={index}>
                                            {trim === 'No Result Found' ? (
                                                <TouchableOpacity style={style.listOf_years} disabled={true} onPress={() => { setEnabled(true) }}>
                                                    <Text style={{ color: 'grey' }}>{trim}</Text>
                                                </TouchableOpacity>
                                            ) : (
                                                <TouchableOpacity style={style.listOf_years} onPress={() => {
                                                    setSelectedTrim(trim);
                                                    setIsClickedTrim(false);
                                                    setEnabled(true)
                                                }}>
                                                    <Text>{trim}</Text>
                                                </TouchableOpacity>
                                            )}

                                        </View>
                                    ))}
                                </ScrollView> : null}
                        </View>
                        <View>
                            <Text style={style.year_label}>Length in Feet*</Text>
                            <View style={style.year_picker}>
                                <View style={style.year_picker_container}>
                                    <TouchableOpacity style={style.placeholder_container} onPress={() => {
                                        setIsClickedFeetLength(!isClickedFeetLength);
                                        setIsClickedMake(false);
                                        setIsClickedType(false);
                                        setIsClickedModel(false);
                                        setIsClickedTrim(false);
                                        setEnabled(false)
                                    }}>
                                        {selectedFeetLength ? <Text style={style.dropdown_placeholder}>{selectedFeetLength}</Text> : <Text style={style.dropdown_placeholder}>Select length of RV</Text>}
                                    </TouchableOpacity>
                                    <View style={style.dropdown_arrow_icon_container} >
                                        {selectedFeetLength
                                            ?
                                            <TouchableOpacity onPress={clearFeetLength} style={style.dropdown_arrow_icon}>
                                                <Image source={require('../../assets/cancel.png')} style={style.dropdown_arrow_icon}></Image>
                                            </TouchableOpacity>
                                            :
                                            <TouchableOpacity onPress={() => {
                                                setIsClickedFeetLength(!isClickedFeetLength);
                                                setIsClickedMake(false);
                                                setIsClickedType(false);
                                                setIsClickedModel(false);
                                                setIsClickedTrim(false);
                                                setEnabled(false)
                                            }}>
                                                <Image source={require('../../assets/dropdoen_arrow.png')} style={style.dropdown_arrow_icon}></Image>
                                            </TouchableOpacity>
                                        }
                                    </View>
                                </View>
                            </View>


                            {isClickedFeetLength ?
                                <ScrollView
                                    onTouchStart={() => {
                                        setEnabled(false)
                                    }}
                                    onMomentumScrollEnd={() => { setEnabled(true) }}
                                    onScrollEndDrag={() => { setEnabled(true) }}
                                    style={{ maxHeight: 200, backgroundColor: 'white', borderRadius: 10, elevation: 10 }} >
                                    {feetLength.map((feetLength, index) => (
                                        <View key={index}>
                                            <TouchableOpacity style={style.listOf_years} onPress={() => {
                                                setSelectedFeetLength(feetLength);
                                                setIsClickedFeetLength(false);
                                                setEnabled(true)
                                            }}>
                                                <Text>{feetLength}</Text>
                                            </TouchableOpacity>
                                        </View>
                                    ))}
                                </ScrollView> : null}
                        </View>
                    </View>
                    <View
                        style={style.horizontal_line}
                    />
                    <View style={style.question_container}>
                        <Text style={style.question}>Interested in helping us shape the RV Hero App?</Text>
                        <Text style={style.answer}>We're looking for passionate RVers to help bring RV Hero to life. Be among the first to preview the app, share your thoughts, and play a key role in shaping its development.</Text>
                    </View>
                    <View style={style.radiobutton_container}>
                        < RadioForm>
                            {
                                registrationOptions.map((obj, index) => (
                                    <RadioButton key={index}>
                                        {/* radio button */}
                                        <RadioButtonInput
                                            obj={obj}
                                            index={index}
                                            isSelected={index === registrationOption}
                                            onPress={(index) => setRegistrationOption(index)}
                                            borderWidth={1.5}
                                            buttonInnerColor='#hsl(206,100%,52%)'
                                            buttonInnerSize={5}
                                            buttonOuterColor={index === registrationOption && '#7F7E7A'}
                                            buttonSize={13}
                                            buttonWrapStyle={{ marginRight: 10, backgroundColor: 'white', borderRadius: 14, margin: 3 }}
                                        />

                                        {/* label for radio button */}
                                        <RadioButtonLabel
                                            obj={obj}
                                            index={index}
                                            onPress={(registrationOption) => setRegistrationOption(registrationOption)}
                                            labelStyle={{
                                                color: index === registrationOption && 'black',
                                                fontSize: 16,
                                                color: '#374151'
                                                // fontFamily: 'UberMove-Bold'
                                            }}
                                        />

                                    </RadioButton>
                                ))
                            }
                        </RadioForm >
                    </View>
                    <View style={style.create_profile_container}>
                        <TouchableOpacity style={style.create_profile_button} onPress={createProfile}>
                            <Text style={style.create_profile_text}>Create Profile</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}