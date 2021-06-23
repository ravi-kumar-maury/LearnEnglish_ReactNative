import * as React from 'react';
import { Text, View, StyleSheet , Button } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
const [buttonState , setButtonState] = React.useState('a')
  function onPressStateChange(){
       
        setButtonState(buttonState + 'a')
        console.log(buttonState)
  }
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
     Learn a new Word everyday bcz
       the best way to predict the future is to create it !!
        
      </Text>
      <Card>
        <AssetExample prop={buttonState} />
      </Card>
      <Button
  onPress={onPressStateChange}
  title="Get New Word"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    color : "#A239EA"
  },
});
