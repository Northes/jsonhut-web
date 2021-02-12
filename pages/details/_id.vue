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
        style="width: 260px"
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
const axios = require('axios')
export default {
  asyncData ({ params }) {
    const baseURl = 'http://127.0.0.1:8080'
    // console.log(params);
    return axios
      .all([
        axios.get(baseURl + '/bins/' + params.id, {
          params: { from: 'details' }
        }),
        axios.get(baseURl + '/details/' + params.id)
      ])
      .then((res) => {
        let res1, res2;
        // eslint-disable-next-line prefer-const
        [res1, res2] = res
        const jsonbody = JSON.stringify(
          JSON.parse(JSON.stringify(res1.data)),
          null,
          2
        )
        return {
          jsonBody: jsonbody,
          details: res2.data.data
        }
      })
      .catch((err) => {
        console.log(err.response.data)
        return { errCode: err.response.data.code }
      })
  },
  data () {
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
  created () {
    this.jsonLinkShow = this.jsonLink = this.details.url
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
    },
    refreshDetails () {
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
