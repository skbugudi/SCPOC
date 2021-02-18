FROM cypress/browsers:node12.18.3-chrome87-ff82
RUN mkdir /SCPOC
WORKDIR /SCPOC
COPY . /SCPOC
RUN cd /SCPOC

RUN npm install

RUN sed -i 's/https:\/\/api.cypress.io/http:\/\/192.168.1.11:1234/g' /root/.cache/Cypress/6.5.0/Cypress/resources/app/packages/server/config/app.yml
RUN $(npm bin)/cypress verify

CMD ["npm", "run", "cy:chrome"]



