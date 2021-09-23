import React from 'react';
import { Image, ImageBackground,StyleSheet,View,Text } from 'react-native';
import AppButton from '../components/AppButton';

function WelcomeScreen(props) {
    return (
     <ImageBackground
        style={styles.background}
         source={require("../assets/background.jpg")}>
<View style={styles.logoContainer}>
<Image source={require("../assets/logo-red.png")}
style={styles.logo}
/>
<Text >Sell What You Dont't Need</Text>
    </View>

    <View style={styles.buttonsContainer}>
    <AppButton title="login"></AppButton>
    <AppButton title="Register" color="secondary"></AppButton>
        
    </View>

     
     </ImageBackground>
    );
}

const styles = StyleSheet.create({
    
background:{
    flex:1,
    justifyContent:'flex-end',
    alignItems:'center'
},
buttonsContainer:{
    padding:20,
    width:"100%",
  
},
loginButton:{
    width:'100%',
    height:70,
    backgroundColor:'#fc5c65'
},
RegisterButton:{
    width:'100%',
    height:70,
    backgroundColor:'#4ecdc4'
},
logo:{
    width:100,
    height:100,
    

},
logoContainer:{
    position:'absolute',
    top:70,
    alignItems:"center"
}

})
export default WelcomeScreen;