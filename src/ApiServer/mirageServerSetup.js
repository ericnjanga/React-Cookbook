import { createServer, Model } from "miragejs";

const makeMirageServer = () => {

  createServer({
    models: {
      section: Model,
      page: Model, 
      category: Model,
    },

    seeds(server) {
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
        subtitle: '--- Home page introduction --- Lorem ipsum dolor sit amet consectetur. Vulputate purus elementum bibendum pharetra massa facilisis scelerisque tempor in. Commodo pulvinar aliquet lacinia neque nibh tempor. Proin montes nullam sed nunc accumsan. Eu id nulla est diam.',
        uri: '',
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
      // /knowledge-base/javascript-core-concepts-core-concepts
      server.create('page', { 
        id: 13,
        sectionId: 3, // /knowledge-base
        categoryId: 1,
        title: 'JavaScript Core Concepts',
        subtitle: 'Lorem ipsum dolor sit amet consectetur. Vulputate purus elementum bibendum pharetra massa facilisis scelerisque tempor in. Commodo pulvinar aliquet lacinia neque nibh tempor. Proin montes nullam sed nunc accumsan. Eu id nulla est diam.',
        uri: 'javascript-core-concepts',
      });
      // /knowledge-base/html-and-css-core-concepts
      server.create('page', { 
        id: 14,
        sectionId: 3, // /knowledge-base
        categoryId: 2,
        title: 'HTML & CSS Core Concepts',
        subtitle: 'Lorem ipsum dolor sit amet consectetur. Vulputate purus elementum bibendum pharetra massa facilisis scelerisque tempor in. Commodo pulvinar aliquet lacinia neque nibh tempor. Proin montes nullam sed nunc accumsan. Eu id nulla est diam.',
        uri: 'html-and-css-core-concepts',
      });
      // /knowledge-base/react-core-concepts
      server.create('page', { 
        id: 15,
        sectionId: 3, // /knowledge-base
        categoryId: 3,
        title: 'React Core Concepts',
        subtitle: 'Lorem ipsum dolor sit amet consectetur. Vulputate purus elementum bibendum pharetra massa facilisis scelerisque tempor in. Commodo pulvinar aliquet lacinia neque nibh tempor. Proin montes nullam sed nunc accumsan. Eu id nulla est diam.',
        uri: 'react-core-concepts',
      });

    
    },

    /**
     * Returns from Mirage's in-memory database
     */
    routes() {
      // Allow requests to pass through to the external API
      this.passthrough('https://randomuser.me/api');

      // 1) SECTIONS ---------------------------------------
      this.get('/api/sections', () => {
        return this.schema.sections.all();
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


