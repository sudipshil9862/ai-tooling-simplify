const ClaudeCode = () => (
  <div className="prose prose-lg max-w-none">
    <h1 className="text-4xl font-bold text-gray-900 mb-4">Claude Code — AI Command-Line Assistant</h1>
    <p className="text-lg text-gray-600 mb-6">
      An advanced AI command-line interface (CLI) assistant ready to support your daily development tasks with code generation, problem-solving, and technical communications.
    </p>

    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What is Claude Code?</h2>
    <p className="text-gray-700 mb-4 leading-relaxed">
      Claude Code is an advanced AI command-line interface assistant designed to support your daily development tasks. Whether you're looking for help with code generation, 
      problem-solving, or drafting technical communications, Claude Code is here to assist directly from your terminal.
    </p>

    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6 rounded">
      <p className="text-gray-700">
        <strong>Important:</strong> The approval for Claude Code is limited to code assistant use cases only. This includes code development and contributions related to 
        internal repositories, Red Hat products, and open source projects.
      </p>
    </div>

    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Key Features</h2>
    <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg mb-6">
      <ul className="list-none space-y-3">
        <li className="flex items-start">
          <span className="text-2xl mr-3">💻</span>
          <div>
            <strong className="text-gray-900">Code Generation:</strong>
            <span className="text-gray-700 ml-2">Generate code from natural language descriptions</span>
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-2xl mr-3">🔧</span>
          <div>
            <strong className="text-gray-900">Problem-Solving:</strong>
            <span className="text-gray-700 ml-2">Get help debugging and solving coding challenges</span>
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-2xl mr-3">📝</span>
          <div>
            <strong className="text-gray-900">Technical Communications:</strong>
            <span className="text-gray-700 ml-2">Draft documentation, comments, and technical writing</span>
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-2xl mr-3">🔒</span>
          <div>
            <strong className="text-gray-900">Privacy-Focused:</strong>
            <span className="text-gray-700 ml-2">Data protections agreement with Google for secure usage</span>
          </div>
        </li>
      </ul>
    </div>

    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Who Has Access</h2>
    <p className="text-gray-700 mb-4">
      Claude Code is available to:
    </p>
    <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2 ml-4">
      <li>Associates and contractors in Products, Global Engineering, and IT within Anthropic's supported countries and regions</li>
      <li>Not yet available in Netherlands and France (pending regulatory compliance)</li>
      <li>If you're not in the above groups, you can request access at help.redhat.com</li>
    </ul>

    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Fedora Installation & Setup</h2>
    
    <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Prerequisites</h3>
    <p className="text-gray-700 mb-4">
      Before installing Claude Code, you must:
    </p>
    <ol className="list-decimal list-inside text-gray-700 mb-6 space-y-2 ml-4">
      <li>Submit a form acknowledging you've reviewed required reading (guidelines, policies, responsible AI use, legal compliance, Red Hat's AI policy, and Claude Code User Guide)</li>
      <li>Review guidelines for using AI code assistants responsibly</li>
    </ol>

    <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Installation on Fedora</h3>
    <div className="bg-gray-900 text-gray-100 p-6 rounded-lg mb-6 overflow-x-auto">
      <pre className="text-sm font-mono">
        <code className="text-green-400"># Follow the official Claude Code Install Instructions</code>
        <br />
        <span className="text-gray-400"># Access is provided through Red Hat's data protections agreement with Google</span>
        <br />
        <br />
        <code className="text-green-400"># Installation steps will be provided after approval</code>
        <br />
        <span className="text-gray-400"># Check the internal documentation for specific CLI setup</span>
      </pre>
    </div>

    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Using Claude Code in Fedora Terminal</h2>
    <p className="text-gray-700 mb-4">
      Once installed, Claude Code works directly from your Fedora terminal:
    </p>
    <div className="bg-gray-900 text-gray-100 p-6 rounded-lg mb-6 overflow-x-auto">
      <pre className="text-sm font-mono">
        <code className="text-green-400"># Navigate to your project</code>
        <br />
        <span className="text-gray-400">cd</span> ~/fedoraspace_publichtml/my-project
        <br />
        <br />
        <code className="text-green-400"># Use Claude Code for code generation</code>
        <br />
        claude-code generate --prompt "Create a React component for a user profile"
        <br />
        <br />
        <code className="text-green-400"># Get help with debugging</code>
        <br />
        claude-code debug --file src/App.jsx
        <br />
        <br />
        <code className="text-green-400"># Ask questions about code</code>
        <br />
        claude-code explain --file src/components/Card.jsx
      </pre>
    </div>

    <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-6 rounded">
      <p className="text-gray-700">
        <strong>Note:</strong> The exact commands may vary based on the Claude Code implementation. 
        Always refer to the official Claude Code User Guide for the most up-to-date command syntax.
      </p>
    </div>

    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Best Practices</h2>
    <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6 rounded">
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Use Claude Code only for approved code assistant use cases</li>
        <li>Follow Red Hat's AI policy and responsible AI use guidelines</li>
        <li>Review generated code before committing to repositories</li>
        <li>Ensure compliance with local and regional regulations</li>
        <li>Keep your installation updated with the latest version</li>
      </ul>
    </div>

    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Getting Help</h2>
    <div className="bg-gray-50 p-6 rounded-lg mb-6">
      <p className="text-gray-700 mb-4">
        If you run into any issues with installation, setup, or usage:
      </p>
      <ul className="space-y-3">
        <li>
          <strong className="text-gray-900">Slack Channel:</strong>{' '}
          <code className="bg-gray-100 px-2 py-1 rounded">#help-rh-code-assist</code>
        </li>
        <li>
          <strong className="text-gray-900">Internal Documentation:</strong> Refer to the Claude Code User Guide
        </li>
        <li>
          <strong className="text-gray-900">Access Requests:</strong> help.redhat.com
        </li>
      </ul>
    </div>

    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Integration with Other Tools</h2>
    <p className="text-gray-700 mb-4">
      Claude Code can work alongside other AI tools in your Fedora development environment:
    </p>
    <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2 ml-4">
      <li>Use Claude Code for CLI-based code generation and assistance</li>
      <li>Combine with Granite.Code for VS Code integration</li>
      <li>Use with RamaLama for local model serving</li>
      <li>Integrate with your existing development workflow</li>
    </ul>

    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-8 rounded">
      <p className="text-gray-700">
        <strong>Summary:</strong> Claude Code provides powerful AI assistance directly from your command line, making it perfect for developers who prefer 
        terminal-based workflows. With proper approval and setup, it can significantly enhance your productivity while maintaining privacy and compliance 
        with Red Hat's AI policies.
      </p>
    </div>
  </div>
)

export default ClaudeCode

