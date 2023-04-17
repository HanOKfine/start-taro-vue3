<template>
  <view class="index">
    <text>{{ msg }}</text>
    <text>{{ cameraBack }}</text>
    <camera 
    flash="off" 
    :device-position="cameraBack?'front':'back'"
    binderror="error" 
    style="width: 100%;height: 300px;"></camera>
    <button @tap="toggleCameraBack">按钮</button>
  </view>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useBoolean } from '@/hooks';
import './index.scss'
const { bool: cameraBack, toggle: toggleCameraBack } = useBoolean(false);
const msg = ref('Hello world 1')

</script>
