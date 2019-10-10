<template>
  <div class="singer" ref="singer">
    <list-view :data="singers"></list-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import {getSingerList} from 'api/singer'
  import {ERR_OK} from 'api/config'
  import ListView from 'base/listview/listview'

  import Singer from 'common/js/singer'

  const HOT_TITLE = '热门'
  const HOT_LENGTH = 10  
  
  export default {
    data() {
      return {
        singers: []
      }
    },
    created() {
      this._getSingerList()
    },
    methods: {
      _getSingerList() {
        getSingerList().then((res) => {
          if (res.code === ERR_OK) {
            this.singers = this._normalizeSinger(res.data.list)
            console.log( this._normalizeSinger(res.data.list) )
          }
        }).catch(err => {
          console.log(err)
        })
      },
      _normalizeSinger(list) {
        let map = {
          hot: {
            title: HOT_TITLE,
            items: []
          }
        }
        list.forEach( (item, index) => {
          if (index < HOT_LENGTH) {
            map.hot.items.push(new Singer(item.Fsinger_mid, item.Fsinger_name))
          }

          let idx = item.Findex
          if (!map[idx]) {
            map[idx] = {
              title: idx,
              items: []
            }
          }
          map[idx].items.push(new Singer(item.Fsinger_mid, item.Fsinger_name))  
        })

        let hot = []
        let ret = []
        for(var key in map){
          let val = map[key]

          if (val.title === '热门') {
            hot.push(val)
          }else if(val.title.match(/[a-zA-Z]/)){
            ret.push(val)
          }
        }

        ret.sort((a, b) => {
          return a.title.charCodeAt(0)-b.title.charCodeAt(0)
        })
        return hot.concat(ret)
      }
    },
    components: {
      ListView
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.singer
  position fixed
  top: 88px
  bottom: 0
  width: 100%
</style>