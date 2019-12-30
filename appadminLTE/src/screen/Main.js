import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {WebView} from 'react-native-webview'


export default class Main extends Component{
    render(){
        return(
           
            <View style={{flex:1}}>
                <WebView
                source={{uri: 'https://adminlte.io/themes/dev/AdminLTE/index.html'}}
                style={{/*marginTop: 20, flex: 1, width:450, height:100*/}}
       
                domStorageEnabled={false}
                startInLoadingState={false}
             
                />
            </View>
    
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        

    },
})