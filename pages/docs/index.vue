<template>
  <div>
    <div>
      <div class="title">
        Root
      </div>
      <div>
        <blockquote>https://api.jsonhut.com/</blockquote>
        <div>All requests support <a href="https://en.wikipedia.org/wiki/Cross-origin_resource_sharing" target="_blank">cross-origin
          resource sharing(CORS)</a> and SSL.
        </div>
      </div>
    </div>
    <div>
      <div class="title">
        *Request JSON
      </div>
      <div>
        <pre class="md-fences"> GET /bins/:id </pre>
        <p>Server response</p>
        <code class="code-line"> 200 OK </code>
      </div>
    </div>
    <div>
      <div class="title">
        *Create a new JSON
      </div>
      <div>
        <pre class="md-fences"> POST /bins </pre>

        <p>POST Body</p>

        <pre v-highlightjs class="md-fences"><code class="js"> {
    "json": "your json",
    "day": 3
   }</code></pre>
        <p>Params</p>

        <p>Server response</p>
        <code class="code-line">201 Created </code>
      </div>
    </div>
    <div>
      <div class="title">
        *Get JSON details
      </div>
      <div>
        <pre class="md-fences"> GET /details/:id </pre>
        <p>Server response</p>
        <code class="code-line">200 OK </code>
        <pre v-highlightjs class="md-fences"><code class="js"> //for example
   {
    "code": 200,
    "msg": "Success",
    "data": {
        "url": "https://api.jsonhut.com/bins/2G2DZX",
        "count": 16,
        "created_at": "2021-02-09 22:36:29",
        "last_used_at": "2021-02-10 21:38:44",
        "expires_at": "2021-02-12 22:36:29"
     }
   }</code></pre>
        <p>Glossary</p>
        <ul>
          <li><strong>url:</strong> The url to request JSON</li>
          <li><strong>count:</strong> Number of calls</li>
          <li><strong>created_at:</strong> The JSON created at this time</li>
          <li><strong>last_used_at:</strong> The JSON Last used at this time</li>
          <li><strong>expires_at:</strong> The JSON will expire after this time</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'docs',
  data() {
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
  /*box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);*/
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
