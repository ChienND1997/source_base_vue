<template>
  <div>
    <div v-t="'test'" />
    <h1>{{ msg }}</h1>
    <select name="languagueType" @change="$_selectLanguague($event)">
      <option value="en">English</option>
      <option value="vn">VietNam</option>
    </select>
    <div>
      {{ menuItem }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      data: null
    }
  },
  props: {
    msg: String
  },
  computed: {
    menuItem () {
      return this.data
    }
  },
  async created () {
    // await this.$store.dispatch('me/setMe')
    // this.data = this.$store.getters['me/getMe']
    // console.log('data', this.data)
  },
  methods: {
    $_selectLanguague (event) {
      switch (event.target.value) {
        case 'en':
          this.$i18n.locale = 'en-US'
          break
        case 'vn':
          this.$i18n.locale = 'vn'
          break
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
