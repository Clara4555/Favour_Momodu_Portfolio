import { useState, type FormEvent } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Linkedin, Github, Mail, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { Reveal } from '@/components/animations';
import { siteConfig } from '@/data/siteConfig';
import { supabase } from '@/lib/supabase';

type Status = 'idle' | 'loading' | 'success' | 'error';

export function Contact() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const reduce = useReducedMotion();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const subject = formData.get('subject') as string;
    const message = formData.get('message') as string;

    if (!name || !email || !subject || !message) {
      setStatus('error');
      setErrorMsg('Please fill in all fields.');
      return;
    }

    setStatus('loading');
    setErrorMsg('');

    const { error } = await supabase.from('contact_messages').insert({
      name,
      email,
      subject,
      message,
    });

    if (error) {
      setStatus('error');
      setErrorMsg('Something went wrong sending your message. Please try again or email directly.');
      return;
    }

    setStatus('success');
    form.reset();
  };

  return (
    <>
      <SEO title="Contact" description="Get in touch with Favour Momodu — frontend developer, AI creative collaborator, technology educator. Let's build something interesting together." />

      {/* Hero */}
      <section className="container-page pt-32 pb-12 sm:pt-40 lg:pt-44">
        <Reveal>
          <span className="section-label">Contact</span>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="mt-4 text-display-xl text-gradient text-balance">
            Let's Build Something Interesting.
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-6 max-w-2xl text-lg text-ink-300 leading-relaxed">
            Whether you're looking for a frontend developer, AI creative collaborator,
            technology educator or someone who can bridge technology and creativity, I'd love
            to hear from you.
          </p>
        </Reveal>
      </section>

      {/* Contact grid */}
      <section className="container-page py-12 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
          {/* Form */}
          <Reveal>
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-ink-200">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    disabled={status === 'loading'}
                    className="w-full rounded-xl border border-ink-600/60 bg-ink-850/60 px-4 py-3 text-sm text-white placeholder-ink-500 transition-colors focus:border-accent-500/50 focus:bg-ink-800/60 disabled:opacity-50"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-ink-200">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    disabled={status === 'loading'}
                    className="w-full rounded-xl border border-ink-600/60 bg-ink-850/60 px-4 py-3 text-sm text-white placeholder-ink-500 transition-colors focus:border-accent-500/50 focus:bg-ink-800/60 disabled:opacity-50"
                    placeholder="favour.momoduu@gmail.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="mb-2 block text-sm font-medium text-ink-200">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  disabled={status === 'loading'}
                  className="w-full rounded-xl border border-ink-600/60 bg-ink-850/60 px-4 py-3 text-sm text-white placeholder-ink-500 transition-colors focus:border-accent-500/50 focus:bg-ink-800/60 disabled:opacity-50"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-ink-200">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  disabled={status === 'loading'}
                  className="w-full resize-none rounded-xl border border-ink-600/60 bg-ink-850/60 px-4 py-3 text-sm text-white placeholder-ink-500 transition-colors focus:border-accent-500/50 focus:bg-ink-800/60 disabled:opacity-50"
                  placeholder="Tell me about your project, idea, or opportunity..."
                />
              </div>

              {/* Status messages */}
              {status === 'error' && (
                <motion.div
                  initial={reduce ? false : { opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2.5 rounded-xl border border-error-500/30 bg-error-500/10 px-4 py-3"
                >
                  <AlertCircle className="h-4 w-4 shrink-0 text-error-500" />
                  <p className="text-sm text-error-500">{errorMsg}</p>
                </motion.div>
              )}

              {status === 'success' && (
                <motion.div
                  initial={reduce ? false : { opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2.5 rounded-xl border border-success-500/30 bg-success-500/10 px-4 py-3"
                >
                  <CheckCircle className="h-4 w-4 shrink-0 text-success-500" />
                  <p className="text-sm text-success-500">
                    Message sent! I'll get back to you soon.
                  </p>
                </motion.div>
              )}

              <button
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                className="btn-primary w-full justify-center disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="h-4 w-4" />
                  </>
                )}
              </button>
            </form>
          </Reveal>

          {/* Contact info */}
          <Reveal delay={0.2}>
            <div className="space-y-4">
              <h2 className="font-display text-xl font-semibold text-white">
                Other Ways to Reach Me
              </h2>
              <p className="text-sm text-ink-400 leading-relaxed">
                Prefer to connect directly? Use any of these channels.
              </p>

              <div className="space-y-3 pt-2">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="group flex items-center gap-3 surface surface-hover p-4"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-ink-600/60 bg-ink-800/50">
                    <Mail className="h-4 w-4 text-accent-400" />
                  </div>
                  <div>
                    <p className="text-xs font-mono uppercase tracking-wider text-ink-500">Email</p>
                    <p className="text-sm text-ink-200 group-hover:text-white">{siteConfig.email}</p>
                  </div>
                </a>

                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 surface surface-hover p-4"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-ink-600/60 bg-ink-800/50">
                    <Linkedin className="h-4 w-4 text-accent-400" />
                  </div>
                  <div>
                    <p className="text-xs font-mono uppercase tracking-wider text-ink-500">LinkedIn</p>
                    <p className="text-sm text-ink-200 group-hover:text-white">Connect on LinkedIn</p>
                  </div>
                </a>

                <a
                  href={siteConfig.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 surface surface-hover p-4"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-ink-600/60 bg-ink-800/50">
                    <Github className="h-4 w-4 text-accent-400" />
                  </div>
                  <div>
                    <p className="text-xs font-mono uppercase tracking-wider text-ink-500">GitHub</p>
                    <p className="text-sm text-ink-200 group-hover:text-white">See my code</p>
                  </div>
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
