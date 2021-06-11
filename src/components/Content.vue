<template>
  <div class="section">
    <div class="feature">
      <div class="left">
        <img
          src="https://images.unsplash.com/photo-1569389397653-c04fe624e663?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80"
        />
      </div>
      <div class="right">
        <h2>Discuss Issues</h2>
        <p>
          Learn with others! In a moving world developers constantly need to
          level up their skills and keep on top of their tasks. Orihack Board
          helps focus your gaze onto the largest problems at hand and let's you
          reach out to other developers for their extensive knowledge too!
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.feature {
  display: flex;
  align-items: center;
  justify-content: space-around;
  text-align: start;
  padding: 2em;

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
    margin: 2rem;
    width: 50%;
  }
}

@media screen and (max-width: 600px) {
  .feature {
    flex-direction: column;
    align-content: space-around;
    .right {
      width: 100%;
    }
  }
}
</style>
