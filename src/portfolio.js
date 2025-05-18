/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Certification Logos
import awsLogo from "./assets/images/awss.png";
import itilLogo from "./assets/images/nttdata.png";
import mbotLogo from "./assets/images/mbot.png";


// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

// Greeting Section
const greeting = {
  username: "Nur Ariff",
  title: "Hi all, I'm Ariff",
  subTitle: emoji(
    "Passionate Cloud DevOps Engineer | Transitioning into DevOps with a strong focus on CI/CD pipelines, cloud platforms (AWS, GCP, Azure), containerization using Docker and Kubernetes, and Infrastructure as Code with Terraform. Backed by a solid foundation in systems administration and automation, I'm passionate about bridging development and operations to deliver scalable, resilient, and high-performance infrastructure."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing",
  displayGreeting: true,
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/areppzubaidi",
  linkedin: "https://www.linkedin.com/in/nur-ariff-zubaidi-045785103/",
  gmail: "nurariffbinzubaidi@gmail.com",
  gitlab: "https://gitlab.com/areppzubaidi", // consider updating if wrong
  display: true,
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "PASSIONATE CLOUD & DEVOPS ENGINEER EXPLORING AUTOMATION AND INFRASTRUCTURE AS CODE",
  skills: [
    emoji("⚡ Build and manage scalable cloud infrastructure using AWS, Azure, and Terraform"),
    emoji("⚡ Automate CI/CD pipelines with tools like GitHub Actions, Jenkins, and GitLab CI"),
    emoji("⚡ Containerization and orchestration using Docker and Kubernetes"),
  ],
  softwareSkills: [
    { skillName: "aws", fontAwesomeClassname: "fab fa-aws" },
    { skillName: "linux", fontAwesomeClassname: "fab fa-linux" },
    { skillName: "docker", fontAwesomeClassname: "fab fa-docker" },
    { skillName: "kubernetes", fontAwesomeClassname: "fas fa-cubes" },
    { skillName: "jenkins", fontAwesomeClassname: "fas fa-cogs" },
    { skillName: "ansible", fontAwesomeClassname: "fas fa-terminal" },
    { skillName: "terraform", fontAwesomeClassname: "fas fa-code-branch" },
    { skillName: "git", fontAwesomeClassname: "fab fa-git-alt" },
  ],
  display: true,
};


// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Universiti Tenaga Nasional",
      logo: require("./assets/images/uniten.png"),
      subHeader: "Bachelor in Information System",
      duration: "June 2011 - August 2015",
    },
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true,
  experience: [
    { Stack: "Linux", progressPercentage: "60%" },
    { Stack: "Cloud", progressPercentage: "70%" },
    { Stack: "Networking", progressPercentage: "60%" },
    { Stack: "CI/CD", progressPercentage: "60%" },
    { Stack: "Automation", progressPercentage: "60%" },
    { Stack: "Containerization", progressPercentage: "60%" },
  ],
  displayCodersrank: false,
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "L2 Engineer",
      company: "Access World",
      companylogo: require("./assets/images/aw.png"),
      date: "August 2023 – Present",
      desc: "Handling Level 2 support, network troubleshooting, and system administration tasks for internal teams and external clients.",
    },
    {
      role: "IT Executive",
      company: "FPSO Ventures Sdn Bhd",
      companylogo: require("./assets/images/fpso.png"),
      date: "July 2022 – July 2023",
      desc: "Managed IT infrastructure, implemented security protocols, and ensured business continuity for offshore systems.",
    },
    {
      role: "System Engineer",
      company: "Tata Consultancy Services",
      companylogo: require("./assets/images/tcs.png"),
      date: "August 2021 – November 2021",
      desc: "Provided support for enterprise systems, deployed patches, and maintained server health for multiple clients.",
    },
    {
      role: "Field Engineer",
      company: "NTT Data Services",
      companylogo: require("./assets/images/ntt.png"),
      date: "November 2017 – August 2021",
      desc: "Handled on-site troubleshooting, system setup, and client-side configurations for enterprise IT environments.",
    },
    {
      role: "IT Helpdesk",
      company: "Hewlett Packard Enterprise",
      companylogo: require("./assets/images/hpe.png"),
      date: "October 2015 – June 2016",
      desc: "Resolved user tickets, performed basic troubleshooting, and maintained IT support logs.",
    },
  ],
};
/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "My Projects",
  subtitle: "",
  projectButton: {
    name: "View Portfolio",
    url: "https://www.notion.so/1c090d1c969781e4b0d6dbadea5509ab?v=1c090d1c969781299fa7000c955ae65c"
  },
  projects: [],
  display: true
};









// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications 🏆"),
  subtitle: "Achievements, Certifications, Award Letters, and some cool stuff that I have done!",
  achievementsCards: [
    {
      title: "AWS Certified Cloud Practitioner",
      subtitle:
        "Earned foundational AWS certification, demonstrating understanding of cloud concepts, AWS services, and architecture best practices.",
      image: awsLogo,
      imageAlt: "AWS Logo",
      footerLink: [{ name: "View Certification", url: "https://www.credly.com/" }],
    },
    {
      title: "ITIL v4 Foundation Certified",
      subtitle:
        "Certified in ITIL v4 Foundation, demonstrating understanding of IT Service Management practices and principles.",
      image: itilLogo,
      imageAlt: "ITIL Logo",
      footerLink: [{ name: "View Certification", url: "https://www.credly.com/" }],
    },
    {
      title: "MBOT Graduate Technologist",
      subtitle:
        "Registered as a Graduate Technologist under the Malaysia Board of Technologists (MBOT).",
      image: mbotLogo,
      imageAlt: "MBOT Logo",
      footerLink: [{ name: "MBOT Official Site", url: "https://www.mbot.org.my/" }],
    },
  ],
  display: true,
};


// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+60-108976406",
  email_address: "nurariffbinzubaidi@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
