<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
	  <router-link to="/carts">Carts</router-link> |
	   <router-link to="/joke">Joke</router-link> |
	   <!-- <router-link to="/logout">LogOut</router-link> | -->
	   <span v-if="!$store.getters.getLog">
		   <router-link to="/login">Login</router-link> |
		    <router-link to="/regist">Regist</router-link> |
	   </span>
		<span v-else>
			<router-link to="/center">Center</router-link> |
			 <router-link to="/logout">LogOut</router-link> 
		</span>
		
    </div>
    <router-view/>
  </div>
</template>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
