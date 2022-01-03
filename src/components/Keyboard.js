import React, { useContext } from 'react'
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';
import '../assets/css/keyboard.css'
import { GlobalContext } from '../context/GlobalState';

const KB = () => {

  const {
    selectedWord, 
    wrongLetters,
    correctLetters,
    setWrongLetters,
    setCorrectLetters,
    toggleNotification
} = useContext(GlobalContext)


  const onKeyPress = (button) => {
    const letter = button.toLowerCase();
    if (selectedWord.word.includes(letter)) {
      if (!correctLetters.includes(letter)) {
        setCorrectLetters(letter);
      } else {
        toggleNotification();
      }
    } else {
      if (!wrongLetters.includes(letter)) {
        setWrongLetters(letter);
      } else {
        toggleNotification();
      }
    }
  };

  return (
    <div>
      <Keyboard
        theme={"hg-theme-default myTheme1"}
        layoutName={'default'}
        layout={{
          default: [
            "A B C D E F G H I J K L M",
            "N O P Q R S T U V W X Y Z",
          ]
        }}
        onKeyPress={onKeyPress}
      />
    </div>
  )
}

export default KB
