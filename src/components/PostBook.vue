<template>
  <div class="d-flex justify-content-end">
    <b-button
      id="show-btn"
      variant="primary"
      class="d-flex align-items-center"
      @click="showModal"
    >
      <b-icon icon="plus" font-scale="1.5"></b-icon> {{ title }}</b-button
    >

    <b-modal ref="my-modal" hide-footer :title="subTitle">
      <div class="d-block text-center">
        <b-form>
          <b-form-input
            class="my-2"
            v-model="book.title"
            placeholder="Book title..."
          ></b-form-input>
          <b-form-input
            class="my-2"
            v-model="book.author"
            placeholder="Book author..."
          ></b-form-input>

          <b-form-select
            v-model="book.status"
            :options="bookStatus"
            class="form-control my-2"
          ></b-form-select>
          <b-form-textarea
            class="my-2"
            id="textarea"
            v-model="book.description"
            placeholder="Book description..."
            rows="3"
            max-rows="6"
          ></b-form-textarea>
          <b-form-file v-model="book.url" class="my-2 form-control" plain></b-form-file>
          <p>{{book.url.name}}</p>
        </b-form>
      </div>
      <div class="d-flex justify-content-end align-items-center mt-5">
        <b-button
          style="margin-right: 8px"
          variant="outline-secondary"
          block
          @click="hideModal"
          >Cancel</b-button
        >
        <b-button variant="outline-primary" block @click="hideModal"
          >Add Post</b-button
        >
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "PostBook",
  data() {
    return {
      book: {
        title: "",
        author: "",
        description: "",
        status: null,
        url: null,
      },
      bookStatus: [
        { value: null, text: "Please select an option" },
        { value: "available", text: "Available" },
        { value: "exchanged", text: "Exchanged" },
      ],
    };
  },
  props: ["title", "subTitle"],
  methods: {
    showModal() {
      this.$refs["my-modal"].show();
    },
    hideModal() {
      const reader  = new FileReader();
      
      // this.$refs["my-modal"].hide();
    },
  },
};
</script>