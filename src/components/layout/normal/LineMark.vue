<!--
  @doc 辅助线工具
  @author Heanes
  @time 2019-08-30 14:23:00 周五
-->
<template>
  <div class="line-mark">
    <div class="line v-line-half"></div>
    <div class="line h-line-half"></div>
  </div>
</template>

<script>
// import '@/assets/css/utils/lineMark.scss';
export default {
  name: 'HecLineMark'
}
</script>

<style scoped type="scss">
  $line-mark-color: rgba(218, 112, 214, 0.48);
  .line-mark{
    position: relative;
    z-index: 99;

    .line{
      background-color: $line-mark-color;
      position: fixed;
    }

    .v-line-half{
      top: 0;
      left: 50%;
      width: 1px;
      height: 100%;
      margin-left: -1px;
    }
    .h-line-half{
      top: 50%;
      left: 0;
      width: 100%;
      height: 1px;
      margin-top: -1px;
    }
  }
  .main-width{
    border: 0 solid $line-mark-color;
    border-left-width: 1px;
    border-right-width: 1px;
  }
</style>
