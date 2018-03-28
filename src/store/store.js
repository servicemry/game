import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store=new Vuex.Store({
    // 设置属性
    state: {
        currentUser:localStorage.getItem('user'),
        token:localStorage.getItem('token')
    },
    // 获取属性状态
    getters: {
       currentUser:state=>state.currentUser,
       token:state=>state.token
    },
    // 改变属性状态
    mutations: {
        // 设置用户登录状态
        setUserStatus(state,user){
            if(user){
                state.currentUser=user
            }else{
                state.currentUser=null
                localStorage.removeItem('token')
            }
        }
    },
    // 应用mutations
    actions:{
        
    }
})
