import React from 'react';
import {View} from 'react-native';
import { Svg,Path,G } from 'react-native-svg';
import { COLORS } from '../constaints/theme';



const Cross = ({color,width,height})=>{
    return(
<Svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<Path d="M15 5L5 15" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<Path d="M5 5L15 15" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</Svg>

    )


}
export default Cross;