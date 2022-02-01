import React from 'react';
import {View} from 'react-native';
import { Svg,Path,G,Ellipse } from 'react-native-svg';
import { COLORS } from '../constaints/theme';



const PointListIcon = ({color,width,height})=>{
    return(
<Svg width="7" height="8" viewBox="0 0 7 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<Ellipse cx="3.5" cy="4.03122" rx="3.5" ry="3.61581" fill="#979797"/>
</Svg>

    )


}
export default PointListIcon;