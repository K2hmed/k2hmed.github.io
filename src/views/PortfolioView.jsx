import React from "react";
import Section from "../components/Section.jsx";
import Card from "../components/Card.jsx";
import VisitorToggle from "../components/VisitorToggle";
import profileImg from "../assets/profile.png";
import Reveal from "../components/Reveal.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import Magnetic from "../components/Magnetic.jsx";
import KpiStat from "../components/KpiStat.jsx";
import { projects } from "../data/projects";

export default function PortfolioView({ visitorType, onSwitch }) {
  const isStudent = visitorType === "student";

  const visitorCard = isStudent
    ? {
        label: "STUDENT",
        title: "Guidance on applied data and ML projects",
        body:
          "I provide guidance on ML foundations, Python workflows, and end-to-end project development. I help students think through design choices, debug effectively, and improve their overall approach.",
        ctaText: "Discuss Your Project",
        ctaHref: "#contact",
      }
    : {
        label: "RECRUITER",
        title: "Built for hiring teams",
        body:
          "Open to data science, analytics, and applied ML roles. I work on predictive systems, analytics dashboards, and automation pipelines used in healthcare and business decision-making.",
        ctaText: "Download Resume",
        ctaHref: "/resume.pdf",
      };

  return (
    <>
      {/* HERO */}
      <section id="home" className="grid gap-8 lg:grid-cols-2">
        <div className="pt-4 sm:pt-6">
          <div className="text-xs sm:text-sm font-medium tracking-[0.2em] text-muted">
            APPLIED DATA & ANALYTICS · HEALTHCARE, BUSINESS & FINANCE · TORONTO, ON · OPEN TO ROLES
          </div>

          {/* Mobile-first type scale */}
          <h1
            className="mt-5 sm:mt-6 font-display font-semibold text-fg leading-[0.98]
                       text-[44px] sm:text-6xl lg:text-6xl"
          >
            Khushnud builds{" "}
            <br />
            <span
              className="gradient-text-pan font-semibold"
              style={{
                backgroundImage: "linear-gradient(90deg, #E07A5F, #D6B77C, #E07A5F)",
              }}
            >
              applied data
            </span>{" "}
            <br />
            systems that drive real-world decisions
          </h1>

          <p className="mt-5 sm:mt-6 max-w-xl text-muted text-[16px] sm:text-[17px] leading-relaxed">
            Applied data and analytics builder with hands-on experience delivering predictive systems, 
            analytics dashboards, and automation pipelines. Experienced in taking real-world data from 
            ingestion and modeling through deployment-ready solutions that support healthcare and business 
            decision-making.
          </p>

          <p className="mt-5 sm:mt-6 text-sm font-semibold text-accent">
            SciXchange Mentor · International Quarterfinalist Team
          </p>

          <div className="mt-7 sm:mt-8 flex flex-wrap gap-3">
            <Magnetic strength={20} className="inline-flex">
            <a
              href="#projects"
              className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white hover:brightness-95 active:brightness-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
            >
              View Projects
            </a>
            </Magnetic>

            <a
              href="#skills"
              className="rounded-full border border-border bg-surface/50 px-6 py-3 text-sm font-semibold text-fg hover:bg-surface/70 transition-colors"
            >
              View My Skillset
            </a>

            <a
              href="#contact"
              className="rounded-full border border-border bg-surface/50 px-6 py-3 text-sm font-semibold text-fg hover:bg-surface/70 transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="space-y-4 lg:pt-10">
          {/* WHO'S VISITING CARD */}
          <Card className="p-6 sm:p-7">
            <div className="text-xs tracking-widest text-muted">WHO’S VISITING?</div>

            <div className="mt-4 flex items-center gap-3">
              <img
                src={profileImg}
                alt="Khushnud Ahmed"
                className="h-14 w-14 rounded-full object-cover ring-1 ring-white/15 shadow-md"
                loading="lazy"
              />
              <div>
                <div className="font-semibold text-fg">Khushnud Ahmed</div>
                <div className="text-sm text-muted">Applied Data (DS · Analytics · Pipelines)</div>
              </div>
            </div>

            <div className="mt-5">
              <VisitorToggle value={visitorType} onChange={onSwitch} />
            </div>

            <div className="mt-6 text-xs tracking-widest text-accent">
              {visitorCard.label}
            </div>

            <div className="mt-2 text-xl font-semibold text-fg">{visitorCard.title}</div>

            <p className="mt-3 text-muted">{visitorCard.body}</p>

            <a
              href={visitorCard.ctaHref}
              className="mt-5 inline-block text-sm font-semibold text-accent hover:text-accent2 transition-colors"
            >
              {visitorCard.ctaText}
            </a>
          </Card>

          {/* STATS (mobile: 1 col, sm: 3 col) */}
          <Card className="grid grid-cols-1 items-start gap-5 bg-surface/60 p-6 sm:grid-cols-3 sm:gap-6 sm:p-7">
            <KpiStat 
              value={7900} 
              suffix="+"
              label="Healthcare records analyzed" 
            />
            
            <KpiStat
              value={70}
              suffix="%"
              ring
              ringMax={100}
              ringColorClass="stroke-orange-500/90 dark:stroke-orange-400/90"
              label="Readmission prediction (AUC)"
            />

            <KpiStat
              value={50}
              suffix="GB"
              ring
              ringMax={100}
              ringColorClass="stroke-teal-600/85 dark:stroke-teal-400/85"
              label="Multi-source datasets unified"
            />
          </Card>
        </div>
      </section>

      {/* TOP STRIP */}
      <div className="mt-8 sm:mt-10 rounded-[28px] bg-surface/60 px-6 py-6 sm:px-7 shadow-[0_18px_50px_rgba(0,0,0,0.10)] backdrop-blur">
        <div className="space-y-5">
          <div>
            <div className="text-[11px] font-semibold tracking-[0.22em] text-muted">
              CURRENTLY WORKING ON
            </div>
            <div className="mt-2 text-[15px] leading-relaxed text-fg">
              Building decision dashboards from predictive model outputs
            </div>
          </div>

          <div>
            <div className="text-[11px] font-semibold tracking-[0.22em] text-muted">
              OPEN TO
            </div>
            <div className="mt-2 text-[15px] leading-relaxed text-fg">
              Full-time or contract opportunities
            </div>
          </div>
        </div>
      </div>

      {/* PROJECTS */}
      <Section
        id="projects"
        title="Project Highlights"
        subtitle="Applied systems for prediction, analytics, and decision-making across healthcare, business, and finance."
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.id ?? p.title} delay={i * 45} y={12}>
              <ProjectCard project={p} />
            </Reveal>
          ))}

        </div>
      </Section>

      {/* EXPERIENCE */}
      <Section
        id="experience"
        title="Experience"
        subtitle="Applied experience building predictive systems, analytics workflows, and production data tools."
      >
        <div className="space-y-5">
          {[
            {
              title: "Data Science Mentor",
              org: "SciXchange · Toronto, ON",
              dates: "Jan 2025 – May 2025",
              description:
                "Guided student teams through the end-to-end development of predictive ML applications and analytics dashboards, emphasizing problem framing, data validation, and deployment-ready thinking.",
              bullets: [
                "Mentored teams in building predictive models and Power BI dashboards using Python, focusing on feature engineering, evaluation, and interpretability.",
                "Introduced data validation and model-readiness practices, improving project completion and delivery quality by 25%.",
                "Reviewed model outputs and visualizations to ensure analytical rigor and clear communication for non-technical audiences.",
              ],
            },
            {
              title: "Data Analytics Intern",
              org: "Accenture · Remote",
              dates: "Oct 2024 – Nov 2024",
              description:
                "Delivered data-driven analysis and dashboards to support marketing performance optimization and stakeholder decision-making.",
              bullets: [
                "Conducted campaign performance analysis to identify optimization opportunities, contributing to 18% ROI growth.",
                "Built interactive Tableau dashboards that translated complex performance metrics into clear insights for non-technical stakeholders.",
                "Partnered with cross-functional teams to align analytical outputs with business objectives and reporting standards.",
              ],
            },
            {
              title: "Business Data Analyst",
              org: "Desert King Waterproofing LLC · Dubai, UAE",
              dates: "Aug 2022 – Mar 2024",
              description:
                "Owned analytics and automation initiatives to improve forecasting accuracy, operational efficiency, and executive reporting.",
              bullets: [
                "Deployed predictive models to forecast project costs and schedule delays, improving budget accuracy by 32%.",
                "Automated ETL workflows using Python and SQL, reducing reporting turnaround time by 40%.",
                "Designed Power BI dashboards to track KPIs and operational metrics, enabling data-driven executive decision-making.",
                "Collaborated closely with finance and operations to ensure data integrity, consistency, and actionable reporting.",
              ],
            },
          ].map((r, i) => (
            <Reveal key={r.title} delay={i * 80} y={14}>
              <Role title={r.title} org={r.org} dates={r.dates} description={r.description} bullets={r.bullets} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* SKILLS */}
      <Section
        id="skills"
        title="Skills"
        subtitle="Tools and workflows for predictive modeling, analytics, and automation delivery."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            {
              title: "Predictive Modeling & Applied ML",
              items: [
                "Classification and risk modeling",
                "Feature engineering and imputation",
                "Model evaluation (AUC, F1, calibration)",
                "Imbalanced learning and threshold tuning",
                "Explainability and error analysis",
              ],
            },
            {
              title: "Automation & Delivery",
              items: [
                "Python analytics and data workflows",
                "ETL automation and scheduling",
                "API integration and notifications",
                "Monitoring, logging, and heartbeat checks",
                "Reproducible pipelines and documentation",
              ],
            },
            {
              title: "Data, BI & Cloud",
              items: [
                "SQL and analytics data modeling",
                "Dashboards (Power BI, Tableau)",
                "Data quality checks and validation",
                "AWS and Azure fundamentals",
                "Scalable processing (PySpark)",
              ],
            },
          ].map((s, i) => (
            <Reveal key={s.title} delay={i * 70} y={12}>
              <SkillCard title={s.title} items={s.items} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* EDUCATION */}
      <Section
        id="education"
        title="Education"
        subtitle="Academic training supporting applied data science and analytics."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            {
              title: "MSc, Data Science & Analytics",
              org: "Toronto Metropolitan University",
              meta: "GPA: 3.94/4.00",
              coursework:
                "Selected Coursework: Machine Learning, Data Mining and Prescriptive Analytics, Big Data Systems and Tooling, Advanced Data Visualization, Deep Learning, Algorithms for Data Systems",
            },
            {
              title: "BSc, Computer Science",
              org: "SZABIST University - Dubai Campus",
              meta: "GPA: 3.46/4.00",
            },
          ].map((e, i) => (
            <Reveal key={e.title} delay={i * 70} y={12}>
              <EduCard title={e.title} org={e.org} meta={e.meta} coursework={e.coursework} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* MENTOR NOTES */}
      <Section
        id="mentor"
        title="Mentor & Stakeholder Notes"
        subtitle="Feedback on analytical rigor, data reasoning, and practical delivery across projects and teams."
      >
        
        {(() => {
          const quotes = [
            {
              quote:
                "Explains complex data concepts clearly and emphasizes validation, assumptions, and interpretability. Students consistently produced stronger analyses and more defensible results.",
              who: "Professor, Software Engineering",
            },
            {
              quote:
                "Delivered clear, decision-ready analyses under tight timelines. Insights were easy for non-technical stakeholders to interpret and act on.",
              who: "Project Stakeholder, Data Analytics",
            },
            {
              quote:
                "Helped me break down SQL logic and modeling decisions step by step. I learned how to reason about data quality and turn raw data into usable insights quickly.",
              who: "Student, Data Analytics",
            },
            {
              quote:
                "Built reliable analytics workflows and dashboards that leadership used for planning and forecasting. Strong attention to data accuracy and operational relevance.",
              who: "Manager, Business Analytics",
            },
            {
              quote:
                "Focused on how to explain results clearly, not just get the right answer. My dashboards and analyses became much easier for non-technical reviewers to understand.",
              who: "Student, Computer Science",
            },
          ];
          
          const loop = [...quotes, ...quotes];
          
          return (
            <div className="mentor-marquee mentor-marquee--fade mentor-viewport">
              <div
                className="mentor-marquee__track gap-6"
                style={{ ["--marquee-duration"]: "30s" }}
              >
                {loop.map((q, i) => (
                  <div key={`${q.who}-${i}`} className="mentor-item">
                    <QuoteCard quote={q.quote} who={q.who} />
                  </div>
                ))}
              </div>
            </div>
          );
        })()}
      </Section>

      {/* CONTACT */}
      <Section
        id="contact"
        title="Let’s connect"
        /*subtitle="Open to AI Engineer, ML Engineer, and data analyst roles. Available for tutoring support on ML projects."*/
      >
        <div className="rounded-[28px] border border-border/70 bg-surface2/70 p-7 sm:p-8 text-fg shadow-soft backdrop-blur">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <div className="text-xl font-semibold">Contact</div>
              <div className="mt-4 space-y-3 text-muted">
                <div>Email: ahmed.khushnood8@gmail.com</div>
                <div>Phone: +1 437-217-6349</div>
                <div>LinkedIn: linkedin.com/in/khushnud-ahmed</div>
                <div>GitHub: github.com/K2hmed</div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <a
                href="mailto:ahmed.khushnood8@gmail.com"
                className="h-12 rounded-full bg-accent text-center text-sm font-semibold text-white leading-[3rem] hover:brightness-95 active:brightness-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
              >
                Email me
              </a>

              <a
                href="https://www.linkedin.com/in/khushnud-ahmed"
                className="h-12 rounded-full border border-border bg-surface/40 text-center text-sm font-semibold text-fg leading-[3rem] hover:bg-surface/70 transition-colors"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </Section>

      <footer className="pt-8 pb-16 text-sm text-muted">
        Khushnud Ahmed · Applied Data (DS · Analytics · Pipelines)
      </footer>
    </>
  );
}

