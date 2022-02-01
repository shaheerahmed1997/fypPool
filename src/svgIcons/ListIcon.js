import React from 'react';
import {View} from 'react-native';
import { Svg,Path,G,Ellipse } from 'react-native-svg';
import { COLORS } from '../constaints/theme';



const ListIcon = ({color,width,height})=>{
    return(
<Svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<Ellipse cx="1.5" cy="1.54963" rx="1.5" ry="1.54963" fill="#979797"/>
<Ellipse cx="1.5" cy="5.54963" rx="1.5" ry="1.54963" fill="#979797"/>
<Ellipse cx="1.5" cy="9.54963" rx="1.5" ry="1.54963" fill="#979797"/>
<Ellipse cx="5.5" cy="1.54963" rx="1.5" ry="1.54963" fill="#979797"/>
<Ellipse cx="5.5" cy="5.54963" rx="1.5" ry="1.54963" fill="#979797"/>
<Ellipse cx="5.5" cy="9.54963" rx="1.5" ry="1.54963" fill="#979797"/>
</Svg>


    )


}
export default ListIcon;