<template>
  <div class="projects">
    <h1>Projects</h1>
    <div v-for="project in projects" :key="project.id" class="project">
      <h2>{{ project.name }}</h2>
      <p>Status: {{ project.status }}</p>
      <button @click="editProject(project)">
        Edit
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Projects",
  data() {
    return {
      projects: [
        { id: 1, name: "Riwi Platform", status: "In Progress" },
        { id: 2, name: "Client Management System", status: "Completed" },
      ],
    };
  },
  methods: {
    editProject(project) {
      // Lógica para editar el proyecto
      alert(`Editing project: ${project.name}`);
    },
  },
};
</script>

<style scoped lang="scss">
.projects {
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;

  h1 {
    font-size: 24px;
    color: #333;
    margin-bottom: 20px;
  }

  .project {
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
      background-color: #28a745;
      color: white;
      border: none;
      padding: 5px 10px;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s;

      &:hover {
        background-color: #218838;
      }
    }
  }
}

/* Estilos responsivos */
@media (max-width: 768px) {
  .projects {
    padding: 15px;
  }

  .project {
    h2 {
      font-size: 18px;
    }

    p {
      font-size: 14px;
    }
  }
}
</style>

