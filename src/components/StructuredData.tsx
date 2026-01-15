export default function StructuredData() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        "name": "AavatarBase",
        "description": "Free online avatar generator and creator. Generate randomized avatars for profiles and placeholders with 30+ styles.",
        "url": "https://aavatar-base.vercel.app", // Rebranded URL
        "applicationCategory": "DesignApplication",
        "operatingSystem": "Web",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
        },
        "featureList": [
            "30+ Avatar Styles",
            "Random Seed Generation",
            "Custom Background Colors",
            "Permanent Local SVGs",
            "Easy SVG Download"
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
