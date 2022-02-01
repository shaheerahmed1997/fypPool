import React from 'react';
import {View} from 'react-native';
import { Svg,Path,G } from 'react-native-svg';
import { COLORS } from '../constaints/theme';



const DropDownIcon = ({color,width,height})=>{
    return(
<Svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
<Path d="M1 1L5 5L9 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</Svg>


    )


}
export default DropDownIcon;