<template>
  <div>
    <a-spin :spinning="loading">
      <div style="background-color: #1f2430;height: 300px">
        <codemirror
          v-model="jsonBody"
          :options="cmOption"
          class="codemirror"
        />
      </div>
      <a-icon slot="indicator" spin style="font-size: 24px" type="loading"/>
    </a-spin>
    <div v-show="showLink" class="link">
      <p>Your JSON was saved.</p>
      <!--id:{{ $route.params.id }}-->
      <p>URl to access this JSON directly. </p>
      <a-input
        v-model="jsonLinkShow"
        placeholder="Ohh! You caught me! 👻"
        style="width: 260px"
        @change="changeTheLinkBox"
      />
      <a-button
        v-clipboard:copy="jsonLink"
        v-clipboard:error="copyError"
        v-clipboard:success="copySuccess"
        :disabled="loading"
        type="dashed"
      >
        Copy
      </a-button>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      jsonBody: '{"name":"jack"}',
      showLink: true,
      jsonLink: 'https://jsonhut.com/api/',
      jsonLinkShow: '',
      loading: true,
      cmOption: {
        tabSize: 4,
        styleActiveLine: true, // 高亮选中行
        lint: true,
        mode: 'text/javascript',
        lineNumbers: true, // 显示行号
        lineWrapping: true, // 自动换行
        scrollbarStyle: 'overlay', // 滚动条样式
        theme: 'ayu-mirage',
        readOnly: true, // 只读
        autofocus: false,
        autoCloseBrackets: true // 自动闭合括号
      }
    }
  },
  beforeCreate () {
    const vm = this
    this.$axios.get('/details/' + this.$route.params.id).then((res) => {
      console.log(res.data)
      vm.jsonBody = JSON.stringify(JSON.parse(JSON.stringify(res.data.data.json_body)), null, 2)
      vm.jsonLinkShow = vm.jsonLink = res.data.data.url
      vm.loading = false
    })
  },
  created () {
    this.jsonLinkShow = 'https://jsonhut.com/api/' + this.$route.params.id
  },
  methods: {
    copySuccess () {
      this.$message.success('Copy Success!')
    },
    copyError () {
      this.$message.warning('Ohh!You have to copy it yourself!')
    },
    changeTheLinkBox () {
      const vm = this
      setTimeout(function () {
        vm.jsonLinkShow = vm.jsonLink
      }, 2300)
    }
  }
}
</script>

<style scoped>
.link {
  margin-top: 24px;
}
</style>
