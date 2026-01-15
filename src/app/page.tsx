import AvatarGenerator from "@/components/AvatarGenerator";
import { Zap, Shield, Link as LinkIcon, Download, Sparkles, Globe } from "lucide-react";

export default function Home() {
  return (
    <main className="selection:bg-indigo-500/30">
      <AvatarGenerator />

      {/* Features Section */}
      <section id="features" className="py-24 bg-[#0a0a0b]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500">
              Why Choose AavatarBase?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              AavatarBase is the ultimate tool for developers, designers, and creators looking for
              high-quality placeholder avatars or unique profile pictures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Zap className="text-indigo-500" />}
              title="Instant Generation"
              description="Create a random avatar in milliseconds. Perfect for generic avatars and placeholders."
            />
            <FeatureCard
              icon={<Shield className="text-purple-500" />}
              title="Open Source & Free"
              description="Built with transparency. Our free online avatar creator follows market standards."
            />
            <FeatureCard
              icon={<LinkIcon className="text-pink-500" />}
              title="Permanent Links"
              description="Get a persistent URL for your avatar. Ideal for Jira avatars and web apps."
            />
          </div>
        </div>
      </section>

      {/* API Documentation Section */}
      <section id="api" className="py-24 border-t border-white/5 bg-black/20">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
              <Globe size={24} />
            </div>
            <h2 className="text-3xl font-bold">Developer API Guide</h2>
          </div>

          <div className="space-y-8">
            <div className="p-6 rounded-3xl glass-card space-y-4">
              <h3 className="text-xl font-semibold">Self-Hosted Endpoint</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our engine provides a clean, self-hosted API for generating consistent avatars across your applications.
                Unlike external services, these links are served directly from your domain.
              </p>
              <div className="bg-black/40 rounded-xl p-4 font-mono text-sm text-indigo-300 border border-white/5 break-all">
                GET /api/avatar/[style]?seed=[value]&backgroundColor=[hex]
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-3xl glass-card space-y-3">
                <h4 className="font-semibold text-indigo-300">Parameters</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><span className="text-foreground font-mono">style</span>: Choose from 30+ DiceBear styles.</li>
                  <li><span className="text-foreground font-mono">seed</span>: Any string to generate unique features.</li>
                  <li><span className="text-foreground font-mono">backgroundColor</span>: Optional hex color code.</li>
                </ul>
              </div>
              <div className="p-6 rounded-3xl glass-card space-y-3">
                <h4 className="font-semibold text-indigo-300">Example Usage</h4>
                <pre className="text-xs bg-black/30 p-3 rounded-lg overflow-x-auto">
                  <code className="text-muted-foreground leading-relaxed">
                    {`<img \n  src="/api/avatar/adventurer?seed=felix" \n  alt="Avatar" \n/>`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content Section / FAQ */}
      <section className="py-24 bg-card/30">
        <div className="max-w-4xl mx-auto px-4 md:px-8 space-y-12">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">The Best Free Avatar Generator Online</h2>
            <p className="text-muted-foreground leading-relaxed">
              Looking for a <strong>random avatar generator</strong> for your next project?
              AavatarBase provides a simple and crisp solution to <strong>create an avatar online for free</strong>.
              Whether you need <strong>placeholders with URLs</strong> or a <strong>generic avatar</strong>
              for your user profiles, our engine delivers high-performance SVGs instantly.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our <strong>avatar maker</strong> supports over 30 unique styles, making it the most
              versatile <strong>avatar website</strong> available today. From <strong>web avatar generators</strong>
              to <strong>coding avatars</strong>, we have it all.
            </p>
          </div>

          <div id="faq" className="space-y-8">
            <h2 className="text-2xl font-bold text-center">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 gap-6">
              <FAQItem
                question="Is this avatar generator free?"
                answer="Yes! AavatarBase is a 100% free online avatar generator. You can create as many avatars as you like without any cost."
              />
              <FAQItem
                question="Can I use these avatars for my website?"
                answer="Absolutely. Our avatars are perfect for web apps, Jira, and profile placeholders. The permanent link feature makes integration seamless."
              />
              <FAQItem
                question="How does the random avatar generator work?"
                answer="We use a powerful engine to generate randomized avatars based on the seed value you provide. Change the seed, change the face!"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="p-8 rounded-3xl glass-card hover:bg-white/[0.05] transition-all duration-300 group">
      <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string, answer: string }) {
  return (
    <div className="p-6 rounded-2xl glass-card space-y-2">
      <h4 className="font-semibold text-indigo-300">{question}</h4>
      <p className="text-sm text-muted-foreground leading-relaxed">{answer}</p>
    </div>
  );
}
