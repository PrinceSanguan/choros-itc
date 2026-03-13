import { Head } from '@inertiajs/react';
import HeroSection from '@/LandingPage/HeroSection';
import LandingPageHeader from '@/LandingPage/LandingPageHeader';
import TrustStripSection from '@/LandingPage/TrustStripSection';
import WhyChooseUsSection from '@/LandingPage/WhyChooseUsSection';
import BoilerOptionsSection from '@/LandingPage/BoilerOptionsSection';
import TestimonialsSection from '@/LandingPage/TestimonialsSection';
import FAQSection from '@/LandingPage/FAQSection';
import FinalCtaSection from '@/LandingPage/FinalCtaSection';
import MobileStickyCta from '@/LandingPage/MobileStickyCta';
import LandingPageFooter from '@/LandingPage/LandingPageFooter';

export default function Welcome() {
    const pageTitle = 'Fire Door Installation & Maintenance | ITC Contractors Coventry | FIRAS Accredited · 48 Hour Service';
    const pageDescription = 'Expert fire door installation and maintenance in Coventry. FIRAS accredited, 10+ years experience, installed within 48 hours. Free quotes. Call ITC Contractors today.';
    const brandName = 'ITC Contractors Coventry';
    const phone = 'N/A';
    const phoneDisplay = 'N/A';

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
                    badgeLeft="FIRAS Accredited"
                    badgeRight="10+ Years Experience"
                    headlineTop="Fire Door Installation & Maintenance"
                    headlineEmphasis="Coventry"
                    subheadline="FIRAS-accredited fire door specialists. Installed within 48 hours of quote. Fully compliant with fire safety regulations. Free quotes available."
                    callPhone={phone}
                    callPhoneDisplay={phoneDisplay}
                    quoteCtaLabel="Get Free Quote"
                    formTitle="Get Your Fixed Quote"
                    formSubtitle="Free, no-obligation quote in 60 seconds"
                />

                <TrustStripSection items={[
                    { iconLabel: "✓", title: "48 Hour Installation" },
                    { iconLabel: "✓", title: "FIRAS Accredited" },
                    { iconLabel: "✓", title: "Finance Options Available" },
                    { iconLabel: "✓", title: "Free Site Surveys" },
                ]} />

                <WhyChooseUsSection
                    eyebrow="Why Choose Us"
                    title="Why Coventry Property Owners Choose"
                    titleEmphasis="ITC Contractors"
                    subtitle="Over 10 years protecting homes, schools, hospitals, and commercial buildings across Coventry with fully compliant fire door solutions"
                    primaryCtaLabel="Get Your Free Quote"
                    phone={phone}
                    cards={[
                        {
                            title: 'FIRAS Accredited Installers',
                            description: 'We are FIRAS-accredited installers ensuring your fire door installation meets the highest safety standards and full regulatory compliance.',
                        },
                        {
                            title: '48 Hour Installation Service',
                            description: 'Fire doors installed within 48 hours of quote. We understand urgent fire safety requirements and minimise downtime for your property.',
                        },
                        {
                            title: 'Finance Options Available',
                            description: 'Spread the cost with interest-free finance options available. Make fire safety compliance affordable for your property.',
                        },
                        {
                            title: 'Comprehensive Maintenance Plans',
                            description: 'Regular fire door maintenance ensures ongoing compliance. Our expert team inspects, services, and provides detailed reports for complete peace of mind.',
                        },
                    ]}
                />

                <BoilerOptionsSection
                    eyebrow="Our Services"
                    title="What We Offer"
                    titleEmphasis="ITC Contractors Coventry"
                    subtitle="Professional services across . All makes and models covered."
                    options={[
                    {
                        brand: 'Fire Door Installation',
                        model: 'Professional FIRAS-accredited fire door installation for com',
                        priceFrom: 'Contact for Quote',
                        warranty: 'All work guaranteed',
                        bullets: ["FIRAS accredited installation", "Installed within 48 hours of quote", "Full compliance with fire safety regulations", "Hospitals, schools, commercial buildings"],
                    },
                    {
                        brand: 'Fire Door Maintenance',
                        model: 'Regular maintenance and inspection services to ensure your f',
                        priceFrom: 'Contact for Quote',
                        warranty: 'All work guaranteed',
                        bullets: ["Thorough inspection of all components", "Seals, hinges, and closing mechanisms checked", "Repairs and replacements as needed", "Detailed compliance report provided"],
                    },
                    ]}
                />

                <TestimonialsSection
                    eyebrow="What Our Customers Say"
                    title="Trusted by Homeowners"
                    titleEmphasis="Across "
                    ratingText="170+ verified 5-star reviews"
                    subtitle="Real reviews from real local customers."
                    testimonials={[
                    {
                        name: 'Client Reviews',
                        location: 'Coventry',
                        quote: 'We have many 5-star reviews from satisfied customers across Coventry. Visit our Google Reviews or Facebook page to see what our clients say about our fire door installation and maintenance services.',
                    },
                    {
                        name: 'Trusted Partner',
                        location: 'CV & B Postcodes',
                        quote: 'ITC Contractors have delivered fire protection services across various sectors including hospitals, schools, commercial buildings, hotels, and retail establishments throughout Coventry.',
                    },
                    {
                        name: 'Local & Family Run',
                        location: 'Coventry',
                        quote: 'As a local, family-run business with over 10 years of experience, we provide tailored fire door solutions that meet your unique needs and budget while ensuring full regulatory compliance.',
                    },
                    ]}
                />

                <FAQSection
                    eyebrow="Got Questions?"
                    title="Frequently Asked Questions"
                    items={[
                    {
                        question: 'How much does fire door installation cost in Coventry?',
                        answer: 'Fire door installation costs vary depending on the type of door, location, and specific compliance requirements. Contact us for a free, no-obligation quote tailored to your property. We offer competitive pricing and finance options to spread the cost.',
                    },
                    {
                        question: 'How quickly can you install a fire door?',
                        answer: 'We install fire doors within 48 hours of providing your quote. We understand that fire safety compliance is often urgent, and we work efficiently to minimise downtime for your property.',
                    },
                    {
                        question: 'Are you FIRAS accredited?',
                        answer: 'Yes, ITC Contractors are FIRAS-accredited installers. This ensures your fire door installation meets the highest safety standards and complies fully with UK fire safety regulations.',
                    },
                    {
                        question: 'Do you offer finance for fire door installation?',
                        answer: 'Yes, we offer interest-free finance options to help spread the cost of fire door installation. This makes essential fire safety compliance more affordable for property owners across Coventry.',
                    },
                    {
                        question: 'What areas do you cover for fire door services?',
                        answer: 'We provide fire door installation and maintenance throughout Coventry and surrounding areas, covering CV and B postcodes. Contact us to confirm we service your specific location.',
                    },
                    {
                        question: 'Do you provide fire door maintenance as well as installation?',
                        answer: 'Yes, we offer comprehensive fire door maintenance services. Our expert team conducts thorough inspections of seals, hinges, and closing mechanisms, performs necessary repairs, and provides detailed compliance reports to ensure ongoing protection.',
                    },
                    ]}
                />

                <FinalCtaSection
                    title="Ready to Get Started?"
                    titleEmphasis="Ready to Ensure Your Property is Fire Safe and Compliant?"
                    subtitle="Get your free fire door installation or maintenance quote today. FIRAS accredited service installed within 48 hours. Finance options available."
                    primaryCta="Get Your Free Quote Today"
                    phoneCta={phone}
                    trustBadges={["Gas Safe Registered", "170+ 5★ Reviews", "Finance Available", "5-Year Warranty"]}
                />

                <MobileStickyCta phone={phone} phoneDisplay={phoneDisplay} />
            </main>

            <LandingPageFooter
                brandName={brandName}
                phone={phone}
                phoneDisplay={phoneDisplay}
                address="Serving Coventry & Surrounding Areas (CV & B Postcodes)"
                certifications={["FIRAS Accredited", "Gas Safe Registered", "Constructionline Gold", "DBS Checked"]}
            />
        </>
    );
}
