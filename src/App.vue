<template>
  <div id="app">
    <UserProfile />
    <Connections />
    <Projects />
    <Teams />
  </div>
</template>

<script>
import UserProfile from './components/UserProfile.vue';
import Connections from './components/Connections.vue';
import Projects from './components/Projects.vue';
import Teams from './components/Teams.vue';

export default {
  name: 'App',
  components: {
    UserProfile,
    Connections,
    Projects,
    Teams,
  },
};
</script>
