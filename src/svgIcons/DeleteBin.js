import React from 'react';
import {View} from 'react-native';
import { Svg,Path,G } from 'react-native-svg';
import { COLORS } from '../constaints/theme';



const DeleteBin = ({color,width,height})=>{
    return(
            <Svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M2.75 5.5H4.58333H19.25" stroke="#00A197" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
            <Path d="M7.33325 5.50004V3.66671C7.33325 3.18048 7.52641 2.71416 7.87022 2.37034C8.21404 2.02653 8.68036 1.83337 9.16659 1.83337H12.8333C13.3195 1.83337 13.7858 2.02653 14.1296 2.37034C14.4734 2.71416 14.6666 3.18048 14.6666 3.66671V5.50004M17.4166 5.50004V18.3334C17.4166 18.8196 17.2234 19.2859 16.8796 19.6297C16.5358 19.9736 16.0695 20.1667 15.5833 20.1667H6.41659C5.93036 20.1667 5.46404 19.9736 5.12022 19.6297C4.77641 19.2859 4.58325 18.8196 4.58325 18.3334V5.50004H17.4166Z" stroke="#00A197" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
            <Path d="M9.16675 10.0833V15.5833" stroke="#00A197" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
            <Path d="M12.8333 10.0833V15.5833" stroke="#00A197" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
            </Svg>

    )


}
export default DeleteBin;