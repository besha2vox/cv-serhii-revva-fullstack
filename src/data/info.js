import { ReactComponent as PhoneIcon } from 'assets/images/icons/phone.svg';
import { ReactComponent as MailIcon } from 'assets/images/icons/mail.svg';
import { ReactComponent as LinkedinIcon } from 'assets/images/icons/linkedin.svg';
import { ReactComponent as GithubIcon } from 'assets/images/icons/github.svg';
import { ReactComponent as TelegramIcon } from 'assets/images/icons/telegram.svg';
import { ReactComponent as InstagramIcon } from 'assets/images/icons/instagram.svg';
import { ReactComponent as LocationIcon } from 'assets/images/icons/location.svg';
import myPhoto from 'assets/images/my-photo.webp';

const aboutMe = {
  name: 'Serhii Revva',
  photo: myPhoto,
  role: 'Full-Stack Developer',
  summary:
    "I'm an enthusiastic and detail-oriented Frontend developer seeking an entry-level position with Company to use my skills in coding, troubleshooting complex problems. I have good knowledge of HTML, CSS, JavaScript, React.js and Node.js. Also have experience in applying the Agile / Scrum methodology when working in a team. I love new challenges that make me want to learn more technology and improve my skills every day. My goal is to excel in challenging and innovative work and strive to reach my full potential. I am a fast learner, responsible, and ready for challenging tasks.",
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
