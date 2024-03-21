<script>
    // Fetch forum threads from API
    let threads = [
        { id: 1, title: "Thread 1", author: "User1" },
        { id: 2, title: "Thread 2", author: "User2" },
    ];
    export let thread;
</script>

<header>
    <h1>Welcome to the Forum</h1>
</header>


<section>
    {#each threads as thread}
        <Thread {thread} />
    {/each}
</section>


<article>
    <h2>{thread.title}</h2>
    <p>Author: {thread.author}</p>
</article>


<form>
    <textarea rows="4" cols="50"></textarea>
    <button type="submit">Post Reply</button>
</form>