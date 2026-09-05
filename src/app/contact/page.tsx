'use client';

import Link from 'next/link';

const EMAIL = 'zac.fidler2@gmail.com';

export default function ContactPage() {
  return (
    <section className="page" data-page="contact">
      <div className="contact">
        <div
          className="mono mut rv"
          style={{ marginBottom: 20, ['--i' as string]: 0 }}
        >
          Let&apos;s build something
        </div>
        <h1 className="big rv" style={{ ['--i' as string]: 1 }}>
          Say hello
        </h1>
        <a
          className="fmail rv"
          href={`mailto:${EMAIL}`}
          style={{ ['--i' as string]: 2 }}
        >
          {EMAIL}
          <span className="u2" />
        </a>

        <form
          className="cform rv"
          action={`https://formsubmit.co/${EMAIL}`}
          method="POST"
          style={{ ['--i' as string]: 3 }}
        >
          <input type="hidden" name="_captcha" value="false" />
          <input
            type="hidden"
            name="_subject"
            value="New message from portfolio site"
          />
          <label>
            <span className="mono mut">Name</span>
            <input type="text" name="name" required />
          </label>
          <label>
            <span className="mono mut">Email</span>
            <input type="email" name="email" required />
          </label>
          <label>
            <span className="mono mut">Message</span>
            <textarea name="message" rows={4} required />
          </label>
          <button type="submit">Send message ▊</button>
        </form>

        <div className="fgrid mono rv" style={{ ['--i' as string]: 4 }}>
          <div>
            <span className="mut">Elsewhere</span>
            <a
              href="https://github.com/IsaacFidler"
              target="_blank"
              rel="noreferrer noopener"
            >
              GitHub ↗
            </a>
            <a
              href="https://www.linkedin.com/in/isaac-fidler/"
              target="_blank"
              rel="noreferrer noopener"
            >
              LinkedIn ↗
            </a>
          </div>
          <div>
            <span className="mut">Index</span>
            <Link href="/projects">Work</Link>
            <Link href="/about">About</Link>
            <Link href="/">Home</Link>
          </div>
          <div>
            <span className="mut">Currently</span>
            <span>Senior Frontend Engineer</span>
            <span>London</span>
          </div>
          <div style={{ alignItems: 'flex-end', textAlign: 'right' }}>
            <span className="mut">Isaac Fidler © 2026</span>
            <span className="mut">Built from scratch</span>
          </div>
        </div>
      </div>
    </section>
  );
}
