# Docker Setup for Theme-04-Extracted2

## Quick Start for Teammates

### Prerequisites
- Install Docker Desktop: https://www.docker.com/products/docker-desktop

### Run the Application

**Option 1: Using Docker Compose (Easiest)**
```bash
# Clone the repository
git clone https://github.com/team04fusion/theme-04-extracted2.git
cd theme-04-extracted2

# Start the application
docker-compose up -d

# View logs
docker-compose logs -f

# Stop the application
docker-compose down
```

**Option 2: Using Docker directly**
```bash
# Build the image
docker build -t theme-04-extracted2 .

# Run the container
docker run -d -p 3000:3000 --name theme-app theme-04-extracted2

# View logs
docker logs -f theme-app

# Stop the container
docker stop theme-app && docker rm theme-app
```

### Access the Application
Once running, open your browser:
- **Local:** http://localhost:3000

### Useful Commands

```bash
# Check if container is running
docker ps

# View application logs
docker logs theme-app

# Stop and remove
docker stop theme-app && docker rm theme-app

# Rebuild after code changes
docker-compose up -d --build
```

## Project Details
- **Framework:** Next.js 15.3.0
- **Node Version:** 18
- **Port:** 3000
- **Contact:** vishruts261@gmail.com | +971504961514
