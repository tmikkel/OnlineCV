import Logo from "../../public/fertilia.svg";
import Sand from "../../public/sandreassen-transparent-2.png";
import Git from "../../public/github-mark.svg";
import Image from "next/image";

const projects = [
  {
    path: "https://github.com/tmikkel/external_media_organiser",
    title: "External drive media organiser",
    text: "Python script I created to automatically organise Raw photo and video files on external drive by year/month in folders.",
    picture: Git,
  },
  {
    path: "https://fertilia-nine.vercel.app/",
    title: "Website for Fertility Clinic Fertilia",
    text: "The website is built in Next.js with JavaScript and next-intl for localization. The site is still under construction.",
    picture: Logo,
  },
  {
    path: "https://photosite-zeta.vercel.app/",
    title: "Personal Photography Website",
    text: "The website is built in Next.js with JavaScript and Motion library for animations. The site is still under construction.",
    picture: Sand,
  },
];

export const Project = () => {
  return (
    <section
      id="projects"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Selected projects"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Projects
        </h2>
      </div>
      <div>
        <ul className="group/list">
          {projects.map((items, index) => (
            <li key={index} className="mb-12">
              <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                <div className="z-10 sm:order-2 sm:col-span-6">
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
                  </h3>
                  <p className="mt-2 text-sm leading-normal">{items.text}</p>
                </div>
                <Image
                  src={items.picture}
                  loading="lazy"
                  decoding="aync"
                  style="color:transparent"
                  width={200}
                  height={48}
                  alt=""
                  className="aspect-video object-contain rounded transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
