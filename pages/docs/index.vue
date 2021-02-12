<template>
  <div>
    <div>
      <div class="title">
        Root
      </div>
      <div>
        <blockquote>https://api.jsonhut.com/</blockquote>
      </div>
    </div>
    <div>
      <div class="title">
        Request JSON
      </div>
      <div>
        <pre class="md-fences"> GET /bins/:id </pre>
        <p>Server response</p>
        <code class="code-line"> 200 OK </code>
      </div>
    </div>
    <div>
      <div class="title">
        Create a new JSON
      </div>
      <div>
        <pre class="md-fences"> POST /bins </pre>

        <p>POST Body</p>

        <pre v-highlightjs><code class="js"> {
    "json": "your json",
    "day": 3
   }</code></pre>

        <p>Server response</p>
        <code class="code-line">201 Created </code>
      </div>
    </div>
    <div>
      <div class="title">
        Get JSON details
      </div>
      <div>
        <pre class="md-fences"> GET /details/:id </pre>
        <p>Server response</p>
        <code class="code-line">200 OK </code>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      code: '{"json": "your json","day": 3}'
    }
  }
}
</script>

<style scoped>
.title {
  font-weight: bold;
  font-size: 24px;
  margin-top: 30px;
  margin-bottom: 16px;
}

p {
  font-weight: bold;
}

.code-line {
  font-size: inherit;
  border: 1px solid #e7eaed;
  background-color: #f8f8f8;
  border-radius: 3px;
  padding: 0;
  padding: 2px 4px 0px 4px;
  font-size: 0.9em;
  background-color: #f3f4f4;
  padding: 0 2px 0 2px;
}

blockquote {
  font-size: 18px;
  margin: 0.8em 0;
  border-left: 4px solid #dfe2e5;
  padding: 0 15px;
  color: #777777;
}

.on-focus-mode blockquote {
  border-left-color: rgba(85, 85, 85, 0.12);
}

.md-fences,
.md-fences:active {
  background-color: rgb(29, 31, 35);
  border-radius: 6px;
  padding: 8px 4px 8px 4px !important;
  margin-top: 15px;
  margin-bottom: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  color: #dee2e6;
}

.md-fences .code-tooltip {
  display: block !important;
  visibility: hidden;
  opacity: 0;
  transition: 0.3s;
  background-color: rgba(16, 17, 20, 0.5);
}

.md-fences.md-focus .code-tooltip {
  opacity: 1;
  visibility: visible;
}

code.hljs {
  border-radius: 6px;
  background-color: rgb(29, 31, 35);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  padding: 8px 4px 8px 4px !important;
}
</style>
