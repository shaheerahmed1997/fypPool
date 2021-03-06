import React from 'react';
import {View} from 'react-native';
import { Svg,Path,G } from 'react-native-svg';
import { COLORS } from '../constaints/theme';



const Tick = ({color,width,height})=>{
    return(
<Svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<G id="Iconly/Bold/Tick Square">
<G id="Tick Square">
<Path id="Tick Square_2" fill-rule="evenodd" clip-rule="evenodd" d="M6.39199 1.66656H13.617C16.442 1.66656 18.3337 3.6499 18.3337 6.5999V13.4091C18.3337 16.3499 16.442 18.3332 13.617 18.3332H6.39199C3.56699 18.3332 1.66699 16.3499 1.66699 13.4091V6.5999C1.66699 3.6499 3.56699 1.66656 6.39199 1.66656ZM9.52533 12.4917L13.4837 8.53337C13.767 8.25004 13.767 7.79171 13.4837 7.50004C13.2003 7.21671 12.7337 7.21671 12.4503 7.50004L9.00867 10.9417L7.55033 9.48338C7.267 9.20004 6.80034 9.20004 6.517 9.48338C6.23367 9.76671 6.23367 10.225 6.517 10.5167L8.50033 12.4917C8.642 12.6334 8.82534 12.7 9.00867 12.7C9.20033 12.7 9.38367 12.6334 9.52533 12.4917Z" fill={color}/>
</G>
</G>
</Svg>

    )


}
export default Tick;