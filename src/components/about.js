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
          I am a Master’s student in Computer Science & Engineering at the{" "}
          <a
            className="font-medium text-slate-200 hover:text-[var(--accent)] focus-visible:text-[var(--accent)]"
            href="https://www.dtu.dk/english/education/graduate/msc-programmes/computer-science-and-engineering"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="DTU (Opens in new tab)"
          >
            Technical University of Denmark (DTU)
          </a>
          , currently writing my thesis on efficient and memory-aware processing
          of massive 3D imaging data. My project focuses on building a data
          processing pipeline for handling terabyte-scale brain imaging
          datasets, combining tools such as OME-ZARR, ITK, and Dask (Python) to
          enable memory-efficient storage, processing, and visualization.
        </p>
        <p className="mb-4">
          Alongside my studies, I have gained hands-on experience in IT support
          at Roskilde University, where I solved hardware, software, and
          networking challenges for staff and students.
        </p>
        <p className="mb-4">
          I am also passionate about modern web development and have built a few
          projects in my free time using React, Next.js, and Node.js, including
          a web application for a fertility clinic. I enjoy designing
          user-friendly digital solutions, exploring new technologies, and
          applying my skills to projects that create value.
        </p>
        <p className="mb-4">
          I am now seeking opportunities and challenges where I can grow as a
          developer, contribute to innovative projects, and potentially build a
          long-term career in tech.
        </p>
        <p>
          In my spare time, I’m usually doing photography/videography, hanging
          out with friends and family, or in the fitness center.
        </p>
      </div>
    </section>
  );
};
