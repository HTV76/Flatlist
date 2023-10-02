
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , SafeAreaView } from 'react-native';
import { FlatList } from 'react-native';
import DATA from './DATA';
import Row from './components/Row';
import Constants from 'expo-constants'

export default function App() {
/*  function renderRow({item}){
    return <Text>{item.lastname}</Text>
  }*/

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({item}) => (
          <Row person={item} />
        )}
        keyExtractor={item => item.id}
      >
      </FlatList>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 32,
    paddingTop: Platform.OS === 'android' ? Constants.statusBarHeight: 0,
  },
});