<!-- Forum.svelte -->
<script>
  // Import any necessary modules
  import { onMount } from 'svelte';

  // Define your component's data and functions
  let posts = []; // Array to store forum posts

  // Function to fetch forum posts from the server
  async function fetchPosts() {
    try {
      const response = await fetch('/api/posts'); // Replace this URL with your backend API endpoint
      if (response.ok) {
        posts = await response.json();
      } else {
        console.error('Failed to fetch forum posts');
      }
    } catch (error) {
      console.error('Error fetching forum posts:', error);
    }
  }

  // Call the fetchPosts function when the component mounts
  onMount(fetchPosts);
</script>

<h1>Forum</h1>

{#if posts.length > 0}
  {#each posts as post (post.id)}
    <div class="post">
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <p>Posted by: {post.author}</p>
    </div>
  {/each}
{:else}
  <p>No posts available</p>
{/if}