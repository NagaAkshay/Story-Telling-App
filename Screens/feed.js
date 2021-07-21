import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Feed extends Component{
    render(){
        return(
            <View style = {{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
            }}>
                <Text style = {{
                    fontWeight: "bold",
                    fontSize: 20
                }}>Feeds</Text>
            </View>
        )
    }
}