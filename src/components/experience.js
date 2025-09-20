const experience = [
  {
    timeline: "Present",
    title: "Master’s Thesis · Technical University of Denmark (DTU)",
    jobtitle: "Master’s Student",
    text: "Developing a pipeline for memory-efficient processing and visualization of massive 3D imaging datasets. Using OME-ZARR for hierarchical storage, ITK for 3D visualization with ROI selection, and Dask (Python) for chunk-based computation.",
    path: "https://www.dtu.dk/english/education/graduate/msc-programmes/computer-science-and-engineering",
    hyperlink: [],
    tech: ["OME-ZARR", "Dask (Python)"],
  },
  {
    timeline: "2019 - 2024",
    title: "Helpdesk · Roskilde University Digital",
    jobtitle: "IT Supporter",
    text: "Provided on-site and remote support to staff and students. Installed and configured computers, printers, and networks. Troubleshot Microsoft Office 365, Adobe Creative Suite, email systems, and internal applications while documenting solutions for future efficiency.",
    path: "https://ruc.dk/digital",
    hyperlink: [],
    tech: ["Office 365", "Adobe Suite", "Topdesk"],
  },
  {
    timeline: "2023 - 2024",
    title: "Videographer · Musik i Lejet",
    jobtitle: "Volunteer",
    text: "Captured and produced video content during one of Denmark’s most popular music festivals. Worked closely with a creative team in a fast-paced environment, delivering high-quality material under tight deadlines.",
    path: "https://www.musikilejet.dk",
    hyperlink: [
      {
        title: "Aftermovie 2023",
        path: "https://www.instagram.com/musikilejet/reel/CvPA-KbvukL/",
      },
      {
        title: "Sponsor 2024",
        path: "https://www.instagram.com/reel/C9p95OciNNL/?igsh=MzMzaTMxZGN0b2s0",
      },
    ],
    tech: [],
  },
  {
    timeline: "2018 - Present",
    title: "Founder · Sandreassen Media",
    jobtitle: "Freelance Photographer & Media Producer",
    text: "Founded and managed my own media company, delivering photography, video production, and digital content for private clients and businesses. Working as a freelancer has taught me to work independently, manage projects from start to finish, and take responsibility for both technical execution and client satisfaction.",
    path: "https://photosite-zeta.vercel.app/",
    hyperlink: [],
    tech: ["Final Cut Pro X", "Lightroom", "Photoshop"],
  },
];

export const Experience = () => {
  return (
    <section
      id="experience"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Work experience"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Experience
        </h2>
      </div>
      <div>
        <ul className="group/list">
          {experience.map((items, index) => (
            <li key={index} className="mb-12">
              <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                <header
                  aria-label="2024 to Present"
                  className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
                >
                  {items.timeline}
                </header>
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-slate-200">
                    <div>
                      <a
                        href={items.path}
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label="DTU (Opens in new tab)"
                        className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-[var(--accent)] focus-visible:text-[var(--accent)]  group/link text-base"
                      >
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                        <span>
                          {items.title}
                          <span className="inline-block">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                              className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                            >
                              <path
                                fillRule="evenodd"
                                d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                          </span>
                        </span>
                      </a>
                    </div>
                    <div>
                      <div className="text-slate-500" aria-label="true">
                        {items.jobtitle}
                      </div>
                    </div>
                  </h3>
                  <p className="mt-2 text-sm leading-normal">{items.text}</p>
                  <ul className="mt-2 flex flex-wrap">
                    {items.hyperlink.map((links, index) => (
                      <li key={index} className="mr-4">
                        <a
                          href={links.path}
                          target="_blank"
                          rel="noreferrer noopener"
                          aria-label="DTU (Opens in new tab)"
                          className="relative mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-[var(--accent)] focus-visible:text-[var(--accent)]"
                        >
                          <svg
                            className="mr-1 h-3 w-3"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z"></path>
                            <path d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z"></path>
                          </svg>
                          <span>{links.title}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                  <ul
                    className="mt-2 flex flex-wrap"
                    aria-label="Technologies used"
                  >
                    {items.tech.map((tech, techIndex) => (
                      <li key={techIndex} className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-[var(--accent-foreground)] px-3 py-1 text-xs font-medium leading-5 text-[var(--accent)] ">
                          {tech}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-12 hidden">
        <a
          href="https://www.klaviyo.com/"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="DTU (Opens in new tab)"
          className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-[var(--accent)] focus-visible:text-[var(--accent)] group/link text-base"
        >
          <span>
            View Full<span className="inline-block">Resume</span>
          </span>
        </a>
      </div>
    </section>
  );
};
