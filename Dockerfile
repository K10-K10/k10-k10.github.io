FROM httpd:2.4

# Copy custom Apache configuration
COPY httpd.conf /usr/local/apache2/conf/httpd.conf

# Copy all website files to Apache's document root
COPY . /usr/local/apache2/htdocs/

# Expose port 80
EXPOSE 80

# Start Apache in foreground mode
CMD ["httpd-foreground"]