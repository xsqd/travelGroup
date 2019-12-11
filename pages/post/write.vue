<template>
  <div class="container">
    <el-row type="flex" justify="space-between">
      <div class="main">
        <h2>发表新攻略</h2>
        <p>分享你的个人游记，让更多人看到哦！</p>
        <el-form ref="form" :model="form">
          <el-form-item>
            <el-input v-model="form.title" placeholder="请输入标题" />
          </el-form-item>
          <!-- <vue-editor id="editor" /> -->
          <el-form-item label="出发城市">
            <!-- fetch-suggestions 返回输入建议的方法 -->
            <!-- select 点击选中建议项时触发 -->
            <el-autocomplete
              :fetch-suggestions="getCityList"
              v-model="form.city"
              @select="selectCity"
              :trigger-on-focus="false"
              :highlight-first-item="true"
              placeholder="请搜索游玩城市"
              class="el-autocomplete"
            />
          </el-form-item>
        </el-form>
        <div class="creat-button">
          <el-button @click="addPost" type="primary" style="padding:9px 15px;font-size:12px">
            发布
          </el-button>
          <span>
            或者
            <a href="javascript:;">保存到草稿</a>
          </span>
        </div>
      </div>
      <div class="aside">
        <div class="draft-box">
          <h4 class="draft-title">
            草稿箱（0）
          </h4>
          <div class="draft-list" />
        </div>
      </div>
    </el-row>
  </div>
</template>

<script>
// import { VueEditor } from 'vue2-editor'
// import axios from 'axios'
export default {
  data () {
    return {
      form: {
        title: '',
        content: '',
        city: ''
      }
    }
  },
  methods: {
    async getCityList (value, showList) {
      // 获取真正的搜索建议
      const cityList = await this.searchCity(value)
      // 准备建议数据,然后时候 showList 回调返回到 组件当中显示
      // 为了避免用户直接输入后啥都不干,直接将输入框失去焦点
      // 可以默认将城市列表第一个 sort 放入 form 当中
      if (cityList.length > 0) {
        this.form.city = cityList[0].name
      }
      showList(cityList)
    },
    searchCity (value) {
      return this.$axios({
        url: '/airs/city',
        params: {
          name: value
        }
      }).then((res) => {
        // console.log(res)
        const { data } = res.data
        const citys = data.map((element) => {
          return {
            ...element,
            // 这里我们根据name生成了value
            value: element.name
          }
        })
        // 用过滤函数将所有不带 sort 的数据去掉
        // const cityList = citys.filter(element=>{
        //   // 过滤器里面,所有合法的数据应该return true
        //   // if (element.sort) {
        //   //   return true;
        //   // }
        //   return element.sort;
        // })
        const cityList = citys.filter(element => element.sort)
        // 准备建议数据,然后时候 showList 回调返回到 组件当中显示
        return cityList
      })
    },
    selectCity (item) {
      this.form.city = item.name
    },
    addPost () {
      console.log(this.form)
    }
  }
}
</script>

<style lang="less" scoped>
.container {
  width: 1000px;
  margin: 0 auto;
  padding: 20px 0;
  .main {
    width: 750px;
    h2 {
      font-weight: 400;
      font-size: 22px;
      margin-bottom: 10px;
    }
    p {
      font-size: 12px;
      color: #999;
      margin-bottom: 10px;
    }
    .creat-button {
      span {
        margin-left: 10px;
        font-size: 14px;
        a {
          color: orange;
        }
      }
    }
  }
  .aside {
    width: 200px;
    .draft-box {
      border: 1px solid #ddd;
      padding: 10px;
    }
    .draft-title {
      margin-bottom: 10px;
      font-weight: 400;
      color: #666;
    }
  }
}
</style>
