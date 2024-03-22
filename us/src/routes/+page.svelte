<script>
	import Counter from './Counter.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
	import logo from "$lib/images/welcome-3.png"
</script>

<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Greenair</title>
<style>
  body { 
    background-color: #000000;
    margin: 0;
    padding: 0;
    font-family: Georgia;
  }

  header {
    position: relative;
    background-color: rgba(0, 0, 0, 0);
    height: 75vh;
    min-height: 25rem;
    width: 100%;
    overflow: hidden;
  }
  
  header video {
    position: absolute;
    top: 0;
    left: 0;
    min-width: 100%;
    min-height: 100%;
    width: 100%;
    height: 100%;
    z-index: -1; /* Set z-index to -1 to place the video behind other content */
    object-fit: cover;
  }
  
  header .overlay {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%);
    z-index: 1;
  }
  
  /* Additional Styles */
  .container {
    position: relative; /* Ensure the container is positioned relative to place text on top */
    width: 80%;
    margin: 0 auto;
  }

  h1 {
    font-size: 6rem;
    color: white;
    text-align: left;
    position: relative; /* Position title relative to place it on top of the video */
    z-index: 2; /* Set z-index to 2 to place title above video */
  }

  p {
    font-size: 1.8rem;
    color: white;
    position: relative; /* Position description relative to place it on top of the video */
    z-index: 2; /* Set z-index to 2 to place description above video */
  }

  p1 {
    font-size: 1.2rem;
    color: white;
    padding: 20px;
  }
  
  .button1{
    text-decoration: none;
    font-family: Georgia;
    background-color: rgba(0, 0, 1, 0);
    border: 2px solid white;
    color: white;
    padding: 12px 28px;
    text-align: center;
    display: inline-block;
    font-size: 18px;
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
    position: relative; /* Position buttons relative to place them on top of the video */
    z-index: 2; /* Set z-index to 2 to place buttons above video */
  }


  .button2{
    text-decoration: none;
    font-family: Georgia;
    background-color: rgba(0, 0, 1, 0);
    border: 2px solid rgba(255, 255, 255, 0);
    color: white;
    padding: 12px 28px;
    text-align: center;
    display: inline-block;
    font-size: 18px;
    border-radius: 10px;
    cursor: pointer;
    text-decoration: underline;
    transition: background-color 0.3s, color 0.3s;
    position: relative; /* Position buttons relative to place them on top of the video */
    z-index: 2; /* Set z-index to 2 to place buttons above video */
  }



  .button1:hover {
    background-color: white;
    color:#000000;  
  }

  .button2:hover {
    text-decoration: grey;  
  }
  #description {
    margin-left: 150px;
    margin-right: 150px;
  }
</style>
</head>
<body>

<header>
  <div class="overlay"></div>
  <video playsinline autoplay muted loop>
    <source src="vip.mp4" type="video/mp4">
  </video>
  <div class="container">
    <div class="d-flex h-100 text-center align-items-center">
      <div class="w-100 text-white">
        <h1 class="display-3">Greenair</h1>
        <p>Discover eco-friendly voyages effortlessly with our AI-powered website, guiding you on sustainable paths while considering air pollution levels. Start your journey towards mindful exploration today</p>
        <a href="routes.html" >
          <button class="button button1">Try Now!</button>
        </a>
        <a href="form.html"> 
          <button class="button button2">Contact Us</button>
        </a>
      </div>
    </div>
  </div>
</header>

<section>
  <h1 style="margin-left:150px;">About</h1>
    <div id="description">
        <p>
        Embark on eco-conscious journeys seamlessly through our innovative website harnessing the power of artificial intelligence. Our platform not only guides you through personalized paths for your voyages but also prioritizes environmental sustainability by factoring in air pollution levels. By integrating cutting-edge AI algorithms, we ensure that your travel experiences not only fulfill your desires but also contribute to a greener planet.

        Our AI-driven recommendations take into account various factors, including your preferences, destination, mode of transportation, and real-time air quality data. By considering air pollution levels along your route, we help you make informed decisions that minimize your carbon footprint and promote eco-friendly travel practices.
        
        Through our platform, users gain access to comprehensive insights and actionable recommendations tailored to their specific travel needs. Whether you're planning a leisurely vacation or a business trip, our AI algorithms analyze vast amounts of data to curate personalized itineraries that prioritize sustainability without compromising on your travel goals.
        
        Join us in revolutionizing the way we explore the world, one eco-conscious journey at a time. Start your sustainable travel adventure today with our AI-powered platform, and together, let's pave the way towards a cleaner and greener future
        </p>
    </div>

    </section>
<section class="my-5">
  <div class="container">
    <div class="row"> 
      <div class="col-md-8 mx-auto">
      </div>
    </div>
  </div>
</section>

</body>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>
		<span class="welcome">
			<picture>
			<!--
				<img src={logo} alt="welcome-3"/>
				<source srcset={welcome} type="image/webp" />
				<img src={welcome_fallback} alt="Welcome" />
			-->
			</picture>
		</span>

		to your new<br />SvelteKit app
	</h1>

	<h2>
		try editing <strong>src/routes/+page.svelte</strong>
	</h2>

	<Counter />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
