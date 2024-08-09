JEKYLL_ENV=production bundle exec jekyll b

docker build -t datasciencemagic .

docker service update --force blog_blog