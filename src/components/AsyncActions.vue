<template>
    <div id="async">
        <p>Vuex can manage Asyncronous Actions, such as API calls, but there are some things you need to know.</p>
        <ul>
          <li>Data returned from an API call will not be immediately available in your mounted and created lifecycle hooks.</li>
          <li>Accessing JSON with a getter requires an existence check.</li>
        </ul>
        <hr/>
        <div class="photo-container">
            <img id="left" @click="newColor" :src="GET_PHOTO_BY_ID(leftIndex)"/>
            <img @click="SHUFFLE_PHOTOS" :src="GET_RANDOM_PHOTO"/>
            <img id="right" @click="newColor" :src="GET_PHOTO_BY_ID(rightIndex)"/>
        </div>
    </div>
</template>

<script>
import { mapMutations, mapActions, mapGetters, mapState } from 'vuex';

export default {
  name: "AsyncActions",
  data() {
    return {
        randomColor: String,
        leftIndex: 1000,
        rightIndex: 2000
    }
  },
  computed: {
    ...mapState('ASYNC_DEMO', ['PHOTOS']),
    ...mapGetters('ASYNC_DEMO', ['GET_PHOTO_BY_ID', 'GET_RANDOM_PHOTO'])
  },
  methods: {
    newColor(event) {
      switch(event.target.id){
        case 'left': {
          this.leftIndex = this.modIncrement(this.leftIndex, this.PHOTOS);
          break;
        }
        case 'right': {
          this.rightIndex = this.modIncrement(this.rightIndex, this.PHOTOS);
          break;
        }
        default: {
          this.leftIndex = this.modIncrement(this.leftIndex, this.PHOTOS);
          this.rightIndex = this.modIncrement(this.rightIndex, this.PHOTOS);
        }
      }
    },
    modIncrement(index, arr) {
      return (index + 1) % arr.length;
    },
    ...mapMutations('ASYNC_DEMO', ['SHUFFLE_PHOTOS']),
    ...mapActions('ASYNC_DEMO', ['GET_PHOTOS'])
  },
  created() {
    this.GET_PHOTOS()
      .then((response) => {
        console.log(response);
      })
      .catch((error)=> {
        console.error('home:', error);
      })
  }
}
</script>

<style scoped lang="scss">
  #async {
    font-size: 0.75em;
  }
  ul {
    font-size: 0.75em;
  }
  .block {
    display: block;
  }
  .photo-container{
    position: relative;
    display: flex;
    justify-content: center;
  }
</style>

