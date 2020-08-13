<template>
<div>

<link rel="stylesheet" href="//fonts.googleapis.com/css?family=Roboto:400,500,700,400italic|Material+Icons">  <div id="app">  
    <!-- <div id="nav">      
      <Header></Header>
    </div> -->
    <router-view/>
  </div></div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

