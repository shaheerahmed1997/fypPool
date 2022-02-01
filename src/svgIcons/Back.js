import React from 'react';
import {View} from 'react-native';
import { Svg,Path,G } from 'react-native-svg';
import { COLORS } from '../constaints/theme';



const Back = ({color,width,height})=>{
    return(
<Svg width="30" height="30" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<Path d="M18.8491 10.5L3.57289 10.5L9.98418 17.0889L8.60878 18.5L0.378077 10.0667C0.0748413 9.75555 0.0748413 9.25555 0.378077 8.94444L8.60879 0.499999L9.98418 1.91111L3.57289 8.5L18.8491 8.5L18.8491 9.5L18.8491 10.5Z" fill="#3F414E"/>
</Svg>

    )


}
export default Back;