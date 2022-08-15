<template>
  <div class="page">
    <NuxtLogo/>
    <h1>Nuxt-axios封装</h1>
    <h6>LinMing</h6>
    <div class="give-me-start">
      <a href="https://github.com/LinMingYoga" target="_blank" title="follow me for Github">Github</a>
      <a href="https://gitee.com/linmingyoga" target="_blank"  title="follow me for Gitee">Gitee</a>
    </div>
    <ol>
      <h3>使用步骤：</h3>
      <li>封装axios - “@/plugins/axios.js”</li>
      <li>引入封装的axios.js - "在 nuxt.config.js - plugins 引入我们的 axios.js 文件"</li>
      <li>重启服务</li>
      <li>

        <p>在页面 asyncData中使用：</p>
        <code>
          asyncData({ $indexApi }) {
              $indexApi.getData().then(res => {
                ... your code
              })
          }
        </code>

      </li>
      <li>
        <p>在methods中使用</p>
        <code>
          this.$indexApi.getData()
        </code>
      </li>
      <li>store中使用参考以上</li>
    </ol>
    <div>
      使用愉快~
    </div>
  </div>
</template>

<script>
import NuxtLogo from '~/components/NuxtLogo.vue';
export default {
    components: { NuxtLogo },
    asyncData({ $indexApi }) {
        console.log("$indexApi", $indexApi);
    },
    mounted() {
      this.demoMethod()
    },
    methods: {
      demoMethod() {
        this.$indexApi.getData().then(res => {
          console.log('res', res)
        }).catch(_ => {
          console.log('error')
        })
      }
    },
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }
  p {
    margin: 0;
  }
  .page {
    width: 100%;
    height: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #FFE78F;
    color: #002EA6;
  }
  ol li {
    line-height: 24px;
  }
  li:not(:last-child) {
    margin-bottom: 10px;
  }
  .give-me-start {
    margin: 20px 0;
  }
</style>
