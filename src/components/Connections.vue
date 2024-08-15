<template>
  <div class="connections">
    <h1>Connections</h1>
    <div v-for="connection in connections" :key="connection.id" class="connection">
      <p>{{ connection.name }}</p>
      <button @click="toggleConnection(connection)">
        {{ connection.isConnected ? 'Disconnect' : 'Connect' }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Connections",
  data() {
    return {
      connections: [
        { id: 1, name: "Alice Johnson", isConnected: true },
        { id: 2, name: "Bob Smith", isConnected: false },
        { id: 3, name: "Charlie Davis", isConnected: true },
      ],
    };
  },
  methods: {
    toggleConnection(connection) {
      connection.isConnected = !connection.isConnected;
    },
  },
};
</script>

<style scoped lang="scss">
.connections {
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;

  h1 {
    font-size: 24px;
    color: #333;
    margin-bottom: 20px;
  }

  .connection {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    padding: 10px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

    p {
      font-size: 16px;
      color: #555;
    }

    button {
      background-color: #007bff;
      color: white;
      border: none;
      padding: 5px 10px;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s;

      &:hover {
        background-color: #0056b3;
      }
    }
  }
}

/* Estilos responsivos */
@media (max-width: 768px) {
  .connections {
    padding: 15px;
  }

  .connection {
    flex-direction: column;
    align-items: flex-start;

    button {
      margin-top: 10px;
    }
  }
}
</style>
