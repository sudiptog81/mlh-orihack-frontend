<template>
   <section>
       <div class="posts" v-for="(post, indexP) of posts" :key="indexP">
           <Post :postdata="" />
           <div class="box" v-for="(comment, indexC) of post.comments" :key="indexC">
               <Comment :commentdata="" />
           </div>
           <button v-if="commentClosed" @click="createNewComment()">Comment</button>
           <div v-else>
               <div class="box"></div>
               <button>Post</button>
           </div>
       </div>
   </section>
</template>

<script>
import Post from "@/components/Post.vue"
import Comment from "@/components/Comment.vue"

export default {
    name: "Feed",
    components: { Post, Comment },
    data() {
        return {
            commentClosed: false
        }
    },
    methods: {
        createNewComment() {
            if (!this.commentClosed) {
                
            }
        }
    }
}
</script>

<style lang="scss" scoped>
  button {
    background: #FFCF00;
    border-radius: 15px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
  
  .box {
    background: #FFF5F5;
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
  }

  .posts {
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: space-around;
    align-items: center;
    margin: 1rem;
  }
</style>