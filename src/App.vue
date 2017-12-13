<template>
  <div>
    <!-- <sui-button primary>click me</sui-button> -->
    <sui-menu >
      <sui-menu-item><sui-icon size="large" name="home" /></sui-menu-item>
      <sui-menu-item v-for="menu in menus" :key="menu.name" >
        <div @click="$router.push(menu.onClickName)">
        {{menu.text}}
        </div>
      </sui-menu-item>

      <sui-menu-menu position="right">
        <sui-menu-item>
          <sui-dropdown text="File" >
            <sui-dropdown-menu>
              <sui-dropdown-item>New</sui-dropdown-item>
              <sui-dropdown-item>Open... <span class="description">ctrl + o</span></sui-dropdown-item>
              <sui-dropdown-item>Save as... <span class="description">ctrl + s</span></sui-dropdown-item>
              <sui-dropdown-item>Rename <span class="description">ctrl + r</span></sui-dropdown-item>
              <sui-dropdown-item>Make a copy</sui-dropdown-item>
              <sui-dropdown-item><sui-icon name="folder" />Move to folder</sui-dropdown-item>
              <sui-dropdown-item><sui-icon name="trash" />Move to trash</sui-dropdown-item>
              <sui-dropdown-divider/>
              <sui-dropdown-item>Download as...</sui-dropdown-item>
            </sui-dropdown-menu>
          </sui-dropdown>
        </sui-menu-item>
      </sui-menu-menu>
    </sui-menu>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      menus: [
        {
          name: "AdminMenu1",
          text: "AdminMenu1",
          role: "Admin",
          onClickName: "/"
        },
        {
          name: "AdminMenu2",
          text: "AdminMenu2",
          role: "Admin",
          onClickName: "/sample2"
        },

        {
          name: "UserMenu1",
          text: "UserMenu1",
          role: "User",
          onClickName: "routeToUserMenu1"
        },
        {
          name: "UserMenu2",
          text: "UserMenu2",
          role: "User",
          onClickName: "routeToUserMenu2"
        }
      ]
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
