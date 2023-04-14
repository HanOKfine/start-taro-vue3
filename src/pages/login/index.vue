<template>
  <view class="index">
    <text>{{ msg }}</text>
    <button @click="chooseImage">注册</button>
    
  </view>
</template>

<script>
import { ref } from 'vue'
import './index.scss'

export default {
  setup () {
    const msg = ref('login')
    function chooseImage(){
      return new Promise((resolve) => {
        Taro.getSetting({
          success: (res) => {
            if (res.authSetting[itemScope] === undefined) {
              Taro.authorize({
                scope: itemScope,
                success () {
                  resolve()
                }
              })
            } else if (res.authSetting[itemScope] === false) {
              Taro.showModal({
                title: '授权请求',
                content: `尚未允许使用${text}，请点击确认进行授权`,
                success (e) {
                  if (e.confirm) {
                    Taro.openSetting({
                      success (e) {
                        if (e.authSetting[itemScope]) {
                          resolve()
                        }
                      }
                    })
                  }
                }
              })
            }
            else {
              resolve()
            }
          }
        })
      })
    }
    return {
      msg,
      chooseImage
    }
  }
}
</script>
