import * as React from 'react';
import { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function AssetExample(prop) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [url, setUrl] = useState('https://picsum.photos/200/300');
  useEffect(() => {
    fetch('https://stormy-coast-72987.herokuapp.com/')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
    console.log(data.word);
setUrl(`https://picsum.photos/200/300?${data.word}`);
    console.log(url)
    console.log(prop)
  }, [prop]);

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>{data.word}</Text>
      <Text style={styles.schange}>{data.def}</Text>
      <Image style={styles.logo} source={{ uri: url }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FF0000',
  },
  schange: {
    margin: 24,
    marginTop: 0,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 12,
    color: '#00EAD3',
  },

  logo: {
    height: 128,
    width: 128,
    opacity: 1,
  },
});
