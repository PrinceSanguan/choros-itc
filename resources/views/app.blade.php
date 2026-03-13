<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    {{-- Removed dark mode detection script --}}

    {{-- Inline style to set the HTML background color for white mode --}}
    <style>
        html {
            background-color: oklch(1 0 0);
        }
    </style>

    <title inertia>{{ config('app.name', 'Laravel') }}</title>

    @routes
    @viteReactRefresh
    @vite(['resources/js/app.tsx', "resources/js/pages/{$page['component']}.tsx"])
        {{-- SSR: Google Quality Score crawler content --}}
    <div id="ssr-content" style="position:absolute;left:-9999px;top:-9999px;width:1px;height:1px;overflow:hidden;" aria-hidden="false">
        <h1>Fire Door Installation & Maintenance Coventry</h1>
        <p>FIRAS-accredited fire door specialists. Installed within 48 hours of quote. Fully compliant with fire safety regulations. Free quotes available.</p>
        <p>48 Hour Installation · FIRAS Accredited · Finance Options Available · Free Site Surveys</p>
        <p>Call us: N/A</p>
        <a href="tel:N/A">Get Free Quote</a>
        <address>Serving Coventry & Surrounding Areas (CV & B Postcodes)</address>
    </div>
    {{-- End SSR content --}}
    @inertiaHead
    <script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "ITC Contractors Coventry",
  "telephone": "N/A",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "",
    "addressCountry": "GB",
    "streetAddress": "Serving Coventry & Surrounding Areas (CV & B Postcodes)"
  },
  "description": "Expert fire door installation and maintenance in Coventry. FIRAS accredited, 10+ years experience, installed within 48 hours. Free quotes. Call ITC Contractors today.",
  "priceRange": "\u00a3\u00a3",
  "url": "http://itc.choros.biz"
}
    </script>
</head>

<body class="font-sans antialiased">
        {{-- SSR: Google Quality Score crawler content --}}
    <div id="ssr-content" style="position:absolute;left:-9999px;top:-9999px;width:1px;height:1px;overflow:hidden;" aria-hidden="false">
        <h1>Fire Door Installation & Maintenance Coventry</h1>
        <p>FIRAS-accredited fire door specialists. Installed within 48 hours of quote. Fully compliant with fire safety regulations. Free quotes available.</p>
        <p>48 Hour Installation · FIRAS Accredited · Finance Options Available · Free Site Surveys</p>
        <p>Call us: N/A</p>
        <a href="tel:N/A">Get Free Quote</a>
        <address>Serving Coventry & Surrounding Areas (CV & B Postcodes)</address>
    </div>
    {{-- End SSR content --}}
    @inertia
</body>

</html>
