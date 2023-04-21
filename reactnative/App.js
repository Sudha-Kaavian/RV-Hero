import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import RolePage from './src/rolepage/role-page';
import RvOwnerHomePage from './src/rvownerhomepage/rvownerhomepage';
import RvOwnerRegisterpage from './src/rvOwnerRegisterPage/rvOwnerRegisterPage';
import RvOwnerSignInpage from './src/rvOwnerSignInPage/rvOwnerSignInPage';
import MapPointer from './src/mapPointer/mapPointer';
import SubMenu from './src/subMenu/SubMenus';
import Homepage from './src/footer/home';

const Stack = createStackNavigator();

const RvOwnerStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="FooterHome" component={Homepage} />
      <Stack.Screen name="RvOwner" component={RvOwnerHomePage} />
      <Stack.Screen name="RvOwnerSignUpPage" component={RvOwnerRegisterpage} />
      <Stack.Screen name="RvOwnerSignInPage" component={RvOwnerSignInpage} />
      <Stack.Screen name="RvOwnerScheduleServicePage" component={SubMenu} />
      <Stack.Screen name="MapPointer" component={MapPointer} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Rolepage" screenOptions={{ headerShown: false }} >
        <Stack.Screen name="Rolepage" component={RolePage} />
        <Stack.Screen name="Home" component={RvOwnerStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
