# SustAInd Project Website Architecture
This is a website for the SustAInd project.

## Technical Stack
Next.js with TypeScript will be used to build the website.
The website will be styled using Tailwind CSS for utility-first styling.
The website will use Framer Motion for animations and transitions.

## General Design
The website should have a consistent design across all pages.
The design should be simple and clean, with a focus on readability.
The color scheme should be white background, with #212121 color for text.
Since it is an Indian project, the design should incorporate the color green for headings, and the color saffron for links and buttons.
There should be plenty of small microanimations to make the website feel alive and engaging, but they should not be distracting or overwhelming.

## Fonts
The website should use IBM Plex Sans for text and Inter for headings.

## Navbar
The Navbar should contain the text SustAInd on the left side and the following links on the right side - About, People, Publications, Blogs, Tools.
On phones, the navbar should be a hamburger menu with the same links.
Sust should be in green, and AInd should be in saffron.

## Footer
The footer should contain the text SustAInd on the left side, and the address of the project on the right side:
```
Software Engineering Research Center
5th floor, Himalaya D-Block
IIIT Hyderabad
Telangana, India
```
and email address: `karthik.vaidyanathan@iiit.ac.in`

On phones, the footer should be centered.

## Pages

It should have the following pages:
1. Landing 
2. About
3. People
4. Publications
5. Blogs
6. Tools

### Landing Page
The landing page should have a hero section with a brief introduction to the SustAInd project.
The heading should be "SustAInd: Sustainable AI for India", with a subheading above it that says "Welcome to the home of".

Below it, there should be a call to action button that says "Learn More", that links to the About page.

Below the hero section, there should be a section that says Interested in collaborating? This section should have a button that says "Contact Us", which links to the email address provided in the footer.

### About Page

The About page should have a brief description of the SustAInd project, its goals, and its significance.

**Vision or Goal:** The project, SustAInd aims to address the need for environmentally and economically sustainable AI systems in India. As AI adoption rises across sectors, the energy demands of AI-enabled
systems significantly impact sustainability goals. AI operations consume approximately 2% of
the world’s electricity, and training a single model can emit carbon equivalent to five cars
over their lifetimes. Additionally, over 50% of ML systems fail to reach production due to cost
and maintainability issues. To this end, this project aims to develop a software-centric
framework that enables organisations, policymakers, and developers to design, develop and
deploy AI-enabled systems that are sustainable from environmental, economic and technical
perspectives.

It should have some related pictures to illustrate the point, and these pictures should be interspersed with the text, so the text flows around the images.

### People Page

The People page should have a list of all the people involved in the SustAInd project.
Each person should be just a picture in a circle, clicking on which opens a card that has a name, designation, description, and picture.
The card should be a rounded rectangle, with the picture on the left side and the name and designation on the right side. The description should be below the name and designation, in a lighter shade.

The people are as follows:
- **Karthik Vaidyanathan** - Assistant Professor, IIIT Hyderabad
  - Description: Karthik Vaidhyanathan is an Assistant Professor at the Software Engineering Research Center, IIIT-Hyderabad, India where he is also associated with the leadership team of smart city living lab. He obtained his Ph.D. from the Gran Sasso Science Institute, Italy and did his postdoc at the University of L'Aquila, Italy. His main research interests lie in the intersection of software architecture and machine learning with a specific focus on building sustainable software systems. His research focuses on how machine learning techniques can be leveraged to better architect self-adaptive systems and further how to better define architecting practices for developing Machine Learning-enabled software systems. As a part of his research activities, he serves as a reviewer/organizing committee member in various workshops, conferences, and journals. He is also an editorial board member (SE Radio) of IEEE Software. Karthik also poses more than 5 years of industrial experience as an employee and as a consultant in building and deploying ML products/services.
  - Picture: https://karthikv1392.github.io/assets/img/karthik_circle_profile-1400.webp
  - Email: karthik.vaidyanathan@iiit.ac.in

- **Akhila Matathammal** - PhD in CSE, IIIT Hyderabad
  - Description: A PhD student on a mission to revolutionize sustainable software architecture, edge, and microservices, Akhila is making cloud-native environments greener, one line of code at a time!
  - Picture: https://serc.iiit.ac.in/images/people/akhila-matathammal.png
  - Email: akhila.matathammal@research.iiit.ac.in

- **Hiya Bhatt** - MS in CSE, IIIT Hyderabad
  - Description: Her research focuses on developing sustainable self-adaptive machine learning-enabled systems that can efficiently manage changing environments and resource constraints. She is also exploring how these systems can be integrated with digital twins to enhance real-time monitoring, analysis, and decision-making in dynamic scenarios. Alongside her academic work, she enjoys singing.
  - Picture: https://serc.iiit.ac.in/images/people/hiya-bhatt.jpeg
  - Email: hiya.bhatt@research.iiiit.ac.in

- **Shaunak Biswas** - BTech + MS in CSE, IIIT Hyderabad
  - Description: Shaunak is dedicated to developing ML systems that are both self-adaptive and eco-friendly. He loves music, art and challenging himself.
  - Picture: https://serc.iiit.ac.in/images/people/shaunak-biswas.png
  - Email: shaunak.biswas@research.iiit.ac.in

- **Arihant Tripathy** - BTech + MS in CSE, IIIT Hyderabad
  - Description: Arihant has experience in both full-stack development and systems programming, bringing a technical perspective to sustainability challenges. As an active open-source contributor and coordinator at IIIT-H's Open Source Developers' Group, he is keen on using collaborative approaches to solving complex technology problems. He is motivated by producing scalable, enduring technology solutions which have real influence.
  - Picture: https://serc.iiit.ac.in/images/people/arihant-tripathy.jpg
  - Email: arihant.tripathy@research.iiit.ac.in

Karthik Vaidyanathan should be in the center of the page, with the other people arranged around him in a random pattern with lines connecting them to him. The lines should be thin and light, so they do not distract from the content. The pictures should be circular and have a slight drop shadow to give a sense of depth. The people should slightly be bobbing up and down to give a sense of life to the page.

### Publications Page
The Publications page should have a list of all the publications related to the SustAInd project.
Each publication should have a screenshot of the first page of the publication, with the name of the publication below it.
Clicking on the publication should open a modal with the more details of the publication, including the authors, abstract, and a link to the publication.

### Blogs Page
The Blogs page should have a list of all the blogs related to the SustAInd project.
Each blog should have a title, a brief description, and a link to the full blog post.
The blogs should be arranged in a list format, with the most recent blog at the top.

### Tools Page
The Tools page should have a list of all the tools developed as part of the SustAInd project.
Each tool should be a card with the name of the tool, a brief description, and a link to the tool.
The tools should be arranged in a grid format, with the most recent tool at the top left.

## Additional Notes
- The website should get data about the people, publications, blogs, and tools from individual JSON files stored in the `data` directory.
- The website should be responsive and work well on both desktop and mobile devices.
- The website should be accessible and follow best practices for web accessibility.
- The website should be optimized for performance and load quickly.
- The website should be SEO-friendly and follow best practices for search engine optimization.
- The website should be built using modern web technologies, such as HTML5, CSS3, and JavaScript.
- The website will be hosted on GitHub Pages, so it should be compatible with that platform.
