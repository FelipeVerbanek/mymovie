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
    loggedInUser: 'teste',
    errorMessage: null,
    results: [],
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

  async componentDidMount() {
    await AsyncStorage.clear();
    
    this.getProjectList();
  }

  render() {
    return (
      <>
      <StatusBar barStyle="ligth-content" backgroundColor="black" />
        <View style={styles.container}>          
          <Container>
            <TabsContainer> 
              { this.state.results.map(result => (
                <TabItem>
                <View key={result.id}>
                  <ImageBackground
                    style={styles.stretch}
                    source={{uri: 'https://image.tmdb.org/t/p/w400'+result.poster_path }}>
                    <View style={styles.opacidade}></View>

                    <TabText style={{ fontWeight: 'bold'}}>{result.title}</TabText>
                    <TabText>{result.overview}</TabText>

                  </ImageBackground>


                </View>
                </TabItem>
              ))}
            </TabsContainer> 
          </Container>
        </View>
        </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
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
    backgroundColor: 'black',
    opacity: 0.5,
    
  }
});