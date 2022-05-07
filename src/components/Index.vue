<template>
  <el-tabs active-name="first">
    <el-tab-pane label="Enter Album" name="first">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="Album Id">
          <el-input aria-required="true" v-model="form.albumId"></el-input>
        </el-form-item>
        <el-form-item label="Password">
          <el-input aria-required="true" v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="handleEnterAblbum()">Enter Album</el-button>
        </el-form-item>
      </el-form>
    </el-tab-pane>
    <el-tab-pane label="Create Album" name="second">
      <el-form ref="form" :model="newForm" label-width="80px">
        <el-form-item label="Password">
          <el-input v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button>Create Album</el-button>
        </el-form-item>
      </el-form>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      form:{
        albumId:'',
        password:'',
      },
      newForm:{
        albumId:'',
        password:'',
      }
    }
  },
  methods:{
    handleEnterAblbum() {
      if(this.form.albumId === '' || this.form.password === '') {
        this.$message({
          message: 'albumId and password can not be empty!'
        });
        return;
      }
      this.$router.push('/album')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
