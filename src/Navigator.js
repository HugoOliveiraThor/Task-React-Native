import React from 'react'
import { 
    createSwitchNavigator, 
    createDrawerNavigator 
} from 'react-navigation'
import Schedule from './screens/Schedule'
import Auth from './screens/Auth'
import commonStyles from './commonStyles'

const MenuRoutes = {
    Today: {
        name:'Today',
        screen: props => <Schedule title='Hoje' daysAhead={0} {...props} />,
        navigationOptions: {
            title:'Hoje'
        }
    },
    Tomorrow: {
        name:'Tomorrow',
        screen: props => <Schedule title='Amanhã' daysAhead={1} {...props} />,
        navigationOptions: {
            title:'Amanhã'
        }
    },
    Week: {
        name:'Week',
        screen: props => <Schedule title='Semana' daysAhead={7} {...props} />,
        navigationOptions: {
            title:'Semana'
        }
    },
    Month: {
        name:'Month',
        screen: props => <Schedule title='Mês' daysAhead={30} {...props} />,
        navigationOptions: {
            title: 'Mês'
        }
    }
}


const MenuConfig = {
    initialRouteName: 'Today',
    contentOptions: {
        labelStyle: {
            fontFamily: commonStyles.fontFamily,
            fontWeight: 'normal',
            fontSize: 20
        },
        activeLabelStyle: {
            color: '#080'
        }
    }
}

const MenuNavigator = createDrawerNavigator(MenuRoutes, MenuConfig)

const MainRoutes = {
    Auth: {
        name: 'Auth',
        screen: Auth
    },
    Home: {
        name: 'Home',
        screen: MenuNavigator
    }
}

const MainNavigator = createSwitchNavigator(MainRoutes, {
    initialRouteName: 'Auth'
})

export default MainNavigator
