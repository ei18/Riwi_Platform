<template>
  <div class="teams">
    <h1>Teams</h1>
    <div v-for="team in teams" :key="team.id" class="team">
      <h2>{{ team.name }}</h2>
      <p>{{ team.members.length }} Members</p>
      <button @click="viewTeam(team)">
        View Team
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Teams",
  data() {
    return {
      teams: [
        { id: 1, name: "Development", members: ["Alice", "Bob", "Charlie"] },
        { id: 2, name: "Design", members: ["David", "Eve", "Frank"] },
      ],
    };
  },
  methods: {
    viewTeam(team) {
      // Lógica para ver los detalles del equipo
      alert(`Viewing team: ${team.name}`);
    },
  },
};
</script>

<style scoped lang="scss">
.teams {
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;

  h1 {
    font-size: 24px;
    color: #333;
    margin-bottom: 20px;
  }

  .team {
    margin-bottom: 15px;
    padding: 15px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

    h2 {
      font-size: 20px;
      color: #333;
      margin-bottom: 10px;
    }

    p {
      font-size: 16px;
      color: #555;
    }

    button {
      background-color: #ffc107;
      color: white;
      border: none;
      padding: 5px 10px;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s;

      &:hover {
        background-color: #e0a800;
      }
    }
  }
}

/* Estilos responsivos */
@media (max-width: 768px) {
  .teams {
    padding: 15px;
  }

  .team {
    h2 {
      font-size: 18px;
    }

    p {
      font-size: 14px;
    }
  }
}
</style>
