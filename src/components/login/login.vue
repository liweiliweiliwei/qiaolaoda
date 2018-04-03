<template>
  <div class="wrap g-back-cover">
    <header class="header g-cen-cen-wid">
      <i class="icon g-back"></i>
    </header>
    <main class="main">
      <div class="box ">
        <p>
          <i class="iconfont icon-shouji login"></i>
          <i class="iconfont icon-cuo cuo"></i>
          <input type="tel" placeholder="请输入您的手机号" maxlength="11">
        </p>
        <p>
          <i class="iconfont icon-yan login"></i>
          <input type="tel" placeholder="请输入验证码" maxlength="6">
        </p>
        <p class="xieyi g-cen-y">
          <i class="iconfont icon-radio-fail radio"></i>
          <span>同意<i class="on">《注册服务协议》</i></span>
        </p>
        <p>
          <button>确定</button>
        </p>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'user',
  components: {},
  data () {
    return {}
  }
}
</script>
<style lang="scss" scoped>
  .wrap {
    position: fixed;
    width: 100%;
    height: 100%;
    background-image: url(/static/assets/images/login-back.png);
    .header {
      height: 160px;
      .icon {
        background-image: url(/static/assets/images/icon.png);
        height: 75px;
        width: 75px;
      }
    }
    .main {
      padding: 0 15px;
      box-sizing: border-box;
      .box {
        background: #fff;
        border-radius: 6px;
        padding: 40px 15px 47px;
        p {
          height: 54px;
          margin-bottom: 15px;
          position: relative;
          & > input {
            border: 1px solid #d8d8d8;
            border-radius: 4px;
            width: 100%;
            height: 100%;
            box-sizing: border-box;
            font-size: 15px;
            padding: 0 40px;
          }
          & > .login {
            position: absolute;
            left: 15px;
            top: 16px;
            font-size: 20px;
            color: #999;
          }
          & > .cuo {
            position: absolute;
            right: 15px;
            top: 15px;
            font-size: 22px;
            color: #999;
          }
          &.xieyi {
            height: 26px;
            padding-bottom: 19px;
            font-size: 14px;
            color: #999;
            i {
              font-style: normal;
            }
            .radio {
              font-size: 22px;
              margin-right: 4px;
            }
            .on {
              color: #db9228;
            }
          }
          &:last-child {
            button {
              height: 48px;
              width: 100%;
              background: -webkit-gradient(linear, 0 0, 0 bottom, from(#f6deb4), to(#e4bb7f));
              background: -moz-linear-gradient(top, #f6deb4, #e4bb7f);
              background: -o-linear-gradient(top, #f6deb4, #e4bb7f);
              background: linear-gradient(top bottom, #f6deb4, #e4bb7f);
              border: none;
              font-size: 18px;
              border-radius: 48px;
              color: #2b212e;
            }
          }
        }
      }

    }
  }
</style>
