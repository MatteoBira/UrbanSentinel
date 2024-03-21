<script>
    import { onMount } from 'svelte';
    import Talk from 'talkjs';

    let chatboxEl;

    const currentUser = new Talk.User({
        id: '1', // Unique identifier for the current user
        name: 'John', // Name of the current user
    });

    onMount(() => {
        Talk.ready.then(() => {
            const session = new Talk.Session({
                appID: 'YOUR_APP_ID', // Replace with your actual App ID from TalkJS
                me: currentUser,
            });

            const chatbox = session.createChatbox(chatboxEl);
            chatbox.mount(document.getElementById('talkjs-container'));
        });
    });
</script>

<div id="talkjs-container" bind:this={chatboxEl}></div>
