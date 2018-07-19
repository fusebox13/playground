<template>
  <div class="container">
      <div class="item-a">
            <el-input placeholder="Please input" v-model="input"></el-input>
       </div>
       {{input}}
  </div>
</template>

<script>


export default {
  name: "playground",
  data: function() {
      return {
          input: '',
      }
  },

//   components: {
//     HelloWorld
//   }
};
</script>