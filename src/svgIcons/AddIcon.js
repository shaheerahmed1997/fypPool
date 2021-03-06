import React from 'react';
import {View} from 'react-native';
import { Svg,Path,G } from 'react-native-svg';
import { COLORS } from '../constaints/theme';



const AddIcon = ({color,width,height})=>{
    return(
<Svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<Path d="M10.1667 19.3333C15.2293 19.3333 19.3333 15.2293 19.3333 10.1667C19.3333 5.10406 15.2293 1 10.1667 1C5.10406 1 1 5.10406 1 10.1667C1 15.2293 5.10406 19.3333 10.1667 19.3333Z" stroke={color} stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
<Path d="M10.1667 6.5V13.8333" stroke={color} stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
<Path d="M6.5 10.1666H13.8333" stroke={color} stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
</Svg>

    )


}
export default AddIcon;