import { StyleSheet, View } from 'react-native';
import { Stack, Link } from 'expo-router';

export default function NowFoundScreen() {
  return(
    <>
      <Stack.Screen options={{ title: 'Oops! Page not found.'}} />
      <View style={styles.container}>
        <Link href="/" style={styles.button}>
          Go back to the home screen!
        </Link>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#25292e',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  }
})