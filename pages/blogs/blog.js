document.addEventListener("DOMContentLoaded", function () {
    const blogList = document.getElementById("blog-list");
    const blogForm = document.getElementById("blog-form");

  function adjustTextareaHeight() {
    var textarea = document.getElementById("content");
    textarea.style.height = "auto";
    textarea.style.height = textarea.scrollHeight + "px";
  }

  // Adjust textarea height initially and on input change
  window.addEventListener("load", adjustTextareaHeight);
  document
    .getElementById("content")
    .addEventListener("input", adjustTextareaHeight);

  // Simulated data for demonstration purposes
  let blogData = [
    {
      title: "Exploring Paradise Island",
      content:
        "Paradise Island is known for powder soft beaches and crystal clear, turquoise water, great for diving and snorkeling. Visitors can try their luck at the Atlantis Casino and dine “around the world” at celebrity chef restaurants. Spend the day at Aquaventure Water Park or swim with dolphins at Dolphin Cay.",
      imageUrl:
        "https://media.istockphoto.com/id/690506986/es/foto/fondo-de-playa-para%C3%ADso.webp?b=1&s=170667a&w=0&k=20&c=VdyIjJWA3aZqX7E48hNL6qYndIkGg77fEuv9-Jgdwtg=",
    },
    {
      title: "City Lights: A Night in Metropolis",
      content: "Lorem ipsum dolor sit amet...",
      imageUrl:
        "https://img.freepik.com/premium-photo/mesmerizing-cityscape-night-with-countless-lights-illuminating-urban-landscape_523886-2456.jpg?size=338&ext=jpg&ga=GA1.1.44546679.1699488000&semt=ais",
    },
    {
      title: "Exploring the Streets of Tokyo",
      content:
        "Tokyo, the bustling metropolis where tradition and modernity coexist seamlessly. From the serene shrines of Asakusa to the neon-lit streets of Shibuya, every corner tells a story. Lost in the sensory overload of Tsukiji Fish Market or finding tranquility in Ueno Park, Tokyo offers a kaleidoscope of experiences. As the sun sets, the city's skyline transforms into a canvas of lights, a testament to its vibrant energy. A day in Tokyo is like a journey through time and technology, leaving an indelible mark on the traveler's soul.",
      imageUrl:
        "https://wallup.net/wp-content/uploads/2019/10/539715-japan-japon-architecture-bridges-freeway-building-cities-monuments-night-panorama-panoramic-rivers-tower-towers-tokyo-ray-light-streets-2-748x499.jpg",
    },
    {
      title: "Sailing the Greek Islands",
      content:
        "Embarking on a sailing adventure through the Greek Islands, each stop is a postcard-perfect moment. Santorini welcomes with its iconic blue-domed churches against the Aegean Sea. Mykonos charms with its vibrant nightlife and whitewashed architecture. Navigating the crystal-clear waters, hidden coves and secluded beaches become your personal havens. The rhythmic lull of the waves under the Mediterranean sun creates an unforgettable symphony, making the Greek Islands a sailor's paradise.",
      imageUrl:
        "https://tse4.mm.bing.net/th?id=OIP.BKnuEK1L1OmovpdyoN5jYgHaE3&pid=Api&P=0&h=180",
    },
    {
      title: "A Weekend Retreat in the Swiss Alps",
      content:
        "Nestled among the majestic peaks of the Swiss Alps, the village of Zermatt is a haven for nature enthusiasts. Waking up to the breathtaking view of the Matterhorn, the day unfolds with a cable car ascent to Gornergrat. The crisp mountain air and panoramic views of snow-capped peaks are nothing short of magical. In the evening, cozying up in a chalet with fondue and Swiss chocolate becomes an intimate affair. Zermatt, a tranquil escape where time seems to stand still amid nature's grandeur.",
      imageUrl:
        "https://tse1.mm.bing.net/th?id=OIP.0ui85_hat4wFgIwU73QnpQHaE8&pid=Api&P=0&h=180",
    },
    {
      title: "Lost in the Colors of Marrakech",
      content:
        "Marrakech, a city that dances to its own rhythm, filled with vibrant souks and the intoxicating scent of spices. The Jardin Majorelle, with its cobalt blue accents, is an oasis of serenity amidst the chaos of the medina. Exploring the historic Bahia Palace unveils intricate tilework and lush courtyards. As the sun sets, the Djemaa el Fna square comes alive with storytellers and street performers. Marrakech, a sensory journey where every alley holds a surprise waiting to be discovered.",
      imageUrl:
        "https://tse1.mm.bing.net/th?id=OIP.ZQg2GmNiwwNbv1b2iRZ8OAHaE8&pid=Api&rs=1&c=1&qlt=95&w=152&h=101",
    },
    // Add more blog entries as needed
  ];

  function renderBlogList() {
    blogList.innerHTML = "";
    blogData.forEach((blog) => {
      const blogPost = document.createElement("div");
      blogPost.classList.add("blog-post","m-3");
      blogPost.innerHTML = `
                <h2>${blog.title}</h2>
                <img src="${blog.imageUrl}" alt="${blog.title}">
                <p>${blog.content}</p>
            `;
      blogList.appendChild(blogPost);
    });
  }

  function addBlog(event) {
    event.preventDefault();
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;
    const imageUrl = document.getElementById("image-url").value;

    // Validate the input (you can add more validation as needed)

    // Add the new blog to the data array
    blogData.push({ title, content, imageUrl });

    // Clear the form
    blogForm.reset();

    // Update the displayed blog list
    renderBlogList();
  }

  // Event listener for form submission
  blogForm.addEventListener("submit", addBlog);

  // Initial rendering of blog list
  renderBlogList();
});
