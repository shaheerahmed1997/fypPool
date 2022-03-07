import React from 'react';
import {View} from 'react-native';
import { Svg,Path,G } from 'react-native-svg';
import { COLORS } from '../constaints/theme';



const UploadDocumentIcon = ({color,width,height})=>{
    return(
<Svg width="114" height="80" viewBox="0 0 114 80" fill="none" xmlns="http://www.w3.org/2000/svg">
<Path d="M62.6663 79.6666V57H79.6663L56.9997 28.6666L34.333 57H51.333V79.6666H62.6663Z" fill="black"/>
<Path d="M28.6663 79.6667H39.9997V68.3334H28.6663C19.2937 68.3334 11.6663 60.7061 11.6663 51.3334C11.6663 43.3774 18.4607 35.716 26.8133 34.2484L30.1057 33.6704L31.1937 30.5084C35.1773 18.886 45.0713 11.6667 56.9997 11.6667C72.6227 11.6667 85.333 24.377 85.333 40V45.6667H90.9997C97.25 45.6667 102.333 50.7497 102.333 57C102.333 63.2504 97.25 68.3334 90.9997 68.3334H73.9997V79.6667H90.9997C103.5 79.6667 113.666 69.5007 113.666 57C113.658 51.9205 111.947 46.9903 108.808 42.9968C105.669 39.0032 101.283 36.1765 96.349 34.968C93.8727 15.4634 77.173 0.333374 56.9997 0.333374C41.3823 0.333374 27.8163 9.46237 21.6227 23.85C9.45068 27.488 0.333008 38.98 0.333008 51.3334C0.333008 66.9564 13.0433 79.6667 28.6663 79.6667Z" fill="black"/>
</Svg>

    )


}
export default UploadDocumentIcon;