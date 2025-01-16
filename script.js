// Dynamic data
const userData = {
  name: "John Doe",
  profession: "Web Developer",
  about:
    "I am a passionate web developer with experience in creating dynamic and user-friendly web applications. I love coding, solving problems, and building projects that make an impact.",
  projects: [
    {
      title: "Portfolio Website",
      description: "A personal website showcasing my work and skills.",
      link: "#"
    },
    {
      title: "E-commerce Platform",
      description: "An online store built with a responsive design.",
      link: "#"
    },
    {
      title: "Weather App",
      description: "A weather forecasting app using API integration.",
      link: "#"
    }
  ]
};

// Populate dynamic content
document.getElementById("name").textContent = userData.name;
document.getElementById("profession").textContent = userData.profession;
document.getElementById("about-text").textContent = userData.about;
document.getElementById("footer-name").textContent = userData.name;

// Dynamically load projects
const projectContainer = document.getElementById("project-container");

userData.projects.forEach((project) => {
  const projectDiv = document.createElement("div");
  projectDiv.classList.add("project");
  
  projectDiv.innerHTML = `
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <a href="${project.link}" target="_blank">View Details</a>
  `;

  projectContainer.appendChild(projectDiv);
});

// Handle contact form submission
document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault();
  alert("Thank you for your message! We'll get back to you soon.");
});
