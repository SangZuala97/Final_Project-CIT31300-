Lexus Luxury Collection (React Project)

Project Overview

The Lexus Luxury Collection is a multi-page React application showcasing Lexus vehicles through reusable components, dynamic data rendering, and responsive design. The project uses React Router for navigation, Tailwind CSS for styling, and hooks such as useState, useEffect, and useCallback for interactivity.

To start this project, we will create reacte app in our desire folder, right click, click command prompt.
In the command prompt, we will type: "npx create-react-app final_project".
When the process is complete, we will go back to our folder : " cd final_project" and then type "code ." to start our project.

Once the project is loaded in VS Code, we need to install the required packages to enable routing and styling within the application.

For the page routing, we will type in the terminal : npm install react-router-dom, which supports routes in react.
In order to create interactive UI, we have to install tailwind.css in our project.

In the terminal, we will type:
"npm install -D tailwindcss postcss autoprefixer" for installation, and "npx tailwindcss init -p". After successful installation, it will create tailwind.config.js and postcss.config.css.
One of the most important thing with tailwind.css is that we have to include these three line in index.css
@tailwind base;
@tailwind components;
@tailwind utilities;
to make our tailwind code works.

To launch the app locally: we will type
"npm start" to run our code in the designated localhost port.
