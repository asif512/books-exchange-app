<template>
  <div class="home-page">
    <app-header />
    <app-intro />
    <h3 class="mt-5">Available Books</h3>
    <div class="d-flex justify-content-end">
      <b-form-input
        v-model="filterText"
        placeholder="Enter your text"
        style="width: 20rem; margin-right: 8px"
      ></b-form-input>
      <b-button variant="primary" class="px-4">Filter</b-button>
    </div>
    <app-book-card :showBooks="showBooks" />
    <app-button @show-more="handleShowMore" v-if="true"> Show more </app-button>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Intro from "@/components/Intro.vue";
import BookCard from "@/components/BookCard.vue";
import Button from "@/components/Button.vue";
import data from "@/data/data.json";
import { collection, getDocs } from "firebase/firestore";
import { projectFirestore } from "@/firebase/config.js";

export default {
  name: "Home",
  data() {
    return {
      filterText: "",
      books: data,
      amountShow: 20,
    };
  },
  async mounted() {
    //get books
    try {
      const snapshoot = await getDocs(collection(projectFirestore, "books"));
      const books = snapshoot.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
      console.log(books);
    } catch (error) {
      console.log({ error });
    }
  },
  components: {
    "app-header": Header,
    "app-intro": Intro,
    "app-book-card": BookCard,
    "app-button": Button,
  },
  computed: {
    showBooks() {
      return this.books.slice(0, this.amountShow);
    },
  },
  methods: {
    handleShowMore(amount = 10) {
      this.amountShow += amount;
      console.log("clicked!!", { data });
    },
  },
};
</script>
