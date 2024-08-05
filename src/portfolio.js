/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Jack's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Jack McKew's Portfolio",
    type: "website",
    url: "https://jackmckew.github.io/",
  },
};

//Home Page
const greeting = {
  title: "Jack McKew",
  logo_name: "",
  nickname: "",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink: "https://jackmckew.dev/pages/Jack_McKew_CV.pdf",
  // portfolio_repository: "https://github.com/JackMcKew/masterPortfolio",
  githubProfile: "https://github.com/JackMcKew",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  {
    name: "Github",
    link: "https://github.com/JackMcKew",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/jack-mckew/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:jackmckew2@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/jakmcq/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Data Engineering, Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Pioneered on the water detection for location data, annotating billions of data points",
        "⚡ Delivered scalable production ready data platforms for capturing, annotating and analysing data",
        "⚡ Rolled out real-time  geospatial data pipelines for map consumption",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Apache Spark",
          imageSrc: "spark-logo-rev.png",
        },
        {
          skillName: "RabbitMQ",
          imageSrc: "rabbitmq.png",
        },
        {
          skillName: "Pandas",
          imageSrc: "pandas.png",
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Map interactions and delivering information through Mapbox",
        "⚡ Developing mobile applications using Cordova and Capacitor",
        "⚡ Creating application backend in Node and Express",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Mapbox",
          fontAwesomeClassname: "simple-icons:mapbox",
          style: {
            color: "#000",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Successful migrations to managed services and serverless",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Minimal downtime migrations from NoSQL to SQL databases",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [],
};

const degrees = {
  degrees: [
    {
      title: "University of Newcastle, Australia",
      subtitle: "Bachelor of Electrical Engineering (with Honours)",
      logo_path: "uon-logo-square.svg",
      alt_name: "Electrical Engineering",
      duration: "2015 - 2018",
      descriptions: [
        // "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        // "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
        // "⚡ I was selected for Merit cum Means Scholarship which is given to top 10% of students in college. I have received award from respected director for consistently best performance in academics.",
      ],
      website_link: "https://www.newcastle.edu.au/",
    },
  ],
};

const certifications = {
  certifications: [
    // {
    //   title: "Machine Learning",
    //   subtitle: "- Andrew Ng",
    //   logo_path: "stanford_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
    //   alt_name: "Stanford University",
    //   color_code: "#8C151599",
    // },
    // {
    //   title: "Deep Learning",
    //   subtitle: "- Andrew Ng",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#00000099",
    // },
    // {
    //   title: "ML on GCP",
    //   subtitle: "- GCP Training",
    //   logo_path: "google_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
    //   alt_name: "Google",
    //   color_code: "#0C9D5899",
    // },
    // {
    //   title: "Data Science",
    //   subtitle: "- Alex Aklson",
    //   logo_path: "ibm_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
    //   alt_name: "IBM",
    //   color_code: "#1F70C199",
    // },
    // {
    //   title: "Big Data",
    //   subtitle: "- Kim Akers",
    //   logo_path: "microsoft_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
    //   alt_name: "Microsoft",
    //   color_code: "#D83B0199",
    // },
    // {
    //   title: "Advanced Data Science",
    //   subtitle: "- Romeo Kienzler",
    //   logo_path: "ibm_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
    //   alt_name: "IBM",
    //   color_code: "#1F70C199",
    // },
    // {
    //   title: "Advanced ML on GCP",
    //   subtitle: "- GCP Training",
    //   logo_path: "google_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
    //   alt_name: "Google",
    //   color_code: "#0C9D5899",
    // },
    // {
    //   title: "DL on Tensorflow",
    //   subtitle: "- Laurence Moroney",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#00000099",
    // },
    // {
    //   title: "Fullstack Development",
    //   subtitle: "- Jogesh Muppala",
    //   logo_path: "coursera_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
    //   alt_name: "Coursera",
    //   color_code: "#2A73CC",
    // },
    // {
    //   title: "Kuberenetes on GCP",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
    // {
    //   title: "Cryptography",
    //   subtitle: "- Saurabh Mukhopadhyay",
    //   logo_path: "nptel_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
    //   alt_name: "NPTEL",
    //   color_code: "#FFBB0099",
    // },
    // {
    //   title: "Cloud Architecture",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "",
  description:
    "I have worked with many evolving startups as Full Stack Software Engineer and Technical Writer. I have also worked with some well established companies mostly as a Electrical/Software Engineer. I love organising events and that is why I am also involved with many opensource communities as an organiser.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Senior Full Stack Software Engineer (Full Time)",
          company: "Deckee",
          company_url: "https://deckee.com/",
          logo_path: "deckee.jpg",
          duration: "2020 - Present",
          description: `Responsible for delivering full stack features across a data analytics platform, search and rescue platform and safety information apps on iOS and Android. Accountable for cost management and all cloud infrastructure management on AWS. Led the development of a new data analytics platform for the marine industry.`,
          color: "#000000",
        },
        {
          title: "Technical Writer (Part Time)",
          company: "Galah Cyber",
          company_url: "https://www.galahcyber.com.au/",
          logo_path: "galahcyber.jpeg",
          duration: "2024 - Present",
          description:
            "I am responsible for compiling, and writing technical reports on cyber security engagements with customers, including penetration tests. Detailing the findings and recommended remediation for customers to improve their security posture.",
          color: "#0879bf",
        },
        {
          title: "Founder & Principal Consultant (Part Time)",
          company: "Cyberlytica",
          company_url: "https://cyberlytica.com.au/",
          logo_path: "cyberlytica_logo_with_text.jpg",
          duration: "2020 - Present",
          description:
            "I run my own freelancing digital consultancy business, where I provide services in data engineering, data science, AI and full stack development. I mainly work with small businesses. I've also done an expert opinion report for a litigation case in NSW court.",
          color: "#9b1578",
        },
        {
          title: "Senior Software Engineer (Part Time)",
          company: "Arrowtail",
          company_url: "https://arrowtail.com/",
          logo_path: "arrowtail.jpeg",
          duration: "2020",
          description:
            "Responsible for integrating Arrowtail’s explosive delivery capture app with on-site inventory management. Implementing asynchronous task processing and technical documentation to onboard future developers.",
          color: "#fc1f20",
        },
        {
          title: "Electrical/Software Engineer (Full Time)",
          company: "AECOM",
          company_url: "https://aecom.com/",
          logo_path: "AECOM-png-aspx.png",
          duration: "2017 - 2020",
          description:
            "Transitioning from undergraduate to graduate engineer; working in the buildings sector to provide electrical services design for buildings and developing in house software for data analysis to automate repetitive tasks and reduce human error. Provided switchboard design, lighting design and power design in Defence, Health, Education, Critical Infrastructure and Commercial sectors.",
          color: "#fc1f20",
        },
        {
          title: "Undergraduate Controls Engineer (Part Time)",
          company: "Hunter H2O",
          company_url: "https://www.hunterh2o.com.au/",
          logo_path: "hunterh2o.jpg",
          duration: "2016 - 2018",
          description:
            "Working part time as an undergraduate controls engineer, I was responsible for developing control systems for water and wastewater treatment plants. I was also responsible for developing SCADA systems for monitoring and control of water and wastewater treatment plants.",
          color: "#fc1f20",
        },
        {
          title: "Timber Expert (Part Time)",
          company: "Bunnings",
          company_url: "https://www.hunterh2o.com.au/",
          logo_path: "hammer_400x400.png",
          duration: "2014 - 2018",
          description:
            "Working part time as a timber expert during my studies, I was responsible for providing advice to customers on timber selection, cutting and finishing. I was also responsible for maintaining the timber department and ensuring stock levels were maintained. Forklift certified.",
          color: "#fc1f20",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "covid-paper",
      name:
        "The Geography of Covid-19 Spread in Italy Using Social Media and Geospatial Data Analytics",
      createdAt: "2021-11-21T00:00:00Z",
      description: "Paper published in 2021",
      url:
        "https://www.tandfonline.com/doi/full/10.1080/23800992.2021.1994813#d1e355",
    },
    {
      id: "jackmckew",
      name: "Jack McKew's Personal Blog",
      createdAt: "2018-11-23T00:00:00Z",
      description: "Personal blog",
      url: "https://jackmckew.dev/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "jm-photo.jpg",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://jackmckew.dev/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Saratoga Ave, San Jose, CA, USA 95129",
    locality: "San Jose",
    country: "USA",
    region: "California",
    postalCode: "95129",
    streetAddress: "Saratoga Avenue",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/NvYZqa34Wye4tpS17",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
