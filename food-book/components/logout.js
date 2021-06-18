import * as React from 'react';
import { Text, View, StyleSheet, Image, Platform, Button, Share } from 'react-native';
import { useHistory } from 'react-router-native';
import * as SecureStore from 'expo-secure-store';


const styles = StyleSheet.create({
  header: {
    textAlign: 'center',
    marginBottom: "0px",
    fontSize:26,
    fontWeight:"bold",
    color:"white",
  },
  container: {
        flex: 1,
        backgroundColor: 'teal'
    },

    text: {
        fontSize:26,
        textAlign:"center",
        color:'white',    
    },
});
const Logout = () => {
    const history = useHistory();


    const logout = () => {
        history.push('/');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header} >Food is Life</Text>

       <Text style={styles.text}>Read Reciepies</Text>

        <a href = "https://migrationology.com/pakistani-food/"><h2> Read</h2></a>


            <Button style={styles.button} onPress={logout} title="Logout"></Button>
        </View>
    )
};

export default Logout;
