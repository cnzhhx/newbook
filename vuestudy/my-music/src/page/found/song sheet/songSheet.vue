<template>
  <div class="songSheet">
    <div class="songSheetBig">
      <div></div>
    </div>
  </div>
</template>

<script>


  export default {
    name: "songSheet"
  }
</script>

<style>
  *{
    font-size: 12px;
    color: #333;
    font-family: Arial, Helvetica, sans-serif;
  }
  .songSheet{
    margin-top: 1px;
  }
  .songSheetBig{
    width: 980px;
    min-height: 700px;
    margin: 0 auto;
    background-color: #fff;
    border-left: 1px solid #d3d3d3;
    border-right: 1px solid #d3d3d3;
  }
</style>
