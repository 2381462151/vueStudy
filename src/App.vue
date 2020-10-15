<template>
  <div>
    <!-- 我们可以在引用自组件的时候通过属性绑定的形式{v-bind} 把需要的数据传递给子组件-->
    <my-add v-bind:parentmsg="msg"  @func="show"></my-add>  
    <!-- 父组件向子组件传递方法使用的是v-on（@）  -->
      
    <p>--------------------------</p>
    <my-sub></my-sub>
    <p>-------------------------</p>
    <p>{{datafromson}}</p>
  </div>
</template>
<script>
  import add from './components/add.vue';
  import sub from './components/sub.vue';
  export default {
    data() {
      return { 
        msg:'123父组件中的数据',
        datafromson:null  //从子组件或得；
      };
    },
    components: {
      "my-add": add,
      'my-sub': sub
    },
    methods: {
      show(data,data2){
       console.log("调用了父组件中的方法*****"+data+data2);
        this.datafromson = data+data2
      }
    }
  }
</script>