function Stat({ value, label }) {
  return (
    <div>
      <div className="text-3xl font-semibold text-fg">{value}</div>
      <div className="mt-2 text-sm text-muted">{label}</div>
    </div>
  );
}

function Role({ title, org, dates, description,bullets }) {
  return (
    <Card>
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <div className="text-xl font-semibold text-fg">{title}</div>
          <div className="text-muted">{org}</div>
        </div>
        <div className="text-sm text-muted">{dates}</div>
      </div>

      {description && (
        <p className="mt-3 text-sm text-fg/70 leading-relaxed">
          {description}
        </p>
      )}

      <ul className="mt-4 list-disc space-y-2 pl-5 text-fg/80">
        {bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
    </Card>
  );
}

function SkillCard({ title, items }) {
  return (
    <Card>
      <div className="text-xl font-semibold text-fg">{title}</div>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-fg/80">
        {items.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
    </Card>
  );
}

function EduCard({ title, org, meta, coursework }) {
  return (
    <Card>
      <div className="text-xl font-semibold text-fg">{title}</div>
      <div className="mt-2 text-muted">{org}</div>
      <div className="mt-4 text-muted">{meta}</div>

      {coursework && (
        <div className="mt-2 text-sm text-muted leading-relaxed">
          {coursework}
        </div>
      )}
    </Card>
  );
}

function QuoteCard({ quote, who }) {
  return (
    <Card className="h-full flex flex-col justify-between">
      <div className="text-fg leading-relaxed clamp-3">“{quote}”</div>
      <div className="mt-6 text-sm font-semibold text-muted">— {who}</div>
    </Card>
  );
}
