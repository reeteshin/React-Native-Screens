import {StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import BackIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Search from 'react-native-vector-icons/Fontisto';
import Bell from 'react-native-vector-icons/MaterialCommunityIcons';
import Live from 'react-native-vector-icons/MaterialCommunityIcons';
import Color from '../Common/Color';
import Map, {PROVIDER_GOOGLE} from 'react-native-maps';
const MapView = ({navigation}) => {
  return (
    <>
      <View
        style={{
          backgroundColor: Color.lightyello,
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'row',
          padding: 15,
        }}>
        <View
          style={{
            flexDirection: 'row',
            height: 80,
            paddingTop: 23,
            alignItems: 'baseline',
            marginTop: 10,
          }}>
          <TouchableWithoutFeedback onPress={()=>navigation.goBack()}>

          <BackIcon name="arrow-left" size={28} />
          </TouchableWithoutFeedback>
          <View style={{marginLeft: 15, alignSelf: 'center'}}>
            <Text
              style={{fontSize: 20, fontWeight: 'bold', color: Color.yello}}>
              Team Attendance
            </Text>
          </View>
        </View>
        <View
          style={{
            width: 80,
            alignItems: 'baseline',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View style={{marginLeft: 20}}>
            <Search name="search" color={'#464646'} size={18} />
          </View>
          <View>
            <Bell name="bell" color="#464646" size={23} />
          </View>
        </View>
      </View>
      <View style={{}}>
        <View
          style={{flexDirection: 'row', marginHorizontal: 20, marginTop: 20}}>
          <Live name="access-point-network" size={24} color={Color.darkyello} />
          <Text style={{marginLeft: 20, fontSize: 20, fontWeight: 'bold'}}>
            Live Team Tracking
          </Text>
        </View>
        <View style={{height:"100%"}}>
          <Map
            userInterfaceStyle="dark"
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            region={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
            }}>
            <View>
             
            </View>
          </Map>
        </View>
      </View>
    </>
  );
};

export default MapView;

const styles = StyleSheet.create({
  map:{
    height:"100%",marginTop:20
  }
});
