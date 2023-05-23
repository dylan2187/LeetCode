<script setup>
import {
  House,
  Menu as IconMenu,
  User,
} from '@element-plus/icons-vue'
import router from './router'
const toHome = () => {
  router.push({ name: 'home' })
}
const toAbout = () => {
  router.push({ name: 'about' })
}
const toUserInfo = () => {
  router.push({ name: 'userinfo' })
}


</script>

<template>

  <el-menu default-active="1"
           class="el-menu-vertical-demo">
    <el-menu-item index='1'
                  @click="toHome">
      <el-icon>
        <house />
      </el-icon>
      <span>首页</span>
    </el-menu-item>
    <el-menu-item index='2'
                  @click="toAbout">
      <el-icon>
        <icon-menu />
      </el-icon>
      <span>关于</span>
    </el-menu-item>
    <el-menu-item index='3'
                  @click="toUserInfo">
      <el-icon>
        <user />
      </el-icon>
      <span>个人信息</span>
    </el-menu-item>
  </el-menu>
  <router-view></router-view>

</template>

