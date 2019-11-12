<template>
  <div id="app">
    <router-view></router-view>
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