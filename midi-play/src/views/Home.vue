<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button @click="bofang">播放</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
var MidiPlayer = require('midi-player-js')

export default {
  name: 'home',
  components: {
    HelloWorld
  },

  methods: {
    bofang () {
      var Player = new MidiPlayer.Player(function (event) {
        console.log(event)
      })

      // Load a MIDI file
      Player.loadFile('../assets/84686.midi')
      Player.play()
    }
  }
}
</script>
