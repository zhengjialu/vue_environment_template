<template>
  <el-menu
    :default-active="activeIndex2"
    class="el-menu-demo"
    mode="horizontal"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    @select="handleSelect"
  >
    <!-- 第一级菜单 -->
    <template v-for="item in routerLink">
      <template v-if="item.title && !item.children">
        <el-menu-item :key="item.key"
:index="item.key">
          <router-link :to="item.path">
            {{ item.title }}
          </router-link>
        </el-menu-item>
      </template>
      <template v-else-if="item.children">
        <el-submenu :key="item.key"
:index="item.key">
          <template #title>
            {{ item.title }}
          </template>
          <!-- 第二级菜单 -->
          <template v-for="oneChildrenItem in item.children">
            <template v-if="oneChildrenItem.title && !oneChildrenItem.children">
              <el-menu-item :key="oneChildrenItem.key"
:index="oneChildrenItem.key">
                <router-link :to="oneChildrenItem.path">
                  {{ oneChildrenItem.title }}
                </router-link>
              </el-menu-item>
            </template>
            <template v-else-if="oneChildrenItem.children">
              <el-submenu :key="oneChildrenItem.key"
:index="oneChildrenItem.key">
                <template #title>
                  {{ oneChildrenItem.title }}
                </template>
                <!-- 第三级菜单 -->
                <el-menu-item
                  v-for="twoChildrenItem in oneChildrenItem.children"
                  :key="twoChildrenItem.key"
                  :index="twoChildrenItem.key"
                >
                  <router-link :to="twoChildrenItem.path">
                    {{ twoChildrenItem.title }}
                  </router-link>
                </el-menu-item>
              </el-submenu>
            </template>
          </template>
        </el-submenu>
      </template>
    </template>
  </el-menu>
</template>

<script>
  import routerLink from './routerLink'

  export default {
    data() {
      return {
        routerLink,
        activeIndex: '1',
        activeIndex2: '1',
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath)
      },
    },
  }
</script>

<style scoped></style>
