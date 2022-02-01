import React, { useState } from 'react'
import { StyleSheet, Text, View,SafeAreaView,TouchableOpacity,StatusBar, Platform,Image, FlatList,Animated, TextInput,Modal,KeyboardAvoidingView,ScrollView, Alert } from 'react-native'
import {FONTS,COLORS,SIZES} from '../constaints/theme';
import AddIcon from '../svgIcons/AddIcon';
import Back from '../svgIcons/Back';
import DeleteBin from '../svgIcons/DeleteBin';
import Bin from '../svgIcons/DeleteBin';


const SignUpProfessionalInfo = ({navigation})=>{
    const [experience,setExperience] = useState('')
    const [ExperienceDetail,setExperienceDetail] = useState('')
    const [custome_field, setcustome_field] = useState([{id: 0, degree: '',degreeDescription:''}])

    const deletefield = (id) => {
        if (custome_field.length > 1) {
          const values = [...custome_field];
          values.splice(id, 1);
          setcustome_field(values);
        }
      };
      const addfield = () => {
        var a = 0;
        if (custome_field.length <= 2) {
          a = custome_field.length + a;
          setcustome_field([...custome_field, {id: a, degree: '',degreeDescription:''}]);
        } else {
            Alert.alert('You can add upto 3')
        }
      };

    const DynamicInputtext = () => {
        return custome_field.map((customeInput, index) => {
          return (
            <View
            key={customeInput.id}
            >
              <View

                style={{
                  flexDirection: 'row',
                  width: '100%',
                  justifyContent: 'space-between',
                }}>
                <TextInput
                  placeholder="Degree/Certificate"
                  placeholderTextColor={'#979797'}
                  keyboardType={'phone-pad'}
                  style={{
                    width: '75%',
                    height: 50,
            
                    paddingHorizontal: 10,
                    borderColor: '#EAEAEA',
                    backgroundColor: 'black',
                    color: '#979797',
                    borderRadius: 10,
                    marginVertical: 10,
                  }}
                  onChangeText={(text) => {
                    var s = custome_field;
                    var i = s[index];
                    i['degree'] = text;
      
                    s[index] = i;
                    setcustome_field(s);
                  }}
                />
                <TouchableOpacity
                  style={styles.binviewstyle}
                  onPress={() => deletefield(customeInput.id)}>
              
                  <DeleteBin/>
                </TouchableOpacity>
              </View>
              <TextInput
              placeholder={'Any decription related to degree ....'}
              placeholderTextColor={'#979797'}
              onChangeText={(text) => {
                    var s = custome_field;
                    var i = s[index];
                    i['degreeDescription'] = text;
      
                    s[index] = i;
                    setcustome_field(s);
                  }}
              multiline={true}
              textAlignVertical={'top'}
                  style={{
                    height:113,
                    width:'100%',
                    borderRadius:7,
                    backgroundColor:'black',
                    paddingHorizontal:10


                  }}
              />
            </View>
          );
        });
      };
    

    return(
            <View style={{flex:1,backgroundColor:'white'}}>
                <StatusBar
                backgroundColor='white'
                barStyle={'dark-content'}
                />
                <SafeAreaView style={{marginTop:Platform.OS == 'android'?20:10}}>

                </SafeAreaView>
                <ScrollView style={{flex:1,paddingHorizontal:20}}>
                    <TouchableOpacity style={{width:30,height:30,justifyContent:'center',alignItems:'center',}}
                    onPress={()=>navigation.goBack()}
                    >
                        <Back/>
                    </TouchableOpacity>
                    <Text style={{...FONTS.h6,color:'black',marginTop:20,fontSize:34}}>Professional info</Text>
                    <View style={{height:60,width:'100%',borderRadius:14,backgroundColor:'black',paddingHorizontal:13,marginTop:20}}>
                        <Text style={{...FONTS.body8,color:'white',marginTop:5,marginLeft:5}}>Experience</Text>

                        <TextInput
                        value={experience}
                        style={{height:35,width:'100%',color:'white'}}
                        keyboardType={'number-pad'}
                        onChangeText={(value)=>setExperience(value)} 
                        />

                    </View>
                    <TextInput
                    placeholder={'Any description related to that experience....'}
                    placeholderTextColor={'grey'}
                    value={ExperienceDetail}
                    style={{height:113,width:'100%',borderRadius:7,marginTop:15,backgroundColor:'black',paddingLeft:10}}
                    multiline={true}
                    textAlignVertical={'top'}
                    onChangeText={(value)=>setExperienceDetail(value)}
                    
                    />
                    <Text style={{...FONTS.h3,color:'black',marginTop:20,}}>Qualification<Text style={{...FONTS.body2,color:COLORS.lightGray4}}>(upto 3 degree only)</Text></Text>
                    <View>{DynamicInputtext()}</View>
                    <TouchableOpacity style={{flexDirection:'row',alignItems:'center',marginTop:20}}
                    onPress={()=>addfield()}
                    >
                      <AddIcon color={'black'}/>
                      <Text style={{color:'black',...FONTS.body2,marginLeft:10,marginTop:3}}>Add qualification</Text>


                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.signupstyle,{marginTop:10}]}
                    onPress={()=>navigation.navigate('SignUpInterestIn')} > 
                                <Text style={styles.buttontextstyle} >
                                    Next
                                </Text>
                    </TouchableOpacity>
                        
                </ScrollView>
            </View>

    )
};
export default SignUpProfessionalInfo;

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
      },
      binviewstyle: {
        height: 50,
        width: '20%',
        backgroundColor: '#E6E6E6',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
      },
})