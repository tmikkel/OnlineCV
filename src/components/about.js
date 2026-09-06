import React from "react";

export const About = () => {
  return (
    <section
      id="about"
      aria-label="About me"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          About
        </h2>
      </div>
      <div>
        <p className="mb-4">
          I hold an M.Sc. in Computer Science & Engineering from the{" "}
          <a
            className="font-medium text-slate-200 hover:text-[var(--accent)] focus-visible:text-[var(--accent)]"
            href="https://www.dtu.dk/english/education/graduate/msc-programmes/computer-science-and-engineering"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="DTU (Opens in new tab)"
          >
            Technical University of Denmark (DTU)
          </a>
          with a strong foundation in software engineering, data systems, and
          cybersecurity.
        </p>
        <p className="mb-4">
          In my Master's thesis, I developed a high-performance,
          memory-efficient pipeline in Python (Dask, OME-Zarr, GUI) for
          processing and visualizing terabyte-scale 3D brain imaging data on HPC
          systems. By designing a block-wise parallel processing architecture, I
          ensured predictable, bounded RAM usage regardless of total dataset
          size.
        </p>
        <p className="mb-4">
          Alongside my academic focus on C#, Python, Next.js, and network
          security, I have hands-on experience in IT support from Roskilde
          University and run my own media business, Sandreassen Media. This
          combination gives me both the technical depth to build complex
          software and the strong communication skills needed for client-facing
          and consultancy roles.
        </p>
        <p className="mb-4">
          I am currently seeking junior opportunities within Software
          Engineering, Fullstack Development, Data Engineering, System
          Integration, or IT Consulting.
        </p>
      </div>
    </section>
  );
};
