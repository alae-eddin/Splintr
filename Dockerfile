FROM node:14-alpine

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 8080
# required for docker desktop port mapping

CMD ["npm", "run", "dev","--","--host"]
#CMD ["npm", "run", "dev"]
#CMD ["npm", "run", "serve","--","--host"]



# docker build -t splintr-demo .
# docker run -it -p 4000:8080 -v $(pwd)/src:/app/src splintr-demo

# -v $(pwd)/src:/app/src

#npm run dev -- --host

#/opt/homebrew/Cellar/python@3.9/3.9.13_4/bin/python3.9


# /opt/homebrew/Cellar/python@3.9/3.9.13_4/bin/python3.9 get-pip.py

# /opt/homebrew/Cellar/python@3.9/3.9.13_4/bin/python3.9  -m pipenv

# /opt/homebrew/Cellar/python@3.9/3.9.13_4/bin/python3.9  -m pip install pipenv

# /opt/homebrew/Cellar/python@3.9/3.9.13_4/bin/python3.9  -m pipenv --three

# /opt/homebrew/Cellar/python@3.9/3.9.13_4/bin/python3.9  

# /opt/homebrew/Cellar/python@3.9/3.9.13_4/bin/python3.9  -m pipenv run yarn start
# python3.9  -m pipenv run python3.9 manage.py runserver
# docker-compose run backend python manage.py migrate
# docker exec -ti hesaab-development2_db_1 bash
# docker run -p 5000:80 -it ubuntu:18.04 /bin/bash
