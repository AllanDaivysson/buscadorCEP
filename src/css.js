import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column'
    },
  
    cabecalho: {
      fontSize: 30,
      paddingBottom: 50
    },
  
    input: {
      position: 'relative',
      right: 23,
      bottom: -1,
      border: 'solid',
      borderTopWidth: 1,
      borderLeftWidth: 1,
      borderRightWidth: 0,
      borderBottomWidth: 3,
      width: 260,
      padding: 16,
      height: 54,
      borderBottomLeftRadius: 10,
      borderTopLeftRadius: 10,
    },
  
    botao: {
      border: 'solid',
      position: 'relative',
      left: 128,
      bottom: 53,
      padding: 7,
      borderTopWidth: 0,
      borderLeftWidth: 0,
      borderRightWidth: 0,
      borderBottomWidth: 0,
      
    },

    modal: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
      
    },

    info: {
      fontSize: 20
    },
    botaoModal: {
      width: 200,
      fontSize: 10
    },


  
});
 
export {styles};




