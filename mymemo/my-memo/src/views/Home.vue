<template>
  <div>
    help me
  </div>
</template>

<script>
import memoApi from '../api/memos'

export default {
  name: 'Home',
  data() {
    return {
      memos: []
    }
  },
  mounted() {
    memoApi.getMemos()
        .then(res => {
          this.memos = res.data
        })
        .catch(() => {

        })
  }
}
</script>
