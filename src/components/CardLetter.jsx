import React, {useEffect, useState} from 'react';
import {TouchableOpacity, Text, StyleSheet, View, Image} from 'react-native';
import  { Audio } from 'expo-av'
import  Alphabet  from '../data/alphabet'

export function CardLetter() {
    const [sound, setSound] = useState()
    const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
    const [backgroundColor, setBackgroundColor] = useState(RandomColor());

    useEffect(() => {
        setBackgroundColor(RandomColor());
    }, [currentLetterIndex]);

    async function playSoundLetter() {
        const { sound } = await Audio.Sound.createAsync(
            Alphabet[currentLetterIndex].sound
        );
        setSound(sound);
        await sound.playAsync();
    }
    function  handlePrevious() {
       setCurrentLetterIndex(currentLetterIndex - 1)
    }
    function handleNext() {
      setCurrentLetterIndex(currentLetterIndex + 1)
    }
    function handleColor() {
        const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink', 'brown', 'black']
        return colors[Math.floor(Math.random() * colors.length)]
    }

    return (
        <View>
            <TouchableOpacity style={[styles.card, { backgroundColor }]} onPress={playSoundLetter}>
                <Text style={styles.text}>{Alphabet[currentLetterIndex].letter}</Text>
            </TouchableOpacity>
            <Navigation
                index={currentLetterIndex}
                setIndex={setCurrentLetterIndex}
                maxIndex={Alphabet.length - 1}
                handlePrevious={handlePrevious}
                handleNext={handleNext}
            />
        </View>

    )
}
const image= '../assets/img/arrow-left.png'
const Navigation = ({ index, maxIndex, handlePrevious, handleNext }) => (


    <View style={styles.navigation}>
        <TouchableOpacity style={styles.button} onPress={handlePrevious} disabled={index === 0}>
            <Image source={require('../assets/img/arrow-left.png')}  width={100} height={100}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleNext} disabled={index === maxIndex}>
            <Image source={require('../assets/img/arrow-right.png')}  width={100} height={100}/>
        </TouchableOpacity>
    </View>
)

const RandomColor = () => {
    const colors = ['red', 'blue', 'green', 'purple', 'orange', 'pink', 'brown',];
    return colors[Math.floor(Math.random() * colors.length)];
};

const styles = StyleSheet.create({
    card: {
        padding: 10,
        width: 250,
        height: 250,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
    },
    text: {
        fontSize: 130,
        color: 'white',

    },
    navigation:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10
    },
    button: {
        marginTop:20,
        padding: 15,
        backgroundColor: '#02C39A',
        borderRadius:50,
    },
    textButton: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
    }
})
