import axios from 'axios'
import JsCookies from 'js-cookies'

export const state = () => ({
    authenticated: false,
    user: '',
    token: '',
})

export const getters = {
    authenticated(state){
        return state.authenticated;
    },

    auth(state){
        return state.user;
    },
}

export const mutations = {
    setUserData(state, data){

        if(data){
            state.user = data.authUser ? state.user = data.authUser : state.user
            state.token = data.accessToken ? state.token = data.accessToken : state.token
            state.authenticated = true
        }else{
            state.authenticated = false
            state.token = ''
            state.user = ''
        }
    }
}

export const actions = {

   async login({commit}, user) {
        await axios.post(`${process.env.baseApiUrl}/login`, { email: user.email.trim(), password: user.password })
        .then(res => {

            if (!JsCookies.hasItem('accessToken')) {
                JsCookies.setItem('accessToken', res.data.accessToken)
            }
            commit('setUserData', res.data)
        })
    },

    async logout({commit, state}){
        await axios.post(`${process.env.baseApiUrl}/logout`, null, { headers: {'Authorization': 'Bearer ' + state.token} })
        .then(() => {
            this.$router.push(this.localeRoute({ name: "login" }))
            JsCookies.removeItem('accessToken')
            commit('setUserData', null)
        });
    },

    async authUser({commit, state}) {
        await axios.get(`${process.env.baseApiUrl}/auth-user`, { headers: {'Authorization': 'Bearer ' + state.token} })
        .then(res => {
            commit('setUserData', res.data)
        })
        .catch((err) => {
            JsCookies.removeItem('accessToken')
            commit('setUserData', null)
        })
    }
}