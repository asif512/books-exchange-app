<template>
  <div class="total-books">
    <b-table small :fields="fields" :items="items" responsive="sm">
      <template #cell(#)="data">
        {{ data.index + 1 }}
      </template>

      <template #cell(edit)="data">
        <b-button v-if="data.value == 'edit'" @click="handleClicked(data)"
          >edit</b-button
        >
      </template>
      <template #cell(delete)="data">
        <b-button v-if="data.value == 'delete'">delete</b-button>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  name: "ExchangedBooks",
  data() {
    return {
      fields: ["#", "title", "author", "status", "edit", "delete"],
      items: [
        {
          author: "Devid",
          title: "Javasctipt",
          status: "exchanged",
          edit: "edit",
          delete: "delete",
        },
        {
          author: "Thomas",
          title: "Javasctipt",
          status: "exchanged",
          edit: "edit",
          delete: "delete",
        },
        {
          author: "Thomas",
          title: "Javasctipt",
          status: "exchanged",
          edit: "edit",
          delete: "delete",
        },
      ],
    };
  },
  methods: {
    handleClicked(item) {
      console.log({ item });
    },
  },
};
</script>
