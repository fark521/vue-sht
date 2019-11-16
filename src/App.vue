<template>
  <div id="app">
    <keep-alive include="home,storeList,today,wood">
      <router-view></router-view>
    </keep-alive>
    <TabBar v-if="$route.meta.tabBarFlag"/>
  </div>
</template>

<script>
import TabBar from "@common/components/tabBar"
export default {
  name:"App",
  components:{
    TabBar,
  }
}
</script>

<style lang="sass">

</style>