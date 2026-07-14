import { site } from './site'

export const privacyPolicy = {
  title: 'Privacy Policy',
  eyebrow: 'Legal information',
  description: 'This Privacy Policy explains how Omnicartix handles personal information when you visit this website or contact us.',
  lastUpdated: '9 July 2026',
  metaTitle: 'Privacy Policy | Omnicartix',
  metaDescription: 'Read the Privacy Policy for Omnicartix, a UK-registered consumer brand development company.',
  canonicalPath: '/privacy-policy',
  sidebarLabel: 'Policy sections',
  sections: [
    {
      id: 'overview',
      nav: 'Overview',
      title: '1. Overview',
      paragraphs: [
        'Omnicartix is a UK-registered consumer brand development company. This website is designed to provide corporate information about Omnicartix and allow visitors to contact us.',
        'We aim to handle personal information responsibly, transparently, and only where it is relevant to a legitimate business purpose.'
      ]
    },
    {
      id: 'information',
      nav: 'Information we collect',
      title: '2. Information we collect',
      paragraphs: [
        'We may collect information you choose to provide when contacting us, including your full name, email address, company name, subject, and message content.',
        'The current website contact form is configured for frontend validation. If connected to a backend or email service later, submitted information may be sent to Omnicartix for review and response.'
      ]
    },
    {
      id: 'use',
      nav: 'How we use information',
      title: '3. How we use information',
      paragraphs: [
        'We may use information you provide to respond to enquiries, manage business communications, review partnership or brand development opportunities, and maintain appropriate records of correspondence.',
        'We do not sell personal information. We do not use personal information to make automated decisions about visitors.'
      ]
    },
    {
      id: 'cookies',
      nav: 'Cookies and analytics',
      title: '4. Cookies and analytics',
      paragraphs: [
        'This website does not currently include third-party analytics scripts, advertising trackers, or unnecessary cookies. If analytics or cookie-based tools are added in the future, this policy should be updated before deployment.'
      ]
    },
    {
      id: 'sharing',
      nav: 'Sharing information',
      title: '5. Sharing information',
      paragraphs: [
        'We may share information only where necessary for business administration, legal compliance, service providers supporting website or communication operations, or where required by law.'
      ]
    },
    {
      id: 'security',
      nav: 'Data security',
      title: '6. Data security and retention',
      paragraphs: [
        'We take reasonable steps to protect information from unauthorised access, misuse, or loss. We keep information only for as long as needed for the purpose it was provided, unless a longer retention period is required by law or legitimate business needs.'
      ]
    },
    {
      id: 'rights',
      nav: 'Your rights',
      title: '7. Your rights',
      paragraphs: [
        'Depending on applicable law, you may have rights to request access, correction, deletion, restriction, or objection to the processing of your personal information.',
        'To make a privacy-related request, contact us using the email address below.'
      ]
    },
    {
      id: 'contact-privacy',
      nav: 'Contact',
      title: '8. Contact',
      paragraphs: [`For privacy questions or requests, contact ${site.name} in the ${site.location} at ${site.email}.`]
    }
  ]
}

export const termsAndConditions = {
  title: 'Terms & Conditions',
  eyebrow: 'Legal information',
  description: 'These Terms & Conditions explain the rules for using the Omnicartix corporate website.',
  lastUpdated: '9 July 2026',
  metaTitle: 'Terms & Conditions | Omnicartix',
  metaDescription: 'Read the Terms and Conditions for using the Omnicartix corporate website.',
  canonicalPath: '/terms-and-conditions',
  sidebarLabel: 'Terms sections',
  sections: [
    {
      id: 'acceptance',
      nav: 'Acceptance',
      title: '1. Acceptance of these terms',
      paragraphs: [
        'By accessing or using this website, you agree to these Terms & Conditions. If you do not agree with these terms, you should not use this website.',
        'This website is the corporate website of Omnicartix and is intended to provide general company information.'
      ]
    },
    {
      id: 'website-use',
      nav: 'Website use',
      title: '2. Use of this website',
      paragraphs: [
        'You may use this website for lawful purposes only. You must not misuse the website, attempt to interfere with its operation, introduce harmful code, or use it in a way that may damage Omnicartix or other users.'
      ]
    },
    {
      id: 'information',
      nav: 'Website information',
      title: '3. Website information',
      paragraphs: [
        'The content on this website is provided for general corporate information only. While we aim to keep information accurate and up to date, we do not guarantee that all content will always be complete, current, or error-free.',
        'Nothing on this website should be treated as legal, financial, technical, or professional advice.'
      ]
    },
    {
      id: 'brands-products',
      nav: 'Brands and products',
      title: '4. Brands and product information',
      paragraphs: [
        'Omnicartix may develop or manage consumer-focused brands. Individual brands may have their own dedicated websites, policies, terms, product information, and customer support processes.',
        'This corporate website is not an eCommerce store and does not currently sell products directly.'
      ]
    },
    {
      id: 'intellectual-property',
      nav: 'Intellectual property',
      title: '5. Intellectual property',
      paragraphs: [
        'Unless otherwise stated, website content, design elements, text, graphics, and brand materials are owned by or licensed to Omnicartix. You may not copy, reproduce, distribute, or modify website content without permission, except as allowed by applicable law.'
      ]
    },
    {
      id: 'third-party-links',
      nav: 'Third-party links',
      title: '6. Third-party links',
      paragraphs: [
        'This website may include links to third-party websites or platforms. These links are provided for convenience only. Omnicartix is not responsible for the content, policies, or practices of third-party websites.'
      ]
    },
    {
      id: 'liability',
      nav: 'Liability',
      title: '7. Limitation of liability',
      paragraphs: [
        'To the fullest extent permitted by law, Omnicartix is not liable for loss or damage arising from use of this website, reliance on its content, or temporary unavailability of the website.'
      ]
    },
    {
      id: 'changes',
      nav: 'Changes',
      title: '8. Changes to these terms',
      paragraphs: [
        'We may update these Terms & Conditions from time to time. The updated version will be posted on this page with a revised update date.'
      ]
    },
    {
      id: 'contact-terms',
      nav: 'Contact',
      title: '9. Contact',
      paragraphs: [`For questions about these terms, contact ${site.name} in the ${site.location} at ${site.email}.`]
    }
  ]
}
