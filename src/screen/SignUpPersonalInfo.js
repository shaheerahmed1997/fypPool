import React, { useState } from 'react'
import { StyleSheet, Text, View,SafeAreaView,TouchableOpacity,StatusBar, Platform,Image, FlatList,Animated, TextInput,Modal,KeyboardAvoidingView,ScrollView } from 'react-native'
import {FONTS,COLORS,SIZES} from '../constaints/theme';
import Back from '../svgIcons/Back';
import DateTimePicker from '@react-native-community/datetimepicker';
import Cross from '../svgIcons/Cross';


const SignUpPersonalInfo = ({navigation}) => {

    const [fullName,setFullName] = useState('')
    const [showDatePicker,setShowDatePicker] = useState(false)
    const [dateFormatted, setDateFormatted] = useState(new Date());
    const [date, setDate] = useState('');
    const [datemodel, setdatemodel] = useState(false);
    const [addressModal,setAddressModal] = useState(false);
    const [country,setCountry] = useState('')
    const [state,setState] = useState('')
    const [city,setCity] = useState('')
    const [street,setStreet] = useState('')
    const [town,setTown] = useState('')
    const [houseNo,setHouseNo] = useState('')
    const [contactNum,setContactNum] = useState('')

    const getCurrentDate = (currentDate) => {
        setDateFormatted(currentDate);
        var date = new Date(currentDate).getDate();
        var month = new Date(currentDate).getMonth();
        var year = new Date(currentDate).getFullYear();
        var a = month + 1 + '-' + date + '-' + year;
        setDate(a);
      };
    

    const onChange = (event, selectedDate) => {
        if (Platform.OS === 'android') {
          if (event.type === 'dismissed') {
            selectedDate = new Date();
          }
    
          setShowDatePicker(false);
          getCurrentDate(selectedDate);
        } else {
          getCurrentDate(selectedDate);
        }
      };


    return (
        <View style={{flex:1,backgroundColor:'white'}}>
            <StatusBar
            backgroundColor='white'
            barStyle={'dark-content'}
            />
            <SafeAreaView style={{marginTop:Platform.OS == 'android'?20:10}}>

            </SafeAreaView>
            <View style={{flex:1,paddingHorizontal:20}}>
             <TouchableOpacity style={{width:30,height:30,justifyContent:'center',alignItems:'center',}}
             onPress={()=>navigation.goBack()}
             >
                 <Back/>
            </TouchableOpacity>
            <Text style={{...FONTS.h6,color:'black',marginTop:20,fontSize:34}}>Personal info</Text>
            <Text style={{...FONTS.body10,color:COLORS.lightGray3,}}>{`Fill in your details`}</Text>
            <View style={{height:60,width:'100%',borderRadius:14,backgroundColor:'black',paddingHorizontal:13,marginTop:45}}>
                <Text style={{...FONTS.body8,color:'white',marginTop:5,marginLeft:5}}>Full Name</Text>
                <TextInput
                value={fullName}
                style={{height:35,width:'100%',color:'white'}}
                onChangeText={(value)=>setFullName(value)}
               
                
                />
            </View>
            <TouchableOpacity style={{height:60,width:'100%',borderRadius:14,backgroundColor:'black',paddingHorizontal:13,marginTop:20}}
            onPress={()=>{
              if(Platform.OS == 'android')
              {
                setShowDatePicker(true)

              }
              else{
                setdatemodel(true)
                setShowDatePicker(true)
              }
              
              }}
            >
                <Text style={{...FONTS.body8,color:'white',marginTop:5,marginLeft:5}}>Age</Text>
                <View>
                    <Text style={{color:'white',...FONTS.body10,marginLeft:5,marginTop:5}}>{date}</Text>
                </View>
            </TouchableOpacity>
            {Platform.OS === 'android'
                ? showDatePicker && (
                    <DateTimePicker
                      testID="dateTimePicker"
                      showMode={'date'}
                      value={dateFormatted}
                      maximumDate={new Date()}
                      mode={'date'}
                      display="spinner"
                      onChange={onChange}
                      style={{width: '80%', height: 200, color: '#979797'}}
                    />
                  )
                : null}
                <TouchableOpacity style={{height:60,width:'100%',borderRadius:14,backgroundColor:'black',paddingHorizontal:13,marginTop:20}}
            onPress={()=>{
              setAddressModal(true)
              
              }}
            >
                <Text style={{...FONTS.body8,color:'white',marginTop:5,marginLeft:5}}>Address</Text>
                {
                  country && city && town ?
                  <View>
                    <Text style={{color:'white',...FONTS.body10,marginLeft:5,marginTop:5,textTransform:'capitalize'}} numberOfLines={1}>{`${country}, ${state}, ${city}, ${town}, ${street}, ${houseNo}`}</Text>
                </View>
                :
                null
                }

            </TouchableOpacity>

            <View style={{height:60,width:'100%',borderRadius:14,backgroundColor:'black',paddingHorizontal:13,marginTop:20}}>
                <Text style={{...FONTS.body8,color:'white',marginTop:5,marginLeft:5}}>Contact Number</Text>

                <TextInput
                value={contactNum}
                style={{height:35,width:'100%',color:'white'}}
                keyboardType={'number-pad'}
                onChangeText={(value)=>setContactNum(value)} 
                />

            </View>





            <TouchableOpacity style={[styles.signupstyle,{marginTop:70}]}

            onPress={()=>navigation.navigate('SignUpProfessionalInfo')}
                      
                            > 
                                            <Text style={styles.buttontextstyle} >
                                                Next
                                            </Text>
                        </TouchableOpacity>



            </View>

            <Modal
              visible={datemodel}
              onRequestClose={() => {
                setmodel(false);
              }}
              animationType={'slide'}
              transparent={true}>
              <View
                style={{
                  flex: 1,
                  backgroundColor: 'rgba(0, 0, 0, 0.20)',
                  justifyContent: 'flex-end',
                }}>
                      <TouchableOpacity style={{flex:1,}} 
                                        activeOpacity={5} 
                                        onPress={()=> setdatemodel(false)}
                                      
                                        >
                                             
                                        </TouchableOpacity>
                <View
                  style={{
                    width: '100%',
                    height: 270,
                    backgroundColor: COLORS.white,
                    paddingHorizontal: 10,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                  }}>
                  <View
                    style={{
                      width: '100%',
                      justifyContent: 'space-between',
                      flexDirection: 'row',
                      marginVertical: 15,
                      backgroundColor:COLORS.white,
                      borderBottomWidth: 1,
                      borderColor: '#F2F2F2',
                      paddingVertical: 10,
                    }}>
                    <TouchableOpacity onPress={() => setdatemodel(false)}>
                      <Text style={{...FONTS.body2, color: COLORS.darkgray}}>
                        Cancel
                      </Text>
                    </TouchableOpacity>
                    <Text style={{...FONTS.body2}}>Date of Birth</Text>
                    <TouchableOpacity>
                      <Text
                        style={{...FONTS.body2, color: COLORS.darkgray}}
                        onPress={() => {
                          setdatemodel(false);
                          //onChange();
                        }}>
                        Done
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View style={{width: '100%', alignItems: 'center',backgroundColor:COLORS.white}}>
                    {showDatePicker && (
                      <DateTimePicker
                        testID="dateTimePicker"
                        showMode={'date'}
                        value={dateFormatted}
                        maximumDate={new Date()}
                        mode={'date'}
                        display="spinner"
                        onChange={onChange}
                        style={{width: '80%', height: 200,}}
                        textColor={COLORS.black}
                      />
                    )}
                  </View>
                </View>
              </View>
            </Modal>
            <Modal
                    visible={addressModal}
                    onRequestClose={() => { setAddressModal(false) }}
                    animationType={"fade"}
                    transparent={true}>
                    {Platform.OS === 'android' ?
                        <StatusBar backgroundColor="rgba(0,0,0,0.45)" />
                        : null}
                    <View style={{ flex: 1, backgroundColor: "rgba(0, 0, 0, 0.45)", justifyContent: "flex-end" }}>
     
                    <KeyboardAvoidingView style={{flex:1,justifyContent: "flex-end"}}
                           behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    >
                    
                        <View style={{ backgroundColor: COLORS.white, borderTopLeftRadius: 20, borderTopRightRadius: 20,width:SIZES.width }}>
                            <ScrollView showsVerticalScrollIndicator={false} >
                               
                            <View style={{ width: "100%", marginVertical: 5 }}>
                            
                                    <View
                                        style={{
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flexDirection: 'row',
                                        width: SIZES.width - 10,
                                        marginTop: 8,
                                        marginBottom: 15,

                                        marginLeft: 10,
                                        }}>
                                        <TouchableOpacity
                                        style={{position: 'absolute', left: 0}}
                                        onPress={() => {
                                            setAddressModal(false)
                                        }}>
                                       <Cross/>
                                        </TouchableOpacity>

                                        <Text
                                        style={{
                                            ...FONTS.h5,
                                            marginLeft: -20,
                                        }}>
                                        My Address
                                        </Text>
                                    </View>
                            </View>

                            <View style={{ width: "100%", alignItems: "center", justifyContent: "space-between", paddingHorizontal:10,marginTop:SIZES.height*0.05 }}>
                            
                                <TextInput
                                    placeholder="Country"
                                   // value={country}
                                    style={styles.inputtextstyle}
                                 onChangeText={(val)=>setCountry(val)}
                                />
                                <TextInput
                                    placeholder="State"
                                   // value={state}
                                    style={styles.inputtextstyle}
                                 onChangeText={(val)=>setState(val)}
                                />
                                <TextInput
                                    placeholder="City"
                                   // value={city}
                                    style={styles.inputtextstyle}
                                 onChangeText={(val)=>setCity(val)}
                                />

                                <TextInput
                                    placeholder="Town"
                                   // value={town}
                                    style={styles.inputtextstyle}
                                   onChangeText={(val)=>setTown(val)}
                                />
                                <TextInput
                                    placeholder="Street"
                                   // value={town}
                                    style={styles.inputtextstyle}
                                   onChangeText={(val)=>setStreet(val)}
                                />
                                <TextInput
                                    placeholder="House No"
                                  //  value={houseNo}
                                    style={styles.inputtextstyle}
                                    onChangeText={(val)=>setHouseNo(val)}
                                />

                                <TouchableOpacity style={[styles.signupstyle,{width:'90%',marginVertical:20}]}
                                    onPress={() => { setAddressModal(false) }}
                                >

                                    <Text style={styles.buttontextstyle} >
                                        Save
                                    </Text>
                                </TouchableOpacity>


                            </View>
                         
                            </ScrollView>
                        </View>
                    
                  
                        </KeyboardAvoidingView>
                    </View>
                </Modal>
        </View>
    )
}

export default SignUpPersonalInfo

const styles = StyleSheet.create({
    signupstyle:{
        height:60,
        width:"100%",
        backgroundColor:COLORS.primary,
        borderRadius:14,
        justifyContent:"center",
        alignItems:"center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        
        elevation: 2,
    
    },
    buttontextstyle:{
        color:COLORS.white,
        ...FONTS.h2
        },
        inputtextstyle: {
          width: "90%",
          height: 50,
          borderWidth: 2,
          paddingHorizontal: 10,
          marginVertical:7,
          borderColor: "#EAEAEA",
          backgroundColor: COLORS.white,
          color: COLORS.darkgray,
          borderRadius: 10
      }
})
