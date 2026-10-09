import { ScrollMotion } from "@/components/scroll-motion";
import { SiteHeader } from "@/components/site-header";
import { DeliveryFlow } from "@/components/delivery-flow";
import { RobotViewer } from "@/components/robot-viewer";
import { JoinForm } from "@/components/join-form";
import { MediaSlot } from "@/components/media-slot";
import { Icon } from "@/components/icon";
import { HeroParallax } from "@/components/hero-parallax";
import { SpotlightText } from "@/components/spotlight-text";
import { heroLayers, media, robotModel } from "@/lib/media";
import { faq, navigation, robotFeatures, site, team } from "@/lib/site";

export default function Home() {
  const showHeroMedia = Boolean(media.hero || site.showPlaceholders);
  const joinEnabled = Boolean(
    process.env.JOIN_FORM_ENDPOINT?.startsWith("https://"),
  );
  return (
    <>
      <SiteHeader />
      <main id="main">
        <section
          className={`hero section-shell ${showHeroMedia ? "" : "hero-text-only"}`}
          id="home"
          aria-labelledby="hero-title"
        >
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="eyebrow-line" />
              AUTONOMOUS DORM DELIVERY
            </p>
            <h1 id="hero-title">
              Your food.
              <br />
              <SpotlightText>Your floor.</SpotlightText>
            </h1>
            <p className="hero-description">
              We’re building a robot to bring your food from the dorm entrance
              to your room.
            </p>
            <div className="hero-actions">
              <a
                className="button"
                href={site.meetingUrl ?? "#contact"}
                {...(site.meetingUrl
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                Book a meeting
              </a>
              <a className="button button-outline" href="#how-it-works">
                See how it works
              </a>
            </div>
            <p className="hero-status">
              <span className="status-mark" />
              {site.status}
              <span className="status-divider">/</span>Built by students, for
              students
            </p>
          </div>
          {showHeroMedia && (
            <div className="hero-visual">
              {media.hero && heroLayers ? (
                <HeroParallax
                  backdrop={heroLayers.backdrop}
                  subject={heroLayers.subject}
                  alt={media.hero.alt}
                />
              ) : (
                <MediaSlot
                  asset={media.hero}
                  label="The 507-AD robot"
                  className="hero-media"
                  priority
                />
              )}
              <div className="hero-visual-caption">
                <span>507-AD — A NEW DORMMATE</span>
                <span>01 / THE IDEA</span>
              </div>
            </div>
          )}
          <div className="hero-bottom">
            <span>From the entrance. To your door.</span>
            <a href="#how-it-works">
              Discover the journey
              <span className="scroll-line" aria-hidden="true" />
            </a>
          </div>
        </section>

        <section
          className="flow-section section-shell"
          id="how-it-works"
          aria-labelledby="flow-title"
        >
          <div className="section-heading" data-scroll-reveal>
            <div>
              <p className="eyebrow">01 / THE JOURNEY</p>
              <h2 id="flow-title">
                Delivery, without
                <br />
                the detour.
              </h2>
            </div>
            <div className="section-intro">
              <p>
                A simpler handoff.
                <br />
                All the way to your room.
              </p>
              <span className="pill">Planned delivery experience</span>
            </div>
          </div>
          <div data-scroll-reveal>
            <DeliveryFlow />
          </div>
          {media.deliveryFlow && (
            <MediaSlot
              asset={media.deliveryFlow}
              label="Delivery flow visual"
              className="supporting-media"
            />
          )}
        </section>

        <section
          className="robot-section"
          id="robot"
          aria-labelledby="robot-title"
        >
          <div className="section-shell">
            <div className="section-heading" data-scroll-reveal>
              <div>
                <p className="eyebrow">02 / MEET YOUR NEW DORMMATE</p>
                <h2 id="robot-title">
                  Small robot.
                  <br />
                  Big convenience.
                </h2>
              </div>
              <div className="section-intro">
                <p>
                  Designed around the last part
                  <br />
                  of dorm delivery.
                </p>
                <span className="pill">{site.status}</span>
              </div>
            </div>
            <div className="robot-scroll-layout">
              <div className="robot-pin-column">
                <div className="robot-pin-stage">
                  <RobotViewer />
                </div>
              </div>
              <div className="robot-features">
                {robotFeatures.map((feature, index) => (
                  <article key={feature.title} data-scroll-feature>
                    <div className="feature-top">
                      <Icon name={feature.icon} />
                      <span>0{index + 1}</span>
                    </div>
                    <h3>{feature.title}</h3>
                    <p>{feature.text}</p>
                  </article>
                ))}
              </div>
            </div>
            {robotModel && (
              <p className="model-note">
                CAD design visualization · {robotModel.version}
              </p>
            )}
            <p className="feature-note">
              These are development goals. The complete delivery workflow has
              not yet been validated.
            </p>
            {media.robotDetail && (
              <MediaSlot
                asset={media.robotDetail}
                label="Robot detail"
                className="supporting-media"
              />
            )}
          </div>
        </section>

        <section
          className="dorm-section section-shell"
          id="dorm-life"
          aria-labelledby="dorm-title"
        >
          <div className="dorm-heading" data-scroll-reveal>
            <p className="eyebrow">03 / BUILT FOR DORM LIFE</p>
            <h2 id="dorm-title">
              Keep your
              <br />
              evening moving.
            </h2>
            <p className="section-description">
              Less interruption between what you’re doing and what you’re
              eating.
            </p>
          </div>
          <div
            className={`dorm-grid ${media.dormLife || site.showPlaceholders ? "" : "no-media"}`}
          >
            <MediaSlot
              asset={media.dormLife}
              label="Built for dorm life"
              className="dorm-media"
            />
            <div className="dorm-benefits">
              <article>
                <span className="eyebrow">STAY IN YOUR FLOW</span>
                <h3>One less interruption.</h3>
                <p>
                  A delivery experience designed around studying, relaxing, and
                  everything in between.
                </p>
              </article>
              <article>
                <span className="eyebrow">DESIGNED FOR INDOORS</span>
                <h3>A shorter trip for you.</h3>
                <p>
                  We’re developing a robot for the spaces students use every
                  day, from the entrance to the room.
                </p>
              </article>
              <article>
                <span className="eyebrow">A SIMPLE HANDOFF</span>
                <h3>Just outside your door.</h3>
                <p>
                  Clear cues, location sharing, and notifications are part of
                  the experience we’re building.
                </p>
              </article>
            </div>
          </div>
          {media.dormEnvironment && (
            <MediaSlot
              asset={media.dormEnvironment}
              label="Dorm environment"
              className="supporting-media"
            />
          )}
        </section>

        <section
          className="story-section"
          id="our-story"
          aria-labelledby="story-title"
        >
          <div className="section-shell">
            <div className="story-grid">
              <div data-scroll-reveal>
                <p className="eyebrow">04 / OUR STORY</p>
                <h2 id="story-title">
                  Built by students.
                  <br />
                  <span>For students.</span>
                </h2>
                <p className="story-location">
                  Started at Lauder College House.
                  <br />
                  University of Pennsylvania.
                </p>
              </div>
              <div className="story-copy" data-scroll-stagger>
                <p>
                  We started 507-AD because we kept running into the same
                  interruption: food arriving just as we were in the middle of
                  something.
                </p>
                <p>
                  At Lauder College House, picking up an order means heading
                  downstairs and making the trip through the courtyard to the
                  entrance. We wanted a way to finish what we were doing while
                  our food made the last part of the journey to us.
                </p>
                <p>
                  So we began building a robot to bring delivery from the dorm
                  entrance to the room.
                </p>
              </div>
            </div>
            {media.teamPhoto && (
              <MediaSlot
                asset={media.teamPhoto}
                label="Team photo"
                className="team-photo"
              />
            )}
            <div className="team-heading">
              <span className="eyebrow">THE PEOPLE BEHIND 507-AD</span>
              <span>Two students. One shared idea.</span>
            </div>
            <div className="team-grid" data-scroll-stagger>
              {team.map((person) => (
                <article className="team-card" key={person.name}>
                  <div className="team-card-top">
                    {media[person.portrait] ? (
                      <MediaSlot
                        asset={media[person.portrait]}
                        label={`${person.name} portrait`}
                        className="portrait"
                      />
                    ) : (
                      <span className="team-monogram" aria-hidden="true">
                        {person.initials}
                      </span>
                    )}
                    <div>
                      <h3>{person.name}</h3>
                      <p className="team-background">{person.background}</p>
                    </div>
                  </div>
                  <p className="team-role">{person.role}</p>
                  <p className="team-bio">{person.bio}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="progress-section section-shell"
          id="progress"
          aria-labelledby="progress-title"
        >
          <div className="section-heading" data-scroll-reveal>
            <div>
              <p className="eyebrow">05 / WHERE WE ARE</p>
              <h2 id="progress-title">An idea in motion.</h2>
            </div>
            <span className="pill">{site.status}</span>
          </div>
          <div className="progress-grid" data-scroll-stagger>
            <div className="progress-current">
              <span className="eyebrow">RIGHT NOW</span>
              <h3>Building the hardware.</h3>
              <p>
                Hardware development is nearing completion. We’re seeking
                funding to build our first MVP and bring the full delivery
                workflow together.
              </p>
              <span className="progress-date">Team update · October 2026</span>
            </div>
            <div className="progress-next">
              <span className="eyebrow">OUR FIRST MILESTONE</span>
              <h3>
                Entrance to room.
                <br />
                At Lauder.
              </h3>
              <p>
                A complete delivery at Lauder College House, from the entrance
                handoff point to a student’s room.
              </p>
              <ol className="milestone-list">
                <li>Secure funding</li>
                <li>Build our first MVP</li>
                <li>Validate the full journey</li>
              </ol>
              <p className="progress-caption">
                Planned test location. Service availability and testing approval
                have not been announced.
              </p>
            </div>
          </div>
          {media.hardwareProgress && (
            <MediaSlot
              asset={media.hardwareProgress}
              label="Hardware progress"
              className="supporting-media"
            />
          )}
          {media.testVideo && (
            <figure className="test-video">
              <video
                controls
                preload="none"
                poster={media.hardwareProgress?.src}
                aria-label={media.testVideo.alt}
              >
                <source src={media.testVideo.src} />
              </video>
              <figcaption>{media.testVideo.alt}</figcaption>
            </figure>
          )}
        </section>

        <section
          className="faq-section section-shell"
          aria-labelledby="faq-title"
        >
          <div>
            <p className="eyebrow">A FEW THINGS TO KNOW</p>
            <h2 id="faq-title">Good questions.</h2>
          </div>
          <div className="faq-list" data-scroll-reveal>
            {faq.map((item) => (
              <details key={item.question}>
                <summary>
                  {item.question}
                  <Icon name="plus" />
                </summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section
          className="join-section"
          id="join"
          aria-labelledby="join-title"
        >
          <div className="section-shell join-grid">
            <div className="join-copy" data-scroll-reveal>
              <p className="eyebrow">06 / MAKE IT WITH US</p>
              <h2 id="join-title">
                Help build the
                <br />
                next dormmate.
              </h2>
              <p>
                We’re a two-person team building 507-AD. Interested in joining
                us? Tell us what you’d like to work on, or send us your resume.
              </p>
              <p className="join-invitation">Curious minds welcome.</p>
              {site.contactEmail && (
                <a className="text-link" href={`mailto:${site.contactEmail}`}>
                  Prefer email? Email us
                </a>
              )}
            </div>
            <JoinForm enabled={joinEnabled} />
          </div>
        </section>

        <section
          className="contact-section section-shell"
          id="contact"
          aria-labelledby="contact-title"
        >
          <p className="eyebrow">LET’S TALK</p>
          <h2 id="contact-title" data-scroll-mask>
            The next step
            <br />
            starts with a conversation.
          </h2>
          <p>Want to learn more about 507-AD? We’d love to hear from you.</p>
          <div className="contact-actions" data-scroll-reveal>
            {site.meetingUrl ? (
              <a
                className="button"
                href={site.meetingUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a meeting
              </a>
            ) : site.contactEmail ? (
              <a
                className="button"
                href={`mailto:${site.contactEmail}?subject=Meeting%20with%20507-AD`}
              >
                Book a meeting
              </a>
            ) : (
              <button className="button" disabled>
                Meeting booking opens soon
              </button>
            )}
            {site.contactEmail ? (
              <a
                className="button button-outline"
                href={`mailto:${site.contactEmail}`}
              >
                Email us
              </a>
            ) : (
              <span className="contact-pending">
                Email contact will be added soon.
              </span>
            )}
          </div>
        </section>
      </main>
      <ScrollMotion />
      <footer className="site-footer section-shell">
        <div className="footer-top">
          <a href="#home" className="wordmark" aria-label="507-AD home">
            507-<span>AD</span>
          </a>
          <p>Built by students. For students.</p>
          <nav aria-label="Footer navigation">
            {navigation.map((link) => (
              <a href={link.href} key={link.href}>
                {link.label}
              </a>
            ))}
            {site.contactEmail && (
              <a href={`mailto:${site.contactEmail}`}>Email us</a>
            )}
          </nav>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} 507-AD</span>
          <span>Autonomous dorm delivery · {site.status}</span>
        </div>
      </footer>
    </>
  );
}
