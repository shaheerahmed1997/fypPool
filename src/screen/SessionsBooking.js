import React,{Fragment,useMemo,useCallback,useState} from 'react'
import { View, Text ,StatusBar,SafeAreaView,TouchableOpacity,StyleSheet,ScrollView,TextInput } from 'react-native';
import Back from '../svgIcons/Back';
import {FONTS,COLORS,SIZES} from '../constaints/theme';
import {Calendar, CalendarList, Agenda,CalendarProps} from 'react-native-calendars';
import Minus from '../svgIcons/Minus';
import Plus from '../svgIcons/Plus';
const SessionsBooking = ({navigation}) => {
  const d  = new Date();

    const [selected, setSelected] = useState(d.toISOString());
    const [duration,setDuration] = useState(30)
    const [ typeOfSessions,setTypeOfSessions] = useState('online')
    const [categorie,setCategorie] = useState('group')
    const onDayPress: CalendarProps['onDayPress'] = useCallback(day => {
      console.log(day.dateString)
      setSelected(day.dateString);
    }, []);
  
    const marked = useMemo(() => {
      return {
        [selected]: {
          selected: true,
          disableTouchEvent: true,
          selectedColor: COLORS.primary,
          selectedTextColor: 'black'
        }
      };
    }, [selected]);
  
    return (
         <View style={{flex:1,backgroundColor:'white'}}>
            <StatusBar
            backgroundColor='white'
            barStyle={'dark-content'}
            />
            <SafeAreaView style={{marginTop:Platform.OS == 'android'?20:10}}>
                

            </SafeAreaView>
            < ScrollView style={{flex:1,paddingHorizontal:20}}>
                        <TouchableOpacity style={{width:30,height:30,justifyContent:'center',alignItems:'center',}}
                        onPress={()=>navigation.goBack()}
                        >
                            <Back/>
                        </TouchableOpacity>
                         <View style={{width:'100%',}}>
                           <Text style={{...FONTS.h6,color:'black',marginTop:20,fontSize:34}}>Booking a session</Text>
                           <Text style={{...FONTS.body10,color:COLORS.lightGray3,}}>Fill in some details</Text>
                    </View>
                    <Calendar     
                      enableSwipeMonths
                      current={d.toISOString()}
                      style={styles.calendar}
                      onDayPress={onDayPress}
                      markedDates={marked}
                      theme={{
                        textSectionTitleColor: COLORS.primary,
                      }}

        />
        <View style={{borderWidth:1,borderColor:'black'}}></View>
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:20}}>
          <Text style={{...FONTS.h2,color:'black'}}>Meeting Time</Text>
          <Text style={{...FONTS.body10,color:'black'}}>7:30 am</Text>
        </View>
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:20}}>
          <Text style={{...FONTS.h2,color:'black'}}>Duration</Text>
          <View style={{alignItems:'center',flexDirection:'row'}}>
            <TouchableOpacity style={{width:30,height:30,backgroundColor:COLORS.darkgray,borderRadius:5,alignItems:'center',justifyContent:'center'}}
            onPress={()=>{
              setDuration(duration - 1)
            }}
            >
            <Minus/>
            </TouchableOpacity>
          <Text style={{marginHorizontal:10,...FONTS.body10,color:'black'}}>{duration}</Text>
          <TouchableOpacity style={{width:30,height:30,backgroundColor:COLORS.primary,borderRadius:5,alignItems:'center',justifyContent:'center'}}
          onPress={()=>{
            setDuration(duration + 1)
          }}
          >
          <Plus/>
          </TouchableOpacity>
          </View>
        </View>
        <Text style={{...FONTS.h2,color:'black',marginVertical:20}}>Select the type of session <Text style={{...FONTS.body14}}>(select one)</Text></Text>
        <View style={{alignItems:'center',flexDirection:'row'}}>
          <TouchableOpacity style={{width:100,height:100,borderRadius:15,alignItems:'center',justifyContent:'center',borderWidth:2,borderColor: typeOfSessions == 'online'?COLORS.sharpGreen:'black',backgroundColor:'black'}}
          onPress={()=>{
            setTypeOfSessions('online')
          }}
          >
            <Text style={{...FONTS.h5,color:'white'}}>Online Sessions</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{width:100,height:100,borderRadius:15,alignItems:'center',justifyContent:'center',borderWidth:2,borderColor: typeOfSessions == 'physical'?COLORS.sharpGreen:'black',backgroundColor:'black',marginLeft:20}}
          onPress={()=>{
            setTypeOfSessions('physical')
          }}
          >
            <Text style={{...FONTS.h5,color:'white'}}>Physical Sessions</Text>
          </TouchableOpacity>

        </View>
        <Text style={{...FONTS.h2,color:'black',marginVertical:20}}>Select the type of categorie <Text style={{...FONTS.body14}}>(select one)</Text></Text>
        <View style={{alignItems:'center',flexDirection:'row'}}>
          <TouchableOpacity style={{width:100,height:100,borderRadius:15,alignItems:'center',justifyContent:'center',borderWidth:2,borderColor: categorie == 'group'?COLORS.sharpGreen:'black',backgroundColor:'black'}}
          onPress={()=>{
            setCategorie('group')
          }}
          >
            <Text style={{...FONTS.h5,color:'white'}}>Group Sessions</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{width:100,height:100,borderRadius:15,alignItems:'center',justifyContent:'center',borderWidth:2,borderColor: categorie == 'personal'?COLORS.sharpGreen:'black',backgroundColor:'black',marginLeft:20}}
          onPress={()=>{
            setCategorie('personal')
          }}
          >
            <Text style={{...FONTS.h5,color:'white'}}>Personal Sessions</Text>
          </TouchableOpacity>

        </View>
        <Text style={{...FONTS.h2,color:'black',marginVertical:20}}>Meeting Link</Text>
        <TextInput
        placeholder='Your meeting link'
        placeholderTextColor={'white'}
        style={{width:SIZES.width-40,height:40,backgroundColor:COLORS.darkgray,color:'white',borderRadius:7,paddingHorizontal:10}}
        /> 
        <Text style={{...FONTS.h2,color:'black',marginVertical:20}}>Any Specific details</Text>
        <TextInput
        placeholder='Your meeting link'
        placeholderTextColor={'white'}
        style={{width:SIZES.width-40,height:100,backgroundColor:COLORS.darkgray,color:'white',borderRadius:7,paddingHorizontal:10}}
        /> 
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-around',marginVertical:30}}>
          <TouchableOpacity style={{height:58,width:164,backgroundColor:COLORS.laywhite,justifyContent:'center',alignItems:'center',borderRadius:14}}
          onPress={()=>{
            navigation.goBack()
          }}
          >
            <Text style={{...FONTS.body10,color:COLORS.primary}}>Cancel</Text>

          </TouchableOpacity>
          <TouchableOpacity style={{height:58,width:164,backgroundColor:COLORS.primary,justifyContent:'center',alignItems:'center',borderRadius:14}}
          onPress={()=>{
            navigation.goBack()
          }}
          >
            <Text style={{...FONTS.body10,color:'white',}}>Create</Text>

          </TouchableOpacity>

        </View>


                    
                </ScrollView>
            </View>
    )
}

const styles = StyleSheet.create({
  calendar: {
    marginBottom: 10
  },
  switchContainer: {
    flexDirection: 'row',
    margin: 10,
    alignItems: 'center'
  },
  switchText: {
    margin: 10,
    fontSize: 16
  },
  text: {
    textAlign: 'center',
    padding: 10,
    backgroundColor: 'lightgrey',
    fontSize: 16
  },
  disabledText: {
    color: 'grey'
  },
  defaultText: {
    color: 'purple'
  },
  customCalendar: {
    height: 250,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey'
  },
  customDay: {
    textAlign: 'center'
  },
  customHeader: {
    backgroundColor: '#FCC',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: -4,
    padding: 8
  },
  customTitleContainer: {
    flexDirection: 'row', 
    alignItems: 'center', 
    padding: 10
  },
  customTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#00BBF2'
  }
});

export default SessionsBooking
