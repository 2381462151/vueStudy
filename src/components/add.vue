<template>
    <div>
        <!-- 访问共享数据的第一种方式 -->
        <h3>当前最新的count值为:{{$store.state.count}}</h3>
        <!-- <h3>{{$store.getters.showNum}}</h3> -->
        <h3>{{parentmsg}}</h3>
        <button @click="myclick">子组件，父组件传递过来的</button>
        <button @click="addbtn1">+1</button>
        <button @click="addbtnn">+n</button>
        <button @click="addbtnasync">+1 async</button>
        <button @click="addbtnasyncn">+n async</button>
    </div>
</template>
<script>
    export default{
        //组件中的所有props数据，都是通过父组件传递给子组件的
        //props中的数据是只读的，不能重新赋值
        props: ['parentmsg'],
        data(){  //子组件中的data数据并不是通过父组件传递过来的，是自己私有的，比如子组件通过ajax请求回来的数据可以存放在data中。
            //data中的数据是可读可写的
            return{
                title:'123',
                sonmsg:'son中的数据,从子组件传过来的数据。'
            };
           
        },
        methods: {
            addbtn1(){
                this.$store.commit('add');   //commit用于触发某个mutation函数
            },
            addbtnn(){
                this.$store.commit('addn',10);    
            },
            //异步count+1
            addbtnasync(){
                this.$store.dispatch('addasync')  //dispatch的作用用于触发某个action
            },
            //异步加n
            addbtnasyncn(){
                this.$store.dispatch('addasyncn',10)
            },
            myclick(){
                //console.log('ok')
                //emit 意思是触发
                //this.$emit('func',10);
               this.$emit('func',this.sonmsg,20);
            }
        }
    }
</script>