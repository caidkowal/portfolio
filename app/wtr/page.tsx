import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work Term Report - Caiden Kowalchuk",
  description:
    "Co-op Work Term Report: a term spent turning no-code funnels into real code at Jack & Jill Health, a Canadian telehealth company.",
};

/*
  ─────────────────────────────────────────────────────────────────────────
  WORK TERM REPORT  (/wtr)
  ─────────────────────────────────────────────────────────────────────────
  One-page co-op work term report, per the BCOMP Work Report Guidelines.
  Reads as one flowing document. Square-bracket [text] marks facts to
  confirm or delete. Image slots are the dashed <ImageSlot/> blocks; drop
  originals into /public/images/wtr/ and replace with a real <img/>.
  ─────────────────────────────────────────────────────────────────────────
*/

function Figure({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption?: string;
}) {
  return (
    <figure className="my-10">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="w-full rounded-2xl border border-slate-500/30"
        style={{ boxShadow: "0 0 30px rgba(96, 165, 250, 0.2)" }}
      />
      {caption ? (
        <figcaption className="text-sm text-slate-500 mt-3 text-center italic">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

function Divider() {
  return <hr className="border-0 border-t border-slate-500/20 my-12" />;
}

export default function WorkTermReport() {
  return (
    <main className="relative overflow-x-hidden text-white">
      {/* BACKGROUND */}
      <div className="fixed inset-0 z-0">
        <img
          src="/images/paris.jpg"
          alt="background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* HEADER - back button only */}
      <header className="fixed top-6 left-6 z-50">
        <a
          href="/"
          className="inline-block bg-black/40 backdrop-blur-md border border-slate-500/30 rounded-2xl px-5 py-3 text-sm md:text-base text-slate-500 hover:text-slate-300 transition-colors"
          style={{ boxShadow: "0 0 30px rgba(96, 165, 250, 0.3)" }}
        >
          ← portfolio
        </a>
      </header>

      {/* CONTENT - one flowing column */}
      <article className="relative z-10 mx-auto w-full max-w-3xl px-6 pt-32 pb-24">
        {/* TITLE + BYLINE */}
        <p className="text-slate-500 text-sm md:text-base tracking-widest uppercase mb-4">
          Co-op Work Term Report
        </p>
        <h1
          className="text-4xl md:text-6xl text-slate-200 mb-5 leading-tight"
          style={{ textShadow: "0 0 20px #60a5fa, 0 0 40px #1f508c" }}
        >
          S26 Work Term Report
        </h1>
        <p className="text-xl md:text-2xl text-slate-400 mb-2">
          My Co-op at Jack &amp; Jill Health
        </p>
        <p className="text-base md:text-lg text-slate-500">
          Software Developer Co-op · June to August 2026
        </p>

        <Divider />

        {/* INTRODUCTION */}
        <h2 className="text-3xl md:text-4xl text-slate-400 mb-6">Introduction</h2>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
          I spent my 2026 summer work term as a software developer co-op at Jack &amp;
          Jill Health, a Canadian telehealth company. I worked across two
          codebases: the patient-facing web apps that people use to take a quiz,
          sign up and check out, and the clinical CRM the care team uses behind
          the scenes. Most weeks, something I merged was in front of real
          patients or clinicians within days.
        </p>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
          If you take one thing from this page, let it be this: the distance
          between <span className="text-orange-300">&ldquo;the code runs&rdquo;</span>{" "}
          and <span className="text-orange-300">&ldquo;the product is right&rdquo;</span>{" "}
          is where all the learning happened.
        </p>

        <Figure
          src="/images/wtr/me-at-work.jpg"
          alt="Caiden at his desk during the work term"
          caption="Me, with Slack on the laptop for the team, the codebase on the main monitor, and my water bottle."
        />

        <Divider />

        {/* THE EMPLOYER */}
        <h2 className="text-3xl md:text-4xl text-slate-400 mb-6">The Employer</h2>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
          Jack &amp; Jill Health runs two brands.{" "}
          <span className="text-orange-300">Jack</span> (jack.health) is men&rsquo;s
          health: erectile dysfunction, hair loss, weight loss, testosterone and
          longevity. <span className="text-orange-300">Jill</span> (jill.health)
          is women&rsquo;s health: menopause, hormone therapy, weight loss and
          acne. A patient takes an online quiz, creates an account, is matched
          with a clinician, and has treatment prescribed and shipped from a
          partner pharmacy. The clinic is the software. The whole company works
          remotely, so my term ran entirely over Slack, video calls and pull
          requests, with teammates spread across the country.
        </p>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
          That software spans most of what a computing science degree covers:
          the web apps and interfaces patients use, the backend systems
          and databases behind them, cloud integrations with pharmacies and
          insurers, and even a machine-learning pipeline that turns lab results
          into structured data.
        </p>

        <Divider />

        {/* GOALS */}
        <h2 className="text-3xl md:text-4xl text-slate-400 mb-6">Goals</h2>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
          I set three learning goals for the term, each framed around critical
          and creative thinking. Here is what each one was, and how it actually
          played out.
        </p>

        <h3 className="text-2xl text-orange-300 mb-3 mt-8">
          Understanding the platform end to end
        </h3>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
          I wanted to understand how the whole platform fit together, from the
          web apps patients use down to the backend systems behind them, so I
          could work on features that touched more than one part of it. I started
          with small frontend fixes to learn the team&rsquo;s conventions, then took
          on work that crossed system boundaries. By the end of the term I could
          trace a feature from what the user sees on screen all the way down to
          the data behind it, exactly the breadth I was hoping to build.
        </p>

        <h3 className="text-2xl text-orange-300 mb-3 mt-8">
          Getting to the real cause of a bug
        </h3>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
          I wanted to get better at ambiguous bugs by confirming the root cause
          before writing a fix. Several bugs that looked like display issues
          turned out to come from how the data was stored upstream, so one fix
          corrected every affected screen at once. I also learned not to trust
          local test data after something that looked broken on my machine was
          working fine in the real environment. Reproducing the failure before
          touching any code became my standard approach.
        </p>

        <h3 className="text-2xl text-orange-300 mb-3 mt-8">
          Turning vague problems into clean rules
        </h3>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
          I wanted to take loosely defined problems and break them into concrete
          rules that handle the edge cases, not just the happy path. My biggest
          project started as a broad business request that I had to translate
          into a clear set of rules, and after code-review feedback I refactored
          repeated logic into a single reusable piece shared across the app. By
          the end I was noticeably better at listing out the cases first and
          letting them drive the design.
        </p>

        <p className="text-lg md:text-xl text-gray-300 leading-relaxed mt-8">
          <span className="text-orange-300">What I did not finish. </span>
          Not everything landed before the term ended. The biggest piece still
          open is moving the rest of our patient quizzes out of the third-party
          no-code tools and into our own codebase directly. I got the first ones
          across and laid the groundwork, and the remaining flows are set to be
          finished shortly into the fall term. It was a good reminder that some
          work is measured in follow-through, not just what ships by your last
          day.
        </p>

        <Divider />

        {/* THE JOB */}
        <h2 className="text-3xl md:text-4xl text-slate-400 mb-6">The Job</h2>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
          I worked as a full-stack developer across both sides of the product:
          the patient-facing web apps and the internal tools the care team
          relies on. That meant moving between the frontend a patient sees
          and the backend and data that power it, often within the same feature.
          The internal side runs on the MEAN stack (MongoDB, Express, Angular and
          Node), which I got to work in directly.
        </p>

        <h3 className="text-2xl text-orange-300 mb-4">Moving the funnel into code</h3>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
          My biggest project was taking pages and quizzes that lived in no-code
          tools and rebuilding them properly inside our own codebase. There was
          no spec to work from, so I had to figure out how the live versions
          behaved, line everything up against our source of truth, and add the
          checkout and analytics pieces myself. I also built internal review
          pages so my supervisor could compare the old and new versions and sign
          off on them screen by screen.
        </p>

        <Figure
          src="/images/wtr/clickup-dev-queue.jpg"
          alt="ClickUp dev queue board showing blocked, in-progress and planned tickets"
          caption="My ClickUp board, where all of my tickets moved through Blocked, In Progress, Code Review and Released."
        />

        <h3 className="text-2xl text-orange-300 mb-4 mt-4">
          Guardrails around money and medication
        </h3>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
          A big part of my work was building guardrails around payments and
          prescriptions: checks that stop things like early refills,
          failed payments and duplicate orders from slipping through, and limits
          on when a subscription can change. Much of this sits right in the
          checkout path, so getting it right mattered, and I made sure to test it
          carefully.
        </p>

        <h3 className="text-2xl text-orange-300 mb-4 mt-8">Tools for the team</h3>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
          On the internal side, I added tools that made the care team&rsquo;s day
          easier: things like pre-filled forms, fixes to data bugs that
          affected patient records, and reusable messages with the right access
          controls for different roles.
        </p>

        <Figure
          src="/images/wtr/product-page.png"
          alt="Patient-facing product and program page I built"
          caption="One of the product pages I built for customers."
        />

        <h3 className="text-2xl text-orange-300 mb-4 mt-4">Patient experience</h3>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
          I also shipped a handful of patient-facing improvements across both
          brands: check-ins, inbox fixes, clearer account pages, and an
          in-app menu that pulls treatment info straight from our own catalogue.
        </p>

        <h3 className="text-2xl text-orange-300 mb-4 mt-8">Skills: class or job?</h3>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
          Classes gave me the fundamentals: the languages, the frameworks,
          and how to think about data. But most of what mattered day to day I
          learned on the job: working in large, unfamiliar codebases, reading
          code written by people who had already left, and making judgment calls
          when the instructions and the reality didn&rsquo;t line up.
        </p>

        <h3 className="text-2xl text-orange-300 mb-4 mt-8">
          Learning to work with AI tools
        </h3>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
          One of the biggest things I took away from the term was learning to work
          alongside AI coding tools every day. The real skill wasn&rsquo;t
          getting them to write code. It was knowing when to trust what they
          produced and when to check it myself. They could move fast, but they
          also made confident mistakes, so I learned to treat them as a quick
          first draft that I always verify and own.
        </p>

        <Figure
          src="/images/wtr/setup.jpg"
          alt="Caiden's desk setup: main monitor with code, laptop running Slack and Claude Code"
          caption="Where the term happened: the main monitor for code, and the laptop running Slack to stay with the team and Claude Code alongside it."
        />

        <Divider />

        {/* CONCLUSIONS */}
        <h2 className="text-3xl md:text-4xl text-slate-400 mb-6">Conclusions</h2>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
          This term wasn&rsquo;t just about closing tickets. I moved pages and
          quizzes out of no-code tools and rebuilt them in our own codebase, wrote
          the guardrails that sit in the checkout path every patient moves
          through, and learned that the real job of a developer is verifying what
          gets built, not just writing it. I came in wanting to be a full-stack
          developer, and I left with merged work on both sides of the stack. For
          the fall, what I want next is to own a feature from idea to design all
          the way through to a production deploy I run myself.
        </p>

        <Divider />

        {/* ACKNOWLEDGMENTS */}
        <h2 className="text-3xl md:text-4xl text-slate-400 mb-6">
          Acknowledgments
        </h2>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
          None of this term happened alone. Thank you to the whole team at Jack
          &amp; Jill Health for trusting a co-op with real, patient-facing work
          from week one. A specific thank-you to my supervisor, Soojin, who
          walked me through two unfamiliar codebases, reviewed my pull requests,
          and was patient with my early mistakes while still handing me work that
          mattered.
        </p>
        <p className="text-lg md:text-xl text-slate-400 leading-relaxed mt-8">
          Caiden
        </p>

        {/* FOOTER */}
        <footer className="text-center text-slate-600 text-sm pt-20">
          <a href="/" className="hover:text-slate-400 transition-colors">
            caidenkowalchuk.com
          </a>
        </footer>
      </article>
    </main>
  );
}
