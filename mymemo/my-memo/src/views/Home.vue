<!-- 메모 리스트로 만들려고 함. -->
<template>
  <div>
<!--    <p v-if="isAu"></p>-->
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
