#!/bin/bash

# Build Jekyll site
echo "Building Jekyll site..."
JEKYLL_ENV=production bundle exec jekyll b

# Sync only about.md, summaries.md, and date-formatted markdown files to RAG machine
echo "Syncing selected markdown files to RAG machine..."
rsync -avz --delete \
  --include="about.md" \
  --include="summaries.md" \
  --include="resume.md" \
  --include="????-??-??-*.md" \
  --exclude="*" \
  _posts/ sam@10.73.1.123:/home/sam/blog_data/posts/

# Stop any running Ollama models before rebuilding the database
echo "Stopping any running Ollama models..."
ssh sam@10.73.1.123 "ollama ps | awk 'NR>1 {print \$1}' | xargs -I {} sh -c 'echo \"Stopping {}\"; ollama stop {}'"

# Trigger database rebuild using conda run
echo "Rebuilding RAG database..."
ssh sam@10.73.1.123 "cd /home/sam/blog_data && /home/sam/miniconda3/bin/conda run -n rag python populate_database.py"

# Build and deploy Docker container
echo "Building Docker container..."
docker build -t datasciencemagic .

echo "Deploying with Docker Compose..."
docker compose up -d

echo "Blog update complete with RAG system sync!"