<template>
  <div class="content">
    <div class="left">
      <span class="block">Where Technologists</span>
      <span class="block">
        come to <span class="text-yellow">Level Up</span>.
      </span>
      <p>
        The MLH Fellowship is a remote internship alternative for aspiring
        technologists. Spend 12 weeks building your skills by collaborating on
        real-world projects.
      </p>
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
div.content {
  padding: 5em 15em;
  height: 20em;
  padding-top: 2em;
  background: rgba(29, 83, 159, 1);
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .left {
    text-align: start;

    max-width: 50%;

    p {
      font-size: 1.2rem;
      margin-top: 1.2em;
      margin-bottom: 1.2em;
    }

    .button {
      background: rgba(248, 185, 42, 1);
      border: none;
      border-radius: 2rem;
      padding: 15px 25px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 1rem;
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
  }

  .right {
    img {
      max-width: 20em;
      height: 20em;
      object-fit: cover;
      border-radius: 2em;
      background-position: center center;
      background-repeat: no-repeat;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
  }
}
</style>
