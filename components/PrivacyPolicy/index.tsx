import React from "react";;

const PrivacyPolicy = () => {
  return (
    <div className="p-8 rounded-md shadow-md max-w-3xl mx-auto my-16">
      <h1 className="text-2xl font-semibold mb-8 text-white">
        Privacy Policy
      </h1>
      <div className="space-y-6">

        <section>
          <h2 className="text-xl font-medium mb-4">1. Introduction</h2>
          <p>
            Welcome to [Your Company Name]&rsquo;s Privacy Policy. Your privacy is of utmost importance to us. 
            This policy outlines how we collect, use, and protect your personal information.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-medium mb-4">2. Information We Collect</h2>
          <ul className="list-disc pl-5">
            <li className="mb-2">
              2.1 Personal Information: This includes your name, email address, phone number, and any other information you provide when you contact us or sign up for our services.
            </li>
            <li className="mb-2">
              2.2 Technical Data: We may collect information about your device, browser type, IP address, and how you interact with our website.
            </li>
            <li>
              2.3 Cookies: Our website uses cookies to enhance user experience. You can choose to disable cookies in your browser settings.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-medium mb-4">3. How We Use Your Information</h2>
          <p>
            3.1 To Provide Our Services: We use your personal information to provide our consulting services, answer queries, and send updates.
          </p>
          <p>
            3.2 For Marketing: With your consent, we may send newsletters, promotions, and other marketing materials.
          </p>
          <p>
            3.3 For Analytics: We use technical data to analyze website traffic and improve user experience.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-medium mb-4">4. How We Protect Your Information</h2>
          <p>
            4.1 Security Measures: We implement industry-standard security measures to protect your data.
          </p>
          <p>
            4.2 Data Retention: We retain your data only for as long as necessary to fulfill the purposes for which it was collected.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-medium mb-4">5. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-medium mb-4">6. Your Rights</h2>
          <p>
            You have the right to access, modify, or delete your personal information. Contact us at [Your Contact Email] for any privacy-related requests.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-medium mb-4">7. Changes to This Policy</h2>
          <p>
            We may update our privacy policy from time to time. Any changes will be posted on this page.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-medium mb-4">8. Contact Us</h2>
          <p>
            For any questions or concerns regarding this privacy policy, please contact us at <a href="mailto:[Your Contact Email]" className="underline text-blue-500 hover:text-blue-700">[Your Contact Email]</a>.
          </p>
        </section>

      </div>
    </div>
  );
}

export default PrivacyPolicy;
