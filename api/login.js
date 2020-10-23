module.exports={
    //登陆
    login(params){
        return this.$axios.$post('/system/captchaLogin', params);
    },
    //退出登陆
    loginout(params){
        return this.$axios.$get('/login-out', params);
    },
    //验证码  get请求需要设置parmas参数
    verify(params){
        console.log(params);
        return this.$axios.$get(`/system/open/randomImage`, {params});
    }
}