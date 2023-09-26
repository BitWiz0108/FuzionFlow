import React from "react";

const CookiesPolicy = () => {
  return (
    <div className="p-8 rounded-md shadow-md max-w-3xl mx-auto my-16">
      <h1 className="text-2xl font-semibold mb-8 text-white">Cookies Policy</h1>
      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-medium mb-4">1. Introduction</h2>
          <p>
            At Fuzion Flow Digital Automation Solutions, we believe in being
            transparent about how we collect and use data. This policy provides
            information about how and when we use cookies on our website.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-medium mb-4">
            2. Types of Cookies We Use
          </h2>
          <ul className="list-disc pl-5">
            <li className="mb-2">
              Session Cookies: These are temporary cookies that expire when you
              close your browser. They enable us to track your actions during a
              single browsing session.
            </li>
            <li className="mb-2">
              Persistent Cookies: These cookies remain on your device until they
              expire or you delete them. They enable us to remember you over
              multiple browsing sessions.
            </li>
            <li>
              Third-party Cookies: These are set by third parties we partner
              with, such as analytics or advertising services. They may use
              these cookies to track your activities on our website and on other
              websites.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-medium mb-4">
            3. Purpose of Our Cookies
          </h2>
          <ul className="list-disc pl-5">
            <li>
              Authentication: We use cookies to recognize you when you visit our
              website, ensuring you don't have to log in every time.
            </li>
            <li>
              Security: Cookies play a role in security by protecting user data
              and preventing unauthorized access.
            </li>
            <li>
              Preferences: We use cookies to remember your settings and
              preferences, such as language and location.
            </li>
            <li>
              Analytics: Cookies help us understand how visitors interact with
              our website, allowing us to improve our services and user
              experience.
            </li>
            <li>
              Advertising: We may use cookies to deliver targeted advertisements
              based on your interests.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-medium mb-4">
            4. Managing and Deleting Cookies
          </h2>
          <p>
            If you wish to manage or delete cookies, you can do so through your
            browser settings. Please note that removing or blocking cookies may
            impact your user experience on our website.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-medium mb-4">
            5. Changes to This Cookie Policy
          </h2>
          <p>
            Fuzion Flow Digital Automation Solutions may update this policy from
            time to time. Any changes will be posted on this page, and if they
            are significant, we will notify our users through email or a notice
            on our website.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-medium mb-4">6. Contact Us</h2>
          <p>
            If you have any questions or concerns about this cookie policy,
            please contact us at{" "}
            <a
              href="mailto:suppot@fuzionflow.com"
              className="underline text-blue-500 hover:text-blue-700"
            >
              suppot@fuzionflow.com
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
};

export default CookiesPolicy;
