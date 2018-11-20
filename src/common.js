import {Alert , Platform} from 'react-native'

const server = Platform.OS === 'ios' ? 
    'http://localhost:3000' : 'http://127.0.0.1:3000'

function showError(err) {
    Alert.alert('Ops ! Ocorreu um problema!', `Mensagem: ${err}`)
}

export { server, showError }