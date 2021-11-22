<template>
  <div class="post-books">
    <app-post-book  title="Add Book" subTitle="POST BOOK.."/>
    <b-tabs content-class="mt-3">
      <b-tab title="Total Books" active>
        <app-total-books />
      </b-tab>
      <b-tab title="Exchange Books">
        <app-exchanged-book />
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
import PostBook from "@/components/PostBook.vue";
import TotalBooks from "@/components/TotalBooks.vue";
import ExchangedBooks from "@/components/ExchangedBooks.vue";
export default {
  name: "PostBooks",
  components: {
    "app-post-book": PostBook,
    "app-total-books": TotalBooks,
    "app-exchanged-book": ExchangedBooks,
  },
};
</script>
