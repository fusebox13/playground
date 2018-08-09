<template>
  <div id="app" class="layout">
    
    <div class="side-bar">
      <img src="./assets/laboratory.svg"/>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="playground">Playground</router-link></li>
        <li><router-link to="element">Element UI</router-link></li>
      </ul>
    </div>
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss" scoped>

  @import url('https://fonts.googleapis.com/css?family=Cinzel');
  @import url('https://fonts.googleapis.com/css?family=Reem+Kufi');

  html, body {
    margin: 0px;
    height: 100%;
  }

  .layout {
        display: grid !important;
        grid-template-columns: 200px 1fr 10%;
        grid-template-rows: 25px 1fr 75px;
        font-family: 'Reem Kufi', sans-serif;
        height: 100%;
    }

  .nav {

    z-index: 9999;
    grid-column-start: 1;
    grid-column-end: span 4;
    grid-row-start: 1;
    grid-row-end: 1;
    background: #6b5b95;

  }

  .side-bar {
    grid-column-start: 1;
    grid-column-end: span 1;
    grid-row-start: 1;
    grid-row-end: span 3;
    background: #231f2f;
    text-align: center;
    height: 100%;

    img {
      width: 100px;
      height: auto;
      margin-top: 2em;
    }

    ul {
      padding: 0;
      list-style-type: none;
      li {
          padding: 1em;
          text-align: center;
          //font-weight: 800;
          a {
            &:visited {
              color: white;
            }
            &:hover {
              color: lightgrey;
            }
            color: white;
            font-size: 1.5em;
            text-decoration: none;
        }
      }
    }
  }
   
  

  .content {
      grid-column-start: 2;
      grid-column-end: span 1;
      grid-row-start: 2;
      grid-row-end: span 3;
      padding: 0em 3em;
      font-size: 2em;

  }

  .footer {
    grid-column-start: 1;
    grid-column-end: span 4;
    grid-row-start: 3;
    grid-row-end: span 1;
    background: yellow;
  }

</style>
