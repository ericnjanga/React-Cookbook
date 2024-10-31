import { createServer, Model } from "miragejs";

const makeMirageServer = () => {

  createServer({
    models: {
      section: Model,
      category: Model,
      page: Model, 
      definition: Model,
    },

    seeds(server) {
      // DEFINITION ---------------------------------
      server.create('definition', {
        id: 1, 
        title: 'JSX',
        description: '---JSX---Lorem ipsum dolor sit amet consectetur. Vulputate purus elementum bibendum pharetra massa facilisis scelerisque tempor in. Commodo pulvinar aliquet lacinia neque nibh tempor. Proin montes nullam sed nunc accumsan. Eu id nulla est diam.',
      });
      server.create('definition', {
        id: 2, 
        title: 'Grid Layout',
        description: 'A two-dimensional layout system that allows you to create complex, grid-based designs. It’s used when both rows and columns need to be defined (e.g., dashboards, galleries, complex page).',
      });
      server.create('definition', {
        id: 3, 
        title: 'Flex Layout',
        description: 'A one-dimensional layout model that allows you to align and distribute space between items in a container, either in a row or column. Used for one-dimensional layouts, either in a row or a column (e.g., navigation bars, content sections, or forms), to align items vertically or horizontally, distribute space easily center or align items within grid cells.',
      });
      server.create('definition', {
        id: 4, 
        title: 'Float layout',
        description: 'An older method of creating layouts by floating elements left or right within a container, causing content to wrap around them. Historically used for creating multi-column layouts, but largely replaced by Flexbox and Grid.',
      });
      server.create('definition', {
        id: 5, 
        title: 'Multi-Column layout',
        description: 'The columns property allows content to be divided into multiple columns, similar to how text flows in a newspaper. Used for text-heavy content that needs to be presented in a columnar format (e.g., articles, news content).',
      });
      server.create('definition', {
        id: 6, 
        title: 'Positioning layout',
        description: 'Absolute, Relative, Fixed, Sticky.',
      });
      server.create('definition', {
        id: 7, 
        title: 'Semantic HTML',
        description: 'Avoid using <div> <span> elements for important content, as these are non-semantic and don’t convey meaning to assistive technologies. Instead, use <header> <nav></Badge>, <label>, <textarea>, etc… to give structure and meaning to the content).',
      });
      server.create('definition', {
        id: 8, 
        title: 'ARIA attributes',
        description: 'ARIA (Accessible Rich Internet Applications) attributes are HTML attributes that improve web accessibility by providing extra information to assistive technologies (like screen readers). They help describe elements, their roles, states, and properties, making interactive content more accessible to users with disabilities. (e.g., aria-label, aria-hidden, aria-live, ...)',
      });
      server.create('definition', {
        id: 9, 
        title: 'Keyboard Navigation',
        description: 'Keyboard navigation enhances web accessibility by allowing users to navigate and interact with a website using only a keyboard. This is essential for users who can’t use a mouse, including those with mobility impairments or vision disabilities, enabling them to access content, links, and interactive elements through keyboard keys like Tab, Enter, and arrow keys. ------- HOW KEYBOARD NAV IS SETUP ON THE DOCUMENT: Keyboard navigation on a web document is set up by ensuring a logical tab order, using HTML elements like links and buttons (which are natively focusable), and applying tabindex where necessary. ARIA attributes like aria-label and role also help clarify element functions, while JavaScript event listeners (e.g., for Enter and Space keys) enable interactions.',
      });
      server.create('definition', {
        id: 10, 
        title: 'Components',
        description: '---Components---Lorem ipsum dolor sit amet consectetur. Vulputate purus elementum bibendum pharetra massa facilisis scelerisque tempor in. Commodo pulvinar aliquet lacinia neque nibh tempor. Proin montes nullam sed nunc accumsan. Eu id nulla est diam.',
      });
      server.create('definition', {
        id: 11, 
        title: 'Virtual DOM',
        description: '---Virtual DOM---Lorem ipsum dolor sit amet consectetur. Vulputate purus elementum bibendum pharetra massa facilisis scelerisque tempor in. Commodo pulvinar aliquet lacinia neque nibh tempor. Proin montes nullam sed nunc accumsan. Eu id nulla est diam.',
      });
      server.create('definition', {
        id: 12, 
        title: 'State management',
        description: '---State management---Lorem ipsum dolor sit amet consectetur. Vulputate purus elementum bibendum pharetra massa facilisis scelerisque tempor in. Commodo pulvinar aliquet lacinia neque nibh tempor. Proin montes nullam sed nunc accumsan. Eu id nulla est diam.',
      });
      server.create('definition', {
        id: 13, 
        title: 'Hooks',
        description: '---Hooks---Lorem ipsum dolor sit amet consectetur. Vulputate purus elementum bibendum pharetra massa facilisis scelerisque tempor in. Commodo pulvinar aliquet lacinia neque nibh tempor. Proin montes nullam sed nunc accumsan. Eu id nulla est diam.',
      });



      // SECTION ---------------------------------
      // 1: Intro
      server.create('section', {
        id: 1, 
        pageIds: [1],
        categoryIds: [],
        title: 'Introduction',
        description: 'Lorem ipsum dolor sit amet consectetur. Vulputate purus elementum bibendum pharetra massa facilisis scelerisque tempor in. Commodo pulvinar aliquet lacinia neque nibh tempor. Proin montes nullam sed nunc accumsan. Eu id nulla est diam.',
        uri: '',
      });
      // 2: Coding patterns
      server.create('section', {
        id: 2, 
        pageIds: [],
        categoryIds: [1,3],
        title: 'Coding Patterns',
        description: 'Lorem ipsum dolor sit amet consectetur. Vulputate purus elementum bibendum pharetra massa facilisis scelerisque tempor in. Commodo pulvinar aliquet lacinia neque nibh tempor. Proin montes nullam sed nunc accumsan. Eu id nulla est diam.',
        uri: 'coding-patterns',
      });
      // 3: Knowledge Base
      server.create('section', {
        id: 3, 
        pageIds: [],
        categoryIds: [1,2,3],
        title: 'Knowledge Base',
        description: 'Lorem ipsum dolor sit amet consectetur. Vulputate purus elementum bibendum pharetra massa facilisis scelerisque tempor in. Commodo pulvinar aliquet lacinia neque nibh tempor. Proin montes nullam sed nunc accumsan. Eu id nulla est diam.',
        uri: 'knowledge-base',
      });
      // 4: Additional Resources
      server.create('section', {
        id: 4, 
        pageIds: [],
        categoryIds: [],
        title: 'Additional Resources',
        description: 'Lorem ipsum dolor sit amet consectetur. Vulputate purus elementum bibendum pharetra massa facilisis scelerisque tempor in. Commodo pulvinar aliquet lacinia neque nibh tempor. Proin montes nullam sed nunc accumsan. Eu id nulla est diam.',
        uri: 'additional-resources',
      });




      // CATEGORIES ------------------------------
      server.create('category', {
        id: 1,
        title: 'JavaScript',
        description: 'Lorem ipsum dolor sit amet consectetur. Vulputate purus elementum bibendum pharetra massa facilisis scelerisque tempor in. Commodo pulvinar aliquet lacinia neque nibh tempor. Proin montes nullam sed nunc accumsan. Eu id nulla est diam.',
        uri: 'javascript',
      });
      server.create('category', {
        id: 2,
        title: 'HTML & CSS',
        description: 'Lorem ipsum dolor sit amet consectetur. Vulputate purus elementum bibendum pharetra massa facilisis scelerisque tempor in. Commodo pulvinar aliquet lacinia neque nibh tempor. Proin montes nullam sed nunc accumsan. Eu id nulla est diam.',
        uri: 'html-and-css',
      });
      server.create('category', {
        id: 3,
        title: 'React',
        description: 'Lorem ipsum dolor sit amet consectetur. Vulputate purus elementum bibendum pharetra massa facilisis scelerisque tempor in. Commodo pulvinar aliquet lacinia neque nibh tempor. Proin montes nullam sed nunc accumsan. Eu id nulla est diam.',
        uri: 'react',
      });





      // PAGES ----------------------------------- 
      // Home
      server.create('page', {
        id: 1,
        sectionId: 1,
        categoryId: null,
        isHome: true,
        title: 'Introduction',
        subtitle: `--- **** ---  I've always asked myself "WHY?". Why do we do what we do? What's the practical usage of such and such pattern? Whta's the benefit of coding this way or that way? What's the reason behind this or that pattern? Creating this cookbook has provided me with an excellent opportunity to research and answer these questions; and I hope readers will find this UI cookbook as inspiring as I did.`,
        uri: 'introduction',
      });
      // JS page 1
      server.create('page', {
        id: 2,
        sectionId: 2,
        categoryId: 1,
        title: '** JS page 1',
        subtitle: 'Lorem ipsum dolor sit amet consectetur. Vulputate purus elementum bibendum pharetra massa facilisis scelerisque tempor in. Commodo pulvinar aliquet lacinia neque nibh tempor. Proin montes nullam sed nunc accumsan. Eu id nulla est diam.',
        uri: 'js-page1',
      });
      // JS page 2
      server.create('page', {
        id: 3,
        sectionId: 2,
        categoryId: 1,
        title: '** JS page 2',
        subtitle: 'Lorem ipsum dolor sit amet consectetur. Vulputate purus elementum bibendum pharetra massa facilisis scelerisque tempor in. Commodo pulvinar aliquet lacinia neque nibh tempor. Proin montes nullam sed nunc accumsan. Eu id nulla est diam.',
        uri: 'js-page2',
      });




      // /additional-resources
      server.create('page', {
        id: 4,
        sectionId: 4,
        categoryId: null,
        title: 'Additional resources',
        subtitle: 'Lorem ipsum dolor sit amet consectetur. Vulputate purus elementum bibendum pharetra massa facilisis scelerisque tempor in. Commodo pulvinar aliquet lacinia neque nibh tempor. Proin montes nullam sed nunc accumsan. Eu id nulla est diam.',
        uri: 'additional-resources',
      });

      // Level 2 pages ...


      // /coding-patterns ...
      // /coding-patterns/javascript
      // /coding-patterns/react
      // /coding-patterns/react/performance-patterns
      server.create('page', { 
        id: 19,
        sectionId: 2, // /coding-patterns
        categoryId: 3,
        title: 'Writing performant apps',
        subtitle: 'Lorem ipsum dolor sit amet consectetur. Vulputate purus elementum bibendum pharetra massa facilisis scelerisque tempor in. Commodo pulvinar aliquet lacinia neque nibh tempor. Proin montes nullam sed nunc accumsan. Eu id nulla est diam.',
        uri: 'performance-patterns',
      });
      server.create('page', { 
        id: 20,
        sectionId: 2, // /coding-patterns
        categoryId: 3,
        title: 'Logic Encapsulation',
        subtitle: 'Lorem ipsum dolor sit amet consectetur. Vulputate purus elementum bibendum pharetra massa facilisis scelerisque tempor in. Commodo pulvinar aliquet lacinia neque nibh tempor. Proin montes nullam sed nunc accumsan. Eu id nulla est diam.',
        uri: 'logic-enapsulation',
      });
      server.create('page', { 
        id: 26,
        sectionId: 2, // /coding-patterns
        categoryId: 3,
        title: 'Passing Data Deeply',
        subtitle: 'Lorem ipsum dolor sit amet consectetur. Vulputate purus elementum bibendum pharetra massa facilisis scelerisque tempor in. Commodo pulvinar aliquet lacinia neque nibh tempor. Proin montes nullam sed nunc accumsan. Eu id nulla est diam.',
        uri: 'passing-data-deeply',
      });
      server.create('page', { 
        id: 21,
        sectionId: 2, // /coding-patterns
        categoryId: 3,
        title: 'Render Props',
        subtitle: 'Lorem ipsum dolor sit amet consectetur. Vulputate purus elementum bibendum pharetra massa facilisis scelerisque tempor in. Commodo pulvinar aliquet lacinia neque nibh tempor. Proin montes nullam sed nunc accumsan. Eu id nulla est diam.',
        uri: 'render-props',
      });
      server.create('page', { 
        id: 22,
        sectionId: 2, // /coding-patterns
        categoryId: 3,
        title: 'Component composition',
        subtitle: 'Lorem ipsum dolor sit amet consectetur. Vulputate purus elementum bibendum pharetra massa facilisis scelerisque tempor in. Commodo pulvinar aliquet lacinia neque nibh tempor. Proin montes nullam sed nunc accumsan. Eu id nulla est diam.',
        uri: 'component-composition',
      });
      server.create('page', { 
        id: 23,
        sectionId: 2, // /coding-patterns
        categoryId: 3,
        title: 'Hooks',
        subtitle: 'Lorem ipsum dolor sit amet consectetur. Vulputate purus elementum bibendum pharetra massa facilisis scelerisque tempor in. Commodo pulvinar aliquet lacinia neque nibh tempor. Proin montes nullam sed nunc accumsan. Eu id nulla est diam.',
        uri: 'hooks',
      });
      server.create('page', { 
        id: 24,
        sectionId: 2, // /coding-patterns
        categoryId: 3,
        title: 'Forms',
        subtitle: 'Lorem ipsum dolor sit amet consectetur. Vulputate purus elementum bibendum pharetra massa facilisis scelerisque tempor in. Commodo pulvinar aliquet lacinia neque nibh tempor. Proin montes nullam sed nunc accumsan. Eu id nulla est diam.',
        uri: 'forms',
      });
      server.create('page', { 
        id: 25,
        sectionId: 2, // /coding-patterns
        categoryId: 3,
        title: 'Data fetching',
        subtitle: 'Lorem ipsum dolor sit amet consectetur. Vulputate purus elementum bibendum pharetra massa facilisis scelerisque tempor in. Commodo pulvinar aliquet lacinia neque nibh tempor. Proin montes nullam sed nunc accumsan. Eu id nulla est diam.',
        uri: 'data-fetching',
      });




      // /knowledge-base ...
      // /knowledge-base/javascript/core-concepts-core-concepts
      server.create('page', { 
        id: 13,
        sectionId: 3, // /knowledge-base
        categoryId: 1,
        title: 'Core Concepts',
        subtitle: 'Lorem ipsum dolor sit amet consectetur. Vulputate purus elementum bibendum pharetra massa facilisis scelerisque tempor in. Commodo pulvinar aliquet lacinia neque nibh tempor. Proin montes nullam sed nunc accumsan. Eu id nulla est diam.',
        uri: 'core-concepts',
      });
      server.create('page', { 
        id: 16,
        sectionId: 3, // /knowledge-base
        categoryId: 1,
        title: 'Interesting Patterns',
        subtitle: 'Lorem ipsum dolor sit amet consectetur. Vulputate purus elementum bibendum pharetra massa facilisis scelerisque tempor in. Commodo pulvinar aliquet lacinia neque nibh tempor. Proin montes nullam sed nunc accumsan. Eu id nulla est diam.',
        uri: 'interesting-patterns',
      });
      // /knowledge-base/html-and-css-core-concepts
      server.create('page', { 
        id: 14,
        sectionId: 3, // /knowledge-base
        categoryId: 2,
        title: 'HTML & CSS Core Concepts',
        subtitle: 'Lorem ipsum dolor sit amet consectetur. Vulputate purus elementum bibendum pharetra massa facilisis scelerisque tempor in. Commodo pulvinar aliquet lacinia neque nibh tempor. Proin montes nullam sed nunc accumsan. Eu id nulla est diam.',
        uri: 'core-concepts',
      });
      // /knowledge-base/core-concepts
      server.create('page', { 
        id: 15,
        sectionId: 3, // /knowledge-base
        categoryId: 3,
        title: 'React Core Concepts',
        subtitle: 'Lorem ipsum dolor sit amet consectetur. Vulputate purus elementum bibendum pharetra massa facilisis scelerisque tempor in. Commodo pulvinar aliquet lacinia neque nibh tempor. Proin montes nullam sed nunc accumsan. Eu id nulla est diam.',
        uri: 'core-concepts',
      });

    
    },

    /**
     * Returns from Mirage's in-memory database
     */
    routes() {
      // Allow requests to pass through to the external API
      this.passthrough('https://randomuser.me/api');

      // 1) DEFINITIONS ---------------------------------------
      this.get('/api/definition/:id', (schema, request) => {    
        return schema.definitions.findBy({
          id: request.params.id
        });
      });

      // 1) SECTIONS ---------------------------------------
      this.get('/api/sections', () => {
        return this.schema.sections.all();
      });
      this.get('/api/sectionByUri/:uri', (schema, request) => {
        return this.schema.sections.where(record => {
          return record.uri === request.params.uri;
        });
      });



      // 2) PAGES ------------------------------------------
      // 2-a) ---> Querying multiple pages
      this.get("/api/pages", () => {
        return this.schema.pages.all();
      }); 
      this.get("/api/pages", (schema, request) => { 
        // console.log('****** request.params = ', request.queryParams);
        const { sectionId, categoryId } = request.queryParams;

        return schema.pages.where(record => { 
          // console.log(`-----> record.categoryId=${record.categoryId}===${categoryId}`);
          return (record.categoryId === Number(categoryId) && record.sectionId === Number(sectionId));
        });
      });
      
      // 2-b) ---> Querying a single page
      // this.get('/api/page/homepage', () => {
      //   return this.schema.pages.findBy({
      //     isHome: true
      //   });
      // });
      this.get("/api/page/:id", (schema, request) => {  
        
        // id = -1 is code for home page
        if (request.params.id === -1) { 

          console.log(`-----> request.params.id=${request.params.id}`);


          return this.schema.pages.findBy({
            isHome: true
          });
        }
        // otherwise query the page
        return schema.pages.find(request.params.id);
      });
      this.get("/api/pageBySection/:id", (schema, request) => {    
        return schema.pages.findBy({
          sectionId: request.params.id
        });
      });



      // 3) CATEGORIES ------------------------------------
      this.get("/api/categories", (schema, request) => {
        // Return all categories if there is no query parameters
        if (!request.queryParams) {
          return this.schema.categories.all();
        }

        // Parse the IDs from the query parameter
        const ids = JSON.parse(request.queryParams.ids || '[]'); 

        // Find the records based on the IDs
        return schema.categories.where(record => {
          return ids.includes(Number(record.id));
        }); 
      });
 
    },
  });
};

export default makeMirageServer;


