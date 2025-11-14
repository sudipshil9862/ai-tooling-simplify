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
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Granite.Code — Simple Guide</h1>
      <p className="text-lg text-gray-600 mb-6">
        A comprehensive guide on how to install, configure, and use Granite.Code locally with VS Code for privacy-preserving coding assistance.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What is Granite.Code?</h2>
      <p className="text-gray-700 mb-4 leading-relaxed">
        Granite.Code is a VS Code extension that connects your editor to a locally run Granite model (IBM's open-source models). 
        It provides privacy-preserving coding assistance without sending your code to cloud servers. This means your code stays on your machine, 
        ensuring complete privacy and security for sensitive projects.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6 rounded">
        <p className="text-gray-700">
          <strong>Key Benefit:</strong> Unlike cloud-based AI assistants, Granite.Code runs entirely on your local machine, 
          so your proprietary code never leaves your computer.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Why Use Granite.Code?</h2>
      <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg mb-6">
        <ul className="list-none space-y-3">
          <li className="flex items-start">
            <span className="text-2xl mr-3">🔒</span>
            <div>
              <strong className="text-gray-900">Privacy First:</strong>
              <span className="text-gray-700 ml-2">Your code never leaves your machine</span>
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-2xl mr-3">🚀</span>
            <div>
              <strong className="text-gray-900">Open Source:</strong>
              <span className="text-gray-700 ml-2">IBM's open-source models trained for secure, production-grade development</span>
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-2xl mr-3">💻</span>
            <div>
              <strong className="text-gray-900">VS Code Integration:</strong>
              <span className="text-gray-700 ml-2">Seamless integration with your favorite editor</span>
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-2xl mr-3">⚡</span>
            <div>
              <strong className="text-gray-900">Local Performance:</strong>
              <span className="text-gray-700 ml-2">Fast responses without internet dependency</span>
            </div>
          </li>
        </ul>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Fedora Installation & Setup</h2>
      
      <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Step 1: Install VS Code on Fedora</h3>
      <p className="text-gray-700 mb-4">
        On Fedora, you can install VS Code using the official Microsoft repository:
      </p>
      <div className="relative mb-6">
        <div className="bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto">
          <pre id="cmd1" className="text-sm font-mono">
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
            <br />
            <br />
            <code className="text-green-400"># Or install from Flatpak (alternative)</code>
            <br />
            <span className="text-yellow-400">sudo</span> dnf install flatpak
            <br />
            flatpak install flathub com.visualstudio.code
          </pre>
        </div>
        <button
          onClick={(e) => window.copyCmd("cmd1", e)}
          className="absolute top-2 right-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm font-medium transition-colors"
        >
          Copy
        </button>
      </div>

      <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Step 2: Install the Granite.Code Extension</h3>
      <p className="text-gray-700 mb-4">
        Once VS Code is installed, you can install the Granite.Code extension:
      </p>
      <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-6 rounded">
        <p className="text-gray-700">
          <strong>Method 1:</strong> Open VS Code, go to Extensions (Ctrl+Shift+X), search for "Granite.Code", and click Install.
        </p>
        <p className="text-gray-700 mt-2">
          <strong>Method 2:</strong> Install from the command line using the VS Code CLI.
        </p>
      </div>

      <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Step 3: Set Up Local Granite Model on Fedora</h3>
      <p className="text-gray-700 mb-4">
        You'll need to have a Granite model running locally. On Fedora, the easiest way is using RamaLama:
      </p>
      <div className="bg-gray-900 text-gray-100 p-6 rounded-lg mb-6 overflow-x-auto">
        <pre className="text-sm font-mono">
          <code className="text-green-400"># Install RamaLama (if not already installed)</code>
          <br />
          <span className="text-yellow-400">sudo</span> dnf install python3-ramalama
          <br />
          <br />
          <code className="text-green-400"># Run a Granite model using RamaLama</code>
          <br />
          ramalama serve granite3-moe --port 8080
          <br />
          <br />
          <code className="text-green-400"># Or run in background</code>
          <br />
          ramalama serve granite3-moe --port 8080 &amp;
        </pre>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg mb-6">
        <p className="text-gray-700 text-sm">
          <strong>Note:</strong> The Granite.Code extension will need to connect to your local model instance at <code className="bg-gray-100 px-2 py-1 rounded">http://localhost:8080</code>. 
          Make sure the model is running and accessible before using the extension.
        </p>
      </div>

      <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Step 4: Configure the Extension</h3>
      <p className="text-gray-700 mb-4">
        After installation, configure the extension to point to your local Granite model:
      </p>
      <ol className="list-decimal list-inside text-gray-700 mb-6 space-y-2 ml-4">
        <li>Open VS Code Settings (Ctrl+,)</li>
        <li>Search for "Granite.Code"</li>
        <li>Set the model endpoint URL (typically <code className="bg-gray-100 px-2 py-1 rounded">http://localhost:8080</code> or similar)</li>
        <li>Configure any other preferences as needed</li>
      </ol>

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Using Granite.Code</h2>
      <p className="text-gray-700 mb-4">
        Once configured, Granite.Code works just like other AI coding assistants:
      </p>
      <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2 ml-4">
        <li><strong>Code Completion:</strong> Get intelligent code suggestions as you type</li>
        <li><strong>Code Explanation:</strong> Ask questions about your code</li>
        <li><strong>Code Generation:</strong> Generate code snippets based on natural language descriptions</li>
        <li><strong>Refactoring:</strong> Get suggestions for improving your code</li>
      </ul>

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Best Practices</h2>
      <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6 rounded">
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Ensure your local model has sufficient resources (RAM, GPU if available)</li>
          <li>Keep your Granite model updated for the best performance</li>
          <li>Use appropriate model sizes based on your hardware capabilities</li>
          <li>Monitor resource usage when running large models</li>
        </ul>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Troubleshooting</h2>
      <div className="bg-gray-50 p-6 rounded-lg mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Common Issues:</h3>
        <ul className="space-y-3">
          <li>
            <strong className="text-gray-900">Extension can't connect to model:</strong>
            <p className="text-gray-700 text-sm mt-1">Verify that your local model is running and the endpoint URL is correct in settings.</p>
          </li>
          <li>
            <strong className="text-gray-900">Slow responses:</strong>
            <p className="text-gray-700 text-sm mt-1">This is normal for local models. Consider using a GPU-accelerated setup or a smaller model.</p>
          </li>
          <li>
            <strong className="text-gray-900">Model not found:</strong>
            <p className="text-gray-700 text-sm mt-1">Make sure you have downloaded and set up a Granite model locally.</p>
          </li>
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
            <strong className="text-gray-900">VS Code Marketplace:</strong>{' '}
            <a 
              href="https://marketplace.visualstudio.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-600 underline hover:text-blue-800"
            >
              Search for Granite.Code Extension
            </a>
          </li>
        </ul>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Using Granite.Code in Fedora Projects</h2>
      
      <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">In Fedora Terminal</h3>
      <p className="text-gray-700 mb-4">
        Start your Granite model from the terminal before opening VS Code:
      </p>
      <div className="bg-gray-900 text-gray-100 p-6 rounded-lg mb-6 overflow-x-auto">
        <pre className="text-sm font-mono">
          <code className="text-green-400"># Navigate to your project</code>
          <br />
          <span className="text-gray-400">cd</span> ~/fedoraspace_publichtml/my-project
          <br />
          <br />
          <code className="text-green-400"># Start Granite model server</code>
          <br />
          ramalama serve granite3-moe --port 8080
          <br />
          <br />
          <code className="text-green-400"># In another terminal, open VS Code</code>
          <br />
          code .
        </pre>
      </div>

      <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">In Fedora Apps/Projects Directory</h3>
      <p className="text-gray-700 mb-4">
        For projects in your <code className="bg-gray-100 px-2 py-1 rounded">fedoraspace_publichtml</code> directory:
      </p>
      <div className="bg-gray-900 text-gray-100 p-6 rounded-lg mb-6 overflow-x-auto">
        <pre className="text-sm font-mono">
          <code className="text-green-400"># Create a startup script for your project</code>
          <br />
          <span className="text-gray-400">cd</span> ~/fedoraspace_publichtml/my-app
          <br />
          <span className="text-gray-400">cat</span> &gt; start-granite.sh <span className="text-green-300">&lt;&lt;EOF</span>
          <br />
          <span className="text-gray-400">#!/bin/bash</span>
          <br />
          ramalama serve granite3-moe --port 8080
          <br />
          <span className="text-green-300">EOF</span>
          <br />
          <span className="text-yellow-400">chmod</span> +x start-granite.sh
          <br />
          <br />
          <code className="text-green-400"># Run the script</code>
          <br />
          ./start-granite.sh
        </pre>
      </div>

      <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Integration with Fedora Development Workflow</h3>
      <p className="text-gray-700 mb-4">
        Granite.Code works seamlessly with Fedora's development tools:
      </p>
      <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2 ml-4">
        <li>Open your project in VS Code: <code className="bg-gray-100 px-2 py-1 rounded">code ~/fedoraspace_publichtml/my-project</code></li>
        <li>Ensure Granite model is running (via RamaLama)</li>
        <li>Configure Granite.Code extension to use <code className="bg-gray-100 px-2 py-1 rounded">http://localhost:8080</code></li>
        <li>Start coding with AI assistance!</li>
      </ul>

      <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6 rounded">
        <p className="text-gray-700">
          <strong>Fedora Tip:</strong> You can create a systemd user service to automatically start Granite model on login, 
          or use RamaLama's systemd generation feature for persistent services.
        </p>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-8 rounded">
        <p className="text-gray-700">
          <strong>Summary:</strong> Granite.Code is an excellent choice for developers who prioritize privacy and want to use AI coding assistance 
          without sending their code to external servers. It's particularly valuable for working with proprietary or sensitive codebases.
        </p>
      </div>
    </div>
  );
}
