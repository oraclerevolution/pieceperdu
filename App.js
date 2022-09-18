//imported packages
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

//imported pages
import Login from './screens/Login';
import Register from './screens/Register';
import Declaration from './screens/Tabs/Declaration';
import Home from './screens/Tabs/Home';
import Steppers from './screens/Steppers';

//variables declaration
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {

  const MyTabs = () => {
    return (
      <Tab.Navigator
        initialRouteName="Declaration"
        activeColor="#fff"
        labelStyle={{ fontSize: 12}}
        style={{ backgroundColor: 'tomato' }}
        barStyle={{backgroundColor:"#573178"}}
        screenOptions={{ headerShown: false }}
      >
        <Tab.Screen
          name="Programmes"
          component={Declaration}
          options={{
            tabBarLabel: 'Déclaration',
            tabBarShowLabel: true,
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="format-list-bulleted" color={color} size={26} />
            ),
          }}
        />

        <Tab.Screen
          name="Accueil"
          component={Home}
          options={{
            tabBarLabel: 'Accueil',
            tabBarShowLabel: true,
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }

  const MyStack = () => {
    return (
      <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Tabs" component={MyTabs} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
