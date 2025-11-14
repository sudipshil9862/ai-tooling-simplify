const Instructlab = () => (
  <div className="prose prose-lg max-w-none">
    <h1 className="text-4xl font-bold text-gray-900 mb-4">InstructLab — Fine-Tune LLMs for Your Domain</h1>
    <p className="text-lg text-gray-600 mb-6">
      Learn how to fine-tune Large Language Models (LLMs) for domain-specific Q&A, especially useful in law, public service, and specialized industries.
    </p>

    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What is InstructLab?</h2>
    <p className="text-gray-700 mb-4 leading-relaxed">
      InstructLab is an open-source framework that enables you to fine-tune LLMs for specific domains and use cases. 
      Unlike general-purpose AI models, InstructLab allows you to train models on your own data, making them experts in your particular field.
    </p>

    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6 rounded">
      <p className="text-gray-700">
        <strong>Key Concept:</strong> InstructLab helps you create specialized AI models that understand your domain's terminology, 
        context, and requirements — perfect for legal documents, government services, medical information, or any specialized field.
      </p>
    </div>

    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Why Use InstructLab?</h2>
    <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg mb-6">
      <ul className="list-none space-y-3">
        <li className="flex items-start">
          <span className="text-2xl mr-3">🎯</span>
          <div>
            <strong className="text-gray-900">Domain-Specific Expertise:</strong>
            <span className="text-gray-700 ml-2">Train models on your specific domain knowledge</span>
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-2xl mr-3">⚖️</span>
          <div>
            <strong className="text-gray-900">Legal & Public Service:</strong>
            <span className="text-gray-700 ml-2">Particularly useful for law firms and government agencies</span>
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-2xl mr-3">🔒</span>
          <div>
            <strong className="text-gray-900">Privacy & Control:</strong>
            <span className="text-gray-700 ml-2">Keep your training data and models private</span>
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-2xl mr-3">📚</span>
          <div>
            <strong className="text-gray-900">Custom Knowledge Base:</strong>
            <span className="text-gray-700 ml-2">Build Q&A systems based on your documentation</span>
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-2xl mr-3">🔄</span>
          <div>
            <strong className="text-gray-900">Continuous Improvement:</strong>
            <span className="text-gray-700 ml-2">Iteratively improve your model with new data</span>
          </div>
        </li>
      </ul>
    </div>

    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How InstructLab Works</h2>
    <p className="text-gray-700 mb-4">
      InstructLab uses a process called fine-tuning, which involves:
    </p>
    <ol className="list-decimal list-inside text-gray-700 mb-6 space-y-3 ml-4">
      <li>
        <strong>Data Preparation:</strong> Collect and format your domain-specific questions and answers
      </li>
      <li>
        <strong>Model Selection:</strong> Choose a base LLM (like Granite or other open-source models)
      </li>
      <li>
        <strong>Fine-Tuning:</strong> Train the model on your specific data
      </li>
      <li>
        <strong>Evaluation:</strong> Test the model's performance on your domain
      </li>
      <li>
        <strong>Deployment:</strong> Use the fine-tuned model for your applications
      </li>
    </ol>

    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Use Cases</h2>
    <div className="grid md:grid-cols-2 gap-4 mb-6">
      <div className="bg-white border border-gray-200 rounded-lg p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">⚖️ Legal Services</h3>
        <p className="text-gray-700 text-sm">
          Train models on legal documents, case law, and regulations to create AI assistants that can help with legal research, 
          document analysis, and client questions.
        </p>
      </div>
      <div className="bg-white border border-gray-200 rounded-lg p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">🏛️ Public Service</h3>
        <p className="text-gray-700 text-sm">
          Create AI assistants for government agencies that understand public policies, regulations, and can answer citizen questions accurately.
        </p>
      </div>
      <div className="bg-white border border-gray-200 rounded-lg p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">🏥 Healthcare</h3>
        <p className="text-gray-700 text-sm">
          Fine-tune models on medical literature, patient guidelines, and treatment protocols for specialized medical Q&A systems.
        </p>
      </div>
      <div className="bg-white border border-gray-200 rounded-lg p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">📚 Education</h3>
        <p className="text-gray-700 text-sm">
          Build educational assistants that understand your curriculum, textbooks, and can provide subject-specific tutoring.
        </p>
      </div>
    </div>

    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Fedora Installation & Setup</h2>
    
    <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Prerequisites on Fedora</h3>
    <p className="text-gray-700 mb-4">
      Before installing InstructLab, ensure you have the required dependencies:
    </p>
    <div className="bg-gray-900 text-gray-100 p-6 rounded-lg mb-6 overflow-x-auto">
      <pre className="text-sm font-mono">
        <code className="text-green-400"># Install Python 3 and development tools</code>
        <br />
        <span className="text-yellow-400">sudo</span> dnf install python3 python3-pip python3-devel
        <br />
        <br />
        <code className="text-green-400"># Install Git (if not already installed)</code>
        <br />
        <span className="text-yellow-400">sudo</span> dnf install git
        <br />
        <br />
        <code className="text-green-400"># Install build dependencies</code>
        <br />
        <span className="text-yellow-400">sudo</span> dnf groupinstall "Development Tools"
        <br />
        <span className="text-yellow-400">sudo</span> dnf install gcc gcc-c++ make
      </pre>
    </div>

    <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Install InstructLab on Fedora</h3>
    <div className="bg-gray-900 text-gray-100 p-6 rounded-lg mb-6 overflow-x-auto">
      <pre className="text-sm font-mono">
        <code className="text-green-400"># Install InstructLab using pip</code>
        <br />
        pip3 install --user instructlab
        <br />
        <br />
        <code className="text-green-400"># Or install from source</code>
        <br />
        git clone https://github.com/instructlab/instructlab.git
        <br />
        <span className="text-gray-400">cd</span> instructlab
        <br />
        pip3 install --user -e .
        <br />
        <br />
        <code className="text-green-400"># Verify installation</code>
        <br />
        instructlab --version
      </pre>
    </div>

    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Getting Started</h2>
    <p className="text-gray-700 mb-4">
      To get started with InstructLab on Fedora, you'll need:
    </p>
    <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2 ml-4">
      <li>A base LLM model (like Granite or other open-source models) - can use RamaLama to run it</li>
      <li>Domain-specific training data (Q&A pairs, documents, etc.)</li>
      <li>Computational resources (GPU recommended for faster training, but CPU works too)</li>
      <li>InstructLab framework installed (see above)</li>
    </ul>

    <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Basic Workflow on Fedora</h3>
    <div className="bg-gray-900 text-gray-100 p-6 rounded-lg mb-6 overflow-x-auto">
      <pre className="text-sm font-mono">
        <code className="text-green-400"># Prepare your training data</code>
        <br />
        <span className="text-gray-400">mkdir</span> -p ~/fedoraspace_publichtml/my-project/training-data
        <br />
        <span className="text-gray-400"># Format: Q&A pairs in YAML or JSON</span>
        <br />
        <br />
        <code className="text-green-400"># Fine-tune your model</code>
        <br />
        <span className="text-gray-400">cd</span> ~/fedoraspace_publichtml/my-project
        <br />
        instructlab train --model base-model --data training-data/your-data.yaml
        <br />
        <br />
        <code className="text-green-400"># Evaluate the fine-tuned model</code>
        <br />
        instructlab evaluate --model fine-tuned-model
        <br />
        <br />
        <code className="text-green-400"># Use your fine-tuned model with RamaLama</code>
        <br />
        ramalama serve fine-tuned-model --port 8080
      </pre>
    </div>

    <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-6 rounded">
      <p className="text-gray-700">
        <strong>Note:</strong> The exact commands may vary based on the InstructLab version and your setup. 
        Always refer to the official documentation for the most up-to-date instructions.
      </p>
    </div>

    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Best Practices</h2>
    <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6 rounded">
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li><strong>Quality over Quantity:</strong> Focus on high-quality, accurate Q&A pairs rather than large volumes of poor data</li>
        <li><strong>Domain Coverage:</strong> Ensure your training data covers the breadth of your domain</li>
        <li><strong>Regular Updates:</strong> Continuously add new data to keep your model current</li>
        <li><strong>Validation:</strong> Always validate your fine-tuned model on test data before deployment</li>
        <li><strong>Monitoring:</strong> Monitor model performance in production and retrain as needed</li>
      </ul>
    </div>

    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Integration with Other Tools</h2>
    <p className="text-gray-700 mb-4">
      InstructLab works well with other tools in the AI ecosystem:
    </p>
    <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2 ml-4">
      <li><strong>RamaLama:</strong> Deploy your fine-tuned models using RamaLama's container-based approach</li>
      <li><strong>Granite Models:</strong> Use IBM's Granite models as your base for fine-tuning</li>
      <li><strong>VS Code:</strong> Integrate with development workflows for testing and iteration</li>
    </ul>

    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Resources</h2>
    <div className="bg-gray-50 p-6 rounded-lg mb-6">
      <ul className="space-y-3">
        <li>
          <strong className="text-gray-900">Official Documentation:</strong>{' '}
          <a 
            href="https://instructlab.ai/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-600 underline hover:text-blue-800"
          >
            https://instructlab.ai/
          </a>
        </li>
        <li>
          <strong className="text-gray-900">GitHub Repository:</strong>{' '}
          <a 
            href="https://github.com/instructlab" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-600 underline hover:text-blue-800"
          >
            InstructLab on GitHub
          </a>
        </li>
        <li>
          <strong className="text-gray-900">Community:</strong> Join the InstructLab community for support and best practices
        </li>
      </ul>
    </div>

    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Example: Legal Q&A System</h2>
    <p className="text-gray-700 mb-4">
      Here's a practical example of how you might use InstructLab:
    </p>
    <div className="bg-gray-50 p-6 rounded-lg mb-6">
      <p className="text-gray-700 mb-3">
        <strong>Scenario:</strong> A law firm wants to create an AI assistant that can answer questions about employment law.
      </p>
      <ol className="list-decimal list-inside text-gray-700 space-y-2 ml-4">
        <li>Collect Q&A pairs from employment law cases, regulations, and legal documents</li>
        <li>Format the data according to InstructLab requirements</li>
        <li>Fine-tune a base Granite model on this data</li>
        <li>Deploy the model using RamaLama for easy access</li>
        <li>Integrate with the firm's document management system</li>
      </ol>
      <p className="text-gray-700 mt-3">
        The result: An AI assistant that understands employment law terminology and can provide accurate, context-aware answers.
      </p>
    </div>

    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Using InstructLab in Fedora Projects</h2>
    
    <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">In Fedora Terminal</h3>
    <p className="text-gray-700 mb-4">
      Work with InstructLab directly from your Fedora terminal:
    </p>
    <div className="bg-gray-900 text-gray-100 p-6 rounded-lg mb-6 overflow-x-auto">
      <pre className="text-sm font-mono">
        <code className="text-green-400"># Navigate to your project directory</code>
        <br />
        <span className="text-gray-400">cd</span> ~/fedoraspace_publichtml/my-project
        <br />
        <br />
        <code className="text-green-400"># Prepare training data</code>
        <br />
        <span className="text-gray-400">mkdir</span> training-data
        <br />
        <span className="text-gray-400"># Create YAML file with Q&A pairs</span>
        <br />
        <br />
        <code className="text-green-400"># Fine-tune a model</code>
        <br />
        instructlab train --model granite3-moe --data training-data/legal-qa.yaml
        <br />
        <br />
        <code className="text-green-400"># Test the fine-tuned model</code>
        <br />
        ramalama run fine-tuned-model
      </pre>
    </div>

    <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">In Fedora Apps/Projects Directory</h3>
    <p className="text-gray-700 mb-4">
      For Fedora applications, create a complete workflow:
    </p>
    <div className="bg-gray-900 text-gray-100 p-6 rounded-lg mb-6 overflow-x-auto">
      <pre className="text-sm font-mono">
        <code className="text-green-400"># Set up project structure</code>
        <br />
        <span className="text-gray-400">cd</span> ~/fedoraspace_publichtml/my-app
        <br />
        <span className="text-gray-400">mkdir</span> -p {`{training-data,models,scripts}`}
        <br />
        <br />
        <code className="text-green-400"># Create training script</code>
        <br />
        <span className="text-gray-400">cat</span> &gt; scripts/train.sh <span className="text-green-300">&lt;&lt;EOF</span>
        <br />
        <span className="text-gray-400">#!/bin/bash</span>
        <br />
        <span className="text-gray-400">cd</span> "$(dirname "$0")/.."
        <br />
        instructlab train --model granite3-moe --data training-data/domain-data.yaml
        <br />
        <span className="text-green-300">EOF</span>
        <br />
        <span className="text-yellow-400">chmod</span> +x scripts/train.sh
        <br />
        <br />
        <code className="text-green-400"># Run training</code>
        <br />
        ./scripts/train.sh
      </pre>
    </div>

    <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Integration with RamaLama and Granite</h3>
    <p className="text-gray-700 mb-4">
      InstructLab works perfectly with other Fedora AI tools:
    </p>
    <div className="bg-gray-900 text-gray-100 p-6 rounded-lg mb-6 overflow-x-auto">
      <pre className="text-sm font-mono">
        <code className="text-green-400"># 1. Fine-tune a Granite model with InstructLab</code>
        <br />
        instructlab train --model granite3-moe --data legal-qa.yaml
        <br />
        <br />
        <code className="text-green-400"># 2. Serve the fine-tuned model with RamaLama</code>
        <br />
        ramalama serve fine-tuned-granite --port 8080
        <br />
        <br />
        <code className="text-green-400"># 3. Use with Granite.Code extension in VS Code</code>
        <br />
        <span className="text-gray-400"># Configure Granite.Code to use http://localhost:8080</span>
        <br />
        <span className="text-gray-400">code ~/fedoraspace_publichtml/my-project</span>
      </pre>
    </div>

    <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6 rounded">
      <p className="text-gray-700">
        <strong>Fedora Workflow Tip:</strong> Combine all three tools - use InstructLab to fine-tune models, 
        RamaLama to serve them, and Granite.Code to integrate with your development workflow. 
        This creates a complete local AI development environment on Fedora!
      </p>
    </div>

    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-8 rounded">
      <p className="text-gray-700">
        <strong>Summary:</strong> InstructLab is a powerful tool for organizations that need AI models specialized in their domain. 
        Whether you're in law, public service, healthcare, or any specialized field, InstructLab enables you to create AI assistants 
        that truly understand your domain's unique requirements and terminology.
      </p>
    </div>
  </div>
)

export default Instructlab
