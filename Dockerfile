FROM cypress/browsers:node12.18.3-chrome87-ff82
RUN mkdir /app
WORKDIR /app
COPY . /app

RUN npm install
# RUN cypress install
# RUN export CYPRESS_VERSION=$(npm bin)/npm show cypress version
# RUN export CYPRESS_VERSION=$(node -p "require('cypress/package.json').version")
# RUN  echo $CYPRESS_VERSION
# RUN exec export CYPRESS_CONFIG_FILE_PATH="$(npm bin)/npx cypress cache path)/$(node -p "require('cypress/package.json').version")/Cypress/resources/app/packages/server/config/app.yml"
# RUN echo "Shanth"
RUN sed -i 's/https:\/\/api.cypress.io/http:\/\/192.168.1.11:1234/g' /root/.cache/Cypress/6.5.0/Cypress/resources/app/packages/server/config/app.yml
# RUN sed -i "s/api.cypress.io/host.docker.internal:1234/g" `(npm bin)/npx cypress cache path`/`(npm bin)/npm show cypress version`/Cypress/resources/app/packages/server/config/app.yml
RUN $(npm bin)/cypress verify


RUN ["npm", "run", "cy:chrome"]

CMD ["echo","Shanth from docker"]

