import React from 'react';
import {View} from 'react-native';
import { Svg,Path,G,Defs,ClipPath,Rect } from 'react-native-svg';
import { COLORS } from '../constaints/theme';



const Plus = ({color,width,height})=>{
    return(
<Svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<Path fill-rule="evenodd" clip-rule="evenodd" d="M5.95846 9.99659C5.48977 9.99659 5.10938 9.6162 5.10938 9.14751V0.852476C5.10938 0.383779 5.48977 0.00338745 5.95846 0.00338745C6.42716 0.00338745 6.80755 0.383779 6.80755 0.852476V9.14751C6.80755 9.6162 6.42716 9.99659 5.95846 9.99659Z" fill="#F7F7F8"/>
<Path fill-rule="evenodd" clip-rule="evenodd" d="M10.1099 5.84707H1.80807C1.33824 5.84707 0.958984 5.46668 0.958984 4.99798C0.958984 4.52929 1.33824 4.1489 1.80807 4.1489H10.1099C10.5786 4.1489 10.959 4.52929 10.959 4.99798C10.959 5.46668 10.5786 5.84707 10.1099 5.84707Z" fill="#F7F7F8"/>
</Svg>


    )


}
export default Plus;