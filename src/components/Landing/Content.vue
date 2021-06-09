<template>
  <div class="container">
    <div class="feature">
      <div class="left">
        <img
          src="https://images.unsplash.com/photo-1569389397653-c04fe624e663?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80"
        />
      </div>
      <div class="right">
        <h2>Discuss Issues</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit
          nulla vitae dapibus congue. Nunc ac nibh et diam aliquam pulvinar.
          Mauris dictum dui at diam fermentum, eu ornare ex efficitur. Sed vel
          rhoncus urna. Cras ut volutpat justo. Integer eget lectus in turpis
          tincidunt mattis. Quisque congue tempus urna et finibus. Integer
          posuere magna
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
div.container {
  height: 30em;
  padding: 5em;

  div.feature {
    display: flex;
    align-items: center;
    justify-content: space-between;

    text-align: start;

    .left {
      img {
        max-width: 20em;
        object-fit: cover;
        border-radius: 2em;
        background-position: center center;
        background-repeat: no-repeat;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      }
    }

    .right {
      max-width: 60%;
    }
  }
}
</style>
