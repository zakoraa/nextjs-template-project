<h1>🎨 Theme System</h1>

<p>
This project implements a scalable <strong>Design Token based Theme System</strong> built on top of
<strong>Tailwind CSS v4</strong>. The architecture separates raw color values, semantic tokens,
and theme overrides to support multiple themes such as light, dark, or brand-specific themes.
</p>



<h2>📚 Table of Contents</h2>

<ul>
<li><a href="#architecture">Architecture Overview</a></li>
<li><a href="#folder-structure">Folder Structure</a></li>
<li><a href="#design-tokens">Design Tokens</a></li>
<li><a href="#primitives">Primitives</a></li>
<li><a href="#semantic-tokens">Semantic Tokens</a></li>
<li><a href="#themes">Themes</a></li>
<li><a href="#tailwind-integration">Tailwind Integration</a></li>
<li><a href="#usage">Usage</a></li>
<li><a href="#adding-new-theme">Adding a New Theme</a></li>
</ul>



<hr>



<h2 id="architecture">🏗 Architecture Overview</h2>

<p>
The theme system follows a layered <strong>Design Token Architecture</strong>.
Each layer has a clear responsibility.
</p>

<pre>
Primitives (raw colors)
        ↓
Semantic Tokens (UI meaning)
        ↓
Themes (override semantic tokens)
        ↓
Tailwind Theme Mapping
        ↓
UI Components
</pre>

<p>
Components never use raw colors directly. They always consume
<strong>semantic tokens</strong>.
</p>



<hr>



<h2 id="folder-structure">📂 Folder Structure</h2>

<pre>
src/shared/theme

├ primitives
│   └ colors.css

├ semantic
│   └ colors.css

├ themes
│   ├ light.css
│   └ dark.css

├ tokens
│   ├ motion.css
│   ├ radius.css
│   ├ shadows.css
│   ├ spacing.css
│   ├ typography.css
│   └ z-index.css

├ tailwind-theme.css
└ index.css
</pre>



<hr>



<h2 id="design-tokens">🎯 Design Tokens</h2>

<p>
Design tokens represent the visual design decisions of the system
(colors, spacing, typography, etc).
</p>

<table>
<thead>
<tr>
<th>Layer</th>
<th>Purpose</th>
</tr>
</thead>

<tbody>

<tr>
<td>Primitives</td>
<td>Raw brand and system color values</td>
</tr>

<tr>
<td>Semantic</td>
<td>Defines UI meaning (background, primary, border, etc)</td>
</tr>

<tr>
<td>Themes</td>
<td>Overrides semantic tokens for different themes</td>
</tr>

<tr>
<td>Tokens</td>
<td>Other design tokens (spacing, motion, typography, etc)</td>
</tr>

</tbody>
</table>



<hr>



<h2 id="primitives">🎨 Primitives</h2>

<p>
Primitives contain raw color values such as brand colors and status colors.
They should not represent UI meaning.
</p>

<pre>
--brand-primary
--brand-primary-hover
--brand-primary-active

--color-success
--color-warning
--color-danger
--color-info
</pre>

Example:

<pre>
--brand-primary: #2563eb;
--color-success: #16a34a;
</pre>

These values rarely change across themes.



<hr>



<h2 id="semantic-tokens">🧠 Semantic Tokens</h2>

<p>
Semantic tokens represent the meaning of a color in the UI.
</p>

Examples:

<pre>
--background
--foreground
--primary
--secondary
--border
--card
--muted
</pre>

Example mapping:

<pre>
--primary: var(--brand-primary);
</pre>

Components use semantic tokens rather than primitives.



<hr>



<h2 id="themes">🌗 Themes</h2>

<p>
Themes override semantic tokens to change the UI appearance.
</p>

Current themes:

<ul>
<li>Light</li>
<li>Dark</li>
</ul>



<h3>Light Theme</h3>

<pre>
:root {
  --background: white;
  --foreground: #111827;
}
</pre>



<h3>Dark Theme</h3>

<pre>
.dark {
  --background: #111827;
  --foreground: #f9fafb;
}
</pre>

When the <code>dark</code> class is applied to the root element, the dark theme becomes active.



<hr>



<h2 id="tailwind-integration">⚡ Tailwind Integration</h2>

<p>
Semantic tokens are mapped to Tailwind utilities using <code>@theme</code>.
</p>

Example mapping:

<pre>
@theme {

  --color-background: var(--background);
  --color-primary: var(--primary);

}
</pre>

This allows Tailwind utilities like:

<pre>
bg-background
bg-primary
text-primary
border-border
</pre>



<hr>



<h2 id="usage">🧩 Usage</h2>

Components use Tailwind utilities generated from semantic tokens.

Example:

<pre>
&lt;button class="bg-primary text-primary-foreground"&gt;
  Submit
&lt;/button&gt;
</pre>



<hr>



<h2 id="adding-new-theme">➕ Adding a New Theme</h2>

To add a new theme:

<p>1️⃣ Create a new theme file</p>

<pre>
themes/corporate.css
</pre>

Example:

<pre>
.theme-corporate {

  --primary: #7c3aed;
  --background: #f9fafb;

}
</pre>


<p>2️⃣ Activate the theme in HTML</p>

<pre>
&lt;html class="theme-corporate"&gt;
</pre>


<p>
All components automatically adapt because they rely on semantic tokens.
</p>



<hr>



<h2>✅ Summary</h2>

<ul>

<li>Primitives define raw color values</li>
<li>Semantic tokens define UI meaning</li>
<li>Themes override semantic tokens</li>
<li>Tailwind utilities are generated from semantic tokens</li>
<li>Components consume semantic tokens via Tailwind</li>

</ul>