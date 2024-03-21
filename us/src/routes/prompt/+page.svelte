<script>
  import { onMount } from 'svelte';

  let countries = [];
  let selectedCountry = '';
  let inputPrompt = ''; // To store the user's input prompt
  let botResponse = '';

  // Fetch the list of countries when the component mounts
  onMount(async () => {
    const response = await fetch('https://restcountries.com/v3.1/all');
    const data = await response.json();
    countries = data.map(country => country.name.common);
    countries.sort(); // Sort the countries alphabetically
  });

  // Function to handle dropdown change
  function handleSelect(event) {
    selectedCountry = event.target.value;
    generateBotResponse(selectedCountry, inputPrompt); // Pass both country and input prompt to generate bot response
  }

  // Function to handle input prompt change
  function handleInput(event) {
    inputPrompt = event.target.value;
    generateBotResponse(selectedCountry, inputPrompt); // Pass both country and input prompt to generate bot response
  }

  // Function to generate bot response
  async function generateBotResponse(country, prompt) {
    // Call OpenAI API to generate bot response based on country and input prompt
    // Implementation remains the same as before
  }
</script>

<div class="flex justify-center items-center h-screen">
  <div class="max-w-md mx-auto">
    <h1 class="text-3xl font-bold mb-4">Select a Country</h1>
    <select class="block w-full px-4 py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" bind:value={selectedCountry} on:change={handleSelect}>
      <option value="">Select a country</option>
      {#each countries as country}
        <option value={country}>{country}</option>
      {/each}
    </select>
    <h1 class="text-3xl font-bold mt-4 mb-2">Input Prompt</h1>
    <input type="text" class="block w-full px-4 py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" bind:value={inputPrompt} on:input={handleInput} placeholder="Enter your input prompt...">
    {#if botResponse}
      <div class="mt-4 border border-gray-200 p-4 rounded-md">
        <p>{botResponse}</p>
      </div>
    {/if}
  </div>
</div>
