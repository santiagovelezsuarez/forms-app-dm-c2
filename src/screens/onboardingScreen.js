import React from 'react'
import Onboarding from 'react-native-onboarding-swiper';
import { View, Text } from "react-native"
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const OnBoardingScreen = () => {
    const navigation = useNavigation();
    return (
        <Onboarding
            onSkip={() => navigation.navigate("landing")}
            pages={[
                {
                    backgroundColor: '#fff',
                    image: <Image 
                            source={require('../assets/cup1.jpg')} 
                            className="w-80 h-80 object-contain"/>,
                    title: 'Cupula',
                    subtitle: 'Antigua estación del ferrocarril de Caldas en la ciudad de Manizales.',
                },
                {
                    backgroundColor: '#fff',
                    image: <Image 
                            source={require('../assets/bibl.jpg')} 
                            className="w-80 h-80 object-contain"/>,
                    title: 'Biblioteca',
                    subtitle: 'Biblioteca Alfonso Borrero Cabal, encamina sus esfuerzos a satisfacer las necesidades y expectativas de información de la comunidad universitaria',
                },
                {
                    backgroundColor: '#fff',
                    image: <Image 
                            source={require('../assets/campus.jpg')} 
                            className="w-80 h-80 object-contain"/>,
                    title: 'Campus',
                    subtitle: 'Cómodas y modernas instalaciones que se mezclan con la historia de la Manizales de ayer,',
                },
            ]}
        />
    )
}

export default OnBoardingScreen