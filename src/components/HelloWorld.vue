<template>
  <div class="hello">
    <button @click="increase">+</button>
    <button @click="decrease">-</button>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    ...mapActions(['add','decre']),
    async increase(){
      // this.$store.commit('increment')
      await this.add({id: 12345})
    },
    decrease(){
      // this.$store.commit('decrement')
      this.decre()
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
