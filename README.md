# Pocket Docs
### It's just a file

(this is a work in progress, icyww)

check out the demo: https://jyoungblood.github.io/pocketdocs


[ ] include a screenshot once the boilerplate is looking good

HTML template for a single-page docs site. Incorporates tachyons and code blocks w/ prism.js
  just a single html file


simple static thing you can dev locally, push to gh pages
* for making ~beautiful~ single-page docs sites
simple stack & boilerplate, good starting point for low-effort nice-looking single page docs
designed to be a single page, easily extendable (add however much content) it's just html! put it on any server! (perfect for gh pages, btw)

assets load from cdn, so it's just a single file, sensible default config


the easiest way to start a nice looking docs site

Sidebar with auto-highlighting, responsive design (kinda?), AND A NICE DEFAULT DESIGN

(future) themeable - future easy theme w/ css vars

straightforward architecture, semantic html document structure
  - almost as easy as writing markdown (html is semantic, doesn’t have extra classes

inspired by OG knex docs (among others)
  for years i loved the knex docs because it was a single page. lots of info, but really easy to find everything and use the library

here's the default prism theme:
- https://prismjs.com/download.html#themes=prism-okaidia&languages=markup+css+clike+javascript+apacheconf+handlebars+markup-templating+nginx+php+sql&plugins=normalize-whitespace+toolbar+copy-to-clipboard
make your own & replace the prism.css & prism.js

probably gonna get a different syntax highlighter in the future

want to serve this all from a cdn but you gotta have the css & js for now ¯\_(ツ)_/¯



get you an icon: https://react-icons.github.io/
btw our bird icon is from the lucide collection at react icons - https://react-icons.github.io/react-icons/icons/lu/