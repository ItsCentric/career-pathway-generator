<script>
    // This is a placeholder: after API established, send JSON w/o need to store as variable
    const jsonData = {
  "schedule": [
    {
      "week": 1,
      "topic": "HTML & CSS Fundamentals",
      "description": "Learn the core building blocks of web pages: HTML for structure, CSS for styling.",
      "time_estimate": "5 hours",
      "resources": [
        {
          "title": "FreeCodeCamp - Responsive Web Design",
          "url": "https://www.freecodecamp.org/learn/responsive-web-design/",
          "type": "Free",
          "description": "A comprehensive course covering HTML, CSS, and basic responsive design principles."
        },
        {
          "title": "MDN Web Docs - HTML & CSS",
          "url": "https://developer.mozilla.org/en-US/docs/Web/HTML",
          "type": "Free",
          "description": "The official documentation for HTML and CSS, providing in-depth explanations and reference material."
        },
        {
          "title": "Codecademy - Learn HTML & CSS",
          "url": "https://www.codecademy.com/learn/learn-html-css",
          "type": "Free (with subscription)",
          "description": "An interactive and beginner-friendly platform to learn HTML and CSS."
        }
      ],
      "projects": [
        {
          "title": "Simple Portfolio Website",
          "description": "Build a basic website showcasing your skills, projects, and contact information."
        },
        {
          "title": "Responsive Landing Page",
          "description": "Design a landing page for a hypothetical product or service, ensuring it adapts to different screen sizes."
        }
      ]
    },
    {
      "week": 2,
      "topic": "JavaScript Fundamentals & DOM Manipulation",
      "description": "Dive into JavaScript for adding interactivity to web pages. Learn how to interact with and manipulate the Document Object Model (DOM).",
      "time_estimate": "5 hours",
      "resources": [
        {
          "title": "Eloquent JavaScript",
          "url": "https://eloquentjavascript.net/",
          "type": "Free",
          "description": "A classic book that provides a comprehensive introduction to JavaScript."
        },
        {
          "title": "FreeCodeCamp - JavaScript Algorithms and Data Structures",
          "url": "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/",
          "type": "Free",
          "description": "An extensive course covering JavaScript algorithms, data structures, and problem-solving."
        },
        {
          "title": "W3Schools - JavaScript Tutorial",
          "url": "https://www.w3schools.com/js/default.asp",
          "type": "Free",
          "description": "A beginner-friendly tutorial covering JavaScript fundamentals and examples."
        }
      ],
      "projects": [
        {
          "title": "Interactive Quiz",
          "description": "Create a quiz with multiple-choice questions, feedback, and a score tracker."
        },
        {
          "title": "Simple To-Do List",
          "description": "Build a basic to-do list application with functionality to add, delete, and mark items as completed."
        }
      ]
    },
    {
      "week": 3,
      "topic": "Front-End Frameworks & Libraries",
      "description": "Explore popular frameworks and libraries like React, Vue.js, or Angular to simplify front-end development and build more complex applications.",
      "time_estimate": "5 hours",
      "resources": [
        {
          "title": "React Documentation",
          "url": "https://reactjs.org/docs/getting-started.html",
          "type": "Free",
          "description": "Official documentation for React, providing tutorials, API references, and best practices."
        },
        {
          "title": "Vue.js Documentation",
          "url": "https://vuejs.org/",
          "type": "Free",
          "description": "Official documentation for Vue.js, covering installation, components, routing, and more."
        },
        {
          "title": "Angular Documentation",
          "url": "https://angular.io/docs",
          "type": "Free",
          "description": "Official documentation for Angular, providing a comprehensive guide to building applications."
        },
        {
          "title": "The Complete 2023 Web Development Bootcamp",
          "url": "https://www.udemy.com/course/the-complete-web-development-bootcamp/",
          "type": "Paid",
          "description": "A comprehensive Udemy course covering HTML, CSS, JavaScript, React, Node.js, and more."
        }
      ],
      "projects": [
        {
          "title": "Simple Blog Application",
          "description": "Build a basic blog application with features to create, view, and edit posts. Use a front-end framework for component-based development."
        },
        {
          "title": "Interactive Game",
          "description": "Create a simple game using a front-end framework. Consider a game like Tic-Tac-Toe, Memory Match, or a simple arcade game."
        }
      ]
    },
    {
      "week": 4,
      "topic": "Back-End Development & Server-Side Logic",
      "description": "Learn how to build the back-end of web applications using languages like Python and frameworks like Flask or Django.",
      "time_estimate": "5 hours",
      "resources": [
        {
          "title": "Flask Documentation",
          "url": "https://flask.palletsprojects.com/en/2.2.x/",
          "type": "Free",
          "description": "Official documentation for Flask, a lightweight and flexible Python web framework."
        },
        {
          "title": "Django Documentation",
          "url": "https://docs.djangoproject.com/en/4.2/",
          "type": "Free",
          "description": "Official documentation for Django, a comprehensive Python web framework."
        },
        {
          "title": "Real Python - Flask Tutorial",
          "url": "https://realpython.com/flask-by-example/",
          "type": "Free",
          "description": "A well-structured Flask tutorial from Real Python."
        }
      ],
      "projects": [
        {
          "title": "RESTful API with Flask",
          "description": "Create a simple RESTful API using Flask to handle data requests and responses. For example, build an API for managing users, products, or tasks."
        },
        {
          "title": "Blog with Backend & Database",
          "description": "Expand your previous blog project by adding a back-end with database integration using Flask or Django."
        }
      ]
    },
    {
      "week": 5,
      "topic": "Database Integration & Data Persistence",
      "description": "Learn how to interact with databases (e.g., SQL or NoSQL) to store and manage data for your web applications.",
      "time_estimate": "5 hours",
      "resources": [
        {
          "title": "SQL Tutorial - W3Schools",
          "url": "https://www.w3schools.com/sql/",
          "type": "Free",
          "description": "A comprehensive tutorial covering SQL basics and common operations."
        },
        {
          "title": "MongoDB Documentation",
          "url": "https://www.mongodb.com/docs/",
          "type": "Free",
          "description": "Official documentation for MongoDB, a popular NoSQL database."
        },
        {
          "title": "PostgreSQL Tutorial",
          "url": "https://www.postgresqltutorial.com/",
          "type": "Free",
          "description": "A detailed tutorial covering PostgreSQL, a powerful relational database."
        }
      ],
      "projects": [
        {
          "title": "E-commerce Website (Simplified)",
          "description": "Build a basic e-commerce website with product listings, shopping carts, and order processing. Integrate a database to store product information and user data."
        },
        {
          "title": "User Authentication System",
          "description": "Implement a user authentication system with login, registration, and password management. Use a database to store user credentials."
        }
      ]
    },
    {
      "week": 6,
      "topic": "Deployment & Hosting",
      "description": "Learn how to deploy your web applications to the internet using hosting services and tools like Git.",
      "time_estimate": "5 hours",
      "resources": [
        {
          "title": "GitHub Pages",
          "url": "https://pages.github.com/",
          "type": "Free",
          "description": "A simple and free hosting platform for static websites."
        },
        {
          "title": "Netlify",
          "url": "https://www.netlify.com/",
          "type": "Free (with paid plans)",
          "description": "A popular hosting platform with automated deployments and features for static and dynamic websites."
        },
        {
          "title": "Heroku",
          "url": "https://www.heroku.com/",
          "type": "Free (with paid plans)",
          "description": "A cloud platform for deploying web applications, especially for Python and Node.js applications."
        }
      ],
      "projects": [
        {
          "title": "Deploy Your Projects",
          "description": "Deploy one or more of your completed projects to a hosting service, making them accessible on the internet."
        }
      ]
    }
  ]
};
</script>

<header>
    <h1 class="text-4xl font-bold text-left mt-8 mx-20 max-w-3xl">
        Your personalized path to ...
    </h1>
</header>

<div class="mt-8 mb-20">

    <div class="space-y-16 mx-20">
        {#each jsonData.schedule as week}
        <div class="bg-emerald-400 rounded-lg p-4 shadow-md text-white">
            <h2 class="text-lg font-bold">Week {week.week}: {week.topic}</h2>
            <p>{week.description}</p>
            <p><strong>Estimated Time:</strong> {week.time_estimate}</p>

            <h3 class="font-semibold mt-2">Resources:</h3>
            <ul class="list-disc pl-5">
                {#each week.resources as resource}
                <li>
                    <a href={resource.url} class="text-emerald-200 hover:underline" target="_blank">
                        {resource.title} ({resource.type})
                    </a>: {resource.description}
                </li>
                {/each}
            </ul>

            <h3 class="font-semibold mt-2">Projects:</h3>
            <ul class="list-disc pl-5">
                {#each week.projects as project}
                <li>
                    <strong>{project.title}</strong>: {project.description}
                </li>
                {/each}
            </ul>
        </div>
        {/each}
    </div>

</div>