<template>
  <div>
    <div>
      <!--        <a-textarea v-model="jsonBody" :disabled="showLink" :rows="8" placeholder="Enter your valid JSON data here"/>-->
      <div style="background-color: #1f2430; height: 300px;border-radius: 6px;">
        <codemirror v-model="jsonBody" :options="cmOption" class="codemirror" />
      </div>
    </div>

    <div class="button-group">
      <a-select
        default-value="3"
        size="large"
        style="width: 120px"
        @change="handleChange"
      >
        <a-select-option value="1">
          One day
        </a-select-option>
        <a-select-option value="3">
          Three days
        </a-select-option>
        <a-select-option value="7">
          Seven days
        </a-select-option>
        <a-select-option value="0">
          Permanent
        </a-select-option>
      </a-select>
      <a-button
        size="large"
        type="primary"
        style="width: 100px"
        @click="handleSave"
      >
        Save
      </a-button>
      <a-button size="large" @click="jsonBody = handleFormatting(jsonBody)">
        Formatting
      </a-button>
      <a-button size="large" @click="jsonBody = handleCompress(jsonBody)">
        Compress
      </a-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      jsonBody: '',
      expireTime: '3',
      jsonLink: 'https://api.jsonhut.com/bins/SOsNDsu',
      cmOption: {
        tabSize: 4,
        styleActiveLine: true, // 高亮选中行
        lint: true,
        mode: 'text/javascript',
        lineNumbers: true, // 显示行号
        lineWrapping: true, // 自动换行
        scrollbarStyle: 'overlay', // 滚动条样式
        theme: 'ayu-mirage',
        readOnly: false, // 只读
        autofocus: true,
        autoCloseBrackets: true // 自动闭合括号
      }
    }
  },
  methods: {
    handleChange (value) {
      this.expireTime = value
      // eslint-disable-next-line no-console
      console.log(this.expireTime)
    },
    handleSave () {
      if (this.isJsonBodyEmptyOrErrorFormat()) {
        return false
      }
      const vm = this
      const data = {
        day: this.expireTime,
        json: this.handleCompress(this.jsonBody)
      }
      this.$axios
        .post('/bins', data)
        .then((res) => {
          // console.log(res.data);
          if (res.data.code === 201) {
            vm.$router.push('/details/' + res.data.data.id)
          }
        })
        .catch((err) => {
          // eslint-disable-next-line no-console
          console.log(err)
          vm.$message.warning('Something was error!')
        })
    },
    handleFormatting (str) {
      if (this.isJsonBodyEmptyOrErrorFormat()) {
        return false
      }
      return JSON.stringify(JSON.parse(str), null, 2)
    },
    handleCompress (str) {
      if (this.isJsonBodyEmptyOrErrorFormat()) {
        return false
      }
      return JSON.stringify(JSON.parse(str))
    },
    isJsonFormat (jsonContent) {
      if (typeof jsonContent === 'string') {
        try {
          // eslint-disable-next-line no-unused-vars
          const obj = JSON.parse(jsonContent)
          return jsonContent.includes('{');
        } catch (e) {
          // eslint-disable-next-line no-console
          console.log(e)
          return false
        }
      }
      return false
    },
    isJsonBodyEmptyOrErrorFormat () {
      if (this.jsonBody === '') {
        this.$message.warning('Input box is empty!')
        return true
      }
      if (!this.isJsonFormat(this.jsonBody)) {
        this.$message.warning('Error format!!')
        return true
      }
      return false
    }
  }
}
</script>

<style>
.button-group {
  margin-top: 24px;
}

</style>
