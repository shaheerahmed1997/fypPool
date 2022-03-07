import React from 'react';
import {View} from 'react-native';
import { Svg,Path,Circle } from 'react-native-svg';
import { COLORS } from '../constaints/theme';



const LocationIcon = ({color,width,height})=>{
    return(
<Svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<Path fill-rule="evenodd" clip-rule="evenodd" d="M10.2712 8.71906C10.2712 7.62981 9.47837 6.74719 8.50069 6.74719C7.52228 6.74719 6.72949 7.62981 6.72949 8.71906C6.72949 9.80752 7.52228 10.6901 8.50069 10.6901C9.47837 10.6901 10.2712 9.80752 10.2712 8.71906Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<Path fill-rule="evenodd" clip-rule="evenodd" d="M8.49965 16.9988C7.65073 16.9988 3.1875 12.9757 3.1875 8.76852C3.1875 5.47486 5.56545 2.8042 8.49965 2.8042C11.4339 2.8042 13.8125 5.47486 13.8125 8.76852C13.8125 12.9757 9.34857 16.9988 8.49965 16.9988Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</Svg>



    )


}
export default LocationIcon;