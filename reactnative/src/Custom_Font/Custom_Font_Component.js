import * as Font from 'expo-font';

// Define your custom fonts here
const customFonts = {
  'Montserrat-Bold': require('../../assets/Montserrat/Montserrat-Bold.ttf'),
  'Lato-Bold': require('../../assets/lato/Lato-Bold.ttf'),
  'UberMove-Bold': require('../../assets/UberMove/UberMove-Bold.ttf'),
  'UberMove-Medium': require('../../assets/UberMove/UberMove-Medium.ttf'),
  'UberMove-Regular': require('../../assets/UberMove/UberMove-Regular.ttf')
};

// Load the custom fonts and export them
export async function loadCustomFonts() {
  await Font.loadAsync(customFonts);
}

// Export the custom fonts object so you can access it from other files
export { customFonts };
