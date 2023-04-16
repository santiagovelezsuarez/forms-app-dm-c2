import React, {useState} from 'react';
import { StyleSheet, Text, Modal, FlatList, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnBoardingScreen from './src/screens/onboardingScreen';
import Landing from './src/components/Landing';


export default function App(){
    const Stack = createNativeStackNavigator();
    
    return (        
        <NavigationContainer independent={true}>
            <Stack.Navigator>
                <Stack.Screen options={{headerShown: false}} name="OnBoardingScreen" component={OnBoardingScreen} />
                <Stack.Screen options={{headerShown: false}} name="landing" component={Landing} />
            </Stack.Navigator>
        </NavigationContainer>        
    )
}

const styles = StyleSheet.create({
    
});