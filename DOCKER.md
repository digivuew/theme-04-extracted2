# Docker Setup Guide

This project is containerized using Docker for easy deployment and portability.

## 📦 What's Included

- **Dockerfile**: Multi-stage build configuration optimized for Next.js
- **docker-compose.yml**: Easy container orchestration
- **.dockerignore**: Excludes unnecessary files from the build context

## 🚀 Quick Start

### Prerequisites
- Docker installed on your system
- Docker Compose (optional, but recommended)

### Build the Docker Image

```bash
docker build -t theme-04-extracted2:latest .
```

### Run with Docker

```bash
# Run the container on port 3000
docker run -d -p 3000:3000 --name theme-app theme-04-extracted2:latest

# View logs
docker logs theme-app

# Stop the container
docker stop theme-app

# Start the container
docker start theme-app

# Remove the container
docker rm theme-app
```

### Run with Docker Compose (Recommended)

```bash
# Build and start the application
docker-compose up -d

# View logs
docker-compose logs -f

# Stop the application
docker-compose down

# Rebuild and restart
docker-compose up -d --build
```

## 🌐 Access the Application

Once the container is running, access the application at:
- **Local**: http://localhost:3000

## 📊 Image Details

- **Base Image**: Node.js 18 Alpine
- **Build Type**: Multi-stage (deps → builder → runner)
- **Output Mode**: Standalone (optimized for production)
- **Final Image Size**: ~603MB
- **Security**: Runs as non-root user (nextjs:nodejs)

## 🔧 Docker Commands Reference

### Image Management
```bash
# List Docker images
docker images

# View detailed image information
docker inspect theme-04-extracted2:latest

# Remove the image
docker rmi theme-04-extracted2:latest

# Tag image for registry
docker tag theme-04-extracted2:latest yourusername/theme-04-extracted2:latest
```

### Container Management
```bash
# List running containers
docker ps

# List all containers (including stopped)
docker ps -a

# Access container shell
docker exec -it theme-app sh

# View container resource usage
docker stats theme-app

# View container logs (last 100 lines)
docker logs --tail 100 theme-app

# Follow logs in real-time
docker logs -f theme-app
```

### Cleanup
```bash
# Stop and remove container
docker stop theme-app && docker rm theme-app

# Remove all stopped containers
docker container prune

# Remove unused images
docker image prune

# Full cleanup (careful!)
docker system prune -a
```

## 🚢 Push to Docker Registry

### Docker Hub
```bash
# Login to Docker Hub
docker login

# Tag the image
docker tag theme-04-extracted2:latest yourusername/theme-04-extracted2:latest

# Push to Docker Hub
docker push yourusername/theme-04-extracted2:latest

# Pull from Docker Hub
docker pull yourusername/theme-04-extracted2:latest
```

### AWS ECR
```bash
# Authenticate Docker to ECR
aws ecr get-login-password --region region | docker login --username AWS --password-stdin aws_account_id.dkr.ecr.region.amazonaws.com

# Tag for ECR
docker tag theme-04-extracted2:latest aws_account_id.dkr.ecr.region.amazonaws.com/theme-04-extracted2:latest

# Push to ECR
docker push aws_account_id.dkr.ecr.region.amazonaws.com/theme-04-extracted2:latest
```

## 🐛 Troubleshooting

### Container won't start
```bash
# Check container logs
docker logs theme-app

# Check if port is already in use
lsof -i :3000

# Run container in foreground to see errors
docker run -p 3000:3000 theme-04-extracted2:latest
```

### Build fails
```bash
# Clear Docker cache and rebuild
docker build --no-cache -t theme-04-extracted2:latest .

# Check disk space
docker system df
```

### Application not accessible
```bash
# Verify container is running
docker ps

# Check port mapping
docker port theme-app

# Test inside container
docker exec theme-app wget -O- http://localhost:3000
```

## 🔒 Security Best Practices

✅ **Implemented:**
- Non-root user execution
- Multi-stage builds (smaller attack surface)
- Minimal base image (Alpine Linux)
- Explicit file copying (no wildcards)
- .dockerignore to exclude sensitive files

📝 **Recommended:**
- Use specific version tags instead of `latest`
- Scan images for vulnerabilities: `docker scan theme-04-extracted2:latest`
- Set resource limits in production
- Use Docker secrets for sensitive data
- Keep base images updated

## 📈 Performance Optimization

- **Standalone Output**: Reduces image size by including only necessary dependencies
- **Layer Caching**: Optimized layer ordering for faster rebuilds
- **Alpine Linux**: Lightweight base image (~5MB vs ~100MB)
- **Multi-stage Build**: Separates build dependencies from runtime

## 🌍 Environment Variables

You can pass environment variables when running the container:

```bash
docker run -d \
  -p 3000:3000 \
  -e NODE_ENV=production \
  -e CUSTOM_VAR=value \
  --name theme-app \
  theme-04-extracted2:latest
```

Or use `.env` file with Docker Compose:
```bash
# Create .env file
echo "NODE_ENV=production" > .env

# Run with env file
docker-compose --env-file .env up -d
```

## 📝 Project Information

- **Application**: Digivue Portfolio Theme
- **Framework**: Next.js 15.3.0
- **Port**: 3000
- **Build Time**: ~80 seconds
- **Color Theme**: Yellow (#FDC448)
- **Contact**: vishruts261@gmail.com | +971504961514

## 🤝 Support

For issues or questions:
- Email: vishruts261@gmail.com
- Phone: +971504961514
- Address: Rajdhani Nikunj, IP Extension, Patparganj, Delhi, India

---

**Last Updated**: December 2025
**Docker Version**: 20.10+
**Docker Compose Version**: 2.0+
