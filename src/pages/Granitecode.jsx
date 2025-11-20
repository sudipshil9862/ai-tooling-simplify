import React, { useEffect } from "react";

export default function Granitecode() {
  useEffect(() => {
    // Simple copy function
    window.copyCmd = (id, event) => {
      const text = document.getElementById(id).innerText;
      navigator.clipboard.writeText(text).then(() => {
        const el = event.currentTarget || event.target;
        const prev = el.innerText;
        el.innerText = "✓ Copied!";
        el.classList.add("bg-green-500");
        setTimeout(() => {
          el.innerText = prev;
          el.classList.remove("bg-green-500");
        }, 1500);
      });
    };
  }, []);

  return (
    <div className="prose prose-lg max-w-none">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Granite Models — Local AI Coding Assistant</h1>
      <p className="text-lg text-gray-600 mb-6">
        A comprehensive guide on how to use Granite models (IBM's open-source LLMs) locally for privacy-preserving coding assistance.
      </p>

      <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6 rounded">
        <p className="text-gray-700 font-semibold mb-2">
          ⚠️ Important Update: Granite.Code VS Code Extension Deprecated
        </p>
        <p className="text-gray-700">
          The Granite.Code VS Code extension has been <strong>deprecated</strong> and migrated to <strong>Continue</strong>. 
          Continue is the recommended way to use Granite models (and other AI models) in VS Code. This guide covers both 
          running Granite models locally and using them with the Continue extension.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What are Granite Models?</h2>
      <p className="text-gray-700 mb-4 leading-relaxed">
        Granite models are IBM's open-source Large Language Models (LLMs) trained for secure, production-grade software development. 
        They provide privacy-preserving coding assistance without sending your code to cloud servers. This means your code stays on your machine, 
        ensuring complete privacy and security for sensitive projects.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6 rounded">
        <p className="text-gray-700">
          <strong>Key Benefit:</strong> Unlike cloud-based AI assistants, Granite models run entirely on your local machine, 
          so your proprietary code never leaves your computer.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Section 1: Running Granite Models Locally in Your Project</h2>
      <p className="text-gray-700 mb-4">
        This section shows you how to run Granite models locally using RamaLama and integrate them into your Fedora projects.
      </p>

      <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Prerequisites on Fedora</h3>
      <div className="bg-gray-900 text-gray-100 p-6 rounded-lg mb-6 overflow-x-auto">
        <pre className="text-sm font-mono">
          <code className="text-green-400"># Install RamaLama (if not already installed)</code>
          <br />
          <span className="text-yellow-400">sudo</span> dnf install python3-ramalama
          <br />
          <br />
          <code className="text-green-400"># Verify installation</code>
          <br />
          ramalama version
        </pre>
      </div>

      <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Example: Running Granite Model in a Project</h3>
      <p className="text-gray-700 mb-4">
        Let's set up a Granite model for a React project in your <code className="bg-gray-100 px-2 py-1 rounded">fedoraspace_publichtml</code> directory:
      </p>
      
      <div className="relative mb-6">
        <div className="bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto">
          <pre id="cmd1" className="text-sm font-mono">
            <code className="text-green-400"># Navigate to your project directory</code>
            <br />
            <span className="text-gray-400">cd</span> ~/fedoraspace_publichtml/my-react-app
            <br />
            <br />
            <code className="text-green-400"># Start Granite model server on port 8080</code>
            <br />
            ramalama serve granite3-moe --port 8080
            <br />
            <br />
            <code className="text-green-400"># The model will be available at http://localhost:8080</code>
            <br />
            <span className="text-gray-400"># You can test it with curl:</span>
            <br />
            <span className="text-gray-400">curl</span> http://localhost:8080/v1/completions \
            <br />
            &nbsp;&nbsp;-H <span className="text-green-300">"Content-Type: application/json"</span> \
            <br />
            &nbsp;&nbsp;-d <span className="text-green-300">{`'{"prompt": "Write a React component", "max_tokens": 100}'`}</span>
          </pre>
        </div>
        <button
          onClick={(e) => window.copyCmd("cmd1", e)}
          className="absolute top-2 right-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm font-medium transition-colors"
        >
          Copy
        </button>
      </div>

      <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Creating a Startup Script for Your Project</h3>
      <p className="text-gray-700 mb-4">
        For easier management, create a startup script in your project:
      </p>
      
      <div className="relative mb-6">
        <div className="bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto">
          <pre id="cmd2" className="text-sm font-mono">
            <code className="text-green-400"># Create startup script</code>
            <br />
            <span className="text-gray-400">cd</span> ~/fedoraspace_publichtml/my-react-app
            <br />
            <span className="text-gray-400">cat</span> &gt; scripts/start-granite.sh <span className="text-green-300">&lt;&lt;EOF</span>
            <br />
            <span className="text-gray-400">#!/bin/bash</span>
            <br />
            <span className="text-gray-400"># Start Granite model server</span>
            <br />
            ramalama serve granite3-moe --port 8080
            <br />
            <span className="text-green-300">EOF</span>
            <br />
            <br />
            <span className="text-yellow-400">chmod</span> +x scripts/start-granite.sh
            <br />
            <br />
            <code className="text-green-400"># Run the script</code>
            <br />
            ./scripts/start-granite.sh
          </pre>
        </div>
        <button
          onClick={(e) => window.copyCmd("cmd2", e)}
          className="absolute top-2 right-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm font-medium transition-colors"
        >
          Copy
        </button>
      </div>

      <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Using Granite Model API in Your Code</h3>
      <p className="text-gray-700 mb-4">
        Once the model is running, you can integrate it into your application:
      </p>
      
      <div className="bg-gray-900 text-gray-100 p-6 rounded-lg mb-6 overflow-x-auto">
        <pre className="text-sm font-mono">
          <code className="text-green-400"># Example: JavaScript/Node.js integration</code>
          <br />
          <span className="text-gray-400">const</span> response = <span className="text-yellow-400">await</span> fetch(<span className="text-green-300">'http://localhost:8080/v1/completions'</span>, {`{`}
          <br />
          &nbsp;&nbsp;method: <span className="text-green-300">'POST'</span>,
          <br />
          &nbsp;&nbsp;headers: {`{`}
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-300">'Content-Type'</span>: <span className="text-green-300">'application/json'</span>
          <br />
          &nbsp;&nbsp;{`}`},
          <br />
          &nbsp;&nbsp;body: <span className="text-yellow-400">JSON</span>.stringify({`{`}
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;prompt: <span className="text-green-300">'Generate a React component for a user profile'</span>,
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;max_tokens: <span className="text-blue-400">200</span>
          <br />
          &nbsp;&nbsp;{`}`})
          <br />
          {`}`});
          <br />
          <br />
          <span className="text-gray-400">const</span> data = <span className="text-yellow-400">await</span> response.json();
          <br />
          <span className="text-yellow-400">console</span>.log(data);
        </pre>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Section 2: Using Continue VS Code Extension with Granite Models</h2>
      <p className="text-gray-700 mb-4">
        Continue is the modern replacement for Granite.Code extension. It supports multiple AI models including Granite, 
        and provides a better development experience. Reference: <a href="https://docs.continue.dev/agents/intro" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Continue.dev Documentation</a>
      </p>

      <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Step 1: Install VS Code on Fedora</h3>
      <div className="relative mb-6">
        <div className="bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto">
          <pre id="cmd3" className="text-sm font-mono">
            <code className="text-green-400"># Add Microsoft repository</code>
            <br />
            <span className="text-yellow-400">sudo</span> rpm --import https://packages.microsoft.com/keys/microsoft.asc
            <br />
            <span className="text-yellow-400">sudo</span> sh -c <span className="text-green-300">{`'echo -e "[code]\\nname=Visual Studio Code\\nbaseurl=https://packages.microsoft.com/yumrepos/vscode\\nenabled=1\\ngpgcheck=1\\ngpgkey=https://packages.microsoft.com/keys/microsoft.asc" > /etc/yum.repos.d/vscode.repo'`}</span>
            <br />
            <br />
            <code className="text-green-400"># Install VS Code</code>
            <br />
            <span className="text-yellow-400">sudo</span> dnf install code
          </pre>
        </div>
        <button
          onClick={(e) => window.copyCmd("cmd3", e)}
          className="absolute top-2 right-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm font-medium transition-colors"
        >
          Copy
        </button>
      </div>

      <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Step 2: Install Continue Extension</h3>
      <p className="text-gray-700 mb-4">
        Install Continue from the VS Code marketplace:
      </p>
      <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2 ml-4">
        <li>Open VS Code</li>
        <li>Go to Extensions (Ctrl+Shift+X)</li>
        <li>Search for "Continue"</li>
        <li>Click Install on the Continue extension by Continue</li>
      </ul>

      <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Step 3: Configure Continue with Local Granite Model</h3>
      <p className="text-gray-700 mb-4">
        First, ensure your Granite model is running (see Section 1), then configure Continue:
      </p>
      
      <div className="bg-gray-900 text-gray-100 p-6 rounded-lg mb-6 overflow-x-auto">
        <pre className="text-sm font-mono">
          <code className="text-green-400"># 1. Start Granite model server (in terminal)</code>
          <br />
          <span className="text-gray-400">cd</span> ~/fedoraspace_publichtml/my-project
          <br />
          ramalama serve granite3-moe --port 8080
          <br />
          <br />
          <code className="text-green-400"># 2. Open VS Code in your project</code>
          <br />
          code .
          <br />
          <br />
          <code className="text-green-400"># 3. Configure Continue (create .continue/config.json)</code>
          <br />
          <span className="text-gray-400">mkdir</span> -p .continue
          <br />
          <span className="text-gray-400">cat</span> &gt; .continue/config.json <span className="text-green-300">&lt;&lt;EOF</span>
          <br />
          {`{
  "models": [
    {
      "title": "Granite 3 MoE",
      "provider": "openai",
      "model": "granite3-moe",
      "apiBase": "http://localhost:8080/v1",
      "apiKey": "not-needed"
    }
  ]
}`}
          <br />
          <span className="text-green-300">EOF</span>
        </pre>
      </div>

      <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Example: Using Continue in Your Project</h3>
      <p className="text-gray-700 mb-4">
        Once configured, you can use Continue in your VS Code project:
      </p>
      
      <div className="bg-gray-50 p-6 rounded-lg mb-6">
        <ol className="list-decimal list-inside text-gray-700 space-y-3 ml-4">
          <li>
            <strong>Open your project:</strong> <code className="bg-gray-100 px-2 py-1 rounded">code ~/fedoraspace_publichtml/my-react-app</code>
          </li>
          <li>
            <strong>Start Granite model:</strong> Run <code className="bg-gray-100 px-2 py-1 rounded">ramalama serve granite3-moe --port 8080</code> in a terminal
          </li>
          <li>
            <strong>Use Continue:</strong>
            <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
              <li>Press <code className="bg-gray-100 px-2 py-1 rounded">Ctrl+L</code> (or <code className="bg-gray-100 px-2 py-1 rounded">Cmd+L</code> on Mac) to open Continue chat</li>
              <li>Ask questions like: "Explain this function" or "Generate a React component for user authentication"</li>
              <li>Get code completions as you type</li>
              <li>Use inline edits and suggestions</li>
            </ul>
          </li>
        </ol>
      </div>

      <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Continue Features</h3>
      <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg mb-6">
        <ul className="list-none space-y-3">
          <li className="flex items-start">
            <span className="text-2xl mr-3">💬</span>
            <div>
              <strong className="text-gray-900">Chat Interface:</strong>
              <span className="text-gray-700 ml-2">Ask questions and get code explanations</span>
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-2xl mr-3">⚡</span>
            <div>
              <strong className="text-gray-900">Code Completion:</strong>
              <span className="text-gray-700 ml-2">Intelligent autocomplete powered by Granite models</span>
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-2xl mr-3">🔄</span>
            <div>
              <strong className="text-gray-900">Inline Edits:</strong>
              <span className="text-gray-700 ml-2">Edit code directly from chat suggestions</span>
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-2xl mr-3">🤖</span>
            <div>
              <strong className="text-gray-900">Agents Support:</strong>
              <span className="text-gray-700 ml-2">Use Mission Control for automated workflows</span>
            </div>
          </li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Using Continue Agents (Mission Control)</h3>
      <p className="text-gray-700 mb-4">
        Continue also supports agents for automated workflows. Access Mission Control at <a href="https://hub.continue.dev/agents" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">hub.continue.dev/agents</a>:
      </p>
      <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2 ml-4">
        <li><strong>Bug fixes & code quality:</strong> Address technical debt automatically</li>
        <li><strong>Feature development:</strong> Build boilerplate-heavy features</li>
        <li><strong>Security & compliance:</strong> Automated vulnerability scanning</li>
        <li><strong>Investigation & analysis:</strong> Research issues to kickstart your work</li>
      </ul>

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Section 3: How Granite.Code Extension Was Used (Deprecated)</h2>
      <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-6 rounded">
        <p className="text-gray-700">
          <strong>Note:</strong> This section is for historical reference. The Granite.Code extension is deprecated. 
          Please use Continue (Section 2) for current development.
        </p>
      </div>

      <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Installation (Historical)</h3>
      <p className="text-gray-700 mb-4">
        Previously, you would install the Granite.Code extension from VS Code marketplace:
      </p>
      <div className="bg-gray-900 text-gray-100 p-6 rounded-lg mb-6 overflow-x-auto">
        <pre className="text-sm font-mono">
          <code className="text-green-400"># Method 1: Via VS Code UI</code>
          <br />
          <span className="text-gray-400"># 1. Open VS Code</span>
          <br />
          <span className="text-gray-400"># 2. Go to Extensions (Ctrl+Shift+X)</span>
          <br />
          <span className="text-gray-400"># 3. Search for "Granite.Code"</span>
          <br />
          <span className="text-gray-400"># 4. Click Install</span>
          <br />
          <br />
          <code className="text-green-400"># Method 2: Via Command Line</code>
          <br />
          code --install-extension granite.code
        </pre>
      </div>

      <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Configuration (Historical)</h3>
      <p className="text-gray-700 mb-4">
        The extension required configuration in VS Code settings:
      </p>
      <div className="bg-gray-900 text-gray-100 p-6 rounded-lg mb-6 overflow-x-auto">
        <pre className="text-sm font-mono">
          <code className="text-green-400"># 1. Start Granite model server</code>
          <br />
          ramalama serve granite3-moe --port 8080
          <br />
          <br />
          <code className="text-green-400"># 2. Configure in VS Code Settings (Ctrl+,)</code>
          <br />
          <span className="text-gray-400"># Search for "Granite.Code"</span>
          <br />
          <span className="text-gray-400"># Set Model Endpoint: http://localhost:8080</span>
          <br />
          <span className="text-gray-400"># Configure other preferences as needed</span>
        </pre>
      </div>

      <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Usage Example (Historical)</h3>
      <p className="text-gray-700 mb-4">
        In a project, you would use it like this:
      </p>
      <div className="bg-gray-900 text-gray-100 p-6 rounded-lg mb-6 overflow-x-auto">
        <pre className="text-sm font-mono">
          <code className="text-green-400"># Terminal 1: Start Granite model</code>
          <br />
          <span className="text-gray-400">cd</span> ~/fedoraspace_publichtml/my-project
          <br />
          ramalama serve granite3-moe --port 8080
          <br />
          <br />
          <code className="text-green-400"># Terminal 2: Open VS Code</code>
          <br />
          code .
          <br />
          <br />
          <code className="text-green-400"># In VS Code:</code>
          <br />
          <span className="text-gray-400"># - Granite.Code would show code suggestions as you type</span>
          <br />
          <span className="text-gray-400"># - You could ask questions about your code</span>
          <br />
          <span className="text-gray-400"># - Get code generation and refactoring suggestions</span>
        </pre>
      </div>

      <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Why It Was Deprecated</h3>
      <p className="text-gray-700 mb-4">
        Granite.Code extension was deprecated because:
      </p>
      <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2 ml-4">
        <li>Continue provides better features and more model support</li>
        <li>Continue has active development and community support</li>
        <li>Continue supports agents and Mission Control for advanced workflows</li>
        <li>Better integration with modern development practices</li>
      </ul>

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Best Practices</h2>
      <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6 rounded">
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Ensure your local model has sufficient resources (RAM, GPU if available)</li>
          <li>Keep your Granite model updated for the best performance</li>
          <li>Use appropriate model sizes based on your hardware capabilities</li>
          <li>Monitor resource usage when running large models</li>
          <li>Use Continue for VS Code integration (recommended over deprecated Granite.Code)</li>
        </ul>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Resources</h2>
      <div className="bg-gray-50 p-6 rounded-lg mb-6">
        <ul className="space-y-3">
          <li>
            <strong className="text-gray-900">IBM Granite Models:</strong>{' '}
            <a 
              href="https://www.ibm.com/granite" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-600 underline hover:text-blue-800"
            >
              Official IBM Granite Page
            </a>
          </li>
          <li>
            <strong className="text-gray-900">Continue Documentation:</strong>{' '}
            <a 
              href="https://docs.continue.dev" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-600 underline hover:text-blue-800"
            >
              Continue.dev Documentation
            </a>
          </li>
          <li>
            <strong className="text-gray-900">Continue Agents:</strong>{' '}
            <a 
              href="https://docs.continue.dev/agents/intro" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-600 underline hover:text-blue-800"
            >
              Getting Started with Agents
            </a>
          </li>
          <li>
            <strong className="text-gray-900">Mission Control:</strong>{' '}
            <a 
              href="https://hub.continue.dev/agents" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-600 underline hover:text-blue-800"
            >
              hub.continue.dev/agents
            </a>
          </li>
        </ul>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-8 rounded">
        <p className="text-gray-700">
          <strong>Summary:</strong> Granite models provide excellent privacy-preserving AI coding assistance. While the Granite.Code extension 
          is deprecated, you can still use Granite models locally with RamaLama and integrate them with VS Code using the Continue extension, 
          which offers better features and ongoing support.
        </p>
      </div>
    </div>
  );
}
