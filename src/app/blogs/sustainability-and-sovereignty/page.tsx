'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

function SectionTitle({ children }: { children: React.ReactNode }) {
    return (
        <h2 className="text-xl sm:text-2xl font-bold text-green-600 mt-7 sm:mt-9 mb-3 sm:mb-4">
            {children}
        </h2>
    );
}

function Paragraph({ children }: { children: React.ReactNode }) {
    return (
        <p className="text-gray-700 mb-4 sm:mb-5 leading-relaxed text-sm sm:text-base">
            {children}
        </p>
    );
}

function A({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 hover:text-green-700 underline decoration-green-400 hover:decoration-green-600 transition-colors"
        >
            {children}
        </a>
    );
}

function Quote({ children, source }: { children: React.ReactNode; source: React.ReactNode }) {
    return (
        <blockquote className="my-6 rounded-lg border-l-4 border-l-green-600 bg-gray-50 px-6 py-5 text-gray-800">
            <p className="italic text-base sm:text-lg mb-2">{children}</p>
            <footer className="text-xs sm:text-sm text-gray-500 not-italic">{source}</footer>
        </blockquote>
    );
}

function Callout({ children }: { children: React.ReactNode }) {
    return (
        <p className="my-6 text-gray-900 font-semibold leading-relaxed text-sm sm:text-base">
            {children}
        </p>
    );
}

const listClass = 'list-outside ml-5 space-y-3 mb-5 text-gray-700 text-sm sm:text-base leading-relaxed';

