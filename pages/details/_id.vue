<template>
  <div>
    <div style="background-color: #1f2430; height: 300px;border-radius: 6px;">
      <codemirror v-model="jsonBody" :options="cmOption" class="codemirror"/>
    </div>
    <div class="link">
      <p>Your JSON was saved.</p>
      <!--id:{{ $route.params.id }}-->
      <p>URl to access this JSON directly.</p>
      <a-input
          v-model="jsonLinkShow"
          placeholder="Ohh! You caught me! 👻"
          style="width: 290px"
          @change="changeTheLinkBox"
      />
      <a-button
          v-clipboard:copy="jsonLink"
          v-clipboard:error="copyError"
          v-clipboard:success="copySuccess"
          type="dashed"
      >
        Copy
      </a-button>
    </div>
    <div class="details">
      <p>
        <span style="font-weight: bold">Details</span>
        <span style="float: right">
          <a @click="refreshDetails">Refresh</a></span>
      </p>
      <p>Count: {{ details.count }}</p>
      <p>CreatedAt: {{ details.created_at }}</p>
      <p>LastUsedAt: {{ details.last_used_at }}</p>
      <p>ExpiresAt: {{ details.expires_at }}</p>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData(ctx) {
    try {
      const baseUrl = ctx.env.baseUrl
      let [jsonBody, details] = await Promise.all([
        ctx.$axios.get(baseUrl + '/bins/' + ctx.params.id, {params: {from: 'details'}}).catch((err) => {
          throw new Error(err.response.data.code)
        }),
        ctx.$axios.get(baseUrl + '/details/' + ctx.params.id).catch((err) => {
          throw new Error(err.response.data.code)
        })
      ])
      return {
        jsonBody: JSON.stringify(JSON.parse(JSON.stringify(jsonBody.data)), null, 2),
        details: details.data.data
      }
    } catch (error) {
      console.log("errConsole========:", error.toString())
      if (error.toString() === 'Error: 404') {
        ctx.error({statusCode: 404, message: 'Can not find the JSON'})
      } else {
        ctx.error({statusCode: 500, message: 'Server error'})
      }
    }
  },
  data() {
    return {
      jsonBody: '',
      jsonLink: '',
      jsonLinkShow: '',
      details: {
        url: '',
        count: '',
        created_at: '',
        last_used_at: '',
        expires_at: ''
      },
      errCode: 0,
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
  created() {
    this.jsonLinkShow = this.jsonLink = this.details.url
  },
  methods: {
    copySuccess() {
      this.$message.success('Copy Success!')
    },
    copyError() {
      this.$message.warning('Ohh!You have to copy it yourself!')
    },
    changeTheLinkBox() {
      const vm = this
      setTimeout(function () {
        vm.jsonLinkShow = vm.jsonLink
      }, 2300)
    },
    refreshDetails() {
      const vm = this
      this.$axios.get('/details/' + this.$route.params.id).then((res) => {
        // console.log(res.data)
        vm.details = res.data.data
      })
    }
  }
}
</script>

<style scoped>
.link {
  margin-top: 24px;
}
</style>
