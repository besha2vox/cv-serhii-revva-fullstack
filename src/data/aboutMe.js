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

export { aboutMe, contacts, skills };
