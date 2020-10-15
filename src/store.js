import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
    state:{
        count:0
    },
    mutations:{  //用于变更store中的数据，不可以直接操作store中的数据；可以集中监控所有数据的变化;不能写异步代码。例如setTimeout.
        add(state){ //第一个形参永远都是state
            state.count++;
        },
        addn(state,st){
            state.count+=st;
        },
        sub(state){
            state.count--;
        },
        subn(state,st){
            state.count-=st
        }
    },
    actions:{  //用于处理异步函数。通过触发mutations的方式变更数据。只有mutations中的函数才能修改state中的数据。
        addasync(ct){
                setTimeout(() => {
                    ct.commit('add')
                }, 1000);
        },
        addasyncn(context,step){
            setTimeout(()=>{
                context.commit('addn',step);
            },1000)
        },
        subasync(context){
            setTimeout(() => {
                context.commit('sub');
            }, 1000);
        },
        subasyncn(context,setp){
            setTimeout(() => {
                context.commit('subn',setp)
            }, 1000);
        }
    },
    getters: { //不会修改store中的数据，加工处理后形成新的数据，类似vue的计算属性
        showNum(state){
            return 'xiugai数量值是【'+state.count+'】'
        }
    }
})