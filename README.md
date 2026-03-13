<h1 align="center">Next.js Feature-First Clean Architecture Template</h1>

<p align="center">
A scalable and production-ready <b>Next.js template</b> built with <b>Feature-First Clean Architecture</b>.
</p>

<hr/>

<h2>📚 Table of Contents</h2>

<ul>
<li><a href="#project-overview">Project Overview</a></li>
<li><a href="#tech-stack">Tech Stack</a></li>
<li><a href="#dependencies">Core Dependencies</a></li>
<li><a href="#project-structure">Project Structure</a></li>
<li><a href="#architecture-overview">Architecture Overview</a></li>
<li><a href="#layer-responsibilities">Layer Responsibilities</a></li>
<li><a href="#getting-started">Getting Started</a></li>
<li><a href="#documentation">Documentation</a></li>
<li><a href="#goals-of-this-template">Goals of This Template</a></li>
</ul>

<hr/>

<h2 id="project-overview">📦 Project Overview</h2>

<p>
This repository provides a <b>scalable starter template for Next.js applications</b> using
<b>Feature-First Clean Architecture</b>.  
The template is designed to support large-scale frontend applications while maintaining
clear separation of concerns, maintainability, and modularity.
</p>

<p>
It integrates modern frontend tooling and patterns including:
</p>

<ul>
<li>Next.js App Router</li>
<li>Feature-based architecture</li>
<li>Clean Architecture separation</li>
<li>Server state management with TanStack Query</li>
<li>Client state management with Zustand</li>
<li>Schema validation with Zod</li>
<li>Modern styling with Tailwind CSS</li>
</ul>

<hr/>

<h2 id="tech-stack">⚙️ Tech Stack</h2>

<table>
<thead>
<tr>
<th>Category</th>
<th>Technology</th>
<th>Description</th>
</tr>
</thead>
<tbody>

<tr>
<td>Framework</td>
<td>Next.js v16+</td>
<td>React framework with App Router and server capabilities</td>
</tr>

<tr>
<td>Language</td>
<td>TypeScript</td>
<td>Type-safe development</td>
</tr>

<tr>
<td>CSS Framework</td>
<td>Tailwind CSS v4+</td>
<td>Utility-first styling system</td>
</tr>

<tr>
<td>Package Manager</td>
<td>pnpm v10+</td>
<td>Fast and efficient dependency management</td>
</tr>

<tr>
<td>Architecture</td>
<td>Feature-First Clean Architecture</td>
<td>Scalable frontend architecture pattern</td>
</tr>

<tr>
<td>Server State</td>
<td>TanStack Query</td>
<td>Remote data fetching and caching</td>
</tr>

<tr>
<td>Client State</td>
<td>Zustand</td>
<td>Lightweight global state management</td>
</tr>

<tr>
<td>Internationalization</td>
<td>next-intl</td>
<td>Multi-language support</td>
</tr>

<tr>
<td>Authentication</td>
<td>next-auth</td>
<td>Authentication and session management</td>
</tr>

<tr>
<td>Theme</td>
<td>next-themes</td>
<td>Dark/light theme switching</td>
</tr>

<tr>
<td>HTTP Client</td>
<td>Axios</td>
<td>API communication layer</td>
</tr>

<tr>
<td>Forms</td>
<td>react-hook-form</td>
<td>Form state management</td>
</tr>

<tr>
<td>Validation</td>
<td>Zod</td>
<td>Schema validation</td>
</tr>

</tbody>
</table>

<hr/>

<h2 id="dependencies">📦 Core Dependencies</h2>

<table>
<thead>
<tr>
<th>Package</th>
<th>Purpose</th>
</tr>
</thead>

<tbody>

<tr>
<td>next</td>
<td>React framework</td>
</tr>

<tr>
<td>react</td>
<td>UI library</td>
</tr>

<tr>
<td>typescript</td>
<td>Static typing</td>
</tr>

<tr>
<td>@tanstack/react-query</td>
<td>Server state management</td>
</tr>

<tr>
<td>zustand</td>
<td>Client state management</td>
</tr>

<tr>
<td>axios</td>
<td>HTTP requests</td>
</tr>

<tr>
<td>react-hook-form</td>
<td>Form management</td>
</tr>

<tr>
<td>zod</td>
<td>Validation schemas</td>
</tr>

<tr>
<td>next-auth</td>
<td>Authentication system</td>
</tr>

<tr>
<td>next-intl</td>
<td>Internationalization</td>
</tr>

<tr>
<td>next-themes</td>
<td>Theme switching</td>
</tr>

<tr>
<td>tailwindcss</td>
<td>CSS framework</td>
</tr>

</tbody>
</table>

<hr/>

<h2 id="project-structure">📁 Project Structure</h2>

<pre>
src
│
├ app                 → Next.js App Router
│
├ entities            → Core domain entities
│
├ features            → Business features
│
├ processes           → Multi-feature flows
│
├ widgets             → UI composition layer
│
└ shared              → Reusable utilities and infrastructure
</pre>

<hr/>

<h2 id="architecture-overview">🏗 Architecture Overview</h2>

<p>
The project follows a layered architecture inspired by
<b>Feature-Sliced Design</b> and <b>Clean Architecture</b>.
</p>

<pre>
app
│
widgets
│
processes
│
features
│
entities
│
shared
</pre>

<p>
Dependency rule:
</p>

<pre>
widgets → features → entities → shared
</pre>

<p>
Lower layers must not depend on upper layers.
</p>

<hr/>

<h2 id="layer-responsibilities">🧩 Layer Responsibilities</h2>

<table>
<thead>
<tr>
<th>Layer</th>
<th>Description</th>
</tr>
</thead>

<tbody>

<tr>
<td>app</td>
<td>Next.js routing and layouts</td>
</tr>

<tr>
<td>widgets</td>
<td>UI composition blocks</td>
</tr>

<tr>
<td>processes</td>
<td>Multi-feature business flows</td>
</tr>

<tr>
<td>features</td>
<td>Business capabilities</td>
</tr>

<tr>
<td>entities</td>
<td>Reusable domain models</td>
</tr>

<tr>
<td>shared</td>
<td>Global utilities, UI primitives, configs</td>
</tr>

</tbody>
</table>

<hr/>

<h2 id="getting-started">🚀 Getting Started</h2>

<h3>Install dependencies</h3>

<pre>
pnpm install
</pre>

<h3>Run development server</h3>

<pre>
pnpm dev
</pre>

<h3>Build project</h3>

<pre>
pnpm build
</pre>

<hr/>

<h2 id="documentation">📖 Documentation</h2>

<p>
Detailed documentation for each layer is available in their respective directories.
</p>

<ul>

<li><a href="./src/shared/README.md">Shared Layer Documentation</a></li>

<li><a href="./src/entities/README.md">Entities Layer Documentation</a></li>

<li><a href="./src/features/README.md">Features Layer Documentation</a></li>

<li><a href="./src/widgets/README.md">Widgets Layer Documentation</a></li>

<li><a href="./src/processes/README.md">Processes Layer Documentation</a></li>

</ul>

<hr/>

<h2 id="goals-of-this-template">🎯 Goals of This Template</h2>

<ul>

<li>Create a scalable frontend architecture</li>

<li>Encourage separation of concerns</li>

<li>Improve maintainability for large projects</li>

<li>Provide a clean starting point for new projects</li>

<li>Standardize development patterns</li>

</ul>

<hr/>

<p align="center">
Built for scalable Next.js applications.
</p>

<p align="center">
<sub>by Zakora</sub>
</p>
