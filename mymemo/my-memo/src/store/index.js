import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        accessToken: null
    },
    getters: {
        //로그인했는지?
        isAuth(state) {
            if (state.accessToken == null) return false;
            return true;
        }
    },
    mutations: {
        signin(state, payload) {
            state.accessToken = payload.accessToken
            localStorage.setItem('accessToken', state.accessToken)
        },
        signout(state) {
            state.accessToken = null
            localStorage.removeItem('accessToken')
            location.reload();
        },
        getAccessToken(state) {
            state.accessToken = localStorage.getItem('accessToken')
        },

        //    자료에 없고 추가된 부분
        loginFailed(state) {
            state.accessToken = null;
            localStorage.removeItem('accessToken');
        }
    },
    actions: {
        signin({commit}, payload) {
            const data = {
                userid: payload.userid, password: payload.password
            }
            return axios.post('/api/auth/login', data)
                .then(response => {
                    if (response.status == 200) {
                        commit('signin', {accessToken: response.data.token})
                    }
                })
                .catch(error => {
                    // commit('signout')
                    //    여기서 수정
                    commit('loginFailed')
                    return Promise.reject(error)
                })
        },
        //회원가입 하기 -- 리스폰 받을 게 없어서 commit안 함.
        signup(payload) {
            const data = {
                userid: payload.userid, password: payload.password, name: payload.name
            }
            return axios.post('/users/', data)
                .then(response => {
                    // console.log(response)
                    if (response.status == 200) {
                        console.log('signup');
                    }
                }).catch(error => {
                    console.log('signup Error')
                    return Promise.reject(error)
                })

        }
    }
})