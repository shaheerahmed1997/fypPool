import React from 'react';
import {View} from 'react-native';
import { Svg,Path,G,Defs,ClipPath,Rect } from 'react-native-svg';
import { COLORS } from '../constaints/theme';



const ListTickIcon = ({color,width,height})=>{
    return(
<Svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<G clip-path="url(#clip0_19:608)">
<Path d="M11.9163 6.00163V6.49997C11.9157 7.66803 11.5374 8.80458 10.8381 9.74012C10.1387 10.6757 9.15562 11.3601 8.03549 11.6912C6.91537 12.0224 5.71819 11.9827 4.62251 11.5779C3.52684 11.1731 2.59136 10.4249 1.95561 9.44505C1.31986 8.46515 1.01789 7.306 1.09475 6.14047C1.1716 4.97494 1.62316 3.86548 2.38208 2.97755C3.14099 2.08962 4.1666 1.4708 5.30594 1.21338C6.44529 0.95596 7.63732 1.07373 8.70426 1.54913" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<Path d="M11.9167 2.16669L6.5 7.58877L4.875 5.96377" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</G>
<Defs>
<ClipPath id="clip0_19:608">
<Rect width="13" height="13" fill={color}/>
</ClipPath>
</Defs>
</Svg>


    )


}
export default ListTickIcon;