import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Color from '../Common/Color';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import Close from 'react-native-vector-icons/Fontisto';
import RightArrow from 'react-native-vector-icons/FontAwesome5';
import Dotfill from 'react-native-vector-icons/Octicons';
const CustomDrawer = ({navigation}) => {
  const EmployeeDetails = [
    {
      id: 1,
      iconName: 'link',
      FirstText: 'Joining Date',
      LastText: '1 Dec,23',
    },
    {
      id: 2,
      iconName: 'map-marker-alt',
      FirstText: 'Address',
      LastText: 'E41c, Palam Vihar Extn. Gurgaon',
    },
    {
      id: 3,
      iconName: 'phone',
      FirstText: 'Phone',
      LastText: '8287233848',
    },
    {
      id: 4,
      iconName: 'email',
      FirstText: 'Email',
      LastText: 'neha.r@texlaculture.com',
    },
  ];
  const DATA = [
    {
      id:1,
      heading: 'My Profile',
    },
    {
      id:2,
      heading: 'Family Details',
    },
    {
      id:3,
      heading: 'Statutory Details',
    },
    {
      id:4,
      heading: 'Holiday Calendar',
    },
    {
      id:5,
      heading: 'Enployee Directory',
    },
    {
      id:6,
      heading: 'Employee List',
    },
    {
      id:7,
      heading: '',
    },
    {
      id:8,
      heading: 'Settings',
    },
  ];
  return (
    <DrawerContentScrollView
      showsVerticalScrollIndicator={false}
      style={{backgroundColor: Color.background}}>
      <TouchableOpacity onPress={() => navigation.closeDrawer()}>
        <View
          style={{
            paddingLeft: 7,
            borderRadius: 10,
            backgroundColor: '#fff',
            width: 40,
            height: 40,
            justifyContent: 'center',
            alignSelf: 'flex-end',
            marginHorizontal: 15,
          }}>
          <Close name="close-a" size={24} color={'black'} />
        </View>
      </TouchableOpacity>
      <View
        style={{
          backgroundColor: Color.lightyello,
          borderColor: Color.darkyello,
          borderWidth: 1,
          marginHorizontal: 20,
          marginTop: 15,
          borderRadius: 17,
        }}>
        <View
          style={{
            backgroundColor: Color.yello,
            height: 50,
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
          }}></View>
        <Image
          style={{
            backgroundColor: '#FFFDF7',
            height: 120,
            width: 120,
            alignSelf: 'center',
            borderRadius: 60,
            marginTop: -25,
          }}
          source={{uri: 'https://avatars.githubusercontent.com/u/37933301?v=4'}}
        />
        <View
          style={{
            justifyContent: 'center',
            alignSelf: 'center',
            height: 54,
            marginTop: 10,
          }}>
          <Text style={{textAlign: 'center'}}>Reetesh Meena</Text>
          <Text style={{textAlign: 'center'}}>
            Employee Code{' '}
            <Text style={{color: 'black', fontWeight: 'bold'}}>
              TEP0069 <Text style={{color: Color.cyne}}>Copy</Text>
            </Text>
          </Text>
          <Text style={{textAlign: 'center', color: 'black'}}>
            Product Design Intern
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            paddingRight: 15,
            paddingBottom: 10,
            backgroundColor: '#fff',
            borderBottomLeftRadius: 17,
            borderBottomRightRadius: 17,
            marginTop: 20,
            justifyContent: 'space-between',
          }}>
          {EmployeeDetails.map(item => (
            <React.Fragment key={item.id}>
              <View
                style={{
                  flexDirection: 'row',
                  marginHorizontal: 10,
                  marginTop: 10,
                  alignSelf: 'baseline',
                }}>
                <View style={{marginTop: 5, marginHorizontal: 5}}>
                  <Close name={item.iconName} size={10} />
                </View>
                <Text>{item.FirstText}</Text>
              </View>
              <View
                style={{
                  width: '55%',
                  justifyContent: 'center',
                  marginTop: 10,
                }}>
                <Text style={{color: 'black', fontWeight: 'bold'}}>
                  {item.LastText}
                </Text>
              </View>
            </React.Fragment>
          ))}
        </View>
      </View>
      {/* Section list start from here */}
      <View style={{marginTop: 20, paddingBottom: 10, backgroundColor: '#fff'}}>
        {DATA.map(item =>
          item.heading !== '' ? (
            <View key={item.id}
              style={{
                marginHorizontal: 15,
                borderColor: 'lightgray',

                borderWidth: 1,
                marginTop: 20,
                borderRadius: 5,
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: 15,
              }}>
              <View style={{flexDirection: 'row', alignItems: 'baseline'}}>
                <Dotfill name="dot-fill" size={17} />
                <Text
                  style={{marginLeft: 10, fontSize: 17, fontWeight: 'bold'}}>
                  {item.heading}
                </Text>
              </View>
              <View style={{alignItems: 'baseline'}}>
                <RightArrow name="chevron-right" size={20} />
              </View>
            </View>
          ) : (
            <View
            key={item.id}
              style={{
                borderColor: '#edebe6',
                borderWidth: 1,
                marginTop: 20,
                marginHorizontal: 10,
              }}></View>
          ),
        )}
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({});
