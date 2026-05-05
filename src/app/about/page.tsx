import { experience } from '@/data/experience';
import { skills } from '@/data/skills';

const ACCENT = '#FF5B22';

export const metadata = {
  title: 'About — Isaac Fidler',
  description:
    'From music computing at Goldsmiths to full-stack engineering. 5 years building production systems.',
};

export default function AboutPage() {
  return (
    <div className="page-content">
      {/* Header */}
      <div style={{ marginBottom: 40 }}>
        <div
          style={{
            fontSize: 10,
            letterSpacing: 1.4,
            opacity: 0.55,
            marginBottom: 18,
          }}
        >
          ──── ABOUT · ISAAC FIDLER ────
        </div>
        <h1 className="hero-h1">
          <div>Full-stack</div>
          <div>
            <span style={{ color: ACCENT, fontStyle: 'italic' }}>&amp;</span>{' '}
            music
          </div>
          <div className="hero-sub">developer. London.</div>
        </h1>
      </div>

      {/* Bio */}
      <div className="about-bio-grid">
        <p style={{ margin: 0 }}>
          Started at Goldsmiths studying Music Computing — programming, audio,
          and creative technology. Built audio visualisers, sequencers, and
          experimental instruments before moving into professional software
          engineering.
        </p>
        <p style={{ margin: 0 }}>
          After CodeWorks bootcamp I joined BX as a software engineer, spending
          four years building web applications for sustainable agriculture. I
          led production apps, built a company-wide component library,
          established CI/CD pipelines, and helped grow the engineering team. Now
          working across different domains — most interested in technically
          complex problems with real-world impact.
        </p>
      </div>

      {/* Divider */}
      <div
        style={{
          borderTop: '1px dashed var(--border-dashed)',
          opacity: 0.5,
          marginBottom: 28,
        }}
      />

      {/* Experience */}
      <div style={{ marginBottom: 48 }}>
        <div
          style={{
            fontSize: 10,
            opacity: 0.5,
            letterSpacing: 1.2,
            marginBottom: 20,
          }}
        >
          /EXPERIENCE ————
        </div>
        <div>
          {experience.map((entry, i) => (
            <div
              key={entry.company}
              className="experience-row"
              style={{
                padding: '18px 0',
                borderBottom:
                  i < experience.length - 1
                    ? '1px dashed var(--border-dashed)'
                    : 'none',
              }}
            >
              <div>
                <div
                  style={{ fontSize: 10, opacity: 0.55, letterSpacing: 0.5 }}
                >
                  {entry.period}
                </div>
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 500,
                    marginTop: 4,
                    color: ACCENT,
                  }}
                >
                  {entry.company}
                </div>
              </div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 500, marginBottom: 6 }}>
                  {entry.title}
                </div>
                <p
                  style={{
                    fontSize: 12,
                    lineHeight: 1.6,
                    opacity: 0.7,
                    margin: 0,
                  }}
                >
                  {entry.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div
        style={{
          borderTop: '1px dashed var(--border-dashed)',
          opacity: 0.5,
          marginBottom: 28,
        }}
      />

      {/* Skills */}
      <div style={{ marginBottom: 48 }}>
        <div
          style={{
            fontSize: 10,
            opacity: 0.5,
            letterSpacing: 1.2,
            marginBottom: 16,
          }}
        >
          /SKILLS ————
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {skills.map((skill) => (
            <span
              key={skill}
              style={{
                fontSize: 11,
                border: '1px solid var(--border)',
                padding: '4px 10px',
                opacity: 0.75,
                letterSpacing: 0.3,
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div
        style={{
          borderTop: '1px dashed var(--border-dashed)',
          opacity: 0.5,
          marginBottom: 28,
        }}
      />

      {/* Contact */}
      <div>
        <div
          style={{
            fontSize: 10,
            opacity: 0.5,
            letterSpacing: 1.2,
            marginBottom: 20,
          }}
        >
          /GET IN TOUCH ————
        </div>
        <div className="about-contact-grid">
          {/* Contact info */}
          <div>
            <p
              style={{
                fontSize: 13,
                lineHeight: 1.6,
                opacity: 0.75,
                margin: '0 0 20px',
              }}
            >
              Always happy to hear about interesting projects or ideas.
              Drop me a message.
            </p>
            <div style={{ display: 'grid', gap: 8, fontSize: 12 }}>
              <div>
                <span style={{ opacity: 0.45, marginRight: 8 }}>├─</span>
                <a
                  href="mailto:zac.fidler2@gmail.com"
                  style={{
                    borderBottom: '1px solid var(--border)',
                    paddingBottom: 1,
                  }}
                >
                  zac.fidler2@gmail.com
                </a>
              </div>
              <div>
                <span style={{ opacity: 0.45, marginRight: 8 }}>├─</span>
                <a
                  href="https://github.com/IsaacFidler"
                  target="_blank"
                  rel="noreferrer noopener"
                  style={{
                    borderBottom: '1px solid var(--border)',
                    paddingBottom: 1,
                  }}
                >
                  github.com/IsaacFidler ↗
                </a>
              </div>
              <div>
                <span style={{ opacity: 0.45, marginRight: 8 }}>└─</span>
                <a
                  href="https://www.linkedin.com/in/isaac-fidler/"
                  target="_blank"
                  rel="noreferrer noopener"
                  style={{
                    borderBottom: '1px solid var(--border)',
                    paddingBottom: 1,
                  }}
                >
                  linkedin.com/in/isaac-fidler ↗
                </a>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <form
            action="https://formsubmit.co/zac.fidler2@gmail.com"
            method="POST"
            style={{ display: 'grid', gap: 12, fontSize: 12 }}
          >
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="hidden"
              name="_subject"
              value="New message from portfolio site"
            />
            {(['name', 'email', 'message'] as const).map((field) =>
              field === 'message' ? (
                <textarea
                  key={field}
                  name={field}
                  placeholder={field}
                  rows={4}
                  style={{
                    background: 'transparent',
                    border: '1px dashed var(--border)',
                    color: 'var(--fg)',
                    fontFamily: 'inherit',
                    fontSize: 12,
                    padding: '8px 12px',
                    resize: 'vertical',
                    outline: 'none',
                  }}
                />
              ) : (
                <input
                  key={field}
                  type={field === 'email' ? 'email' : 'text'}
                  name={field}
                  placeholder={field}
                  style={{
                    background: 'transparent',
                    border: '1px dashed var(--border)',
                    color: 'var(--fg)',
                    fontFamily: 'inherit',
                    fontSize: 12,
                    padding: '8px 12px',
                    outline: 'none',
                  }}
                />
              ),
            )}
            <button
              type="submit"
              className="btn-primary"
              style={{ fontSize: 12, alignSelf: 'start' }}
            >
              SEND MESSAGE ▊
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
