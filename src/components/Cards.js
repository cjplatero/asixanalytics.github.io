import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>OUR SERVICES</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/datamanagement.jpg'
              text='------------------------'
              label='Data Management'
              path='/services'
            />
            <CardItem
              src='images/datagovernance.jpg'
              text=''
              label='Data Governance'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/dataanalytics.jpg'
              text=''
              label='Data Analytics'
              path='/services'
            />
            <CardItem
              src='images/cloudstorage.jpg'
              text=''
              label='Cloud Storage'
              path='/products'
            />
            <CardItem
              src='images/d.jpg'
              text=''
              label='CRM - Salesforce'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;