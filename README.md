# AI Tools Blog - Fedora Guide

A modern blog website explaining AI tools (Ramalama, Granite.Code, and InstructLab) in simple terms, specifically designed for Fedora users.

## Running the Website on Fedora

### Prerequisites

Install Node.js and npm on Fedora:

```bash
# Install Node.js and npm
sudo dnf install nodejs npm

# Verify installation
node --version
npm --version
```

### Installation

1. **Navigate to the project directory:**
   ```bash
   cd ~/fedoraspace_publichtml/ai-blog
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

### Running the Development Server

**In Fedora Terminal:**
```bash
# Start the development server
npm run dev
```

The website will be available at `http://localhost:5173` (or another port if 5173 is busy).

### Building for Production

```bash
# Build the production version
npm run build

# Preview the production build
npm run preview
```

The built files will be in the `dist/` directory.

### Running in Fedora Apps/Projects Directory

If you want to serve this website from your `fedoraspace_publichtml` directory:

1. **Build the project:**
   ```bash
   cd ~/fedoraspace_publichtml/ai-blog
   npm run build
   ```

2. **Serve with a web server (using Python's built-in server):**
   ```bash
   cd dist
   python3 -m http.server 8000
   ```

3. **Or use Node.js http-server:**
   ```bash
   sudo dnf install npm
   npm install -g http-server
   cd dist
   http-server -p 8000
   ```

4. **Access the website:**
   Open `http://localhost:8000` in your browser.

## Tools Covered

### 1. Ramalama
- Run and serve AI models using Podman/Docker containers
- GPU auto-detection
- OCI-centric architecture
- See the Ramalama page for detailed Fedora installation and usage instructions

### 2. Granite.Code
- Privacy-preserving coding assistance for VS Code
- Local AI models (no cloud dependency)
- See the Granite.Code page for Fedora-specific setup

### 3. InstructLab
- Fine-tune LLMs for domain-specific Q&A
- Perfect for legal, public service, and specialized fields
- See the InstructLab page for Fedora installation guide

## Fedora-Specific Features

All three tools have comprehensive Fedora installation and usage instructions, including:
- Installation via `dnf` package manager
- Integration with Podman (Fedora's default container runtime)
- Usage in Fedora terminal
- Integration with Fedora projects/apps directories
- Workflow examples for `~/fedoraspace_publichtml/` directory

## Development

### Project Structure
```
ai-blog/
├── src/
│   ├── components/     # React components
│   ├── pages/          # Tool documentation pages
│   ├── assets/         # Images and logos
│   ├── App.jsx         # Main app component
│   └── main.jsx        # Entry point
├── public/             # Static assets
├── dist/               # Production build output
└── package.json        # Dependencies and scripts
```

### Technologies Used
- React 19
- Vite
- Tailwind CSS
- Framer Motion (animations)

## License

© 2025 Sudip Shil
