import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ImageZoomer from '../dist/lib/index';

import './storybook.css';


const conf = {
 zommerContainerClass: 'imagezoomer',
 zommerClass: 'imagezoomer__inner'
}

storiesOf('ImageZoomer', module)
  .add('Default', () => (
    <div style={{width: '500px', height:'500px'}}> 
     <ImageZoomer image="https://source.unsplash.com/random" />
    </div>
  ))
  .add('Custom Classes', () => (
   <div style={{width: '500px', height:'500px'}}> 
    <ImageZoomer conf={conf} image="https://source.unsplash.com/random" />
   </div>
 ));   