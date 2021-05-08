import React,{Component} from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity} from 'react-native'
import { Header } from 'react-native-elements';
export default class HomeScreen extends Component{
    getWord=(word)=>{
        var searchKeyword=word.toLowerCase()
        var url="https://rupinwhitehatjr.github.io/dictionary/%22"+searchKeyword+"%22.json"
        //console.log(url)
        return fetch(url).then((data)=>{
            if(data.status===200){
                return data.json()
            }
            else{
                return null
            }
        })
        .then((response)=>{
            var responseObject = response
            if(responseObject){
                var wordData = responseObject.definitions[0]
                var difinition=wordData.description
                var lexicalCategary=wordData.wordtype

                this.setState({
                    "word":this.state.text,
                    "definition":definition,
                    "lexicalCategory": lexicalCategory
                })
            }
            else{
                this.state({
                    "word":this.state.text,
                    "definition":"Not Found"
                })
            }
        })
    }
    render(){
       
        return(
            <TextInput
                style={StyleSheet.inputBox}
                onChangeText={text=>{
                    this.setState({
                        text:text,
                        isSearchPressed:false,
                        word:"Loading...",
                        lexicalCategory:'',
                        examples : [],
                        defination: ""
                    });
                }}
                value={this.state.text}
            />

     
        )
                return(
                  <Image
                  style={styles.image}
                  source={{
                    uri:
                      'https://www.collinsdictionary.com/images/thumb/dictionary_168552845_250.jpg?version=4.0.148',
                  }}
                />
                )
        return(
            <TouchableOpacity
                style={StyleSheet.searchButton}
                onPress={ () =>{
                    this.setState({ isSearchPressed:true});
                    this.getWord(this.state.text)
                }}           
            > </TouchableOpacity>
        )

        return(
            <View style={StyleSheet.detailsContainer}>
                <Text style={StyleSheet.detailsTitle}>
                    Word:{" "}
                </Text>
                <Text style={{fontSize:18}}>
                    {this.state.word}
                </Text>
            </View>
            )

        return(
            <View style={StyleSheet.detailsContainer}>
            <Text style={StyleSheet.detailsTitle}>
                Type:{" "}
            </Text>
            <Text style={{fontSize:18}}>
                {this.state.lexicalCategory}
            </Text>
        </View>
        )

        return(
            <View style={{flexDirection:'row',flexWrap:'wrap'}}>
            <Text style={StyleSheet.detailsTitle}>
                Definition:{" "}
            </Text>
            <Text style={{fontSize:18}}>
                {this.state.definition}
            </Text>
        </View>
        )
    }
}

const styles = StyleSheet.create({
  detailsTitle:{

  },
  detailsContainer:{

  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  inputBoxContainer: {
    flex:0.3,
    alignItems:'center',
    justifyContent:'center'
  },
  inputBox:{
    width:'80%',
    alignSelf:'center',
    height:40
  },
  searchButton: {
    alignSelf: 'center',
    width: '80%',
    padding: 20,
  },
  image: {
    height: 300,
    margin: 30,
  },
});
