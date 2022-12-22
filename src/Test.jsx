import React from 'react';
import {Translation} from "react-i18next";

const Test = () => {
  return (
    <>
        <Translation>
            {
                t=>(
                   <h1>{t('test')}</h1>
                )
            }
        </Translation>
        <Translation>
            {
                t=>(
                    <h3>{t('test two')}</h3>
                )
            }
        </Translation>
    </>
  );
}

export default Test