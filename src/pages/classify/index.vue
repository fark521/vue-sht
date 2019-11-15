<template>
  <div class="main">
    <SearchHeader/>
    <nav>
      <ul>
        <li>
          <a href="#">儿童房</a>
        </li>
      </ul>
    </nav>

    <div class="fenl">
      <div class="hot">
        <div class="title">热门专场</div>
        <ul>
          <router-link to='/storeList' tag="li"  v-for="(item,index) in arr" :key="index">
            <a href="#">
              <img :src=arr[index].img />
            </a>
          </router-link>
        </ul>

        <div class="title">热门搜索</div>
        <ul class="listbed">
          <li v-for="(item,index) in hotsearch" :key="index">
            <a href="#">
              <img :src=hotsearch[index].img />
              <span>{{hotsearch[index].name}}</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import SearchHeader from "@common/components/searchHeader"
export default {
  name: "classify",
  components:{
    SearchHeader
  },
  data(){
    return{
      arr:[
        {
          img:"//image.meilele.com/images/upload/201806/57a11cffe7188961bdf768df1c734c4b.png"
        },
        {
          img:"//image.meilele.com/images/upload/201806/e94bd59b089c6cee04cf72b447596a21.png"
        },
        {
          img:"//image.meilele.com/images/upload/201806/3ee22740f2c5778edb9d924ccacc2b9c.png"
        }
      ],
      hotsearch:[
        {
          name:"儿童床",
          img:"//image.meilele.com/images/upload/201806/e987495bac5b92e704b869bf0008005a.jpg"
        },
        {
          name:"儿童床垫",
          img:"//image.meilele.com/images/upload/201806/23c3b1c8059fd67ac68da80bffd3d17f.jpg"
        },
        {
          name:"儿童床头柜",
          img:"//image.meilele.com/images/upload/201806/c4a83ae298a600fc70b63cf740d94f8f.jpg"
        },
        {
          name:"儿童衣柜",
          img:"//image.meilele.com/images/upload/201806/b50ab12a715322f4d8a215131aaf8cdd.jpg"
        },
        {
          name:"儿童桌",
          img:"//image.meilele.com/images/upload/201806/95c91796a98e9910b9afba6697b9f7ec.jpg"
        },
        {
          name:"儿童椅子",
          img:"//image.meilele.com/images/upload/201806/cea35f3666ff51b3c6e407fb6dc14fcb.jpg"
        },
        {
          name:"儿童房套装",
          img:"//image.meilele.com/images/upload/201806/cea35f3666ff51b3c6e407fb6dc14fcb.jpg"
        },
        {
          name:"儿童柜类",
          img:"//image.meilele.com/images/upload/201806/819932d346876406060c55e3868faaab.jpg"
        },
      ]
    }
      
  }
  
};
</script>

<style  scoped>
.main {
  font-size: 0.14rem;
  display: flex;
  position: absolute;
  top:0;
  left:0;
  bottom:0;
  right:0;
  padding-top:0.38rem;
  padding-bottom:0.5rem;
}
nav {
  width: 25%;
  height: 100%;
  border-right: 1px solid #dfdfdf;
}
nav ul {
  width: 100%;
  height: 0.45rem;
}
nav li {
  width: 100%;
  height: 0.45rem;
  font-size: 0.14rem;
  text-align: center;
  line-height: 0.21rem;
  padding: 0.12rem 0;
  font-weight: 700;
}
nav li a {
  display: block;
  color: #c81c28;
  height: 100%;
  width: 100%;
  border-left: 1px solid #c81c28;
}

.fenl {
  width: 75%;
  height: 100%;
  padding-right: 0.1rem;
  padding-left: 0.1rem;
}
.hot {
  width: 100%;
  height: 100%;
}
.hot .title {
  width: 100%;
  height: 0.33rem;
  font-size: 13px;
  color: #333;
  line-height: 0.45rem;
  font-weight: 500;
}
.hot ul {
  width: 100%;
  height: 0.95rem;
  overflow: hidden;
}
.hot li {
  width: 0.65rem;
  height: 0.75rem;
  margin-top: 0.1rem;
  margin-right: 0.075rem;
  float: left;
}
.hot li img {
  width: 0.65rem;
  height: 0.75rem;
}
.hot .listbed {
  width: 2.15rem;
  height: 2.65rem;
}
.listbed li {
  width: 0.65rem;
  height: 0.78rem;
  margin-top: 0.1rem;
  margin-right: 0.065rem;
  float: left;
}
.listbed li img {
  width: 0.65rem;
  height: 0.65rem;
}
.listbed li span {
  display: block;
  width: 0.65rem;
  height: 0.13rem;
  font-size: 0.11rem;
  color: #3a3a3a;
  text-align: center;
}
</style>