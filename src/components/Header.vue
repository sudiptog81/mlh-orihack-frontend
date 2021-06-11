<template>
  <div class="section">
    <div class="left">
      <span class="block">Discuss with</span>
      <span class="block">
        fellow <span class="text-yellow">developers</span>.
      </span>
      <div class="content">
        <p>
          Start a discussion around an open-sourced project, issue or
          contribution and get help from your peers.
        </p>
      </div>
      <div>
        <router-link class="button" to="/dashboard">
          Get Started <i class="fas fa-arrow-circle-right"></i>
        </router-link>
      </div>
    </div>
    <div class="right">
      <img
        src="https://images.unsplash.com/photo-1601933973783-43cf8a7d4c5f?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.section {
  background: rgba(29, 83, 159, 1);
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: start;

  .left {
    font-family: monospace;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  p {
    font-size: 1.2rem;
  }

  .button {
    background: rgba(248, 185, 42, 1);
    border-radius: 15px;
    display: inline-block;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  .text-yellow {
    color: rgba(248, 185, 42, 1);
  }

  span.block {
    display: block;
    font-size: 3rem;
    line-height: 1;
  }

  .right {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    img {
      max-width: 20em;
      height: 20em;
      object-fit: cover;
      border-radius: 2em;
      background-position: center center;
      background-repeat: no-repeat;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      margin: 1rem;
    }
  }
}

@media screen and (max-width: 600px) {
  .section {
    flex-direction: column;
  }

  .content {
    display: none;
  }
}
</style>
