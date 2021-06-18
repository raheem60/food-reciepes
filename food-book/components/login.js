import React, { useState } from 'react';
import { useHistory } from 'react-router-native';
import * as SecureStore from 'expo-secure-store';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Platform,
    Keyboard,
    ActivityIndicator,
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'teal',
    },
    contentContainerStyle: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 50,
        paddingRight: 50,
    },
    inputContainer: {
        width: '100%',
        borderColor: 'black',
        borderWidth: 0,
        padding: 10,
        marginTop: 10,
        borderRadius: 50,
        backgroundColor:'white',
    },
    touch: {
        padding: 5,
        marginTop: 50,
        backgroundColor: 'coral',
        width: '50%',
        borderRadius: 50,
    },
    buttonText: {
        textAlign: 'center',
        color: '#fff',
        fontSize:28,
        fontFamily:"monospace",
    },
   
    heading: {
        fontWeight: 'bold',
        marginBottom: 10,
        fontSize: 32,
        fontFamily:"monospace",
        color:'white',
    },
});

const UserLogin = function() {
    SecureStore.getItemAsync('accessToken').then((value) => {
      if (value) {
        history.push('/logout');
      }
    });

    const history = useHistory();

    const [username, setUsername] = useState('raheem');
    const [password, setPassword] = useState('raheem123');
    const [loading, setLoading] = useState(false);

    const loginUser = () => {
       if (username === 'raheem' && password == 'raheem123') {
          history.push('/logout');
        }
        else{
        alert('Invalid User...')
      }
    };

    return (
        <KeyboardAvoidingView
            style={styles.container}>
                <View style={styles.contentContainerStyle}>

                    <Text style={styles.heading}>Login To Piz</Text>
                    <View style={styles.inputContainer}>
                        <TextInput
                            value={username}
                            onChangeText={setUsername}
                            />
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry={true}
                            />
                    </View>
                    <TouchableOpacity style={styles.touch} onPress={loginUser} disabled={loading}>
                        {
                            loading
                            ? <ActivityIndicator/>
                            : <Text style={styles.buttonText}>Login</Text>
                        }
                    </TouchableOpacity>
                </View>
        </KeyboardAvoidingView>
    )
};

export default UserLogin;
