<template>
  <div class="login_contaniner">
    <el-row>
      <el-col :span="12" :xs="6"></el-col>
      <el-col :span="12" class="login_wrapper">
        <el-form
          :model="loginData"
          class="login_wrapper_form"
          :rules="rules"
          ref="loginForm"
        >
          <h1>Hello</h1>
          <h2>欢迎来到硅谷甄选</h2>
          <el-form-item prop="username">
            <el-input v-model="loginData.username" :prefix-icon="User" />
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              v-model="loginData.password"
              :prefix-icon="Lock"
              type="password"
              show-password
            />
          </el-form-item>
          <el-form-item>
            <el-button
              :loading="loading"
              type="primary"
              style="width: 100%"
              @click="login"
            >
              登录
            </el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue'
import { User, Lock } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'
import useUserStore from '@/store/modules/user'
import { ElNotification } from 'element-plus'
import { getTime } from '@/utils/getTime'
import { ValidatorUername, ValidatorPassword } from '@/utils/form-rule'
const loginData = reactive({
  username: 'admin',
  password: '111111',
})
const $router = useRouter()
const userStore = useUserStore()
let loading = ref(false)

const loginForm = ref()
const login = async () => {
  // 保证全部表单校验通过再发请求
  await loginForm.value.validate()
  loading.value = true
  try {
    await userStore.userLogin(loginData)
    $router.push('/')
    ElNotification({
      type: 'success',
      message: '欢迎回来',
      title: `HI${getTime()}好`,
    })
    loading.value = false
  } catch (e) {
    loading.value = false
    ElNotification({
      type: 'error',
      message: (e as Error).message,
    })
  }
}

const rules = {
  username: [
    {
      required: true,
      trigger: 'change',
      validator: ValidatorUername,
    },
  ],
  password: [
    {
      required: true,
      trigger: 'change',
      validator: ValidatorPassword,
    },
  ],
}
</script>
<style lang="scss" scoped>
.login_contaniner {
  width: 100%;
  height: 100vh;
  background: url('@/assets/images/background.jpg') no-repeat;
  background-size: cover;
  .login_wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    &_form {
      height: 260px;
      width: 300px;
      background: url('@/assets/images/login_form.png') no-repeat;
      padding: 20px;
      h1 {
        font-size: 40px;
        color: white;
      }
      h2 {
        font-size: 20px;
        color: white;
        margin: 10px 0;
      }
    }
  }
}
</style>
