//用户管理
export const state = () => ({
  //采用接口返回的数据结构
  userInfo:{
    token:"",
    user:{}
  },
  userFollow:''
})

export const mutations= {
  //保存用户信息到state
  setUserInfo(state,data){
    state.userInfo = data;
  },
  // 清除用户数据
  cleanUserInfo(state, info){
    console.log(process);
    if(process.browser){
        localStorage.removeItem("userInfo");
    }
    state.userInfo = {};
},
setuserFollow(state,data){
  state.userFollow = data;
}
}
export const actions = {
  //登录
  login ({commit},data){
    return this.$axios({
      url: "/accounts/login",
      method: "POST",
      data: data
    }).then(res=>{
      console.log(res)
      const data = res.data
      //保存到state
      // commit("setUserInfo",data);
      return data
    })
  },
  //注册
  register({commit},data){
    return this.$axios({
      url: `/accounts/register`,
      method: "POST",
      data
    }).then((res) => {
      console.log(res)
      const data = res.data
      // commit("setUserInfo",data)
      return data
    })
  }
}