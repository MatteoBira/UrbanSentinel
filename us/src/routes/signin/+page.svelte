<!-- App.svelte -->
<script>
  let email = '';
  let password = '';

  const handleSubmit = () => {
    // You can add your authentication logic here
    console.log('Email:', email);
    console.log('Password:', password);
    
    // For demo purposes, just clearing the input fields
    email = '';
    password = '';
  };
</script>

<main>
  <h1>Sign In</h1>
  <form on:submit|preventDefault={handleSubmit}>
    <label for="email">Email:</label>
    <input type="email" id="email" bind:value={email} required />
    <label for="password">Password:</label>
    <input type="password" id="password" bind:value={password} required />
    <button type="submit">Sign In</button>
  </form>
</main>

<style>
  main {
    width: 300px;
    margin: auto;
    text-align: center;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  label {
    margin-bottom: 0.5rem;
  }

  input {
    padding: 0.5rem;
    margin-bottom: 1rem;
    width: 100%;
    box-sizing: border-box;
  }

  button {
    padding: 0.5rem 1rem;
    background-color: #007bff;
    color: white;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  button:hover {
    background-color: #0056b3;
  }
</style>
