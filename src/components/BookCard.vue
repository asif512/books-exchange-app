<template>
  <b-row cols="1" cols-sm="2" cols-md="3" cols-lg="4">
    <b-col v-for="(book, index) in showBooks" :key="index">
      <b-card
        no-body
        style="margin: 1rem 0; cursor: pointer"
        :img-src="book.img"
        img-alt="Image"
        img-top
        @click="redirectDetailsPage(book.id)"
      >
        <b-card-body>
          <b-card-title>{{ book.title }}</b-card-title>
          <b-card-sub-title class="mb-2">Card Sub Title</b-card-sub-title>
          <b-card-text>
            {{ book.description }}
          </b-card-text>
        </b-card-body>

        <b-list-group flush>
          <b-list-group-item
            class="d-flex align-items-center justify-content-between"
          >
            <b-avatar
              variant="info"
              src="https://placekitten.com/300/300"
              class="mr-3"
            ></b-avatar>

            <span class="mr-auto"> <b-icon icon="eye-fill"></b-icon> 09 </span>
          </b-list-group-item>
        </b-list-group>
      </b-card>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "BookCard",
  props: {
    showBooks: {
      type: Array,
    },
  },
  methods: {
    redirectDetailsPage(id) {
      this.$router.push(`/book/${id}`);
    },
  },
};
</script>
