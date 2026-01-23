'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function EnhancingSustainabilityBlog() {
    return (
        <div className="min-h-screen py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-8"
                >
                    <Link
                        href="/blogs"
                        className="text-green-600 hover:text-green-700 mb-6 inline-flex items-center gap-1"
                    >
                        ← Back to Blogs
                    </Link>
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Enhancing Sustainability of Modern Software Systems through Self-adaptive Architectures
                    </h1>
                    <div className="flex flex-col sm:flex-row sm:items-center text-sm sm:text-base text-gray-600 space-y-2 sm:space-y-0 sm:space-x-4">
                        <span>By Dr. Karthik Vaidhyanathan</span>
                        <span className="hidden sm:inline">•</span>
                        <span>January 17, 2025</span>
                        <span className="hidden sm:inline">•</span>
                        <span>10 min read</span>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="prose prose-sm sm:prose-base max-w-none"
                >
                    <p className="text-gray-700 mb-4 sm:mb-5 leading-relaxed text-sm sm:text-base">
                        Imagine receiving an alert that your system has gone down or is consuming an unsustainable amount of power (Yes, you heard that right!). The immediate response is to identify and resolve the issue – whether it&apos;s a sudden spike in user traffic, unexpected resource constraints, or a misconfiguration. But what if the system could adapt itself dynamically, anticipating and mitigating these problems in real-time? Modern software systems including AI Systems are subjected to various types of uncertainties ranging from unpredictable user behaviors and fluctuating workloads to resource constraints in the operating environments, evolving security threats and real-world variability in data inputs. Studies show that <strong className="font-semibold text-gray-900">64% of system outages result from misconfigurations</strong><sup className="text-green-600 font-medium">1</sup>. And <strong className="font-semibold text-gray-900">91% of AI models degrade over time</strong><sup className="text-green-600 font-medium">2</sup>. Beyond impacting reliability and performance, these uncertainties also have a huge impact on the environment (increase in user loads may trigger the need to add more resources). Recent estimates from Green Software Foundation<sup className="text-green-600 font-medium">3</sup> highlight that software emissions are equivalent to the emissions of air, rail and shipping combined. As researchers trying to work in the intersection of software architecture and ML, we are constantly trying to enhance the sustainability of modern software systems including AI-enabled systems. One way we have attempted to tackle this problem is by making systems <strong className="font-semibold text-gray-900">self-adaptive</strong> where they adapt their structure or behavior with minimal human intervention.
                    </p>

                    <h2 className="text-xl sm:text-2xl font-bold text-green-600 mt-6 sm:mt-8 mb-3 sm:mb-4">
                        Enhancing Sustainability through Self-adaptation
                    </h2>

                    <p className="text-gray-700 mb-4 sm:mb-5 leading-relaxed text-sm sm:text-base">
                        More often than not, people often associate sustainability with making things green. While it&apos;s not incorrect, it&apos;s not the only aspect of sustainability. It is a <strong className="font-semibold text-gray-900">multi-dimensional quality attribute</strong> which encompasses the technical, environmental, social and economical aspects of a running software system. My research on using self-adaptation to dynamically adapt software systems at runtime to enhance sustainability started during my PhD where the focus was to continuously monitor the metrics of a running software system, identify any potential uncertainties using AI and further use AI to dynamically reconfigure the system to handle the uncertainty. We had applied this concept to IoT systems where we used AI to dynamically switch the processing between edge, fog and cloud to save battery power of IoT devices while guaranteeing system performance<sup className="text-green-600 font-medium">4</sup>. That&apos;s when we realized that the idea could be applied to a broader class of software systems.
                    </p>

                    <p className="text-gray-700 mb-4 sm:mb-5 leading-relaxed text-sm sm:text-base">
                        Most of the organizations today are adopting a <strong className="font-semibold text-gray-900">microservice-based architectural style</strong> where each service is designed around domain boundaries and team compositions. At the same time organizations have realized/are starting to realize the importance of monitoring their carbon footprint and further reducing emissions. In this context, we developed an approach that uses self-adaptive mechanisms to dynamically decide which microservice instance to use to guarantee trade-off between latency and energy consumption. To illustrate how this works, consider a scenario where a user located in Hyderabad sends a request to login to an e-commerce application. Typically such a request will be served by an instance of the microservice that is located in a data center closer to the location of the user inorder to guarantee quicker response. However, that instance might be located in a data center which is powered by fossil fuel or the instance might be consuming higher power due to several incoming requests. Hence, it might be beneficial to serve the request from some other instance which is consuming less power and is located in a data center powered by renewable energy but at the compromise of the network latency that may come in due to the location. With this broad thought, we developed an approach that leverages the use of <strong className="font-semibold text-gray-900">reinforcement learning</strong> to decide which microservice instance to use to serve a user request by considering the trade-off between response time and energy consumption. This work has been published in top tier international conferences<sup className="text-green-600 font-medium">5</sup>. Further, we also extended this concept to serverless functions in our recently published work where it was more about deciding the optimal instance to use to allocate a serverless function considering trade-off between cost and performance<sup className="text-green-600 font-medium">6</sup>.
                    </p>

                    <h2 className="text-xl sm:text-2xl font-bold text-green-600 mt-6 sm:mt-8 mb-3 sm:mb-4">
                        Extending to AI-enabled Systems
                    </h2>

                    <p className="text-gray-700 mb-4 sm:mb-5 leading-relaxed text-sm sm:text-base">
                        The emergence of AI has enhanced various walks of our life albeit with a significant cost in terms of the environmental impact. Estimates suggest that <strong className="font-semibold text-gray-900">data centers already consume 2% of the world&apos;s electricity</strong> requiring gallons of fresh water with AI taking the bulk of the load and these numbers are only expected to increase<sup className="text-green-600 font-medium">7</sup>. To this end, we believe self-adaptive systems can certainly play a role in enhancing the sustainability of AI systems without compromising on the performance of the system or accuracy of the AI models. For any task today, there are various types of AI models that could be used. For example, if we want to chat, we have ChatGPT or Claude or Llama or Gemini to name a few. Similarly for tasks like object detection, we have different varieties of AI models such as the Yolo family of models or the detectron series, etc. Most of the times we don&apos;t need complex AI models, all we need is simple AI models but for some scenarios we may need complex AI models that can provide high accuracy. Based on this thought process, as a starting point, we developed an approach, <strong className="font-semibold text-gray-900">Eco-MLS</strong><sup className="text-green-600 font-medium">8</sup>, that presents the architecture of an ML system that leverages the concept of self-adaptation, switching between different AI models at run-time to trade-off between accuracy and energy consumption. We took object detection as our domain and we developed a self-adaptive ML system that switches between different object detection models at runtime by deciding when to use what models without compromising on the accuracy while simultaneously reducing power consumption. We noticed that we could <strong className="font-semibold text-gray-900">reduce energy consumption by close to 80%</strong> by using our approach as opposed to using a large complex model.
                    </p>

                    <p className="text-gray-700 mb-4 sm:mb-5 leading-relaxed text-sm sm:text-base">
                        Further, we extended this concept to the larger <strong className="font-semibold text-gray-900">MLOps pipeline</strong>. To keep it simple, MLOps can be thought of as a set of practices that combines machine learning (ML), software engineering, and DevOps to streamline and automate the end-to-end lifecycle of ML development, deployment and management. MLOps pipeline typically enhances the maintainability of the ML system. However, periodically retraining ML models has also had an impact on the environment footprint.
                    </p>

                    <p className="text-gray-700 mb-4 sm:mb-5 leading-relaxed text-sm sm:text-base">
                        Even though it may enhance accuracy of the ML models, the accuracy needs to be also looked at from the perspective of impact on the environment. Sometimes for 1% increase in accuracy, tons of CO2 might be emitted<sup className="text-green-600 font-medium">9</sup>. To this end, we developed an approach to architect <strong className="font-semibold text-gray-900">self-adaptive MLOps pipelines</strong> that decide when to re-train models or switch between models or use a more greener cloud instance for retraining by considering the cost, performance, accuracy and current carbon footprint. This work was published in the prestigious international conference on software architecture (ICSA 2024)<sup className="text-green-600 font-medium">10</sup> where the work won the <strong className="font-semibold text-gray-900">best poster award</strong>.
                    </p>

                    <h2 className="text-xl sm:text-2xl font-bold text-green-600 mt-6 sm:mt-8 mb-3 sm:mb-4">
                        Onward and Forward
                    </h2>

                    <p className="text-gray-700 mb-4 sm:mb-5 leading-relaxed text-sm sm:text-base">
                        Currently, one of the biggest challenges in software engineering is about enhancing the sustainability of modern software systems, in particular AI systems. There are already efforts going on at a global level towards making softwares more green such as that of <strong className="font-semibold text-gray-900">Green Software Foundation</strong> where different organizations are involved in defining green software engineering practices. There are also a lot of tools that have been made available both by the research and practitioner community to measure power, carbon footprint, etc. However, more concerted effort between the academic and research community is required to create a wider impact. Many times there is also a lack of awareness that needs to be addressed. As far as our research is concerned, we are working on extending our approach of model switching to Generative AI-based applications and to edge cloud continuum. Further, we are also extending our self-adaptive MLOps pipeline to support different types of AI systems. We are also collaborating with different research groups such as the <strong className="font-semibold text-gray-900">S2 group at VU Amsterdam</strong>, the Netherlands to perform studies that can aid practitioners or researchers in building greener software systems. In addition to this, another compelling research angle that is being actively explored in collaboration with <strong className="font-semibold text-gray-900">Lloyds Technology Centre</strong> is the development of practices that can enable architects to come up with green software design and deployment practices.
                    </p>

                    <hr className="my-6 sm:my-8 border-t border-gray-300" />

                    <h2 className="text-xl sm:text-2xl font-bold text-green-600 mt-6 sm:mt-8 mb-3 sm:mb-4">
                        References
                    </h2>

                    <ol className="list-decimal list-outside ml-6 mb-4 sm:mb-5 space-y-2">
                        <li className="text-gray-700 text-sm sm:text-base leading-relaxed">
                            <a
                                href="https://www.reuters.com/technology/major-tech-outages-recent-years-2024-07-19"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-green-600 hover:text-green-700 underline decoration-green-400 hover:decoration-green-600 transition-colors"
                            >
                                Major tech outages in recent years - Reuters
                            </a>
                        </li>

                        <li className="text-gray-700 text-sm sm:text-base leading-relaxed">
                            <a
                                href="https://www.nature.com/articles/s41598-022-15245-z"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-green-600 hover:text-green-700 underline decoration-green-400 hover:decoration-green-600 transition-colors"
                            >
                                AI model degradation study - Nature
                            </a>
                        </li>

                        <li className="text-gray-700 text-sm sm:text-base leading-relaxed">
                            <a
                                href="https://stateof.greensoftware.foundation/en/insights/software-emissions-are-equivalent-to-air-rail-shipping-combined/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-green-600 hover:text-green-700 underline decoration-green-400 hover:decoration-green-600 transition-colors"
                            >
                                Software emissions are equivalent to air, rail and shipping combined - Green Software Foundation
                            </a>
                        </li>

                        <li className="text-gray-700 text-sm sm:text-base leading-relaxed">
                            Cámara, J., Muccini, H. and Vaidhyanathan, K., 2020, March. <em className="italic text-gray-700">Quantitative verification-aided machine learning: A tandem approach for architecting self-adaptive IoT systems.</em> In 2020 IEEE International Conference on Software Architecture (ICSA) (pp. 11-22). IEEE.
                        </li>

                        <li className="text-gray-700 text-sm sm:text-base leading-relaxed">
                            Karthik Vaidhyanathan, Mauro Caporuscio, Stefano Florio, and Henry Muccini. 2024. <em className="italic text-gray-700">ML-enabled Service Discovery for Microservice Architecture: a QoS Approach.</em> In Proceedings of the 39th ACM/SIGAPP Symposium on Applied Computing (SAC &apos;24)
                        </li>

                        <li className="text-gray-700 text-sm sm:text-base leading-relaxed">
                            Jain, P., Singhal, P., Pandey, D., Quatrocchi, G., Vaidhyanathan, K. (2025). <em className="italic text-gray-700">POSEIDON: Efficient Function Placement at the Edge Using Deep Reinforcement Learning.</em> In: Gaaloul, W., Sheng, M., Yu, Q., Yangui, S. (eds) Service-Oriented Computing. ICSOC 2024.
                        </li>

                        <li className="text-gray-700 text-sm sm:text-base leading-relaxed">
                            <a
                                href="https://www.wired.com/story/true-cost-generative-ai-data-centers-energy"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-green-600 hover:text-green-700 underline decoration-green-400 hover:decoration-green-600 transition-colors"
                            >
                                The true cost of generative AI data centers - Wired
                            </a>
                        </li>

                        <li className="text-gray-700 text-sm sm:text-base leading-relaxed">
                            M. Tedla, S. Kulkarni and K. Vaidhyanathan, <em className="italic text-gray-700">EcoMLS: A Self-Adaptation Approach for Architecting Green ML-Enabled Systems,</em> in 2024 IEEE 21st International Conference on Software Architecture Companion (ICSA-C), <a
                                href="https://arxiv.org/abs/2404.11411"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-green-600 hover:text-green-700 underline decoration-green-400 hover:decoration-green-600 transition-colors"
                            >
                                arXiv:2404.11411
                            </a>
                        </li>

                        <li className="text-gray-700 text-sm sm:text-base leading-relaxed">
                            <a
                                href="https://arxiv.org/abs/1906.02243"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-green-600 hover:text-green-700 underline decoration-green-400 hover:decoration-green-600 transition-colors"
                            >
                                Energy and Policy Considerations for Deep Learning in NLP - arXiv
                            </a>
                        </li>

                        <li className="text-gray-700 text-sm sm:text-base leading-relaxed">
                            H. Bhatt, S. Arun, A. Kakran and K. Vaidhyanathan, <em className="italic text-gray-700">Towards Architecting Sustainable MLOps: A Self-Adaptation Approach,</em> in 2024 IEEE 21st International Conference on Software Architecture Companion (ICSA-C) <a
                                href="https://arxiv.org/pdf/2404.04572"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-green-600 hover:text-green-700 underline decoration-green-400 hover:decoration-green-600 transition-colors"
                            >
                                arXiv:2404.04572
                            </a>
                        </li>
                    </ol>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-12 pt-8 border-t border-gray-200"
                >
                    <Link
                        href="/blogs"
                        className="text-green-600 hover:text-green-700 inline-flex items-center gap-1"
                    >
                        ← Back to Blogs
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}
