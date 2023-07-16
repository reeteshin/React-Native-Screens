import { StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native';
import React from 'react';
import AnimatedLottieView from 'lottie-react-native';
import { Button, TextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import Color from '../Common/Color';

const Login = () => {
    const navigation = useNavigation()
    return (
        <KeyboardAvoidingView
            style={{ flex: 1,backgroundColor:Color.background }}
            behavior={Platform.OS === 'ios' ? 'padding' : null}
        >
            <View style={{ flex: 1,marginTop:50 }}>
                <View style={{  borderColor: 'red', alignSelf: 'center' }}>
                    <Text style={{ textAlign: 'center', fontFamily: '', fontWeight: 'bold', fontSize: 24, color: 'black' }}>Hi,</Text>
                    <Text style={{ fontWeight: 'bold', fontSize: 24, color: '#F86F03' }}>Welcome Back</Text>
                </View>
                <View style={{  borderColor: 'red', height: 280, justifyContent: 'center' }}>
                    <AnimatedLottieView style={{}} source={require('./animation.json')} autoPlay loop />
                </View>
                <View>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black', padding: 15 }}>Login or Signup to Texla Culture</Text>
                </View>
                <View style={{ padding: 15 }}>
                    <Text>Enter Your Phone Number</Text>
                    <TextInput
                        label="Contect"
                        mode='outlined'
                        underlineColor='red'
                        activeUnderlineColor="red"
                        activeOutlineColor="gray"

                    />
                </View>
                <View style={{ width: 150, justifyContent: 'center', alignSelf: "center" ,marginTop:50}}>

                    <Button style={{backgroundColor:Color.darkyello}} onPress={() => navigation.navigate('SignIn')} mode='contained'>Get</Button>
                </View>
            </View>
        </KeyboardAvoidingView>
    );
}

export default Login;

const styles = StyleSheet.create({});
