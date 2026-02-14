import { Head } from '@inertiajs/react';
import HeroSection from '@/LandingPage/HeroSection';
import LandingPageHeader from '@/LandingPage/LandingPageHeader';
import TrustStripSection from '@/LandingPage/TrustStripSection';
import WhyChooseUsSection from '@/LandingPage/WhyChooseUsSection';
import BoilerOptionsSection from '@/LandingPage/BoilerOptionsSection';
import WhyUsDetailedSection from '@/LandingPage/WhyUsDetailedSection';
import TestimonialsSection from '@/LandingPage/TestimonialsSection';
import FAQSection from '@/LandingPage/FAQSection';
import FinalCtaSection from '@/LandingPage/FinalCtaSection';
import MobileStickyCta from '@/LandingPage/MobileStickyCta';
import LandingPageFooter from '@/LandingPage/LandingPageFooter';

export default function Welcome() {
    const pageTitle = 'New Boiler Installation | Boilers On-Demand | BN44 & Surrounding Areas';
    const pageDescription =
        'New Boiler Installation Clarity You Can Trust in BN44. From £2,200 – Fully Fitted. 35+ years experience. Same day service. £100 price beat guarantee. Gas Safe certified. Serving BN44 + 15 miles.';
    const brandName = import.meta.env.VITE_APP_NAME || 'Boilers On-Demand';
    const phone = '01903802395';
    const phoneDisplay = '01903 802395';

    return (
        <>
            <Head title={pageTitle}>
                <meta name="description" content={pageDescription} />
                <meta property="og:title" content={pageTitle} />
                <meta property="og:description" content={pageDescription} />
                <meta name="robots" content="index,follow" />
            </Head>

            <LandingPageHeader brandName={brandName} phone={phone} phoneDisplay={phoneDisplay} />

            <main id="content">
                <HeroSection
                    badgeLeft="35+ Years Trusted"
                    badgeRight="Gas Safe Certified"
                    headlineTop="Expert Boiler Installation"
                    headlineEmphasis="From £2,200"
                    subheadline="Same day installation available. £100 price beat guarantee. First year service FREE. Serving BN44 + 15 miles."
                    callPhone={phone}
                    callPhoneDisplay={phoneDisplay}
                    quoteCtaLabel="Get Free Quote"
                    formTitle="Get Your Fixed Quote"
                    formSubtitle="Free, no-obligation quote in 60 seconds"
                />

                <TrustStripSection
                    items={[
                        { iconLabel: '✓', title: '1000+ Happy Homeowners' },
                        { iconLabel: '✓', title: 'Gas Safe Registered' },
                        { iconLabel: '✓', title: '35+ Years Experience' },
                        { iconLabel: '✓', title: 'Local BN44 Experts' },
                    ]}
                />

                <WhyChooseUsSection
                    eyebrow="Why Choose Us"
                    title="Why Homeowners Choose"
                    titleEmphasis="Boilers On-Demand"
                    subtitle="Clear pricing. Professional installations. Honest advice built on 35+ years of local trust in BN44 and surrounding areas."
                    primaryCtaLabel="Get Your Free Quote"
                    phone={phone}
                    cards={[
                        {
                            title: 'Fixed Price Guarantee',
                            description: 'No hidden costs or surprises. What you see in your quote is exactly what you pay. Everything included.',
                        },
                        {
                            title: '5-Star Service',
                            description: 'Dedicated support from quote to completion. Our team is here to help every step of the way.',
                        },
                        {
                            title: 'Flexible Finance',
                            description: 'Finance options available for a range of budgets. We keep the process clear and straightforward.',
                        },
                        {
                            title: '12 Year Warranty',
                            description: 'Up to 12 year manufacturer warranty plus our workmanship guarantee on every install.',
                        },
                        {
                            title: 'Same Day Install',
                            description: 'Get your quote quickly. Installation available same day or next day when urgent.',
                        },
                        {
                            title: 'Premium Brands',
                            description: 'Worcester Bosch, Vaillant, Ideal Logic — trusted brands for long-lasting performance.',
                        },
                    ]}
                />

                <BoilerOptionsSection
                    eyebrow="Our Boilers"
                    title="Installed as Fast as"
                    titleEmphasis="Next Day"
                    subtitle="Choose the boiler that fits your home and budget. Clear options, fixed pricing, and a simple quote process."
                    options={[
                        {
                            label: 'POPULAR',
                            brand: 'Worcester Bosch',
                            model: '1000 25kW Combi',
                            priceFrom: '£2,200',
                            warranty: '10-Year Warranty',
                            bullets: ['A-rated efficiency for lower bills', 'QuickTap technology', 'Ideal for fast installs', 'Reliable performance'],
                        },
                        {
                            brand: 'Ideal Logic',
                            model: 'Max Combi',
                            priceFrom: '£2,400',
                            warranty: '10-Year Warranty',
                            bullets: ['Long-term peace of mind', 'Clear LCD display', 'Frost protection included', 'Great for family homes'],
                        },
                        {
                            label: 'PREMIUM',
                            brand: 'Vaillant',
                            model: 'EcoTec Pro 24',
                            priceFrom: '£2,800',
                            warranty: '12-Year Warranty',
                            bullets: ['A-rated efficiency', 'Instant hot water comfort', 'Ultra-quiet operation', 'Long-term reliability'],
                        },
                    ]}
                />

                <WhyUsDetailedSection
                    eyebrow="The Boilers On-Demand Difference"
                    title="Buy Your New Boiler,"
                    titleEmphasis="Better."
                    subtitle="Fixed-price boilers with everything included. 35+ years of local trust in BN44 and surrounding areas."
                    cards={[
                        {
                            title: 'Fixed-Price Boilers — Everything Included',
                            description:
                                "From flues to thermostats, and pipework to paperwork — we focus on doing it right with no nasty surprises.",
                            bullets: [
                                'Premium flues and fittings',
                                'Smart programmable thermostat',
                                'All pipework, valves, and connections',
                                'Complete Gas Safety certification',
                                'Building Control notification',
                                'Professional system flush',
                            ],
                            highlight: 'No unexpected charges. What you see is what you pay.',
                        },
                        {
                            title: 'Gas Safe, Qualified Engineers',
                            description:
                                'Friendly, insured, qualified and highly skilled. Real engineers. Real standards. Real accountability.',
                            bullets: [
                                'Gas Safe engineers — fully certified and registered',
                                'Fully insured — comprehensive coverage',
                                'Local engineers — serving BN44 + 15 miles',
                                'Clean, respectful, professional work',
                            ],
                        },
                        {
                            title: '£100 Price Beat Guarantee',
                            description:
                                "If you find a like-for-like price that's cheaper than we've quoted, we'll beat it by £100.",
                            highlight: "We won't be beaten on price. That's our promise.",
                        },
                        {
                            title: '12 Month Workmanship Warranty',
                            description:
                                "Every installation includes our workmanship warranty — because we're confident in our standards.",
                            bullets: ['Neat, professional pipework', 'Secure fittings and connections', 'Proper system commissioning', 'Thorough testing and safety checks'],
                        },
                        {
                            title: 'Save Up to £840 Per Year on Bills',
                            description:
                                'Replacing an old, inefficient boiler with a modern A-rated system can reduce energy costs significantly.',
                            highlight: '£840+ saved yearly (typical scenario).',
                            tone: 'accent',
                        },
                        {
                            title: 'The Boilers On-Demand Difference',
                            description:
                                '35+ years serving local families. Thousands of successful installations. One simple principle: do the job right, charge fairly, treat every home with respect.',
                            bullets: ['35+ Years Experience', 'Local BN44 Experts', 'Gas Safe Certified'],
                            tone: 'inverted',
                        },
                    ]}
                    ctaLabel="Get Your Fixed Price Quote Today"
                    ctaNote="No hidden costs. No pushy sales. Just honest advice from local experts."
                />

                <TestimonialsSection
                    eyebrow="Customer Reviews"
                    title="What Our Customers"
                    titleEmphasis="Say"
                    ratingText="5.0 out of 5"
                    subtitle="Based on 100+ Google reviews"
                    testimonials={[
                        {
                            name: 'Sarah M.',
                            location: 'Steyning, BN44',
                            quote:
                                'Excellent service from start to finish. Clean install, polite engineers, and my new boiler is perfect. Would highly recommend!',
                        },
                        {
                            name: 'James P.',
                            location: 'Henfield, BN5',
                            quote:
                                "Fixed price quote with no hidden costs. Boiler installed in one day. Couldn't be happier!",
                        },
                        {
                            name: 'Daniel R.',
                            location: 'BN44 Area',
                            quote:
                                'Professional, tidy, and great value. They beat my other quotes and the quality is outstanding.',
                        },
                    ]}
                />

                <FAQSection
                    eyebrow="FAQs"
                    title="Common Questions,"
                    titleEmphasis="Clear Answers"
                    subtitle="Everything you need to know before booking your boiler installation."
                    items={[
                        {
                            question: 'How long does a boiler installation take?',
                            answer: 'Most installations are completed within one day. Where possible, we can also offer same-day or next-day installation.',
                        },
                        {
                            question: 'Is the quote really fixed?',
                            answer: 'Yes. The price you’re quoted is the price you pay — no hidden charges, no surprises.',
                        },
                        {
                            question: 'Are your engineers Gas Safe registered?',
                            answer: 'Absolutely. All installations are carried out by fully qualified, Gas Safe registered engineers.',
                        },
                    ]}
                />

                <FinalCtaSection
                    title="A Warmer, More Efficient Home"
                    titleEmphasis="Starts Today"
                    subtitle="Avoid winter breakdowns. Get a fixed-price quote, fast installation, and expert local service you can trust."
                    primaryCta="Get My Fixed Quote"
                    phoneCta={phone}
                    trustBadges={['✔ No obligation', '✔ Fixed pricing', '✔ Fast install', '✔ Local experts']}
                />
            </main>

            <LandingPageFooter brandName={brandName} phone={phone} phoneDisplay={phoneDisplay} />

            <MobileStickyCta phone={phone} label="Tap to Call Now" />
        </>
    );
}
