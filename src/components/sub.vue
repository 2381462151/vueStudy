<template>
    <div>
        <h3>当前最新的count值为:{{count}}</h3>
        <h3>{{showNum}}</h3>
        <button @click="subbtn1">-1</button>
        <button @click="subbtn2">-n</button>
        <button @click="subbtn3">-1 async</button>
        <button @click="subbtn4">-n async</button>
        <button @click="subasyncn(20)">-n async</button>
    </div>
</template>
<script>
  import {mapState,mapMutations,mapActions,mapGetters} from 'vuex'
    export default{
        data(){
            return{};
        },
        computed:{
            ...mapState(['count']),
            ...mapGetters(['showNum'])
            
        },
        methods: {
            ...mapMutations(['sub','subn']),
            ...mapActions(['subasync','subasyncn']),
            subbtn1(){ 
                this.sub()
             },
             subbtn2(){
                 this.subn(10);
             },
             subbtn3(){
                 this.subasync()
             },
             subbtn4(){
                 this.subasyncn(10)
             }
        }
    }
</script>