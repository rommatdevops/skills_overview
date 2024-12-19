# **Static Web Project with Docker**

This project is a static web application designed for deployment using Docker and GitHub Actions. The application contains an HTML page, JavaScript, and CSS files, which are served via an Apache HTTP server running inside a Docker container.

## **Features**
- 📄 **HTML**: Core structure of the web page.
- 🎨 **CSS**: Styles for layout and design.
- 🛠️ **JavaScript**: Interactive elements to enhance user experience.
- 🐳 **Dockerized**: Easy deployment with Docker using the official Apache HTTP server image.

## **Technologies Used**
- **HTML5**
- **CSS3**
- **JavaScript**
- **Docker**
- **Apache HTTP Server**

## **How to Run the Project on localhost**

### **Prerequisites**
- Install **Docker**: [Download and Install Docker](https://www.docker.com/get-started)

### **Steps**
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <project-folder>
   ```
2. Build the Docker image:
   ```bash
   docker build -t static-web-project .
    ```
3. Run the Docker container
   ```bash
   docker run -d -p 8080:80 static-web-project
    ```
4. Open the application in your browser:
   ```bash
   http://localhost:8080
    ```
### **Project Structure**
- `Dockerfile`: Docker configuration
- `index.html`: Main HTML file
- `style.css`: Stylesheet
- `js.js`: JavaScript logic
- `style_technologies_plate.css`: Additional styles
- `README.md`: Project documentation
