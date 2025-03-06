import { createContext, useContext, useState } from 'react';
import './App.css'

const languages = [
  'JavaScript', 
  'Python',
  'Java',
  'C',
  'C++',
  'Go',
  'Swift',
  'Kotlin',
  'Rust',
  'C#'
];
export const LanguageContext = createContext({});

export default function App() {
  const [currentLanguage, setLanguage] = useState(languages[0]);
  // implement Context here so can be used in child components
  return (
    <LanguageContext.Provider value={{currentLanguage, setLanguage}}>
      <MainSection />
    </LanguageContext.Provider>
  );
}

function MainSection() {
  // @ts-ignore
  const { currentLanguage, setLanguage } = useContext(LanguageContext)
  return (
    <div className='container'>
      <p id="favoriteLanguage">Favorite Programing Language: {currentLanguage}</p>
      <button id="changeFavorite" onClick={() => setLanguage(languages[getRandomInt(10)])}>Toggle Language</button>
    </div>
  )
}

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}