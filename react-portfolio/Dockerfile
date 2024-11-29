# Use a lightweight Node.js base image
FROM node:16-alpine

# Environment variables for MongoDB (if used)
ENV MONGO_DB_USERNAME=admin \
    MONGO_DB_PWD=password

# Set the working directory inside the container
WORKDIR /home/portfolio-website

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent
# Copy the application code
COPY . ./

# # Expose the app's running port
# EXPOSE 3000

# Start the application
CMD ["npm", "start"]
