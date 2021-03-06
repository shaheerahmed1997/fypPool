import React from 'react';
import {View} from 'react-native';
import { Svg,Path,G,Defs,ClipPath,Rect } from 'react-native-svg';
import { COLORS } from '../constaints/theme';



const Minus = ({color,width,height})=>{
    return(
<Svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
<Path fill-rule="evenodd" clip-rule="evenodd" d="M9.39896 1.70153H1.09714C0.627306 1.70153 0.248047 1.32114 0.248047 0.852445C0.248047 0.383749 0.627306 0.00335693 1.09714 0.00335693H9.39896C9.86766 0.00335693 10.248 0.383749 10.248 0.852445C10.248 1.32114 9.86766 1.70153 9.39896 1.70153Z" fill="white"/>
</Svg>


    )


}
export default Minus;