FROM httpd:2.4

# Copy all website files to Apache's document root
COPY . /usr/local/apache2/htdocs/

# Expose port 80
EXPOSE 80

# Start Apache in foreground mode
CMD ["httpd-foreground"] 