export default function SustainabilityAndSovereigntyBlog() {
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
                        Two Sides of One Coin: Sustainability and Sovereignty in the Age of AI
                    </h1>

                    <div className="flex flex-col sm:flex-row sm:items-center text-sm sm:text-base text-gray-600 space-y-2 sm:space-y-0 sm:space-x-4">
                        <span>By Akhila Matathammal</span>
                        <span className="hidden sm:inline">•</span>
                        <span>November 10, 2026</span>
                        <span className="hidden sm:inline">•</span>
                        <span>9 min read</span>
                    </div>
                </motion.div>

                <motion.article
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="prose prose-sm sm:prose-base max-w-none"
                >
                    <Paragraph>
                        On 9 June 2026, Anthropic released two of the most capable AI models in the world, Fable 5
                        and Mythos 5. Three days later, both stopped working for every customer, in every country.
                        A US government export-control directive, citing national security, required the company
                        to suspend access for foreign nationals, and the company switched both models off for
                        everyone while it complied (<A href="https://www.anthropic.com/news/fable-mythos-access">Anthropic</A>).
                        The models were simply no longer available, because of a decision taken by another
                        country’s government that none of their users had any part in.
                    </Paragraph>

                    <Paragraph>
                        On the other hand, consider what has happened in Visakhapatnam (India) this year. Google is
                        building a $15 billion AI data centre hub there, and residents worried about scarce water
                        and power have protested under the slogan{' '}
                        <A href="https://tech-insider.org/google-data-center-india-backlash-2026/">“cannot drink data”</A>.
                        Near Mumbai (Thane, India), residents are fighting an Amazon data centre over the{' '}
                        <A href="https://frontline.thehindu.com/society/why-thane-residents-are-opposing-amazon-data-centre/article71291156.ece">same fears</A>.
                        Here the question is not whether AI can be switched off, but whether a country can afford
                        to keep it running: whose water, whose power, and who decides.
                    </Paragraph>

                    <Paragraph>
                        Now put the two stories side by side. In Visakhapatnam and Thane, the land, the water and
                        the power are India’s. The companies are American, and so is the law they answer to. That
                        is the same law under which, two AI models were switched off overnight for every customer
                        in the world. Look, too, at where the maker of those models is planning its own
                        infrastructure outside the US. In September 2026, Anthropic signed its{' '}
                        <A href="https://www.thestar.com.my/tech/tech-news/2026/09/16/anthropic-signs-first-australia-data-centre-agreement">first data centre lease in Australia</A>,
                        as the anchor tenant of a gigawatt-scale campus, and it is hiring deal-makers to{' '}
                        <A href="https://www.datacenterdynamics.com/en/news/anthropic-seeks-data-center-leasing-deals-in-europe-and-australia/">secure data centre capacity across Europe</A>.
                        So any country that hosts AI infrastructure built by others, whether in Europe, in
                        Australia or in India, spends its own water and power on AI whose availability to its own
                        people is decided elsewhere. Who, then, is that sustainability cost being paid for?
                    </Paragraph>

                    <Paragraph>
                        That is the bridge between the two stories, and it is what this article is about. The
                        first story is about <strong>sovereignty</strong>: control over your own decisions. The
                        second is about <strong>sustainability</strong>, which software engineers describe as the
                        capacity of a system to keep going across{' '}
                        <A href="https://sustainabilitydesign.org/karlskrona-manifesto/">five dimensions</A>,
                        environmental, economic, social, individual and technical,{' '}
                        <A href="https://www.easterbrook.ca/steve/?p=4140">none of which can be treated in isolation</A>.
                        Without sovereignty, a country can end up paying the sustainability cost of AI it does not
                        control. Without sustainability, the AI it does control cannot be kept running.
                    </Paragraph>

                    <Paragraph>
                        Is this link new to the AI age? AI is the latest strategic resource a country depends on,
                        but it is not the first. To see where AI is heading, we take India as our example. Few
                        countries have lived through this tension between depending on others and controlling
                        their own supply as often, or as visibly, as India has. Its record in food, medicines and
                        energy shows what happens when a country takes these decisions into its own hands, and its
                        position in chips shows what is still at stake in AI.
                    </Paragraph>

                    <SectionTitle>India has been here before</SectionTitle>

                    <Paragraph>
                        In the 1960s, India’s food came from American wheat under the US PL-480 programme. When
                        drought struck in 1965, President Lyndon Johnson put that supply on a “short tether”,
                        approving{' '}
                        <A href="https://www.bloombergquint.com/opinion/what-prime-minister-modi-can-learn-from-pms-nehru-and-shastri-about-us-and-china">shipments only two months, then one month, at a time</A>.
                        India answered by growing its own. The Green Revolution more than doubled wheat output,
                        from about 12 million tonnes in 1965 to over{' '}
                        <A href="https://modeldiplomat.com/learn/lessons/upsc-post-independence-green-revolution-food-security">26 million tonnes by 1972</A>,
                        fed a growing nation and ended the dependence. When intensive farming later drained
                        Punjab’s groundwater, India corrected course on its own terms, with a 2009 law estimated
                        to{' '}
                        <A href="https://ageconsearch.umn.edu/record/57482/files/6-Karam-Singh.pdf">save 276 million units of electricity and about Rs 122 crore a year</A>,
                        along with the water.
                    </Paragraph>

                    <Paragraph>
                        In medicines, India chose to write its own patent rules. Today it supplies{' '}
                        <A href="https://knnindia.co.in/news/newsdetails/global/india-accounts-for-20-of-global-generic-drug-supply-ip-rules-wto-compliant-gtri">nearly 20% of the world’s generic medicines</A>,
                        and HIV treatment fell from over $10,000 to about{' '}
                        <A href="https://archive.amfar.org/articles/around-the-world/treatasia/2013/indian-supreme-court-ruling-preserves-access-to-low-cost-drugs/">$150 per patient per year</A>.
                        The US still keeps India on its intellectual-property watch list, yet India holds its
                        ground, because the world, the US included, now relies on the industry those rules built.
                    </Paragraph>

                    <Paragraph>
                        In energy, India imports about 88% of its crude oil, a bill of{' '}
                        <A href="https://theprint.in/economy/indias-crude-import-bill-jumps-46-to-90-6-billion-in-april-september-as-oil-prices-surge/3074774/">$90.6 billion</A>{' '}
                        in just six months of 2026. So it turned to its own sunlight, and solar capacity grew from
                        2.82 GW in 2014 to <A href="https://bioenergytimes.com/?p=20317">162 GW by June 2026</A>.
                        India reached{' '}
                        <A href="https://india.mongabay.com/short-article/2025/07/india-achieves-50-non-fossil-power-capacity-five-years-ahead-of-target/">50% non-fossil power capacity</A>{' '}
                        five years ahead of its Paris target, its emissions grew by just 0.7% in 2025,{' '}
                        <A href="https://thewire.in/environment/indias-carbon-emissions-growth-has-slowed-report">the slowest in two decades</A>,
                        and nobody can switch off the sun.
                    </Paragraph>

                    <Callout>
                        Three resources, one pattern: each time India took the decision into its own hands, the
                        result was more sustainable, and the sustainable result made India harder to coerce.
                    </Callout>

                    <Paragraph>AI runs on two resources where that pattern has not yet played out: electricity and chips.</Paragraph>

                    <Quote
                        source={
                            <>
                                Fatih Birol, Executive Director,{' '}
                                <A href="https://www.iea.org/news/iea-executive-director-addresses-world-leaders-on-crucial-ai-energy-nexus-at-international-summit-chaired-by-france-and-india">International Energy Agency</A>,
                                February 2025
                            </>
                        }
                    >
                        “There is no AI without energy – specifically electricity.”
                    </Quote>

                    <Paragraph>
                        India is working on the electricity. The chips are another matter. One American company,
                        Nvidia, sells most of the world’s AI accelerators: IDC puts its share at{' '}
                        <A href="https://commandlinux.com/statistics/ai-gpu-market-share-nvidia-vs-amd-vs-intel/">about 81%</A>.
                        The most advanced chips can only be made with machines from a single Dutch company, ASML (<A href="https://www.semi.org/en/blogs/how-nations-can-achieve-realistic-semiconductor-self-sufficiency">SEMI</A>),
                        and who may buy those machines is decided by governments: under US pressure, the
                        Netherlands has never allowed ASML to ship them to China (<A href="https://www.taipeitimes.com/News/biz/archives/2026/06/20/2003859397">Taipei Times</A>).
                    </Paragraph>

                    <Paragraph>
                        India has felt the same lever. In January 2025, the US AI Diffusion Rule placed India in
                        its second tier, capping imports at{' '}
                        <A href="https://usispf.org/usispf-commentary/trust-but-verify-india-us-reboot-ai-chip-talks/">about 50,000 advanced GPUs through 2027</A>.
                        The rule was withdrawn in May 2025, but it showed where the switch sits. Even the GPUs
                        that India has pooled for its{' '}
                        <A href="https://www.newkerala.com/news/a/indiaai-mission-onboards-38231-gpus-190-projects-approved-135.htm">national AI compute mission</A>,
                        the backbone of its sovereign AI plans, are imported. Nvidia’s own chief executive has
                        made the case for owning this layer:
                    </Paragraph>

                    <Quote
                        source={
                            <>
                                Jensen Huang, CEO of Nvidia, at the{' '}
                                <A href="https://blogs.nvidia.com/?p=69708">World Governments Summit</A>, Dubai,
                                February 2024
                            </>
                        }
                    >
                        “Every country needs to own the production of their own intelligence.”
                    </Quote>

                    <Paragraph>
                        Depending on others for chips also limits how sustainable India’s AI can be. Whoever
                        designs and sells the hardware decides how much power it draws, what it costs and whether
                        supply continues, and India has little room for those decisions to go wrong. The country
                        generates{' '}
                        <A href="https://www.mitsloanme.com/?p=11158">nearly 20% of the world’s data but hosts only about 3% of its data centres</A>,
                        and its data centres, which used about 150 billion litres of water in 2024–25, may need{' '}
                        <A href="https://analyticsindiamag.com/ai-news/indias-ai-boom-could-double-data-centre-water-consumption-by-2030-report">nearly 358 billion litres a year by 2030</A>.
                        India has started to respond. IT minister Ashwini Vaishnaw said in 2025 that India would
                        build its own GPU within three to four years, and in early 2026 he held{' '}
                        <A href="https://yourstory.com/2026/01/india-nvidia-discuss-sovereign-gpu-development-local-manufacturing">talks with Nvidia on developing sovereign GPUs in India</A>.
                    </Paragraph>

                    <SectionTitle>What this means in the AI era</SectionTitle>

                    <Paragraph>Each story has a direct counterpart in AI today.</Paragraph>

                    <ul className={`list-disc ${listClass}`}>
                        <li>
                            <strong>Food then, models now.</strong> In 1966, India’s grain arrived a month at a
                            time, on someone else’s terms. In June 2026, the most capable AI models were switched
                            off for three weeks, on someone else’s terms.
                        </li>
                        <li>
                            <strong>Medicines then, rules now.</strong> India made medicines affordable by writing
                            its own patent rules. The rules of AI, on data, model licenses and where computing
                            must sit, are being written now.
                        </li>
                        <li>
                            <strong>Energy then, data centers now.</strong> India’s own solar kept money at home
                            and cut emissions. Today, India’s water and power are being committed to AI
                            infrastructure that others build and govern.
                        </li>
                        <li>
                            <strong>Chips, then and now.</strong> In AI hardware, India stands where it stood with
                            food in 1965.
                        </li>
                    </ul>

                    <Paragraph>
                        <strong>
                            Every time India took the decision into its own hands, the outcome was more
                            sustainable, and harder for anyone to reverse.
                        </strong>{' '}
                        Every time it depended on others, it paid twice: once in control, and again in cost.
                    </Paragraph>

                    <Paragraph>
                        This is where the popular advice to build only on top falls short. Nandan Nilekani has
                        told Indian start-ups that{' '}
                        <A href="https://yourstory.com/2025/01/nandan-nilekani-wrong-pushing-india-ignore-model-training-perplexity-aravind-srinivas">“Our goal should not be to build one more LLM”</A>.
                        Building on top is how AI reaches people. But building only on top means owning
                        everything except the foundation, and in June 2026 every application built on two models
                        lost its foundation in a day. The government’s own white paper is right to call for{' '}
                        <A href="https://www.newkerala.com/news/a/india-eyes-foundation-model-ai-that-supports-national-486.htm">capability across the foundation-model stack</A>.
                    </Paragraph>

                    <Paragraph>
                        Others are already acting on this. Europe is mobilising{' '}
                        <A href="https://thegoodlobby.eu/?p=10587">€200 billion for AI</A> and has opened bids for
                        seven AI gigafactories to cut its reliance on American and Chinese computing, alongside a
                        proposed{' '}
                        <A href="https://aeneas-office.org/2026/06/03/european-commission-unveils-proposed-chips-act-2-0/">Chips Act 2.0</A>.
                        Australia ties data centre investment to the{' '}
                        <A href="https://www.idcnova.com/html/1/59/153/5418.html">energy transition and sustainable water use</A>.
                        Ireland makes data centres{' '}
                        <A href="https://itbrief.co.uk/story/ireland-unveils-strict-new-rules-for-data-centre-power-use">report their emissions and renewable energy use</A>.
                        None of them treats control and sustainability as a trade-off.
                    </Paragraph>

                    <Paragraph>
                        The <A href="https://arxiv.org/abs/2607.13443">sovereignty-sustainability trilemma</A>,
                        the claim that no country can maximise sovereignty, minimise environmental impact and keep
                        costs affordable at once, therefore measures the wrong thing. It counts the cost of
                        pursuing sovereignty carelessly, not the cost of sovereignty itself. Its own authors come
                        close to saying so:
                    </Paragraph>

                    <Quote
                        source={
                            <>
                                Syed and colleagues,{' '}
                                <A href="https://arxiv.org/abs/2607.13443">The Environmental Cost of Digital Sovereignty</A>, 2026
                            </>
                        }
                    >
                        “Sovereign AI without environmental accounting is incomplete sovereignty.”
                    </Quote>

                    <Callout>
                        A trade-off is a luxury for those who already own the stack. For everyone else, the real
                        cost is not being sovereign and sustainable.
                    </Callout>

                    <SectionTitle>Conclusion</SectionTitle>

                    <Paragraph>
                        <strong>
                            Sovereignty and sustainability are not at loggerheads. They are one loop.
                        </strong>{' '}
                        Sovereignty is the power to make your own decisions. Sustainability is the ability to keep
                        those decisions going, across the environment, the economy, society, individuals and
                        technology. Without the first, a country cannot choose the sustainable path. Without the
                        second, it cannot hold on to the choices it made. India has run this loop with food,
                        medicines and energy. AI is the next place to run it.
                    </Paragraph>

                    <Paragraph>
                        India is our example, but the conclusion holds for every country. For AI, it means
                        sovereignty across the full stack, hardware included, built sustainably so that it lasts:
                    </Paragraph>

                    <ol className={`list-decimal ${listClass}`}>
                        <li>
                            <strong>Build your own AI hardware.</strong> GPUs, chip design and fabrication are the
                            layer where most countries, India among them, are most exposed. Treat them as the Green
                            Revolution of this era.
                        </li>
                        <li>
                            <strong>Own the models and data that essential services run on,</strong> so that no
                            switch-off abroad can stop a hospital, a bank or a school at home.
                        </li>
                        <li>
                            <strong>Build frugally.</strong> Adapt existing models before training new ones, power
                            data centers with clean energy and site them away from water-stressed regions, and
                            share compute as public infrastructure, as India’s national AI mission does with its
                            GPU pool.
                        </li>
                        <li>
                            <strong>Until the stack is complete, depend on several partners, never on one.</strong>
                        </li>
                    </ol>

                    <Paragraph>
                        A country that controls its AI can choose to make it sustainable, and AI that is
                        sustainable is AI a country can keep controlling.{' '}
                        <strong>
                            That is the loop India has closed before, and the one it now needs to close for AI.
                        </strong>
                    </Paragraph>

                    <hr className="my-8 border-t border-gray-300" />

                    <SectionTitle>References</SectionTitle>

                    <ol className="list-decimal list-outside ml-5 space-y-3 mb-6 text-sm text-gray-600 leading-relaxed">
                        <li>
                            Anthropic, <A href="https://www.anthropic.com/news/fable-mythos-access">Statement on access to Fable 5 and Mythos 5</A>, June 2026.
                        </li>
                        <li>
                            Becker et al., <A href="https://sustainabilitydesign.org/karlskrona-manifesto/">The Karlskrona Manifesto for Sustainability Design</A>, ICSE 2015; Steve Easterbrook, on the five dimensions.
                        </li>
                        <li>
                            ModelDiplomat, <A href="https://modeldiplomat.com/learn/lessons/upsc-post-independence-green-revolution-food-security">Green Revolution and food security</A>.
                        </li>
                        <li>
                            Karam Singh, <A href="https://ageconsearch.umn.edu/record/57482/files/6-Karam-Singh.pdf">Act to Save Groundwater in Punjab: Its Impact on Water Table, Electricity Subsidy and Environment</A>, Agricultural Economics Research Review, 2009.
                        </li>
                        <li>
                            MSF Access Campaign, <A href="https://msfaccess.org/qa-patents-india-and-novartis-case">Patents, India and the Novartis case</A>; amfAR TREAT Asia, 2013.
                        </li>
                        <li>
                            KNN India, reporting GTRI, <A href="https://knnindia.co.in/news/newsdetails/global/india-accounts-for-20-of-global-generic-drug-supply-ip-rules-wto-compliant-gtri">India accounts for 20% of global generic drug supply</A>, May 2026.
                        </li>
                        <li>
                            ThePrint, <A href="https://theprint.in/economy/indias-crude-import-bill-jumps-46-to-90-6-billion-in-april-september-as-oil-prices-surge/3074774/">India’s crude import bill jumps 46% to $90.6 billion in April-September</A>, October 2026.
                        </li>
                        <li>
                            Ministry of New and Renewable Energy, via <A href="https://bioenergytimes.com/?p=20317">Bioenergy Times</A>, July 2026; Mercom India, <A href="https://www.mercomindia.com/indias-solar-imports-rise-14-qoq-in-q1-2026-exports-continue-to-decline">India’s solar imports in Q1 2026</A>.
                        </li>
                        <li>
                            Mongabay India, <A href="https://india.mongabay.com/short-article/2025/07/india-achieves-50-non-fossil-power-capacity-five-years-ahead-of-target/">India achieves 50% non-fossil power capacity five years ahead of target</A>, July 2025; The Wire, <A href="https://thewire.in/environment/indias-carbon-emissions-growth-has-slowed-report">India’s carbon emissions growth has slowed</A>.
                        </li>
                        <li>
                            International Energy Agency, <A href="https://www.iea.org/news/iea-executive-director-addresses-world-leaders-on-crucial-ai-energy-nexus-at-international-summit-chaired-by-france-and-india">IEA Executive Director addresses world leaders on crucial AI-energy nexus</A>, February 2025.
                        </li>
                        <li>
                            CommandLinux, citing IDC, <A href="https://commandlinux.com/statistics/ai-gpu-market-share-nvidia-vs-amd-vs-intel/">AI GPU market share: Nvidia vs AMD vs Intel</A>, 2026.
                        </li>
                        <li>
                            Jan-Bart Smits and David Harap, <A href="https://www.semi.org/en/blogs/how-nations-can-achieve-realistic-semiconductor-self-sufficiency">How nations can achieve realistic semiconductor self-sufficiency</A>, SEMI, October 2025.
                        </li>
                        <li>
                            Taipei Times, via Bloomberg, <A href="https://www.taipeitimes.com/News/biz/archives/2026/06/20/2003859397">US raises concerns with ASML over EUV machines</A>, June 2026.
                        </li>
                        <li>
                            USISPF, <A href="https://usispf.org/usispf-commentary/trust-but-verify-india-us-reboot-ai-chip-talks/">Trust but verify: India-US reboot AI chip talks</A>, 2025.
                        </li>
                        <li>
                            Brian Caulfield, <A href="https://blogs.nvidia.com/?p=69708">NVIDIA CEO: Every Country Needs Sovereign AI</A>, NVIDIA Blog, February 2024.
                        </li>
                        <li>
                            MIT Sloan Management Review Middle East, citing India’s Economic Survey 2025–26, <A href="https://www.mitsloanme.com/?p=11158">India generates 20% of global data but hosts just 3% of data centres</A>.
                        </li>
                        <li>
                            Analytics India Magazine, reporting CEEW, <A href="https://analyticsindiamag.com/ai-news/indias-ai-boom-could-double-data-centre-water-consumption-by-2030-report">India’s AI boom could double data centre water consumption by 2030</A>, June 2026.
                        </li>
                        <li>
                            YourStory, <A href="https://yourstory.com/2026/01/india-nvidia-discuss-sovereign-gpu-development-local-manufacturing">India, Nvidia discuss sovereign GPU development, local manufacturing</A>, January 2026; NewKerala, <A href="https://www.newkerala.com/news/a/indiaai-mission-onboards-38231-gpus-190-projects-approved-135.htm">IndiaAI Mission onboards 38,231 GPUs</A>, March 2026.
                        </li>
                        <li>
                            Syed et al., <A href="https://arxiv.org/abs/2607.13443">The Environmental Cost of Digital Sovereignty</A>, arXiv, 2026.
                        </li>
                        <li>
                            Tech Insider, <A href="https://tech-insider.org/google-data-center-india-backlash-2026/">Google data center India backlash</A>, 2026; Frontline (The Hindu), <A href="https://frontline.thehindu.com/society/why-thane-residents-are-opposing-amazon-data-centre/article71291156.ece">Why Thane residents are opposing Amazon data centre</A>.
                        </li>
                        <li>
                            Reuters via The Star, <A href="https://www.thestar.com.my/tech/tech-news/2026/09/16/anthropic-signs-first-australia-data-centre-agreement">Anthropic signs first Australia data centre agreement</A>, September 2026; DatacenterDynamics, <A href="https://www.datacenterdynamics.com/en/news/anthropic-seeks-data-center-leasing-deals-in-europe-and-australia/">Anthropic seeks data center leasing deals in Europe and Australia</A>, April 2026.
                        </li>
                        <li>
                            YourStory, <A href="https://yourstory.com/2025/01/nandan-nilekani-wrong-pushing-india-ignore-model-training-perplexity-aravind-srinivas">Nilekani and Srinivas on building LLMs</A>, January 2025; Office of the Principal Scientific Adviser white paper, via <A href="https://www.newkerala.com/news/a/india-eyes-foundation-model-ai-that-supports-national-486.htm">NewKerala</A>, March 2026.
                        </li>
                        <li>
                            The Good Lobby, <A href="https://thegoodlobby.eu/?p=10587">Can Brussels buy its way to AI sovereignty?</A>, August 2026; AENEAS, <A href="https://aeneas-office.org/2026/06/03/european-commission-unveils-proposed-chips-act-2-0/">European Commission unveils proposed Chips Act 2.0</A>, June 2026.
                        </li>
                        <li>
                            IDC Nova, <A href="https://www.idcnova.com/html/1/59/153/5418.html">Anthropic may invest in Australian data center infrastructure</A>, April 2026; IT Brief, <A href="https://itbrief.co.uk/story/ireland-unveils-strict-new-rules-for-data-centre-power-use">Ireland unveils strict new rules for data centre power use</A>, January 2026.
                        </li>
                    </ol>
                </motion.article>

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
