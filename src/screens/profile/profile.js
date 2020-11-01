import React, {useState} from 'react';
import {Text, View} from 'react-native-ui-lib';
import {Header, Icon} from 'react-native-elements';
import {ImageBackground, ScrollView, StyleSheet} from 'react-native';

import {colors} from '../../config/styles';
import AboutMeTags from './components/aboutMeTags';

const Profile = ({route, navigation}) => {
    const [starProfile, setStarProfile] = useState(false);
    const [starData, setStarData] = useState(false);
    const [starAboutMe, setStarAboutMe] = useState(false);

    let year = 26;
    return (
        <View flex paddingH-20>
            {/**Header with two buttons */}
            <Header
                placement="left"
                containerStyle={{
                    backgroundColor: colors.lightBgGray,
                    justifyContent: 'space-around',
                }} backgoundColor={colors.primary}
                leftComponent={<Icon name="cake"
                                     type="entypo"
                                     onPress={() => console.log("CLICKED")}/>}
                rightComponent={<Icon name="dots-three-horizontal"
                                      type="entypo"
                                      onPress={() => console.log("CLICKED")}/>}/>
            {/** profilepic + like button */}
            <ScrollView>
                <View marginV-10>
                    <ImageBackground
                        imageStyle={styles.profilePic}
                        source={require('../../assets/images/profile1.png')}
                        style={styles.profilePicContainer}>
                        <View right bottom style={styles.likeContainer}>
                            <Icon
                                raised
                                name={starData ? "heart" : "hearto"}
                                type="ant-design"
                                color={colors.like}
                                onPress={() => setStarData(!starData)}
                            />
                        </View>
                    </ImageBackground>

                </View>
                {/**about me  text area flexbile+ like */}
                <View>
                    <View marginV-10 row>
                        <Text text40 black style={{fontWeight: 'bold'}}> Suzanne </Text>
                        <Icon name="verified"
                              type="material-icons"
                              containerStyle={styles.iconVerified}/>
                    </View>
                    {year && <View marginL-10 row>
                        <Icon name="cake"
                              type="entypo"
                              containerStyle={styles.iconData}
                              size={20}
                        />
                        <Text text70>{year + " years old"} </Text>
                    </View>
                    }
                </View>
                <View marginV-20 br50 bg-white>
                    <View marginT-20 marginH-15>
                        <Text center>Tortor aliquam nult. Commodo ullamcorper a lacus vestibulum sed arcu non
                            odio. </Text>
                    </View>
                    <View right bottom style={styles.likeContainer}>
                        <Icon
                            raised
                            name={starAboutMe ? "heart" : "hearto"}
                            type="ant-design"
                            color={colors.like}
                            onPress={() => setStarAboutMe(!starAboutMe)}
                        />
                    </View>
                </View>
                <View marginT-10 br50 bg-white>
                    <Text marginH-20 marginT-20 center>About Me </Text>
                    <View center marginH-20>
                        <AboutMeTags tags={['arr', 'fgfhghg hgh', 'fdfdf']}/>
                    </View>
                    <View right bottom style={styles.likeContainer}>
                        <Icon
                            raised
                            name={starProfile ? "heart" : "hearto"}
                            type="ant-design"
                            color={colors.like}
                            onPress={() => setStarProfile(!starProfile)}
                        />
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    iconVerified: {
        margin: 5,
    },
    iconData: {
        marginRight: 5
    },
    labelStyle: {
        textDecorationLine: 'underline',
    },
    likeContainer: {
        bottom: 0
    },
    profilePicContainer: {
        flex: 1,
        width: '100%',
        height: 400,
    },
    profilePic: {
        borderRadius: 15,
        resizeMode: 'cover',
        justifyContent: "center"

    }
});

export default Profile;
