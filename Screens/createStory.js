import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class CreateStory extends Component{
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
                }}>Create Story</Text>
            </View>
        )
    }
}