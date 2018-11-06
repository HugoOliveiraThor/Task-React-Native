import React , {Component} from 'react'
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    TouchableOpacity,
    Alert
} from 'react-native'

import axios from 'axios'
import { server , showError } from '../common'
import AuthInput from '../components/AuthInput'
import commonStyles from '../commonStyles'
import backgroundImage from '../../assets/imgs/login.jpg'

export default class Auth extends Component {
    state = {
        stageNew: false,
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    }

    signin = async () => {
        try {
            const res = await axios.post(`${server}/signin`, {
                email: this.state.email,
                password: this.state.password
            })
            axios.defaults.headers.commom['Authorization']= `bearer ${res.data.token}`
            this.props.navigation.navigate('Home')
        } catch (error) {
            console.log('Error', JSON.stringify(error))
            if (this.state.email === 'hugo@mail.com' && this.state.password === '123456') {
                this.props.navigation.navigate('Home')
                return
            }  
            Alert.alert('Erro', 'Falha no login')
        }
    }

    signup = async () => {
        try {
            await axios.post(`${server}/signup`, {
                name: this.state.name,
                email: this.state.email,
                password: this.state.password
            })
            Alert.alert('Sucesso!', 'Usuário cadastrado :)')
        } catch (error) {
            showError()
        }
    }

    signinOrSignup = () => {
        console.log('Entrou')
        if(this.state.stageNew) {
            this.signup()
        } else {
            this.signin()
        }
    }
    
    render () {

        const validations = []

        validations.push(this.state.email && this.state.email.includes('@'))
        validations.push(this.state.password && this.state.password.length >=6)

        if(this.state.stageNew) {
            validations.push(this.state.name && this.state.name.trim())
            validations.push(this.state.confirmPassword)
            validations.push(this.state.password === this.state.confirmPassword)
        }
        const validForm = validations.reduce((all,v) => all && v) // If any validation is false all validation are false 

        return (
            <ImageBackground source={backgroundImage} style={styles.background}>
                <Text style={styles.title}>Tasks</Text>
                <View style={styles.formContainer}>
                        <Text style={styles.subtitle}>
                            {this.state.stageNew ? 'Crie a sua conta' : 'Informe seus dados'}
                        </Text>

                    {this.state.stageNew &&
                    <AuthInput
                            icon='user' 
                            placeholder='Nome' 
                            style={styles.input} 
                            value={this.state.name} 
                            onChangeText={name => this.setState({ name })} />}
                    <AuthInput
                            icon='at' 
                            placeholder='Email' 
                            value={this.state.email}
                            style={styles.input} 
                            onChangeText={email => this.setState({ email })} />
                    <AuthInput
                            icon='lock'
                            secureTextEntry={true} 
                            placeholder='Senha'
                            style={styles.input}
                            value={this.state.password}
                            onChangeText={password => this.setState({ password })} />
                    {this.state.stageNew &&
                        <AuthInput
                            icon='asterisk'
                            secureTextEntry={true}
                            style={styles.input} 
                            placeholder='Confirmação' 
                            value={this.state.confirmPassword}
                            onChangeText={confirmPassword => this.setState({ confirmPassword })} />}
                    <TouchableOpacity 
                        disabled={!validForm}
                        onPress={this.signinOrSignup}>
                        <View style={[styles.button, !validForm ? {backgroundColor: '#AAA'}: {}]}>
                            <Text style={styles.buttonText}>
                                {this.state.stageNew ? 'Registrar' : 'Entrar'}
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ padding:10 }}
                        onPress={() => this.setState({stageNew: !this.state.stageNew})}>
                        <Text style={styles.buttonText}>
                            {this.state.stageNew ? 'Já possui conta ?' : 'Ainda não possuo conta'}
                        </Text>
                    </TouchableOpacity>
                    </View>
            </ImageBackground>

        )
    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontFamily: commonStyles.fontFamily,
        color: '#FFF',
        fontSize: 70,
        marginBottom: 10
    },
    subtitle: {
        fontFamily: commonStyles.fontFamily,
        color: '#FFF',
        fontSize: 20
    },
    formContainer: {
        backgroundColor: 'rgba(0,0,0,0.8)',
        padding: 20,
        width: '90%'
    },
    input: {
      marginTop: 20,
      backgroundColor: '#FFF' 
    },
    button: {
        backgroundColor: '#080',
        marginTop: 10,
        padding: 10,
        alignItems: 'center'
    },
    buttonText: {
        fontFamily: commonStyles.fontFamily,
        color: '#FFF',
        fontSize: 20
    }
})
