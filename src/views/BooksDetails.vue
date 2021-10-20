<template>
  <div class="books-details">
    <app-header />
    <b-row cols="1" cols-sm="1" cols-md="2" cols-lg="2" class="mt-5">
      <b-col>
        <b-img
          src="https://picsum.photos/1024/400/?image=41"
          fluid
          alt="Responsive image"
          class="rounded"
        ></b-img>
      </b-col>
      <b-col>
        <h3>Book Title</h3>
        <p>Book Authure</p>
        <div><span>sep 12, 2021</span> <span>ISBS 000000</span></div>
        <div class="description">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio, sequi
          incidunt libero obcaecati eum ex reprehenderit mollitia aut pariatur
          architecto ea ullam non quam suscipit recusandae et fugit odio
          consequuntur.
        </div>
        <app-user-info />
      </b-col>
    </b-row>
    <app-related-books />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import UserInfo from "@/components/UserInfo.vue";
import RelatedBooks from "@/components/RelatedBooks.vue";

export default {
  name: "BooksDetails",
  components: {
    "app-header": Header,
    "app-user-info": UserInfo,
    "app-related-books": RelatedBooks,
  },
};
</script>
