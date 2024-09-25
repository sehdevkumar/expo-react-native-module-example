import { useCallback, useEffect, useState } from 'react';
import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';

import SettingsPkgView from 'settings-pkg/SettingsPkgView'

export default function App() {

  const [getOCRCompleted,setOcrCompleted]= useState<boolean>(false);
    

 const handleOCRCompleted = (data: any) => {
    // Your logic here, e.g., show a message or handle data
    console.log('OCR Completed:', data);
  };
  useEffect(()=> {

 
    return ()=> {
       setOcrCompleted(false)
    }

  },[getOCRCompleted])


  return (
    <SafeAreaView style={styles.container}>
       
       <Pressable onPress={()=> {
         setOcrCompleted(true)
       }}>
           <Text>Please Click me and Launc</Text>
       </Pressable>
      
      { getOCRCompleted &&
        <SettingsPkgView  onOCRCompleted={handleOCRCompleted}></SettingsPkgView>
      }

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191919',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
