import React, { useState } from "react";
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet} from 'react-native';

const UserForm = props => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

const handleSubmit = () => {
    // this function is called when the user presses the form button
};
       

    return (
        <View style={styles.formview}>
            <Text style={styles.formlabel}>Email</Text>
                <TextInput style={styles.styledinput}
                    onChangeText={text => setEmail(text)}
                    value={email} 
                    textContentType="emailAddress"
                    autoComplete="email"
                    autoFocus={true}
                    autoCapitalize="none"
                    />
            <Text style={styles.formlabel}>Password</Text>
                <TextInput style={styles.styledinput}
                    onChangeText={text => setPassword(text)}
                    value={password} 
                    textContentType="password"
                    secureTextEntry={true}
                    />
            <Button style={styles.formbutton} onPress={handleSubmit}/>
                <Text style={styles.buttontext}>Submit</Text>
        </View>
    );
};

export default UserForm;

const styles = StyleSheet.create({
    formview: {
        padding: 10
    },
    styledinput: {
        border: 1,
        fontSize: 18,
        padding: 8,
        marginBottom: 24
    },
    formlabel: {
        fontSize: 18,
        fontWeight: "bold"
    },
    formbutton: {
        backgroundColor: "#0077cc",
        width: "100%",
        padding: 8
    },
    buttontext: {
        textAlign: "center",
        color: "#fff",
        fontWeight: "bold",
        fontSize: 18
    }
});