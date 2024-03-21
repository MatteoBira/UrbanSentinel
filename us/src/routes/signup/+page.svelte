<!-- Signup.svelte -->
<script>
  let email = '';
  let password = '';
  let confirmPassword = '';

  const handleSubmit = () => {
    // You can add your sign-up logic here
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
    
    // For demo purposes, just clearing the input fields
    email = '';
    password = '';
    confirmPassword = '';
  };
</script>

<main>
  <h1>Sign Up</h1>
  <form on:submit|preventDefault={handleSubmit}>
    <label for="email">Email:</label>
    <input type="email" id="email" bind:value={email} required />
    <label for="password">Password:</label>
    <input type="password" id="password" bind:value={password} required />
    <label for="confirmPassword">Confirm Password:</label>
    <input type="password" id="confirmPassword" bind:value={confirmPassword} required />
    <button type="submit">Sign Up</button>
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
