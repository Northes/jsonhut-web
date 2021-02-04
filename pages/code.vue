<template>
  <div class="example">
    <client-only>
      <codemirror
        v-model="code"
        :options="cmOption"
        class="codemirror"
        @blur="onCmBlur"
        @cursorActivity="onCmCursorActivity"
        @focus="onCmFocus"
        @ready="onCmReady"
      />
    </client-only>
    <pre class="pre">{{ code }}</pre>
  </div>
</template>

<script>
import dedent from 'dedent'

export default {
  name: 'codemirror-example-nuxt',
  data () {
    return {
      cmOption: {
        tabSize: 4,
        styleActiveLine: true,
        lineNumbers: true,
        line: true,
        mode: 'text/javascript',
        matchBrackets: true, // 匹配括号
        theme: 'ayu-mirage'
      },
      code: dedent`{"code":200,"msg":"成功","data":[{"score":10.182341,"details":{"question":"5、樊迟问仁。子曰：“（）。”问知。子曰：“（）。”","answer":"答案:B","options":"A:知人、懂人|B:爱人、知人|C:知人、惜人|D:懂人、爱人"}},{"score":9.691528,"details":{"question":"问胸痛","answer":"参考答案： (1)胸痛憋闷、痛引肩背者，为胸痹。为胸阳不振，痰浊内阻；或气虚血瘀，心肺气血运行不畅所致。(2)胸背彻痛剧烈、面色青灰、手足青至节者，为真心痛。是心脉急骤闭塞不通所致。(3)胸痛、壮热面赤、喘促鼻煽者，属实热证，是外感风热犯肺，肺失宣肃所致。(4)胸痛、潮热盗汗、咳痰带血者，为肺阴虚证。是阴虚化燥生热，虚火灼伤肺络所致。(5)胸闷咳喘，痰白量多者，属痰湿犯肺。是脾虚湿聚生痰，痰浊上犯所致。(6)胸痛身热、咳吐脓血痰味腥臭者，属肺痈。为热毒蕴肺，气血瘀结，肉腐成脓所致。(7)胸胀痛走窜、太息易"}},{"score":9.691528,"details":{"question":"问胁痛","answer":"参考答案： (1)胁胀痛、太息易怒者，多为肝气郁结，情志不畅所致。(2)胁肋灼痛、面红目赤者，多为肝火郁滞，火灼胁部络脉所致。(3)胁肋胀痛、身目发黄，为肝胆湿热蕴结所致黄疸病。(4)胁部刺痛，固定不移，为跌仆闪挫，瘀血阻滞，经络不畅所致。(5)胁痛，患侧肋间饱满，咳唾引痛，为悬饮病。是饮邪停留于胸胁所致。(6)伤寒胸胁苦满，往来寒热，为少阳证；杂病初起，胸胁胀痛，情志不畅，是肝气郁结。"}}]}`
    }
  },
  methods: {
    onCmCursorActivity (codemirror) {
      console.debug('onCmCursorActivity', codemirror)
    },
    onCmReady (codemirror) {
      console.debug('onCmReady', codemirror)
    },
    onCmFocus (codemirror) {
      console.debug('onCmFocus', codemirror)
    },
    onCmBlur (codemirror) {
      console.debug('onCmBlur', codemirror)
    }
  }
}
</script>

<style scoped>
/*.example {*/
/*  display: flex;*/
/*  height: 100%;*/

/*  .codemirror,*/
/*  .pre {*/
/*    width: 50%;*/
/*    height: 100%;*/
/*    margin: 0;*/
/*    overflow: auto;*/
/*  }*/

/*  .pre {*/
/*    display: block;*/
/*    padding: 1rem;*/
/*    font-size: $font-size-small;*/
/*    line-height: 1.6;*/
/*    word-break: break-all;*/
/*    word-wrap: break-word;*/
/*  }*/
/*}*/

</style>
