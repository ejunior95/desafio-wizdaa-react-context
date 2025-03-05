import React, { useState } from 'react';

const languages = ['JavaScript', 'Python'];

export default function App() {
  // implement Context here so can be used in child components
  return (
    <MainSection />
  );
}

function MainSection() {
  return (
    <div>
      <p id="favoriteLanguage">favorite programing language: null</p>
      <button id="changeFavorite">toggle language</button>
    </div>
  )
}