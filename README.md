# To-Do List

This SPA project was developed with React.js in frontend and
Django (Python Framework) in backend. 

## How to use it?

You have a file called "startApp.sh", you can run it (on Linux or MacOs),
and the project will start the set up.

## What do i need?

The backend was coded in python with Django, so you need to have python 3.x installed
in your computer, and also pip. However, this app will automatically download some
dependencies, wich are in requeriments.txt. (If the script startApp.sh does not work
correctly, you will need to run the command "pip install -r requirements.txt"). 
You do not have to do anything about DataBases, because it uses SQL-LITE, qhich is
inside Django itself (If the script startApp.sh does not work correctly, you will 
need to, inside "backend-app" folder, run the commands "python manage.py 
makemigrations", and then "python manage.py migrate").

On the other hand, frontend was coded with React. So you need to have node.js installed
(my version is 16.13.1) and also npm installed (my version is 8.3.0). In addition, you
need to have some dependencies: "bootstrap": "^5.1.3", "react": "^17.0.2", 
"react-dom": "^17.0.2", "react-scripts": "5.0.0", "web-vitals": "^2.1.2". (They are
also listed in the file "package.json").

## Additional info

Django runs on port 8000 and React runs on port 3000. Please make sure you do not
have anything alse running on that ports, otherwise, this app will not work.


Enjoy it !!!