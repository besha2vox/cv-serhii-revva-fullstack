import { ReactComponent as PhoneIcon } from 'assets/images/icons/phone.svg';
import { ReactComponent as MailIcon } from 'assets/images/icons/mail.svg';
import { ReactComponent as LinkedinIcon } from 'assets/images/icons/linkedin.svg';
import { ReactComponent as GithubIcon } from 'assets/images/icons/github.svg';
import { ReactComponent as TelegramIcon } from 'assets/images/icons/telegram.svg';
import { ReactComponent as InstagramIcon } from 'assets/images/icons/instagram.svg';
import { ReactComponent as LocationIcon } from 'assets/images/icons/location.svg';
import myPhoto from 'assets/images/my-photo.webp';
import cv from 'assets/files/cv.pdf';

const aboutMe = {
  fullName: 'Serhii Revva',
  photo: myPhoto,
  role: 'Full-Stack Developer',
  summary:
    'During my studies at the GoIT school, I participated in 3 team projects as a Team Lead.\nI also took part in the social project of the Kharkiv IT Cluster. Together, we created a site for supporting volunteers and volunteer organizations, where up-to-date information about their activities is collected.\nI am currently working on a social project from Junfolio. We are developing a product that will help newbies gain experience in IT. My role in the team is Full-Stack developer.\nI want to be in a good team to improve my skills and use them for interesting tasks. I am a fast learner, responsible, ready for hard tasks.',
  cv,
};

const contacts = [
  [
    {
      Icon: PhoneIcon,
      link: 'tel:380959438687',
      info: '+380959438687',
    },
    {
      Icon: MailIcon,
      link: 'mailto:besha2vox@gmail.com',
      info: 'besha2vox@gmail.com',
    },
    {
      Icon: LocationIcon,
      link: 'https://goo.gl/maps/6NsiepxEXkDi6rVf8',
      info: 'Dnipro, Ukraine',
    },
  ],
  [
    {
      Icon: LinkedinIcon,
      link: 'https://www.linkedin.com/in/serhii-revva/',
      info: 'LinkedIn',
    },
    {
      Icon: GithubIcon,
      link: 'https://github.com/besha2vox',
      info: 'GitHub',
    },
    {
      Icon: TelegramIcon,
      link: 'https://t.me/besha2vox',
      info: 'Telegram',
    },
    {
      Icon: InstagramIcon,
      link: 'https://www.instagram.com/besha2vox/',
      info: 'Instagram',
    },
  ],
];

const skills = [
  {
    title: 'Hard Skills',
    list: [
      'HTML5',
      'CSS3',
      'SASS',
      'Responsive/Adaptive design',
      'JavaScript',
      'AJAX',
      'JSON',
      'Handlebars',
      'GitHub/Git',
      'Parcel',
      'WebPack',
      'React.js',
      'Redux/Redux-Toolkit',
      'CSS Modules',
      'Styled components',
      'Node.js',
      'Express',
      'MongoDB/Mongoose',
    ],
  },
  {
    title: 'Soft Skills',
    list: [
      'Ability to work under pressure',
      'Effective listening skills',
      'Quick learning skills',
      'Willingness to learn',
      'Teamwork',
      'Stress resistance',
    ],
  },
  {
    title: 'Languages',
    list: ['English - pre-intermediate', 'Ukrainian - native'],
  },
];

const certifications = [
  {
    logo: 'https://media.licdn.com/dms/image/C4D0BAQGer2PeE1Lp1Q/company-logo_100_100/0/1650366467060/ithillel_logo?e=1712188800&v=beta&t=9dvOeA2S9xHA7cBqBE48CI1TqNOdQCji5Iy78NO24v4',
    name: 'JavaScript/TypeScript',
    organization: 'Hillel IT School',
    issueDate: new Date('11.15.2023'),
    credentialId: '37143491',
    credentialURL: 'https://certificate.ithillel.ua/view/37143491',
  },
  {
    logo: 'https://media.licdn.com/dms/image/C4E0BAQEtA8LJ897i3w/company-logo_100_100/0/1630645109341/kharkiv_it_cluster_logo?e=1712188800&v=beta&t=3CcafrpWZs-G033Z0C_UeX1RMeNiRd2bgzVWjNOGqJU',
    name: 'BootCamp 2023',
    organization: 'Kharkiv IT Cluster',
    issueDate: new Date('06.01.2023'),
    credentialId: 'ITK-23/95',
    credentialURL: 'https://u41816.esclick.me/Ift3EpBVrPWu',
  },
  {
    logo: 'https://media.licdn.com/dms/image/C4E0BAQG3W7YQhG1mjQ/company-logo_100_100/0/1668510902073/goit_start_your_career_in_it_logo?e=1712188800&v=beta&t=gx_Cs7U2d_Hbfzcifab5VtSFeiSbV56n_ets7mCWr5E',
    name: 'Fullstack developer',
    organization: 'GoIT',
    issueDate: new Date('05.24.2023'),
    credentialId: '14521',
    credentialURL:
      'https://drive.google.com/file/d/1Vml-4ovkROXB16ovUDteLLnwHEXm4mH-/view?usp=sharing',
  },
  {
    logo: 'https://web.kpi.kharkov.ua/ist/wp-content/uploads/sites/235/2022/02/epam-university-program.png',
    name: 'IT Marathon',
    organization: 'EPAM University',
    issueDate: new Date('06.01.2023'),
    credentialId: '2022EPAMITM221862',
    credentialURL:
      'https://certificates.epam.com/certificates/54ca910e-de03-41b3-8106-9c27c0e29163',
  },
];

export { aboutMe, contacts, skills, certifications };
