<template>
  <div class="related-books mt-5">
    <h5>Top Related Books</h5>
    <b-row cols="1" cols-sm="2" cols-md="3" cols-lg="4">
      <b-col v-for="card in [1, 2, 3, 4]" :key="card">
        <b-card
          no-body
          style="margin: 1rem 0; cursor: pointer"
          img-src="https://cdn.elearningindustry.com/wp-content/uploads/2016/05/top-10-books-every-college-student-read-e1464023124869.jpeg"
          img-alt="Image"
          img-top
        >
          <b-card-body>
            <b-card-title>book title</b-card-title>
          </b-card-body>
          <b-list-group flush>
            <b-list-group-item
              class="d-flex align-items-center justify-content-between"
            >
              <div>
                <b-avatar
                  variant="info"
                  src="https://placekitten.com/300/300"
                  class="mr-3"
                ></b-avatar>

                <span class="" :style="{ marginLeft: '0.5rem' }"> asif </span>
              </div>
              <span class="mr-auto">
                <b-icon icon="eye-fill"></b-icon> 09
              </span>
            </b-list-group-item>
          </b-list-group>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "RelatedBooks",
};
</script>
