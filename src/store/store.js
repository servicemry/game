import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store=new Vuex.Store({
    // 设置属性
    state: {
        currentUser:localStorage.getItem('currentUser')
    },
    // 获取属性状态
    getters: {
       currentUser:state=>state.currentUser
    },
    // 改变属性状态
    mutations: {
        // 设置用户登录状态
        setUserStatus(state,user){
            if(user){
                state.currentUser=user
            }else{
                state.currentUser=null
            }
        }
    },
    // 应用mutations
    actions:{
        
    }
})
