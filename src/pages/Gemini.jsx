const Gemini = () => (
  <div className="prose prose-lg max-w-none">
    <h1 className="text-4xl font-bold text-gray-900 mb-4">Gemini API — Code Assistant Integration</h1>
    <p className="text-lg text-gray-600 mb-6">
      Leverage Google AI models for code assistance in open source IDEs. Connect powerful generative AI models directly into your preferred development environment.
    </p>

    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What is Gemini API?</h2>
    <p className="text-gray-700 mb-4 leading-relaxed">
      The Gemini API lets you connect powerful Google generative AI models directly into your preferred integrated development environment (IDE). 
      By integrating the API with compatible open-source tools (like Continue.dev, Aider, and others), you can enhance your productivity with features 
      like code generation, explanation, and migration.
    </p>

    <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6 rounded">
      <p className="text-gray-700">
        <strong>IMPORTANT:</strong> This approval for Gemini API is strictly limited to code assistant use cases only. This includes code development 
        and contributions related to internal repositories, Red Hat products, and open source projects. Any other proposed use of the Gemini API 
        must be submitted for an AI Assessment (AIA).
      </p>
    </div>

    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Key Benefits</h2>
    <div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-6 rounded-lg mb-6">
      <ul className="list-none space-y-3">
        <li className="flex items-start">
          <span className="text-2xl mr-3">⚡</span>
          <div>
            <strong className="text-gray-900">Reduce Context Switching:</strong>
            <span className="text-gray-700 ml-2">AI embedded directly within your preferred IDE</span>
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-2xl mr-3">🎨</span>
          <div>
            <strong className="text-gray-900">Tailored Behavior:</strong>
            <span className="text-gray-700 ml-2">Customize the code assistant to match your coding style and specific needs</span>
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-2xl mr-3">🚀</span>
          <div>
            <strong className="text-gray-900">Increase Productivity:</strong>
            <span className="text-gray-700 ml-2">Automate repetitive tasks and get intelligent assistance</span>
          </div>
        </li>
      </ul>
    </div>

    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Features</h2>
    <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2 ml-4">
      <li><strong>Code Generation:</strong> Generate code from natural language descriptions and comments</li>
      <li><strong>Context-Aware Completion:</strong> Intelligent code completion based on your project context</li>
      <li><strong>Automated Debugging:</strong> Get help identifying and fixing bugs automatically</li>
      <li><strong>Code Explanation:</strong> Understand complex code sections with AI-powered explanations</li>
      <li><strong>Migration Assistance:</strong> Help with code migration and refactoring tasks</li>
    </ul>

    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Who Has Access</h2>
    <p className="text-gray-700 mb-4">
      Gemini API for code assistants is available to:
    </p>
    <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2 ml-4">
      <li>Any Red Hatter can request access, including interns and contractors</li>
      <li>Availability is subject to local and regional laws</li>
      <li>Use of API keys for coding assistant purposes must comply with local regulations</li>
    </ul>

    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Fedora Installation & Setup</h2>
    
    <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Step 1: Request GCP Project and API Key</h3>
    <p className="text-gray-700 mb-4">
      Follow the instructions in the Red Hat Gemini API Code Assistant User Guide to:
    </p>
    <ol className="list-decimal list-inside text-gray-700 mb-6 space-y-2 ml-4">
      <li>Request a Google Cloud Platform (GCP) project</li>
      <li>Generate your API key</li>
      <li>Ensure compliance with local regulations</li>
    </ol>

    <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Step 2: Configure Your IDE Tool</h3>
    <p className="text-gray-700 mb-4">
      The User Guide: Configuring API Keys for Open Source AI Code Assistants provides detailed instructions for setting up popular tools:
    </p>
    <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2 ml-4">
      <li><strong>Continue.dev:</strong> VS Code extension with Gemini API support</li>
      <li><strong>Aider:</strong> Command-line AI pair programmer</li>
      <li><strong>Other compatible tools:</strong> Check the guide for additional options</li>
    </ul>

    <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Installation Example: Continue.dev on Fedora</h3>
    <div className="bg-gray-900 text-gray-100 p-6 rounded-lg mb-6 overflow-x-auto">
      <pre className="text-sm font-mono">
        <code className="text-green-400"># Install VS Code (if not already installed)</code>
        <br />
        <span className="text-yellow-400">sudo</span> dnf install code
        <br />
        <br />
        <code className="text-green-400"># Install Continue.dev extension</code>
        <br />
        <span className="text-gray-400"># Open VS Code and search for "Continue" in Extensions</span>
        <br />
        <span className="text-gray-400"># Or use command line:</span>
        <br />
        code --install-extension continue.continue
        <br />
        <br />
        <code className="text-green-400"># Configure Gemini API key</code>
        <br />
        <span className="text-gray-400"># Add to Continue.dev settings:</span>
        <br />
        {`{
  "models": [
    {
      "title": "Gemini",
      "provider": "google",
      "model": "gemini-pro",
      "apiKey": "YOUR_API_KEY_HERE"
    }
  ]
}`}
      </pre>
    </div>

    <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Installation Example: Aider on Fedora</h3>
    <div className="bg-gray-900 text-gray-100 p-6 rounded-lg mb-6 overflow-x-auto">
      <pre className="text-sm font-mono">
        <code className="text-green-400"># Install Python and pip (if not already installed)</code>
        <br />
        <span className="text-yellow-400">sudo</span> dnf install python3 python3-pip
        <br />
        <br />
        <code className="text-green-400"># Install Aider</code>
        <br />
        pip3 install --user aider-chat
        <br />
        <br />
        <code className="text-green-400"># Set your Gemini API key</code>
        <br />
        <span className="text-gray-400">export</span> GEMINI_API_KEY=your_api_key_here
        <br />
        <br />
        <code className="text-green-400"># Use Aider with Gemini</code>
        <br />
        aider --model gemini-pro
      </pre>
    </div>

    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Using Gemini API in Fedora Projects</h2>
    
    <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">In Fedora Terminal with Aider</h3>
    <div className="bg-gray-900 text-gray-100 p-6 rounded-lg mb-6 overflow-x-auto">
      <pre className="text-sm font-mono">
        <code className="text-green-400"># Navigate to your project</code>
        <br />
        <span className="text-gray-400">cd</span> ~/fedoraspace_publichtml/my-project
        <br />
        <br />
        <code className="text-green-400"># Start Aider with Gemini</code>
        <br />
        aider --model gemini-pro
        <br />
        <br />
        <code className="text-green-400"># Ask for code generation</code>
        <br />
        <span className="text-gray-400"># In Aider prompt: "Create a React component for user authentication"</span>
        <br />
        <br />
        <code className="text-green-400"># Get code explanations</code>
        <br />
        <span className="text-gray-400"># In Aider prompt: "Explain how this function works"</span>
      </pre>
    </div>

    <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">In VS Code with Continue.dev</h3>
    <p className="text-gray-700 mb-4">
      Once Continue.dev is configured with your Gemini API key:
    </p>
    <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2 ml-4">
      <li>Open your project in VS Code: <code className="bg-gray-100 px-2 py-1 rounded">code ~/fedoraspace_publichtml/my-project</code></li>
      <li>Use the Continue panel to chat with Gemini about your code</li>
      <li>Request code generation, explanations, or refactoring</li>
      <li>Get context-aware suggestions as you type</li>
    </ul>

    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Best Practices</h2>
    <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6 rounded">
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Use Gemini API only for approved code assistant use cases</li>
        <li>Keep your API keys secure and never commit them to repositories</li>
        <li>Review generated code before committing</li>
        <li>Ensure compliance with local and regional regulations</li>
        <li>Monitor API usage to stay within limits</li>
        <li>Use environment variables for API key storage</li>
      </ul>
    </div>

    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Getting Help</h2>
    <div className="bg-gray-50 p-6 rounded-lg mb-6">
      <p className="text-gray-700 mb-4">
        For questions and support:
      </p>
      <ul className="space-y-3">
        <li>
          <strong className="text-gray-900">General Questions:</strong>
          <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
            <li>Slack: <code className="bg-gray-100 px-2 py-1 rounded">#help-rh-code-assist</code></li>
            <li>Email: <code className="bg-gray-100 px-2 py-1 rounded">code-assist@redhat.com</code></li>
          </ul>
        </li>
        <li>
          <strong className="text-gray-900">GCP Project or Technical Issues:</strong>
          <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
            <li>Submit a ticket via the GCP Support Form</li>
            <li>Slack: <code className="bg-gray-100 px-2 py-1 rounded">#help-it-cloud-publiccloud</code></li>
          </ul>
        </li>
      </ul>
    </div>

    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Integration with Other Tools</h2>
    <p className="text-gray-700 mb-4">
      Gemini API works well with other AI tools in your Fedora development environment:
    </p>
    <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2 ml-4">
      <li>Use Gemini API for cloud-based AI assistance in IDEs</li>
      <li>Combine with local tools like Granite.Code for hybrid workflows</li>
      <li>Use RamaLama for local model serving alongside cloud APIs</li>
      <li>Integrate with your existing development tools and workflows</li>
    </ul>

    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-8 rounded">
      <p className="text-gray-700">
        <strong>Summary:</strong> Gemini API provides powerful Google AI models for code assistance directly in your IDE. With proper setup and API key configuration, 
        you can enhance your development workflow with intelligent code generation, explanation, and debugging capabilities. Remember to use it only for approved 
        code assistant use cases and keep your API keys secure.
      </p>
    </div>
  </div>
)

export default Gemini

