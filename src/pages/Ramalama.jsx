const Ramalama = () => (
  <div className="prose prose-lg max-w-none">
    <h1 className="text-4xl font-bold text-gray-900 mb-4">RamaLama — Simplifying AI with Containers</h1>
    
    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6 rounded">
      <p className="text-gray-700 mb-2">
        <strong>Fun Fact:</strong> Ramalama is named after the famous song <strong>"RamaLama Dingdong"</strong> by Rocky Sharp and the Replays. 
        <a 
          href="https://youtu.be/0HhA0Cghr4k?si=C6yBsBgQqrCF3W7z" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-600 underline ml-2"
        >
          Listen to it here →
        </a>
      </p>
    </div>

    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
      RamaLama is an open-source CLI tool that facilitates an easy, secure, and open way to run and serve your LLMs locally. 
      It bridges the world of AI inference with the world of containers using technologies like Podman, Docker, OpenShift, and Kubernetes.
    </p>

    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Key Features</h2>
    
    <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg mb-6">
      <ul className="list-none space-y-3">
        <li className="flex items-start">
          <span className="text-2xl mr-3">⚡</span>
          <div>
            <strong className="text-gray-900">One-liner Commands:</strong>
            <span className="text-gray-700 ml-2">Simple install and run commands make it incredibly easy to get started.</span>
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-2xl mr-3">🔒</span>
          <div>
            <strong className="text-gray-900">OCI-Centric (Open Container Initiative):</strong>
            <span className="text-gray-700 ml-2">Built with container standards at its core.</span>
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-2xl mr-3">🚀</span>
          <div>
            <strong className="text-gray-900">GPU Auto-Detection:</strong>
            <span className="text-gray-700 ml-2">Automatically discovers and uses AI accelerators (like NVIDIA GPUs) or falls back to CPU.</span>
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-2xl mr-3">📦</span>
          <div>
            <strong className="text-gray-900">Model Distribution:</strong>
            <span className="text-gray-700 ml-2">AI models are distributed as OCI-compliant artifacts, making it easy to push them to OCI-compatible registries.</span>
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-2xl mr-3">🛡️</span>
          <div>
            <strong className="text-gray-900">Secure Execution:</strong>
            <span className="text-gray-700 ml-2">Enables execution of untrusted models in secure, isolated environments like containers or virtual machines.</span>
          </div>
        </li>
      </ul>
    </div>

    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Daemonless Architecture</h2>
    <p className="text-gray-700 mb-4">
      RamaLama is daemonless by default — no background service required. Simply run <code className="bg-gray-100 px-2 py-1 rounded">ramalama run</code> and you're good to go!
    </p>
    <p className="text-gray-700 mb-6">
      For serving models, use <code className="bg-gray-100 px-2 py-1 rounded">ramalama serve</code> which enables inference engines of your choice (like llama.cpp's HTTP server).
    </p>

    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Model Sources & Inference Runtimes</h2>
    <p className="text-gray-700 mb-4">
      RamaLama supports pulling models from multiple sources:
    </p>
    <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2 ml-4">
      <li>Hugging Face</li>
      <li>Ollama</li>
      <li>OCI container registries</li>
    </ul>
    <p className="text-gray-700 mb-6">
      You can also push your models as OCI artifacts to any OCI-compatible container registry. RamaLama lets you choose the inference runtime 
      (like vLLM, llama.cpp, or whisper.cpp) to run your models efficiently on your machine.
    </p>

    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Easy Deployment</h2>
    <p className="text-gray-700 mb-4">
      RamaLama makes LLM deployment incredibly easy:
    </p>
    <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2 ml-4">
      <li><strong>Systemd Services:</strong> Generate Quadlet .service files to run your LLMs as background systemd services</li>
      <li><strong>Kubernetes:</strong> Generate Kubernetes YAML files for direct deployment to K8s clusters</li>
    </ul>

    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Fedora Installation & Setup</h2>
    
    <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Prerequisites on Fedora</h3>
    <p className="text-gray-700 mb-4">
      Before installing RamaLama, ensure you have Podman installed (Fedora's default container runtime):
    </p>
    <div className="bg-gray-900 text-gray-100 p-6 rounded-lg mb-6 overflow-x-auto">
      <pre className="text-sm font-mono">
        <code className="text-green-400"># Check if Podman is installed</code>
        <br />
        podman --version
        <br /><br />
        <code className="text-green-400"># If not installed, install Podman</code>
        <br />
        <span className="text-yellow-400">sudo</span> dnf install podman
        <br /><br />
        <code className="text-green-400"># Install Python 3 and pip (if not already installed)</code>
        <br />
        <span className="text-yellow-400">sudo</span> dnf install python3 python3-pip
      </pre>
    </div>

    <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Install RamaLama on Fedora</h3>
    <div className="bg-gray-900 text-gray-100 p-6 rounded-lg mb-6 overflow-x-auto">
      <pre className="text-sm font-mono">
        <code className="text-green-400"># Install RamaLama from Fedora repositories</code>
        <br />
        <span className="text-yellow-400">sudo</span> dnf install python3-ramalama
        <br /><br />
        <code className="text-green-400"># Verify installation</code>
        <br />
        ramalama version
        <br />
        ramalama --help
      </pre>
    </div>

    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Quick Start Guide</h2>
    <div className="bg-gray-900 text-gray-100 p-6 rounded-lg mb-6 overflow-x-auto">
      <pre className="text-sm font-mono">
        <code className="text-green-400"># List available models</code>
        <br />
        ramalama list
        <br /><br />
        <code className="text-green-400"># Run a model interactively</code>
        <br />
        ramalama run granite3-moe
        <br />
        <span className="text-gray-400"># Output:</span>
        <br />
        <span className="text-blue-400">🦭</span> &gt; capital of tripura
        <br />
        The capital of Tripura is Agartala.
        <br /><br />
        <code className="text-green-400"># Pull a model from Ollama</code>
        <br />
        ramalama pull ollama://tinyllama
        <br /><br />
        <code className="text-green-400"># Serve a model with web UI</code>
        <br />
        ramalama serve granite3-moe
      </pre>
    </div>
    <p className="text-gray-600 text-sm mb-6 italic">
      When you run <code className="bg-gray-100 px-2 py-1 rounded">ramalama serve</code>, you'll be presented with a nice web UI powered by llama.cpp's HTTP server.
    </p>

    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">RAG (Retrieval-Augmented Generation)</h2>
    <p className="text-gray-700 mb-4">
      RamaLama includes powerful RAG capabilities that allow you to enhance your models with custom knowledge bases.
    </p>
    
    <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">How RAG Works in RamaLama</h3>
    <p className="text-gray-700 mb-4">
      The <code className="bg-gray-100 px-2 py-1 rounded">ramalama rag</code> command uses a compatible container image (includes the docling tool) to:
    </p>
    <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2 ml-4">
      <li>Process your documents</li>
      <li>Convert text into numerical vectors (embeddings) — think of it as turning text into a special math format that AI can understand and search through quickly</li>
      <li>Package everything into an OCI image</li>
    </ul>

    <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-6 rounded">
      <p className="text-gray-700 mb-2">
        <strong>Example:</strong> Suppose your document says: "Red Hat uses Podman for containerization."
      </p>
      <p className="text-gray-700 mb-2">
        And you ask: "What tool does Red Hat use for managing containers?"
      </p>
      <p className="text-gray-700">
        <strong>Without vectors:</strong> LLM may guess.<br />
        <strong>With vectors:</strong> It finds the exact line from your document and gives a precise answer.
      </p>
    </div>

    <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">RAG Commands</h3>
    <div className="bg-gray-900 text-gray-100 p-6 rounded-lg mb-6 overflow-x-auto">
      <pre className="text-sm font-mono">
        <code className="text-green-400"># Create a RAG from documents</code>
        <br />
        ramalama rag --input docs/ --output legal-rag.oci
        <br /><br />
        <code className="text-green-400"># Run a model with RAG attached</code>
        <br />
        ramalama run --rag legal-rag.oci
        <br /><br />
        <code className="text-green-400"># Alternative syntax</code>
        <br />
        ramalama rag myrag.oci ./docs
        <br /><br />
        <code className="text-green-400"># Serve a model with RAG</code>
        <br />
        ramalama serve hf://TheBloke/Llama-2-7B-GGUF --rag myrag.oci
        <br /><br />
        <code className="text-green-400"># Inspect a RAG</code>
        <br />
        ramalama inspect myrag.oci
        <br /><br />
        <code className="text-green-400"># Remove a RAG</code>
        <br />
        ramalama rm myrag.oci
      </pre>
    </div>

    <p className="text-gray-700 mb-6">
      <strong>Use Case:</strong> You want your LLM to answer based on Legal PDFs, product manuals, or internal documentation. 
      With RamaLama RAG, you can turn those into a knowledge-backed model — all containerized, portable, and secure.
    </p>

    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Technical Details</h2>
    <p className="text-gray-700 mb-4">
      RamaLama is Python3-based and involves high-level Python programming. The project focuses heavily on developer experience, 
      making it easy for developers to work with AI models locally.
    </p>

    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Resources</h2>
    <div className="bg-gray-50 p-6 rounded-lg mb-6">
      <ul className="space-y-3">
        <li>
          <strong className="text-gray-900">Official Website:</strong>{' '}
          <a 
            href="https://ramalama.ai/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-600 underline hover:text-blue-800"
          >
            https://ramalama.ai/
          </a>
        </li>
        <li>
          <strong className="text-gray-900">GitHub Repository:</strong>{' '}
          <a 
            href="https://github.com/containers/ramalama" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-600 underline hover:text-blue-800"
          >
            https://github.com/containers/ramalama
          </a>
          {' '}— Contributions welcome!
        </li>
      </ul>
    </div>

    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Using RamaLama in Fedora Projects</h2>
    
    <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">In Fedora Terminal</h3>
    <p className="text-gray-700 mb-4">
      You can use RamaLama directly from any Fedora terminal. Here are common workflows:
    </p>
    <div className="bg-gray-900 text-gray-100 p-6 rounded-lg mb-6 overflow-x-auto">
      <pre className="text-sm font-mono">
        <code className="text-green-400"># Navigate to your project directory</code>
        <br />
        <span className="text-gray-400">cd</span> ~/fedoraspace_publichtml/my-project
        <br /><br />
        <code className="text-green-400"># Run a model for your project</code>
        <br />
        ramalama run granite3-moe
        <br /><br />
        <code className="text-green-400"># Serve a model for API access</code>
        <br />
        ramalama serve granite3-moe --port 8080
        <br />
        <span className="text-gray-400"># Access at http://localhost:8080</span>
      </pre>
    </div>

    <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">In Fedora Apps/Projects Directory</h3>
    <p className="text-gray-700 mb-4">
      For Fedora applications or projects, you can integrate RamaLama as a service:
    </p>
    <div className="bg-gray-900 text-gray-100 p-6 rounded-lg mb-6 overflow-x-auto">
      <pre className="text-sm font-mono">
        <code className="text-green-400"># Create a systemd service for your project</code>
        <br />
        <span className="text-gray-400">cd</span> ~/fedoraspace_publichtml/my-app
        <br />
        ramalama generate systemd --model granite3-moe --name my-ai-service
        <br /><br />
        <code className="text-green-400"># Install the service</code>
        <br />
        <span className="text-yellow-400">sudo</span> cp my-ai-service.service /etc/systemd/system/
        <br />
        <span className="text-yellow-400">sudo</span> systemctl enable my-ai-service
        <br />
        <span className="text-yellow-400">sudo</span> systemctl start my-ai-service
        <br /><br />
        <code className="text-green-400"># Check service status</code>
        <br />
        <span className="text-yellow-400">sudo</span> systemctl status my-ai-service
      </pre>
    </div>

    <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Integration with Fedora Web Projects</h3>
    <p className="text-gray-700 mb-4">
      For web applications in your <code className="bg-gray-100 px-2 py-1 rounded">fedoraspace_publichtml</code> directory:
    </p>
    <div className="bg-gray-900 text-gray-100 p-6 rounded-lg mb-6 overflow-x-auto">
      <pre className="text-sm font-mono">
        <code className="text-green-400"># Start RamaLama server in background</code>
        <br />
        <span className="text-gray-400">cd</span> ~/fedoraspace_publichtml/ai-blog
        <br />
        ramalama serve granite3-moe --port 8080 &amp;
        <br /><br />
        <code className="text-green-400"># Your web app can now call the API</code>
        <br />
        <span className="text-gray-400">curl</span> http://localhost:8080/v1/completions \
        <br />
        &nbsp;&nbsp;-H <span className="text-green-300">"Content-Type: application/json"</span> \
        <br />
        &nbsp;&nbsp;-d <span className="text-green-300">{`'{"prompt": "Hello", "max_tokens": 50}'`}</span>
      </pre>
    </div>

    <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6 rounded">
      <p className="text-gray-700">
        <strong>Tip:</strong> RamaLama works seamlessly with Podman (Fedora's default), so no Docker daemon is needed. 
        All containers run rootless by default, making it secure and easy to use.
      </p>
    </div>

    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-8 rounded">
      <p className="text-gray-700">
        <strong>My Opinion:</strong> RamaLama is focusing heavily on developer experience, making it one of the most developer-friendly tools 
        for running LLMs locally with containers. The OCI-centric approach and daemonless architecture make it both powerful and easy to use.
      </p>
    </div>
  </div>
)

export default Ramalama
