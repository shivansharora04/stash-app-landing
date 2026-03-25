import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPolicyPage() {
  return (
    <main className="relative overflow-hidden min-h-screen">
      <Navbar />
      <section className="max-w-3xl mx-auto px-6 pt-28 pb-16">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
          Privacy Policy
        </h1>
        <p className="text-muted mb-10">Last updated: 25 March 2026</p>

        <div className="space-y-8 text-foreground/90 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-semibold">1. Overview</h2>
            <p>Stash (“we”, “our”, or “us”) respects your privacy. This Privacy Policy explains how your information is handled when you use the Stash mobile application.</p>
            <p>Stash is designed with a privacy-first approach.</p>
            <p>Your data stays on your device and is not shared with us unless explicitly stated.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold">2. Data We Do NOT Collect</h2>
            <p>We do not collect, store, or have access to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Your screenshots or photos</li>
              <li>Your saved links, tweets, or reels</li>
              <li>Your notes or content</li>
              <li>Your search queries</li>
            </ul>
            <p>All of this data is processed and stored locally on your device only.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold">3. On-Device Processing</h2>
            <p>Stash uses on-device processing to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>analyze screenshots</li>
              <li>extract text (OCR)</li>
              <li>categorize content</li>
              <li>enable search</li>
            </ul>
            <p>This processing happens entirely on your device.</p>
            <p>We do not send this data to any server.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold">4. Email Collection (Optional)</h2>
            <p>If you choose to provide your email:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>It is used only to send product updates or announcements</li>
              <li>It is stored securely using third-party services (e.g., Supabase or Firebase)</li>
              <li>We do not sell or share your email</li>
            </ul>
            <p>Providing your email is completely optional.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold">5. Third-Party Services</h2>
            <p>Stash may use third-party services for limited purposes:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Analytics (e.g., app usage, crashes)</li>
              <li>Email storage (if you submit your email)</li>
            </ul>
            <p>These services do not have access to your personal content inside the app.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold">6. Data Security</h2>
            <p>We take reasonable measures to protect your information.</p>
            <p>Since most data is stored locally on your device, you remain in control of your data.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold">7. Your Choices</h2>
            <p>You can:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Use the app without providing any personal information</li>
              <li>Choose whether or not to share your email</li>
              <li>Delete the app at any time to remove all locally stored data</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold">8. Children’s Privacy</h2>
            <p>Stash does not knowingly collect personal information from children under 13.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold">9. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time.</p>
            <p>Updates will be reflected with a new “Last updated” date.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold">10. Contact</h2>
            <p>If you have any questions, contact:</p>
            <p>
              <a
                href="mailto:stashapplabs@gmail.com"
                className="text-accent hover:underline"
              >
                stashapplabs@gmail.com
              </a>
            </p>
          </section>
        </div>
      </section>
      <Footer />
    </main>
  );
}
