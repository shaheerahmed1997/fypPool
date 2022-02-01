import React from 'react';
import {View} from 'react-native';
import { Svg,Path,G } from 'react-native-svg';
import { COLORS } from '../constaints/theme';



const CalenderSmallIcon = ({color,width,height})=>{
    return(
<Svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<Path d="M8.70833 1.66666H2.29167C1.78541 1.66666 1.375 2.03975 1.375 2.49999V8.33332C1.375 8.79356 1.78541 9.16666 2.29167 9.16666H8.70833C9.21459 9.16666 9.625 8.79356 9.625 8.33332V2.49999C9.625 2.03975 9.21459 1.66666 8.70833 1.66666Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
<Path d="M7.33301 0.833344V2.50001" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
<Path d="M3.66699 0.833344V2.50001" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
<Path d="M1.375 4.16666H9.625" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
</Svg>

    )


}
export default CalenderSmallIcon;