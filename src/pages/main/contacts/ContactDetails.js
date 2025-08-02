import { ReactComponent as LocationIcon } from 'assets/icons/Location.svg';
import { ReactComponent as PhoneIcon } from 'assets/icons/Phone.svg';
import { ReactComponent as EmailIcon } from 'assets/icons/Email.svg';

const ContactDetails = ({ t }) => {
  const ContactDetailsContent = [
    {
      className: 'officeName',
      text: 'Head office',
    },
    {
      className: 'address',
      icon: <LocationIcon />,
      link: `https://www.google.com/maps/place/34%C2%B005'15.3%22N+84%C2%B000'03.3%22W/@34.0875831,-84.0015607,232m/data=!3m2!1e3!4b1!4m4!3m3!8m2!3d34.087582!4d-84.000917?entry=ttu`,
      text: '2400 Satellite Blvd NE, Buford, GA 30518, Suite E',
    },
    {
      className: 'phone',
      icon: <PhoneIcon />,
      link: 'tel:+14709252098',
      text: '+1(470)925-2098',
    },
    {
      className: 'email',
      icon: <EmailIcon />,
      link: 'mailto:info@nwt-llc.com',
      text: 'info@nwt-llc.com',
    },
    {
      className: 'officeName',
      text: 'North Carolina office',
    },
    {
      className: 'address',
      icon: <LocationIcon />,
      link: 'https://maps.app.goo.gl/fyUugTaTF7EsyG3z7',
      text: '203 Creek Ridge Rd, Greensboro, NC 27406, Suite E',
    },

    {
      className: 'phone',
      icon: <PhoneIcon />,
      link: 'tel:+14044044040',
      text: '404-404-4040',
    },

    {
      className: 'email',
      icon: <EmailIcon />,
      link: 'mailto:brian.gray@nwt-llc.com',
      text: 'brian.gray@nwt-llc.com',
    },
  ];
  return (
    <div className="contacts-content">
      {Array.from({ length: Math.ceil(ContactDetailsContent.length / 4) }).map((_, groupIndex) => {
        const group = ContactDetailsContent.slice(groupIndex * 4, groupIndex * 4 + 4);
        return (
          <div key={groupIndex} className="contact-group">
            {group.map((item, index) => (
              <div key={index} className={item.className}>
                <div className="contact-icon">{item.icon}</div>
                <div className="contact-text">
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.text}
                  </a>
                </div>
              </div>
            ))}
          </div>
        );
      })}

      <div className="work-time">
        {t('work time1')} <br /> {t('work time2')}
      </div>
    </div>
  );
};

export default ContactDetails;
