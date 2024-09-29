<!-- <script lang="ts">
	import type { PageData } from "./$types";

 
    export let data:PageData
    
    
    const jsonData = data.jsonData
    
    // const {jsonData:jdata} = data

    

</script> -->

<script>
    const jsonData = {
  "schedule": [
    {
      "week": 1,
      "topic": "HTML & CSS Fundamentals",
      "description": "Learn the basics of HTML for structuring web pages and CSS for styling them. Understand the box model, flexbox, and grid layout.",
      "time_estimate": "5 hours",
      "resources": [
        {
          "title": "HTML Dog",
          "url": "https://htmldog.com/",
          "type": "Website",
          "description": "Comprehensive HTML tutorial with clear explanations and practical examples."
        },
        {
          "title": "CSS Tricks",
          "url": "https://css-tricks.com/",
          "type": "Website",
          "description": "A vast resource for CSS learning, with articles, tutorials, and code snippets."
        },
        {
          "title": "FreeCodeCamp - Responsive Web Design",
          "url": "https://www.freecodecamp.org/learn/responsive-web-design/",
          "type": "Interactive Course",
          "description": "Interactive course covering HTML, CSS, and responsive design fundamentals."
        }
      ],
      "projects": [
        {
          "title": "Basic Landing Page",
          "description": "Create a simple landing page with a header, main content, and a footer. Experiment with different CSS styles to create a visually appealing design."
        }
      ]
    },
    {
      "week": 2,
      "topic": "JavaScript for Web Development",
      "description": "Explore JavaScript's role in web development, including DOM manipulation, event handling, and asynchronous operations. Learn about popular JavaScript libraries like jQuery.",
      "time_estimate": "5 hours",
      "resources": [
        {
          "title": "Eloquent JavaScript",
          "url": "https://eloquentjavascript.net/",
          "type": "Book",
          "description": "A comprehensive book covering JavaScript fundamentals and advanced concepts."
        },
        {
          "title": "Mozilla Developer Network (MDN)",
          "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
          "type": "Website",
          "description": "The official JavaScript documentation with detailed explanations and examples."
        },
        {
          "title": "FreeCodeCamp - JavaScript Algorithms and Data Structures",
          "url": "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/",
          "type": "Interactive Course",
          "description": "Interactive course covering JavaScript algorithms, data structures, and functional programming."
        }
      ],
      "projects": [
        {
          "title": "Interactive Form",
          "description": "Build a form that collects user input, validates it, and provides feedback using JavaScript. Experiment with DOM manipulation and event handling."
        }
      ]
    },
    {
      "week": 3,
      "topic": "Front-End Frameworks and Libraries",
      "description": "Learn about popular front-end frameworks like React, Angular, and Vue.js, and explore their advantages and use cases.",
      "time_estimate": "5 hours",
      "resources": [
        {
          "title": "React Documentation",
          "url": "https://reactjs.org/docs/getting-started.html",
          "type": "Website",
          "description": "Official React documentation with tutorials and guides."
        },
        {
          "title": "Angular Documentation",
          "url": "https://angular.io/docs",
          "type": "Website",
          "description": "Official Angular documentation with tutorials and guides."
        },
        {
          "title": "Vue.js Documentation",
          "url": "https://vuejs.org/guide/",
          "type": "Website",
          "description": "Official Vue.js documentation with tutorials and guides."
        },
        {
          "title": "The Complete 2023 Web Development Bootcamp",
          "url": "https://www.udemy.com/course/the-complete-web-development-bootcamp/",
          "type": "Paid Course",
          "description": "Comprehensive web development course on Udemy covering HTML, CSS, JavaScript, React, Node.js, and more."
        }
      ],
      "projects": [
        {
          "title": "Simple To-Do List App",
          "description": "Build a basic to-do list application using your chosen front-end framework. Practice component-based development and data management."
        }
      ]
    },
    {
      "week": 4,
      "topic": "Back-End Fundamentals",
      "description": "Understand the role of back-end development, including server-side programming languages (like Python), databases, and APIs.",
      "time_estimate": "5 hours",
      "resources": [
        {
          "title": "Flask Documentation",
          "url": "https://flask.palletsprojects.com/en/2.2.x/",
          "type": "Website",
          "description": "Official Flask documentation with tutorials and examples."
        },
        {
          "title": "Django Documentation",
          "url": "https://docs.djangoproject.com/en/4.2/",
          "type": "Website",
          "description": "Official Django documentation with tutorials and examples."
        },
        {
          "title": "MongoDB Documentation",
          "url": "https://www.mongodb.com/docs",
          "type": "Website",
          "description": "Official MongoDB documentation with tutorials and guides."
        },
        {
          "title": "Building a REST API with Flask",
          "url": "https://realpython.com/flask-rest-api/",
          "type": "Article",
          "description": "Comprehensive tutorial on building a REST API with Flask."
        }
      ],
      "projects": [
        {
          "title": "Simple Blog API",
          "description": "Create a basic REST API using your chosen back-end framework that allows users to create, read, update, and delete blog posts."
        }
      ]
    },
    {
      "week": 5,
      "topic": "Front-End and Back-End Integration",
      "description": "Learn how to connect your front-end application with your back-end API using techniques like AJAX and Fetch API. Implement data fetching and rendering.",
      "time_estimate": "5 hours",
      "resources": [
        {
          "title": "MDN - Fetch API",
          "url": "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API",
          "type": "Website",
          "description": "Official documentation for the Fetch API."
        },
        {
          "title": "AJAX Tutorial",
          "url": "https://www.w3schools.com/ajax/",
          "type": "Website",
          "description": "Comprehensive AJAX tutorial with examples and explanations."
        }
      ],
      "projects": [
        {
          "title": "To-Do List with API Integration",
          "description": "Integrate your front-end to-do list application with the back-end API you created in the previous week. Allow users to add, delete, and edit tasks through the API."
        }
      ]
    },
    {
      "week": 6,
      "topic": "Version Control with Git",
      "description": "Learn Git and GitHub for version control and collaboration. Understand branching, merging, and resolving conflicts.",
      "time_estimate": "5 hours",
      "resources": [
        {
          "title": "GitHub Learning Lab",
          "url": "https://lab.github.com/",
          "type": "Interactive Course",
          "description": "Interactive Git and GitHub tutorials for beginners."
        },
        {
          "title": "Pro Git Book",
          "url": "https://git-scm.com/book/en/v2",
          "type": "Book",
          "description": "A comprehensive guide to Git with detailed explanations and examples."
        }
      ],
      "projects": [
        {
          "title": "Personal Portfolio Website",
          "description": "Create a portfolio website showcasing your skills and projects. Use Git to track changes and collaborate if you're working with others."
        }
      ]
    },
    {
      "week": 7,
      "topic": "Deployment and Hosting",
      "description": "Learn about deploying your web application to a web server. Explore different hosting options like Netlify, Heroku, and AWS.",
      "time_estimate": "5 hours",
      "resources": [
        {
          "title": "Netlify Documentation",
          "url": "https://docs.netlify.com/",
          "type": "Website",
          "description": "Official Netlify documentation with tutorials and guides."
        },
        {
          "title": "Heroku Documentation",
          "url": "https://devcenter.heroku.com/",
          "type": "Website",
          "description": "Official Heroku documentation with tutorials and guides."
        },
        {
          "title": "AWS Documentation",
          "url": "https://aws.amazon.com/documentation/",
          "type": "Website",
          "description": "Official AWS documentation with tutorials and guides."
        }
      ],
      "projects": [
        {
          "title": "Deploy Your Project",
          "description": "Deploy your portfolio website or any other project you've built to a chosen hosting platform. Learn about deployment workflows and configurations."
        }
      ]
    },
    {
      "week": 8,
      "topic": "Advanced JavaScript Concepts",
      "description": "Deepen your JavaScript knowledge with advanced concepts like closures, prototypes, asynchronous programming, and modules.",
      "time_estimate": "5 hours",
      "resources": [
        {
          "title": "You Don't Know JS",
          "url": "https://github.com/getify/You-Dont-Know-JS",
          "type": "Book Series",
          "description": "A series of books exploring advanced JavaScript concepts in depth."
        },
        {
          "title": "JavaScript.info",
          "url": "https://javascript.info/",
          "type": "Website",
          "description": "Comprehensive JavaScript tutorials covering fundamentals and advanced topics."
        }
      ],
      "projects": [
        {
          "title": "Interactive Game",
          "description": "Build a simple interactive game using JavaScript. Experiment with canvas drawing, animation, and user interaction."
        }
      ]
    }
  ]
}
</script>


<header>
    <h1 class="text-4xl font-bold text-left mt-8 mx-20 max-w-3xl">
        Your personalized path to learning:
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