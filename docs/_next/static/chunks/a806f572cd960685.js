(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,53138,e=>{"use strict";var t=e.i(18050),a=e.i(46932),s=e.i(18789),n=e.i(60508),r=e.i(22016),i=e.i(71645);let o=e=>i.default.Children.map(e,(e,a)=>{if("string"==typeof e)return e.split(/(SustAInd)/gi).map((e,s)=>/^sustaind$/i.test(e)?(0,t.jsxs)("span",{className:"font-semibold",children:[(0,t.jsx)("span",{className:"text-green-600",children:"Sust"}),(0,t.jsx)("span",{className:"text-orange-500",children:"AInd"})]},`${a}-${s}`):e);if(i.default.isValidElement(e)){let t=e.props;if(t?.children)return i.default.cloneElement(e,{...t},o(t.children))}return e}),l={h1:({children:e})=>(0,t.jsx)("h1",{className:"text-2xl sm:text-3xl font-bold mt-6 sm:mt-8 mb-3 sm:mb-4",children:o(e)}),h2:({children:e})=>(0,t.jsx)("h2",{className:"text-xl sm:text-2xl font-bold mt-6 sm:mt-8 mb-3 sm:mb-4",children:o(e)}),h3:({children:e})=>(0,t.jsx)("h3",{className:"text-lg sm:text-xl font-semibold text-gray-800 mt-4 sm:mt-6 mb-2 sm:mb-3",children:o(e)}),h4:({children:e})=>(0,t.jsx)("h4",{className:"text-base sm:text-lg font-semibold text-gray-800 mt-3 sm:mt-4 mb-2",children:o(e)}),p:({children:e})=>(0,t.jsx)("p",{className:"text-gray-700 mb-4 sm:mb-5 leading-relaxed text-sm sm:text-base",children:o(e)}),ul:({children:e})=>(0,t.jsx)("ul",{className:"list-disc list-outside ml-6 mb-4 sm:mb-5 space-y-2",children:o(e)}),ol:({children:e})=>(0,t.jsx)("ol",{className:"list-decimal list-outside ml-6 mb-4 sm:mb-5 space-y-2",children:o(e)}),li:({children:e})=>(0,t.jsx)("li",{className:"text-gray-700 text-sm sm:text-base leading-relaxed",children:o(e)}),a:({href:e,children:a})=>(0,t.jsx)("a",{href:e,target:"_blank",rel:"noopener noreferrer",className:"text-orange-500 hover:text-orange-700 underline decoration-orange-400 hover:decoration-orange-600 transition-colors",children:o(a)}),strong:({children:e})=>(0,t.jsx)("strong",{className:"font-semibold text-gray-900",children:o(e)}),em:({children:e})=>(0,t.jsx)("em",{className:"italic text-gray-700",children:o(e)}),blockquote:({children:e})=>(0,t.jsx)("blockquote",{className:"border-l-4 border-green-500 pl-4 py-2 my-4 bg-green-50 italic text-gray-700",children:o(e)}),code:({className:e,children:a})=>e?(0,t.jsx)("code",{className:"block bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm font-mono my-4",children:o(a)}):(0,t.jsx)("code",{className:"bg-gray-100 text-green-700 px-1.5 py-0.5 rounded text-sm font-mono",children:o(a)}),pre:({children:e})=>(0,t.jsx)("pre",{className:"bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm font-mono my-4",children:o(e)}),hr:()=>(0,t.jsx)("hr",{className:"my-6 sm:my-8 border-t border-gray-300"}),table:({children:e})=>(0,t.jsx)("div",{className:"overflow-x-auto my-4",children:(0,t.jsx)("table",{className:"min-w-full border-collapse border border-gray-300",children:o(e)})}),thead:({children:e})=>(0,t.jsx)("thead",{className:"bg-green-50",children:e}),tbody:({children:e})=>(0,t.jsx)("tbody",{children:e}),tr:({children:e})=>(0,t.jsx)("tr",{className:"border-b border-gray-300",children:e}),th:({children:e})=>(0,t.jsx)("th",{className:"px-4 py-2 text-left font-semibold text-gray-800 border border-gray-300",children:o(e)}),td:({children:e})=>(0,t.jsx)("td",{className:"px-4 py-2 text-gray-700 border border-gray-300",children:o(e)}),sup:({children:e})=>(0,t.jsx)("sup",{className:"text-green-600 font-medium",children:e}),img:({src:e,alt:a})=>(0,t.jsx)("img",{src:e,alt:a,className:"w-full h-auto rounded-lg shadow-md my-6 sm:my-8"})};function d(){let e={title:"Wait, How Much Does That AI Agent Actually Cost?",author:"Aneetta Sara Shany & Chandrasekar S",date:"2025-12-05",readTime:"5 min read",content:`**A candid conversation on the launch of Project SustAInd.**

*(Scene: Two Junior Research Fellows, Aneetta and Chandrasekar, taking a break at the Software Engineering Research Center (SERC) Lab, IIIT Hyderabad.)*

![AI Agent Conversation](/sustaind/data/images/blog/ai-agent-how-cost.png)

*Aneetta:*
Okay, Chandru, serious question. I was scrolling through my phone today, and everyone is obsessed with "Agentic AI". Autonomous agents planning trips, writing code, calling tools... it's everywhere. But is anyone talking about the bill?

*Chandrasekar:*
The cloud bill? Or the electricity bill?

*Aneetta:*
Both! And the carbon bill. Think about it! AI is no longer just a specialized tool for isolated tasks, it has become the foundational fabric running through every industry. And specifically with Agentic AI, we aren't just looking at systems that predict text anymore. We are looking at systems that act. They have the potential to become the active engine behind education, healthcare, governance, you name it.

*Chandrasekar:*
Exactly. And that's the scary part. [According to a study, training a single state-of-the-art AI model can emit as much carbon dioxide as the lifetime emissions of five cars](https://www.technologyreview.com/2019/06/06/239031/training-a-single-ai-model-can-emit-as-much-carbon-as-five-cars-in-their-lifetimes/). But agents are worse. They don't just answer once; they loop, they reason, they retry. [On an average, even a simple generative query consumes nearly 10 times the energy of a standard web search](https://www.goldmansachs.com/insights/articles/AI-poised-to-drive-160-increase-in-power-demand).

*Aneetta:*
And that's exactly why we're here, right? Welcome to [**SustAInd**](https://sa4s-serc.github.io/sustaind/) (Sustainable AI for India).

*Chandrasekar:*
Finally! It feels good to officially talk about it. For those reading this who don't know us, we are a government-backed initiative supported by [ANRF](https://www.anrfonline.in/ANRF/HomePage) and [PM-ECRG](https://www.anrfonline.in/ANRF/ecrg_anrf), led by Dr. Karthik Vaidhyanathan here at the [SA4S Research Group](https://sa4s-serc.github.io/), [SERC lab](https://serc.iiit.ac.in/), [IIIT Hyderabad](https://www.iiit.ac.in/).

*Aneetta:*
The mission is huge. We aren't just trying to shrink the models. We are trying to fix the software ecosystem around it. But Chandru, explain it to the readers: why is this different from just "buying better GPUs"?

*Chandrasekar:*
Hardware solves how fast the system runs, but software decides how efficiently it runs. It's the invisible layer where we usually lose the most energy. We are building a framework based on three pillars, and we need all three to work together:

🌍**Environmental:** *We need to measure the carbon footprint not just when we train the model, but when the software actually runs.*

💰**Economic:** *This is the silent killer. [Did you know nearly 85% of AI projects fail to deliver value?](https://www.forbes.com/councils/forbestechcouncil/2024/11/15/why-85-of-your-ai-models-may-fail/). If it costs too much to run, it dies.*

⚙️**Technical:** *Code rot. Dependency hell. If the system isn't modular and maintainable, it's not sustainable.*

*Aneetta:*
That's the "Software-Centric" approach we keep talking about. It's like building a house. You can have the best bricks (*the AI Model*), but if the construction (*the Software Development*) is bad, the house leaks energy and eventually collapses.

*Chandrasekar:*
Precisely. That's why our deliverables aren't just papers. We are building:

**Energy Profiling Tools:** *So developers can actually see their energy consumption, cost, and technical debt in real-time.*

**Green AI Design Guidelines:** *A playbook for architects and policymakers to ensure every system balances all three pillars.*

**A GreenAI Lab:** *Right here at IIITH to validate our novel approaches through real-world experiments.*

*Aneetta:*
Speaking of novel approaches, we've already started! We presented our first paper, [HarmonE, at ECSA 2025](https://link.springer.com/chapter/10.1007/978-3-032-02138-0_3). It's our first step toward architectural patterns that actually care about energy.

*Chandrasekar:*
It's a team effort, obviously. It's not just us.

*Aneetta:*
Oh, definitely. [It's Dr. Karthik steering the ship, plus Akhila (PhD), Hiya (MS), and the dual-degree wizards Shaunak and Arihant.](https://sa4s-serc.github.io/sustaind/people) It's a mix of software engineers, AI researchers, and system architects.

*Chandrasekar:*
So, what's the ask, Aneetta? We want people to get involved, right?

*Aneetta:*
100%. This isn't just an academic exercise. If you are a developer, we want you to test our profiling tools. If you are an educator, we want to help you teach "Green AI" concepts. If you are a policymaker, we want to provide the data you need to set standards for India.

*Chandrasekar:*
Agentic AI is the future, no doubt. But whether that future is expensive and dirty, or efficient and sustainable... that depends on how we build the software today.

*Aneetta:*
Well put. So, to our readers: Watch this space. We'll be sharing our tools, our failures, and our wins.

*Chandrasekar:*
And if you want to collaborate, challenge our ideas, or just geek out over sustainability metrics, reach out to us.

---

## Join the SustAInd Mission !!

Explore team details, updates, and publications on our official page: 🔗[https://sa4s-serc.github.io/sustaind/](https://sa4s-serc.github.io/sustaind/)

---

*Aneetta:*
So, Chandru… our first blog published?

*Chandrasekar:*
Yep! And hopefully, the first of many. Onward to building a greener AI ecosystem for India. 🌱`};return(0,t.jsx)("div",{className:"min-h-screen py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white",children:(0,t.jsxs)("div",{className:"max-w-4xl mx-auto",children:[(0,t.jsxs)(a.motion.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},className:"mb-8",children:[(0,t.jsx)(r.default,{href:"/blogs",className:"text-green-600 hover:text-green-700 mb-6 inline-flex items-center gap-1",children:"← Back to Blogs"}),(0,t.jsx)("h1",{className:"text-3xl sm:text-4xl font-bold text-gray-900 mb-4",children:e.title}),(0,t.jsxs)("div",{className:"flex flex-col sm:flex-row sm:items-center text-sm sm:text-base text-gray-600 space-y-2 sm:space-y-0 sm:space-x-4",children:[(0,t.jsxs)("span",{children:["By ",e.author]}),(0,t.jsx)("span",{className:"hidden sm:inline",children:"•"}),(0,t.jsx)("span",{children:new Date(e.date).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}),(0,t.jsx)("span",{className:"hidden sm:inline",children:"•"}),(0,t.jsx)("span",{children:e.readTime})]})]}),(0,t.jsx)(a.motion.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.6,delay:.2},className:"prose prose-sm sm:prose-base max-w-none",children:(e=>{let a=e.split("\n"),r=[],i=null,o=[],d=[],h=()=>{i&&o.length>0&&(r.push({type:"dialogue",speaker:i,content:o.join("\n").trim()}),o=[])},c=()=>{d.length>0&&(r.push({type:"text",content:d.join("\n").trim()}),d=[])};for(let e=0;e<a.length;e++){let t=a[e],s=t.match(/^\*(Aneetta|Chandrasekar):\*$/);s?(c(),h(),i=s[1]):"---"===t.trim()?(h(),i=null,d.push(t)):i?o.push(t):d.push(t)}return h(),c(),r.map((e,a)=>{if("dialogue"===e.type){let r="Aneetta"===e.speaker?"bg-orange-400":"bg-green-500";return(0,t.jsxs)("div",{className:"flex items-start my-3",children:[(0,t.jsx)("div",{className:`${r} w-2 sm:w-3 h-full rounded-l-lg mr-4 mt-1`,style:{minHeight:"2.5rem"}}),(0,t.jsx)("div",{className:"flex-1",children:(0,t.jsx)(s.default,{remarkPlugins:[n.default],components:l,children:e.content})})]},a)}return(0,t.jsx)("div",{className:"my-4",children:(0,t.jsx)(s.default,{remarkPlugins:[n.default],components:l,children:e.content})},a)})})(e.content)}),(0,t.jsx)(a.motion.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.4},className:"mt-12 pt-8 border-t border-gray-200",children:(0,t.jsx)(r.default,{href:"/blogs",className:"text-green-600 hover:text-green-700 inline-flex items-center gap-1",children:"← Back to Blogs"})})]})})}e.s(["default",()=>d])}]);