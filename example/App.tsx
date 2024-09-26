import { memo, useCallback, useEffect, useRef, useState } from 'react';
import { Alert, Platform, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';

import {SettingsPkgView} from 'settings-pkg'
import { OCRViewRef } from 'settings-pkg/SettingsPkg.types';

export default function App() {

  const [getOCRCompleted,setOcrCompleted]= useState<any>();
  

  
  useEffect(()=> {
     
    console.log(getOCRCompleted);

   

  },[getOCRCompleted])


  return (
    <SafeAreaView style={styles.container}>
       <AtaiOCRView></AtaiOCRView>
       <AtaiOCRView></AtaiOCRView>
    </SafeAreaView>
  );
}

const AtaiOCRView = memo(()=> {
  const refView = useRef<OCRViewRef | any>(null);
    return  (
        <SafeAreaView style={styles.container}>
          <Pressable onPress={()=> {
             refView?.current?.startPreview()
          }}>
              <Text>Launch me</Text>
          </Pressable>
          {
            Platform.OS === "android" &&
            <SettingsPkgView ref={refView} onOCRCompleted={(d)=> {
               console.log(d,"something")
            }}
            onViewDestoryed={()=> {
                console.log("i am destoryed")
            }}
            ></SettingsPkgView>

          }
    </SafeAreaView>
    ) 
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
