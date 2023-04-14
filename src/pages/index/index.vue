<template>
  <view class="index">
    <text>{{ msg }}</text>
    <camera 
    device-position="back"
    flash="off" 
    :device-position="device?'front':'back'"
    binderror="error" 
    style="width: 100%;
    height: 300px;"></camera>
    <button @click="chooseImage">按钮</button>
  </view>
</template>

<script>
import { ref } from 'vue'
import { useBoolean } from '@/hooks';
import './index.scss'

export default {
  setup () {
    const { bool: cameraBack, setBool: setCameraBack, toggle: toggleCameraBack } = useBoolean(true);
    const msg = ref('Hello world 1')

    return {
      msg,
      cameraBack,
      chooseImage
    }
  }
}
</script>
