import { StyleSheet, Text, View } from 'react-native';

import * as SettingsPkg from 'settings-pkg';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{SettingsPkg.hello()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
