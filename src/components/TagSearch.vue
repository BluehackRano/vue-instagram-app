<template>
  <div>
    <md-input-container>
      <label>태그 검색</label>
      <md-input @input.native="tagName = $event.target.value"
        @keydown.native.enter="search"></md-input> <!-- <<< inline method 방식 -->
    </md-input-container>

    <feed v-for="feed in feeds" :key="feed.id"
          v-if="feed.caption"
          :image-url="feed.images.standard_resolution.url"
          :full-name="feed.caption.from.full_name"
          :user-name="feed.caption.from.username"
          :contents="feed.caption.text">
    </feed>
    <!--<md-card v-for="feed in feeds" :key="feed.id">-->
      <!--<md-card-media>-->
        <!--<img :src="feed.images.standard_resolution.url"/>-->
      <!--</md-card-media>-->

      <!--<md-card-header v-if="feed.caption">-->
        <!--<div class="md-title">{{ feed.caption.from.full_name }}</div>-->
        <!--<div class="md-subhead">@{{ feed.caption.from.username }}</div>-->
      <!--</md-card-header>-->

      <!--<md-card-content>-->
        <!--{{ feed.caption.text }}-->
      <!--</md-card-content>-->
    <!--</md-card>-->

  </div>
</template>

<script>
  import jsonp from 'jsonp'
  import Feed from './Feed'

  export default {
    name: 'TagSearch',
    data () {
      return {
//        isLoading: true,
        feeds: [],
        tagName: ''
      }
    },
    components: {
      Feed
    },
    methods: {
      search () {
        console.log(this.tagName)
        if (!this.tagName || this.tagName === '') {
          return
        }

        const token = localStorage.getItem('token')
//      this.isLoading = true
        jsonp(`https://api.instagram.com/v1/tags/${this.tagName}/media/recent?access_token=${token}`, null,
          (_, response) => {
//            this.isLoading = false
            this.feeds = response.data
            console.log(this.feeds)
          })
      }
    }
  }
</script>

<style scoped>

</style>
