FROM httpd:2.4

COPY index.html js.js style.css style_technologies_plate.css /usr/local/apache2/htdocs/

EXPOSE 80