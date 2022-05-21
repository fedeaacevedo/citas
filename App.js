
import React, {useState} from 'react';

import { Text, SafeAreaView, StyleSheet, Pressable, Modal } from 'react-native';


const App = () => {

  const [modalVisible, setModalVisible] = useState(false)

  console.log(modalVisible)

  const nuevaCitaHandle = () => {
    console.log('Click..')
  }


  return (


    <SafeAreaView style={styles.container}>

      <Text style={styles.titulo}> Administrador de
        Citas {''}
        <Text style={styles.tituloBold}>Veterinaria</Text>
      </Text>

      <Pressable
        onPress={nuevaCitaHandle}
        style={styles.btnNuevaCita}
      >

        <Text style={styles.btnTextoNuevaCita}>Nueva cita</Text>

      </Pressable>

      <Modal
        animationType='slide'
        visible={false}
      >
        <Text>Desde Modal</Text>
      </Modal>

    </SafeAreaView>


  )
};


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f3f4f6',
    flex: 1
  },
  titulo: {
    textAlign: 'center',
    fontSize: 30,
    color: '#374151',
    fontWeight: '600'
  },
  tituloBold: {
    fontWeight: '900',
    color: '#6d28d9'
  },
  btnNuevaCita:{
    backgroundColor:'#6D28D9',
    padding: 15,
    marginTop:20,
    marginHorizontal: 20,
    borderRadius: 30
  },
  btnTextoNuevaCita:{
    textAlign:'center',
    color:'#fff',
    fontSize: 20,
    textTransform:'uppercase',
    fontWeight:'bold'
  }
})


export default App;
