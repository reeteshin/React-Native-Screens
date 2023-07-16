import { KeyboardAvoidingView, ScrollView, StyleSheet, Text, TouchableNativeFeedback, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AnimatedLottieView from 'lottie-react-native'
import { Button, Checkbox, Divider, TextInput } from 'react-native-paper'
import Icon from 'react-native-vector-icons/dist/Ionicons';
import { useNavigation } from '@react-navigation/native';
import Color from '../Common/Color';
const SignIn = () => {
    const navigation = useNavigation()
    return (
        <ScrollView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : null}>
           
            <View style={{ flexDirection: 'column' }}>
                <View style={{ alignSelf: 'center', marginTop: 50 }}>
                    <Text style={{ textAlign: 'center', fontSize: 24, color: 'black' }}>Hi,</Text>
                    <Text style={{ fontSize: 24, color: "black" }}>Welcome Back</Text>
                </View>
                <View style={{ height: 250 }}>
                    <AnimatedLottieView style={{}} source={require('./animation.json')} autoPlay loop />
                </View>
            </View>
            
            <View style={{ padding: 20 }}>
                <Text style={{ fontSize: 20, color: "black" }}>Login or Signup to Texla Culture</Text>
                <View style={{ marginTop: 20 }}>
                    <Text>Enter Your Phone Number</Text>
                    <TextInput mode='outlined' label={"Contect"} />
                    <TextInput mode='outlined' label={"Enter 4 Digit PIN"} />
                    <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10,alignItems:'baseline'}}>
                        <View style={{flexDirection:'row',alignItems:'baseline'}}>
                            <Checkbox
                                color='red'
                            />
                            <Text>Remeber Me</Text>
                        </View>
                        <TouchableOpacity onPress={()=>navigation.navigate("ForgotPassword")}>

                        <Text>Forgot PIN?</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{width:150,alignSelf:'center',marginTop:40}}>
                    <Button mode='contained' style={{backgroundColor:Color.darkyello}} onPress={()=>navigation.navigate("HomePage")}>SignIn</Button>

                    </View>
                    <TouchableNativeFeedback onPress={()=>navigation.navigate("Login")}>

                    <View  style={{flexDirection:'row',alignSelf:'center',marginTop:10}}>
                        <Icon name="chevron-back" size={26} color="#900" />
                        <Text style={{fontSize:20}}> Back</Text>
                    </View>
                    </TouchableNativeFeedback>
                </View>
            </View>


        </ScrollView>
    )
}

export default SignIn

const styles = StyleSheet.create({})