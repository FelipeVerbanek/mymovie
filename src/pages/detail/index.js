import React, { Component  } from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View,
    Button,
    Alert,
    ImageBackground,
  } from 'react-native';


export default class DetailScreen extends Component {
    render () {
        const id    = this.props.navigation.getParam('id');
        const title = this.props.navigation.getParam('title');
        const overview = this.props.navigation.getParam('overview');
        const poster = this.props.navigation.getParam('poster');

        return ( 
            <>
                <View style={styles.fundoblack}/>
                <ImageBackground style={styles.container} source={{uri: 'https://image.tmdb.org/t/p/w300'+poster }} />   
                <View style={styles.body}>
                    <Image style={styles.imgPoster} source={{uri: 'https://image.tmdb.org/t/p/w300'+poster }}></Image>
                    <Text style={styles.title}>{ title }</Text>
                    <Text style={styles.overview}>{ overview }</Text>
                    
                </View>
            </>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        width: '100%' ,
        height: '100%' ,
        flex: 1,
        opacity: 0.2,
      },
        imgPoster: {
            width: 283,
            height: 350,
            
    },
        title: {
            color: 'white',
            fontSize: 18,
    }, 
        body: {
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100%',
    },overview: {
            marginLeft: '5%',
            marginRight: '5%',
            marginTop: 10,
            color: 'white',
    },  fundoblack:{
        position: 'absolute',
        width: '100%' ,
        height: '100%' ,
        backgroundColor: 'black',
      }, 
});