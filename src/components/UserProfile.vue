<template>
  <div class="user-profile">
    <h1>{{ user.name }}</h1>
    <p>Email: {{ user.email }}</p>

    <h2>Skills</h2>
    <ul>
      <li v-for="skill in user.skills" :key="skill">{{ skill }}</li>
    </ul>

    <h2>Timeline</h2>
    <ul>
      <li v-for="event in user.timeline" :key="event.year">
        {{ event.year }}: {{ event.event }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "UserProfile",
  data() {
    return {
      // Datos del perfil de usuario
      user: {
        name: "John Doe",
        email: "john.doe@example.com",
        skills: ["JavaScript", "Vue.js", "CSS"],
        timeline: [
          { year: "2020", event: "Joined Riwi" },
          { year: "2021", event: "Promoted to Senior Developer" },
        ],
      },
    };
  },
};
</script>

<style scoped lang="scss">
.user-profile {
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;

  h1 {
    font-size: 24px;
    color: #333;
  }

  p {
    font-size: 16px;
    color: #555;
  }

  h2 {
    margin-top: 20px;
    font-size: 20px;
    color: #444;
  }

  ul {
    list-style-type: none;
    padding: 0;

    li {
      font-size: 16px;
      color: #666;
      margin: 5px 0;
    }
  }
  
  /* Estilos responsivos */
  @media (max-width: 768px) {
    padding: 15px;
    
    h1 {
      font-size: 20px;
    }

    p, li {
      font-size: 14px;
    }
  }

  @media (max-width: 480px) {
    padding: 10px;
    
    h1 {
      font-size: 18px;
    }

    p, li {
      font-size: 12px;
    }
  }
}
</style>

