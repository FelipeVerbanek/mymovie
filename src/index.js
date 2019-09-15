import React, { Component  } from 'react';
import api from './services/api';
import { ImageBackground, StatusBar } from 'react-native';
import {Container, TabsContainer,TabItem, TabText } from './styles';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  AsyncStorage,
} from 'react-native';
const token = '492c56cae16fdf7eeba99d11130e687a';

export default class App extends Component {
  state = {
    errorMessage: null,
    results: [],
    poster_path: null,
    title: null,
    overview: null,
  };
/*
  signIn = async () => {
    try {
      const response = await api.post('/auth/authenticate', {
        email: 'diego@rocketseat.com.br',
        password: '123456',
      });

      const { token, user } = response.data;

      await AsyncStorage.multiSet([
        ['@CodeApi:token', token],
        ['@CodeApi:user', JSON.stringify(user)],
      ]);

      this.setState({ loggedInUser: user });

      Alert.alert('Logado com sucesso!');
    } catch (err) {
      this.setState({ errorMessage: err.data.error });
    }
  };
*/ 


  getProjectList = async () => {
    try {
      const response = await api.get('/movie/popular?api_key='+token+'&language=pt-BR&page=1');

      const { results  } = response.data;
      
      this.setState({ results });


    } catch (err) {
      this.setState({ errorMessage: err.errorMessage });

    }
  };

  getIdicaFilme = async () => {
    try {
      this.results = null

      let page = Math.floor(Math.random() * 500);
      let num = Math.floor(Math.random() * 20);
      response = await api.get('/movie/popular?api_key='+token+'&language=pt-BR&page='+page);

      const { poster_path, title , overview  } = response.data.results[num];

      this.setState({ poster_path, title, overview });
      
    } 
    catch (err){
      this.setState({ errorMessage: err.errorMessage });
    }
  };

  async componentDidMount() {
    await AsyncStorage.clear();
    
    this.getProjectList();
  }

  render() {
    return (
      <>
      <StatusBar barStyle="ligth-content" backgroundColor="black" />
        <View style={styles.fundoblack} />
        <ImageBackground style={styles.container} source={require('./img/fundo.jpg')} />   
        


          <Container>

            <TabsContainer> 
              { !this.state.poster_path && this.state.results.map(result => (
                <TabItem key={result.id}>
                <View >
                  <ImageBackground
                    style={styles.stretch}
                    source={{uri: 'https://image.tmdb.org/t/p/w300'+result.poster_path }}>

                  </ImageBackground>

                </View>
                </TabItem>
              ))}


            </TabsContainer> 
            { this.state.poster_path ?  

              <View style={styles.imgIndicacao}>
                <ImageBackground
                style={styles.stretch}
                source={{uri: 'https://image.tmdb.org/t/p/w300'+this.state.poster_path }}>
                            
                </ImageBackground>

              </View>

          : false}
          </Container>


           <View style={styles.btnIndicacao}>
          <Button
            title="Indique-me um filme"
            color="green"
            onPress={
              this.getIdicaFilme
            }
            />  
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
  stretch: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
  },
  opacidade: {
    position: 'absolute',
    width: '100%' ,
    height: '100%' ,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fundoblack:{
    position: 'absolute',
    width: '100%' ,
    height: '100%' ,
    backgroundColor: 'black',
  }, 
  btnIndicacao:{
    marginTop: 60,
    marginLeft: 30,
    marginRight:30,
    
  },
  imgIndicacao: {

    width: 233,
    height: 300,
    marginLeft: 90,
    },
    title: {
      color: 'white',
      fontSize: 20,
      justifyContent: 'center',
      alignItems: 'center',
    }
});