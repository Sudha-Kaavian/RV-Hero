import { StyleSheet } from "react-native";

export default StyleSheet.create({
  whole_container: {
    paddingRight: 10,
    paddingLeft: 10
  },
  background_image: {
    height: 270,
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  rv_logo: {
    width: 55,
    height: 55,
    alignSelf: 'flex-start',
    marginLeft: 25
  },
  profile_text: {
    color: '#374151',
    fontWeight: 'bold',
    fontSize: 25,
    marginTop: 15
  },
  text_label_container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  first_name_label_container: {
    width: '50%'
  },
  first_name_label: {
    padding: 10,
    color: '#374151'
  },
  firstname_textbox: {
    width: '95%',
    height: 35,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#888',
  },
  text_inputbox_container: {
    width: '50%'
  },
  last_name_label: {
    padding: 10,
    color: '#374151',
  },
  lastname_textbox: {
    width: '95%',
    height: 35,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#888',
  },
  para_container: {
    marginTop: 15
  },
  para_heading: {
    color: '#374151',
    fontWeight: 'bold',
    fontSize: 25,
    marginTop: 15
  },
  zip_code_label: {
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    color: '#374151'
  },
  zip_code_textbox: {
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#888',
  },
  information_container: {
    marginTop: 15,
  },
  year_label: {
    paddingTop: 20,
    paddingRight: 10,
    paddingBottom: 10,
    color: '#374151',
    fontSize: 16.5
  },
  year_picker: {
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#888',
  },
  year_picker_container: {
    width: '100%',
    // justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  placeholder_container: {
    width: '90%',
    marginTop: 5
  },
  dropdown_placeholder: {
    color: '#374151',
    fontSize: 15
  },
  dropdown_arrow_icon_container: {
    width: '10%',
    marginTop: 5
  },
  dropdown_arrow_icon: {
    height: 30,
    width: 20,

  },
  dropdown_cancel_icon: {
    height: 30,
    width: 20,
  },
  search_bar: {
    width: '90%',
    height: 50,
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: '#8e8e8e',
    alignSelf: 'center',
    marginTop: 20,
  },
  listOf_years: {
    width: '100%',
    height: 40,
    borderBottomWidth: 0.2,
    borderBottomColor: '#8e8e8e',
    paddingLeft: 10,
    paddingRight: 10,
    alignSelf: 'center',
    justifyContent: 'center'
  },
  horizontal_line: {
    paddingTop: 30,
    borderBottomColor: '#374151',
    borderBottomWidth: 0.2
  },
  question_container: {
    paddingTop: 20
  },
  question: {
    color: '#374151',
    fontWeight: 'bold',
    fontSize: 20,
  },
  answer: {
    color: '#374151',
    fontSize: 14,
    paddingTop: 10
  },
  radiobutton_container: {
    alignItems: 'center',
    paddingTop: 20
  },
  create_profile_container: {
    alignItems: 'center'
  },
  create_profile_button: {
    height: 50,
    width: '75%',
    backgroundColor: '#00b050',
    marginTop: 30,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  create_profile_text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  }
})
