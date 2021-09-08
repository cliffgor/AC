import {
    Animated,
    Button,
    Dimensions,
    Image,
    SafeAreaView,
    StyleSheet,
    Text,
    View
} from 'react-native';
import React, {useEffect, useRef} from 'react';

const Splash: () => React$Node = ({navigation}) => {
    const moveAnim = useRef(new Animated.Value(0)).current;
    const fadeAnim = useRef(new Animated.Value(0)).current;
  
    useEffect(() => {
      Animated.sequence([
        Animated.timing(moveAnim, {
          duration: 2000,
          toValue: Dimensions.get('window').width / 1.6,
          delay: 0,
          useNativeDriver: false,
        }),
        Animated.timing(moveAnim, {
          duration: 2000,
          toValue: 0,
          delay: 0,
          useNativeDriver: false,
        }),
      ]).start();
      Animated.timing(fadeAnim, {
        duration: 2000,
        toValue: 1,
        delay: 2000,
        useNativeDriver: false,
      }).start();
    }, [moveAnim, fadeAnim]);
  
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.contentContainer}>
          <Animated.Image
            style={[styles.image, {opacity: fadeAnim}]}
            source={require('../../assets/images/Andela-Favicon.png')}
          />
          
            <Text style={[styles.logoText]}>Andela Community</Text> 
          
          <Button 
          style={{fontSize: 20, color: 'green'}}
          styleDisabled={{color: 'red'}}
          onPress={() => navigation.navigate("Home")}
          title="Get started">
          </Button>
        </View>
      </SafeAreaView>
    );
  };
  
  export default Splash;
  
  export const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flex: 1,
      backgroundColor: '#fff',
    },
    logoText: {
      fontSize: 35,
      marginTop: 20,
      color: 'black',
      fontWeight: '700',
    },
    contentContainer: {
      top: '40%',
      alignItems: 'center',
    },
    image: {
      width: 100,
      height: 100,
    },
    logoContainer: {
      flexDirection: 'row',
    },
  });
  