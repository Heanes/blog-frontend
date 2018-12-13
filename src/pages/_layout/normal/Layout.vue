<template>
    <div id="app">
        <he-header></he-header>
        <slot name="main"></slot>
        <he-footer></he-footer>
    </div>
</template>

<script>
import HeHeader from '../../_layout/normal/Header'
import HeFooter from '../../_layout/normal/Footer'
import '../../static/css/common/common.scss'

export default {
  name: 'Layout',
  components: {
    'he-header': HeHeader,
    'he-footer': HeFooter
  }
}
</script>

<style scoped>

</style>
