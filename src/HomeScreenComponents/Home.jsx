import { Image, ScrollView, StatusBar, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Search from 'react-native-vector-icons/Fontisto'
import Bell from 'react-native-vector-icons/MaterialCommunityIcons'
import Color from '../Common/Color'
import Exit from 'react-native-vector-icons/Ionicons'
import User from 'react-native-vector-icons/FontAwesome5'
import BackIcon from 'react-native-vector-icons/Ionicons'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import Menu  from 'react-native-vector-icons/MaterialIcons'
const Home = ({navigation}) => {
    const [active, setActive] = useState(true)
    useEffect(() => {
        StatusBar.setHidden(false)


    }, [])
    
    const MyComponent = () => {
        const renderCircles = () => {
          const circles = [];
          const circleCount = 7;
      
          for (let i = 0; i < circleCount; i++) {
            const circleStyle = {
              ...styles.circle,
              left: i * 12,
            };
      
            circles.push(<View key={i} style={circleStyle} />);
          }
      
          return circles;
        };
      
        return (
          <View style={styles.container}>
            {renderCircles()}
          </View>
        );
      };
    const MyTeamObject = [
        {
            id:1,
            statusOfTeam:"Present",
            count:20,
            TeamColor:Color.green,
            backColor:"#e5ffe0"
        },
        {
            id:2,
            statusOfTeam:"Absent",
            count:20,
            TeamColor:"red",
            backColor:"#ffe3e0"
        } ,
        {
            id:3,
            statusOfTeam:"On Duty",
            count:20,
            TeamColor:Color.yello,
            backColor:"#fffde0"
        } ,
        {
            id:4,
            statusOfTeam:"Leave",
            count:20,
            TeamColor:Color.darkyello,
            backColor:"#fffae0"
        }
    ]
    const RecentViewObj = [
        {
            id: 1,
            name: 'user',
            heading: 'My Profile',
            RecentColor:"green"
            
        },
        {
            id: 2,
            name: 'user',
            heading: 'Expence Management',
            RecentColor:"#7b3387"
            
        },
        {
            id: 3,
            name: 'user',
            heading: 'My Leaves',
            RecentColor:"#ffde7a"
        },
        {
            id: 4,
            name: 'user',
            heading: 'My Taskes',
            RecentColor:Color.cyne
        }
    ]

    return (

        <ScrollView style={{ flex: 1, backgroundColor: Color.background }}>
            <StatusBar
                backgroundColor={Color.background}
                barStyle={'dark-content'}
            />
            <View style={{ alignItems: 'center', justifyContent: "space-between", flexDirection: 'row', padding: 15 }}>
                <View style={{ flexDirection: 'row' ,height:80,paddingTop:23}}>

                    <TouchableOpacity  onPress={() => navigation.openDrawer()} style={{ height: 40, width: 40, borderRadius: 50, borderColor:"red",borderWidth:1,alignItems:'flex-end',justifyContent:'flex-end' }}>
                       <View style={{backgroundColor:'#fff',borderRadius:8}}>
                       <Menu  name="menu" size={16}/>
                       </View>
                    </TouchableOpacity>
                    <View style={{ marginLeft: 15 }}>
                        <Text style={{ color: Color.darkyello, fontWeight: "900" }}>Hi, Neha</Text>
                        <Text>Welcome to Texlaculture</Text>
                    </View>
                </View>
                <View style={{ width: 80, alignItems: 'baseline', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ marginLeft: 20 }}>
                        <Search name="search" color={"#464646"} size={18} />
                    </View>
                    <View>
                        <Bell name="bell" color="#464646" size={23} />
                    </View>

                </View>
            </View>
            {/* 2nd view Clock in */}
            <View style={{ backgroundColor: Color.lightyello, height: 120, justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: "10%" }}>

                <View style={{ alignSelf: 'center' }}>

                    <View style={{ backgroundColor: Color.yello, width: 50, height: 50, borderRadius: 25, alignSelf: 'center' }}><Text></Text></View>
                    <View style={{ alignSelf: 'center', marginTop: -50 }}>
                        <Text style={{ fontWeight: 'bold', textAlign: 'center', marginBottom: 15, color: 'black' }}>10:15 AM</Text>
                        <Text style={{ color: 'black' }}>Monday 22 jan</Text>
                    </View>
                </View>



                <TouchableOpacity style={{ borderRadius: 30, padding: 13, height: 50, width: 150, backgroundColor: Color.yello, alignSelf: 'center', flexDirection: 'row', alignItems: 'baseline', justifyContent: 'center' }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 17, alignSelf: 'center', color: '#fff', fontWeight: '700' }}>Clock-In </Text>
                        <Exit name="enter-outline" color="#fff" size={24} />
                    </View>
                </TouchableOpacity>
            </View>

            {/* 3rd View of degin */}

            <View style={{ backgroundColor: Color.background, height: 100, justifyContent: 'flex-end', paddingHorizontal: 15 }}>

                <View style={{ flexDirection: 'row', height: 40 }}>
                    <Text onPress={() => setActive(false)} style={{ borderBottomWidth: active ? 0 : 3, fontSize: 20, borderColor: Color.darkyello }}>Recent Visits</Text>
                    <Text onPress={() => setActive(true)} style={{ borderBottomWidth: active ? 3 : 0, fontSize: 20, marginLeft: 10, borderColor: Color.darkyello }}>Favourites</Text>
                </View>
            </View>

            {/* 4 th view / Horizontal */}
            <View style={{ backgroundColor: "#ffebd7", marginTop: 10 }}>

                <ScrollView horizontal={true} style={{ margin: 15 }} showsHorizontalScrollIndicator={false}>
                    {
                        RecentViewObj.map((item) =>
                            <View key={item.id} style={{ margin:5,backgroundColor:"#fff", width: 140, 
                            height: 100, justifyContent: 'center', alignItems: 'center',
                            borderRadius:15,
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 2,
                            },
                            shadowOpacity: 0.25,
                            shadowRadius: 3.84,
                            elevation: 5,
                             }}>
                                
                                <User name={item.name} size={40} color={item.RecentColor}/>
                                <Text style={{color:item.RecentColor, fontWeight: "bold", textAlign: 'center', marginTop: 10 }}>{item.heading}</Text>
                            </View>
                        )
                    }

                </ScrollView>
            </View>

            {/* my Team degin */}


            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 20 }}>
                <Text style={{ fontSize: 17, fontWeight: "bold" }}>My Team</Text>
                <BackIcon name="arrow-forward" size={24} />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' ,flexWrap:'wrap'}}>
                {
                    MyTeamObject.map((item)=>(
                        <View key={item.id} style={{ borderRadius:10,backgroundColor:item.backColor,height: 90,paddingTop:10, width: "45%", marginVertical:10 }}>
                            
                            <View style={{flexDirection:'row',justifyContent:'space-evenly',}}>
                                <Text style={{color:item.TeamColor,fontWeight:'bold'}}>{item.statusOfTeam}</Text>
                                <Text style={{color:item.TeamColor,fontWeight:'bold'}}>({item.count})</Text>
                            </View>

                            <View style={{flexDirection:'row',padding:10}}>

                            <MyComponent/>
                            <BackIcon name="arrow-forward" color={'lightgray'} size={24} />
                            </View>
                        </View>
                    ))
                }



            </View>

            {/* 5 th celebration */}

            <Text style={{ marginVertical: 15, marginHorizontal: 15, fontWeight: "bold", fontSize: 17 }}>
                Celebrations
            </Text>
            <ScrollView style={{ marginHorizontal: 20 }} horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={{ marginHorizontal: 10, height: 250, width: 200,borderRadius:15,backgroundColor:Color.lightyello, justifyContent: "space-evenly" }}>
                    <View style={{ height: 80, width: 80, borderRadius: 40, backgroundColor: 'red', alignSelf: "center" }}>

                    </View>
                    <View style={{ alignSelf: 'center' }}>
                        <Text style={{ textAlign: 'center', color:Color.cyne,fontWeight:'bold'}}>Chandrakant`s Anniversary</Text>
                        <Text style={{ textAlign: 'center' ,color:'black'}}>Founder & CEO</Text>
                        <Text style={{ textAlign: 'center' }}>12 Mar,23</Text>
                    </View>
                </View>
                <View style={{ marginHorizontal: 10, height: 250, width: 200, borderRadius:15, backgroundColor:"#cdf3cd",justifyContent: "space-evenly" }}>
                    <View style={{ height: 80, width: 80, borderRadius: 40, backgroundColor: 'red', alignSelf: "center" }}>

                    </View>
                    <View style={{ alignSelf: 'center' }}>
                    <Text style={{ textAlign: 'center', color:Color.green,fontWeight:'bold'}}>Chandrakant`s Anniversary</Text>
                        <Text style={{ textAlign: 'center' ,color:'black'}}>Founder & CEO</Text>
                        <Text style={{ textAlign: 'center' }}>12 Mar,23</Text>
                    </View>
                </View>
            </ScrollView>

            {/* map View  */}

            <View>
                <TouchableOpacity onPress={()=>navigation.navigate("MapView")} style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 20 }}>
                    <Text style={{ fontSize: 17, fontWeight: "bold" }}>Live Team Tracking</Text>
                    <BackIcon name="arrow-forward" size={24} />
                </TouchableOpacity>
                <View style={{
                    height: 300, borderRadius: 20, shadowColor: "#000",
                    backgroundColor: "lightgray",
                    borderRadius: 15,
                    shadowOffset: {
                        width: 0,
                        height: 5,
                    },
                    shadowOpacity: 0.34,
                    shadowRadius: 6.27,

                    elevation: 10,
                }}>
                    <MapView
                        userInterfaceStyle='dark'
                        provider={PROVIDER_GOOGLE}
                        style={styles.map}

                        region={{
                            latitude: 37.78825,
                            longitude: -122.4324,
                            latitudeDelta: 0.015,
                            longitudeDelta: 0.0121,
                        }}
                    >
                        <View>
                            <Text style={{ color: "green" }}>
                                Empty Text
                            </Text>
                        </View>
                    </MapView>

                </View>
            </View>


        </ScrollView>
    )
}

export default Home

const styles = StyleSheet.create({
    sts: {
        backgroundColor: 'red'
    }, map:
    {
        height: "100%",
        borderRadius: 20,
        justifyContent: 'flex-end',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0,
        shadowRadius: 6.27,

        elevation: 10,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      circle: {
        width: 26,
        height: 26,
        borderColor:'red',
        borderWidth:1,
        borderRadius: 13,
        backgroundColor: Color.lightyello,
        position: 'absolute',
        zIndex: 1,
      },
})