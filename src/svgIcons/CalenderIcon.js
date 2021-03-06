import React from 'react';
import {View} from 'react-native';
import { Svg,Path,G } from 'react-native-svg';
import { COLORS } from '../constaints/theme';



const CalenderIcon = ({color,width,height})=>{
    return(
<Svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<Path d="M13.4583 2.83334H3.54167C2.75926 2.83334 2.125 3.46761 2.125 4.25001V14.1667C2.125 14.9491 2.75926 15.5833 3.54167 15.5833H13.4583C14.2407 15.5833 14.875 14.9491 14.875 14.1667V4.25001C14.875 3.46761 14.2407 2.83334 13.4583 2.83334Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<Path d="M11.333 1.41666V4.24999" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<Path d="M5.66699 1.41666V4.24999" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<Path d="M2.125 7.08334H14.875" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</Svg>

    )


}
export default CalenderIcon;