import i18next from 'i18next';
import React, { useEffect,useState } from 'react';
import Test from './Test';
// import JsPdf from './Jspdf'
import Google from './Google';

const App = () => {
// const [language,setLanguage] = useState('en');
// useEffect(
// ()=>{
// i18next.changeLanguage(language)
// console.log(language,'lang')
// },[language])

  return (
    <>
    <Google/>
    {/* <Test language = {language} /> */}
    {/* <div>
    <button onClick={()=>setLanguage('en')} >En</button>
    <button onClick={()=> setLanguage('np')} >Np</button>
    </div> */}
    </>

  )
}

export default App