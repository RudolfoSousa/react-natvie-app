import React from 'react';
import { View, Text, StyleSheet }  from 'react-native';
import Axios from 'axios';


class Body extends React.Component {


  constructor(props){
    super(props);
    this.state = {
      peoples: []
    }
  }

  componentDidMount(){
    Axios.get('https://randomuser.me/api/?nat=br&results=5')
                               .then(response => {
                                 const {results} = response.data;
                                 const peoples = results.map(people => people.name.first);
                                 this.setState({
                                   peoples: results
                                 })
                                 console.log(peoples);
                               })
                              .catch( (error) => {
                                console.log(error)
                              } )
  }



  render(){

    return(
      <View style={style.container}>
      <Text style={style.text}>Texto de Teste</Text>
      <Text></Text>
      </View>
    )
  }
};

const style = StyleSheet.create({
  container:{
    alignItems: 'center',
    paddingTop: 25,
    height: '100%'
  },
  text:{
    color: "#000"
  }
})

export default Body;
