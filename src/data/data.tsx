import {
  // AcademicCapIcon,
  ArrowDownTrayIcon,
  // BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
// import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
// import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
// import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
// import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  // TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Drocic Portfolio',
  description: "Anel Drocic's Portfolio",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  // Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Anel Drocic.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I am a Full Stack Software Engineer based in Fargo, ND, currently unemployed, but I keep busy working with my
        Brother and writing code in my free time to stay up-to-date with my skills.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time, I enjoy rock climbing, playing board games with friends, fishing, hiking, and snowboarding.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I'm a software enthusiast with a passion for creating user-centric experiences. I specialize in web development, and my tech stack of choice includes React, Chakra UI, TypeScript, and Laravel. These tools empower me to build robust, elegant solutions that meet both user needs and business objectives.

  My personality is a blend of curiosity and determination. I thrive on challenges, always eager to explore new technologies and find creative ways to solve problems. Whether it's crafting seamless front-end interfaces or architecting efficient back-end systems, I'm dedicated to delivering high-quality solutions.
  
  When I'm not coding, you might find me exploring the world of board games, fishing for new adventures, or hitting the slopes for some exhilarating snowboarding. I believe in the balance of work and play, and I'm always excited to learn, grow, and connect with fellow tech enthusiasts.`,
  aboutItems: [
    {label: 'Location', text: 'Fargo, ND', Icon: MapIcon},
    {label: 'Age', text: '27', Icon: CalendarIcon},
    {label: 'Nationality', text: 'American / Bosnia and Herzegovina', Icon: FlagIcon},
    {label: 'Interests', text: 'Rock Climbing, Board Games with Friends', Icon: SparklesIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Typescript',
        level: 8,
      },
      {
        name: 'React-Query',
        level: 8,
      },
      {
        name: 'Testing (Unit, E2E, and Integration)',
        level: 7,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 6,
      },
      {
        name: 'Laravel',
        level: 5,
      },
    ],
  },
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'Serbo-Croatian',
        level: 6,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Reactdex',
    description: 'A pokedex built with react which showcases pokemon and their respective stats.',
    url: 'https://github.com/adrocic/PokedexApp',
    image: porfolioImage1,
  },
  {
    title: 'Breakout Blast',
    description: 'Just a fun little breakout clone that I created using p5.js',
    url: 'https://github.com/adrocic/Breakout-Blast',
    image: porfolioImage2,
  },
  {
    title: 'Bees Lift',
    description:
      'This was a project under the Anheuser-Busch umbrella. Me and my team worked with the Bees team to build beverage products distribution and management software.',
    url: 'https://www.bees.com/en/products#businessmade-mob',
    image: porfolioImage3,
  },
  {
    title: 'Cargill European Silos Management',
    description:
      'In this project, myself and my senior engineer at the time, worked closely together for approximately 7 months building a frontend from scratch. We used cargills dev SOPs and worked within their own enviroment.',
    url: 'https://www.cargill.com/agriculture',
    image: porfolioImage4,
  },
  {
    title: 'Ringside',
    description:
      'This is one of my largest undertakings in Software Engineering. This is a fully-fledged application in which me and another dev worked together to build the entire frontend and it has all the bell and whistles.',
    url: 'https://app.beringside.com/login',
    image: porfolioImage5,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: '2014 - 2016',
    location: 'North Dakota State University',
    title: 'Bachelor of Science in Computer Science',
    content: (
      <p>
        Ultimately, I discontinued school for personal reasons. However, during my time there, I learned my first
        programming language, Java, and grasped most of the essential OOP concepts.
      </p>
    ),
  },
  {
    date: '2016-2019',
    location: 'Fargo, ND',
    title: 'Self-Study',
    content: (
      <p>
        I spent a few years working odd jobs. During these years I read many articles and studied a great deal of
        software engineering principles, and ended up finding a real passion for learning in my own way. All I really
        wanted to do was hack away and write code, the same way I did as a kid and teenager.
      </p>
    ),
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'March 2022 - March 2023',
    location: 'Rightpoint',
    title: 'Developer 3',
    content: (
      <p>
        ● Built micro frontend application from scratch ● Worked between multiple environments, frontend, backend, as
        well as both Rightpoint and AB InBev as a consultant within the company ● Implemented custom data caching
        pattern with Redux, and Sagas ● Assisted in leading associate and developer 1s with discovering work and
        finishing work related tickets
      </p>
    ),
  },
  {
    date: 'September 2019 - February 2022',
    location: 'Bushel',
    title: 'Software Engineer 1',
    content: (
      <p>
        ● Successfully launched application from discovery to deployment ● Built front-end applications utilizing
        Typescript/Javascript and React ● Implemented authentication and authorization and managed states/flows
        throughout ● Worked on multiple projects with custom forms, form validation, and data representation ● Employed
        Unit testing, Integration testing, and e2e testing ● Utilized libraries and built custom components for mocking
        data and requests
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
// export const testimonial: TestimonialSection = {
//   imageSrc: testimonialImage,
//   testimonials: [
//     {
//       name: 'John Doe',
//       text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
//       image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
//     },
//     {
//       name: 'Jane Doe',
//       text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
//       image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
//     },
//     {
//       name: 'Someone else',
//       text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
//       image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
//     },
//   ],
// };

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: '',
  items: [
    {
      type: ContactType.Email,
      text: 'anel.drocic@gmail.com',
      href: 'mailto:anel.drocic@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Fargo, ND, United States',
      href: 'https://maps.app.goo.gl/EZoovpzTeYzcRw7p7',
    },
    {
      type: ContactType.Github,
      text: 'adrocic',
      href: 'https://github.com/adrocic',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/adrocic'},
  // {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/anel-drocic-337497168/'},
  // {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/reactresume/'},
  // {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx'},
];
