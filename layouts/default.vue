<template>
  <div id="main">
    <div id="header">
      <div class="logo">
        <div>JsonHut</div>
      </div>
      <div>
        A simple JSON store for your web or mobile app
        <span v-if="$route.name === 'details-id'">
          <nuxt-link style="float: right" to="/">+ create new JSON</nuxt-link>
        </span>
      </div>
    </div>
    <Nuxt />
    <div id="footer">
      <div>
        <nuxt-link to="/">
          Home
        </nuxt-link>
        <nuxt-link to="/docs">
          Docs
        </nuxt-link>
        <nuxt-link to="/common">
          Common
        </nuxt-link>
      </div>
      JsonHut ©2021 Created by North
    </div>
  </div>
</template>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
  Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

#header {
  margin-top: 20px;
  padding: 20px 0;
}

.logo {
  color: #495057;
  font-size: 50px;
  font-weight: bolder;
}

#footer {
  margin-top: 104px;
  margin-bottom: 80px;
  color: #adb5bd;
  text-align: center;
}
</style>
