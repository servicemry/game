<template>
  <div>
      <div class="nav-nav">
      <ul class="list-unstyled">
        <li class="home">
          <router-link to="/main">
            <i class="icon-home"></i>首页</router-link>
        </li>
        <li class="m" v-for="t in types" :key="t.title">
          <router-link to="game">
            {{t.title}}
            <img v-show="t.android" src="./../assets/images/hot.png" />
          </router-link>
        </li>

      </ul>
    </div>
  </div>
</template>
<script>

export default {
  data () {
    return {
        types:[]
    }
  },  
  created(){
    fetch('/api/types',{
      method:'get',
      headers:{
        "Content-type":"application/json",
        "token":localStorage.getItem('token')
      }
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.success==-1){
        this.$router.push({path:'/'})
      }else{
        this.types=data
      }
    })
    .catch(err=>{
      console.log(err);
    })
  }
}
</script>
