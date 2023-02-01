import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: '#1f1e25',
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 12,
  },
  name: {
    flex: 1,
    color: '#fff',
    fontSize: 16,
    marginLeft: 12,
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 6,
    backgroundColor: '#e23c44',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 12,
  },
});
