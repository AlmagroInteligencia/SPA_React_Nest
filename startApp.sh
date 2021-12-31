#!/bin/bash

echo "Welcome to this SPA ToDo List"
cd backend-app
pip install -r requirements.txt
python manage.py makemigrations || python3 manage.py makemigrations
python manage.py migrate || python3 manage.py migrate
(python manage.py runserver || python3 manage.py runserver) &
cd ..
cd frontend-app
npm start 