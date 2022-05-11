<template>
  <div id="app">
    <div>
      <el-button @click="connectWallet()">
        {{this.address?this.address:(this.provider?'connect metamask':'install metamask')}}
      </el-button>
    </div>
    <router-view/>
  </div>
</template>

<script>

  import { ethers } from "ethers";
export default {
  name: 'App',
  data() {
    return {
      address:null,
      provider: null
    };
  },
  async mounted() {
    if(window.ethereum) {
      this.$data.provider  = new ethers.providers.Web3Provider(window.ethereum);
    }
  },
  methods:{
    async connectWallet() {
      if(this.address) {
        return ;
      }
      if(this.provider) {
        await this.provider.send("eth_requestAccounts", []);
        const signer = await this.provider.getSigner();
        let acc =  await signer.getAddress();
        this.$data.address = acc;
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>


