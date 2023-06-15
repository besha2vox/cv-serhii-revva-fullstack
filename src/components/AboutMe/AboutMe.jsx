import { aboutMe, contacts, skills } from 'data/info';

const AboutMe = () => {
  return (
    <aside style={{ padding: '50px 40px' }}>
      <div>
        <img
          width="150"
          style={{ borderRadius: '50%' }}
          src={aboutMe.photo}
          alt={aboutMe.name}
        />
        <p>{aboutMe.name}</p>
        <p>{aboutMe.role}</p>
        <ul style={{ display: 'flex' }}>
          {contacts[1].map(({ info, Icon, link }) => (
            <li key={info}>
              <a href={link}>
                <Icon />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <ul>
        {contacts[0].map(({ info, Icon, link }) => (
          <li key={info}>
            <a href={link}>
              <Icon />
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default AboutMe;
