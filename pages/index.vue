<template>
  <div id="section">
    <div>
      <!--        <a-textarea v-model="jsonBody" :disabled="showLink" :rows="8" placeholder="Enter your valid JSON data here"/>-->
      <div style="background-color: #1f2430;height: 300px">
        <codemirror
          v-model="jsonBody"
          :options="cmOption"
          class="codemirror"
        />
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
        <a-select-option disabled value="0">
          Permanent
        </a-select-option>
      </a-select>
      <a-button size="large" type="primary" @click="handleSave" style="width: 100px">
        Save
      </a-button>
      <a-button size="large" @click="handleFormatting">
        Formatting
      </a-button>
      <a-button size="large" @click="handleCompress">
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
      expirationTime: '3',
      jsonLink: 'https://jsonhut.com/api/SOsNDsu',
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
      this.expirationTime = value
      // eslint-disable-next-line no-console
      console.log(this.expirationTime)
    },
    handleSave () {
      if (this.isJsonBodyEmptyOrErrorFormat()) {
        return false
      }
      const vm = this
      const data = {
        time: this.expirationTime,
        json: this.jsonBody
      }
      this.$axios.post('/api', data).then((res) => {
        console.log(res.data)
        if (res.data.code === 200) {
          vm.$router.push(res.data.data.id)
        }
      })
    },
    handleFormatting () {
      if (this.isJsonBodyEmptyOrErrorFormat()) {
        return false
      }
      this.jsonBody = JSON.stringify(JSON.parse(this.jsonBody), null, 2)
    },
    handleCompress () {
      if (this.isJsonBodyEmptyOrErrorFormat()) {
        return false
      }
      this.jsonBody = JSON.stringify(JSON.parse(this.jsonBody))
    },
    isJsonFormat (jsonContent) {
      if (typeof jsonContent === 'string') {
        try {
          // eslint-disable-next-line no-unused-vars
          const obj = JSON.parse(jsonContent)
          if (jsonContent.includes('{')) {
            return true
          } else {
            return false
          }
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
/*#section {*/
/*  margin-top: 8px;*/
/*}*/

.button-group {
  margin-top: 24px;
}
</style>
