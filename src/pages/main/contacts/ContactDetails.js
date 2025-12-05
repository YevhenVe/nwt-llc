import { ReactComponent as LocationIcon } from 'assets/icons/Location.svg';
import { ReactComponent as PhoneIcon } from 'assets/icons/Phone.svg';
import { ReactComponent as EmailIcon } from 'assets/icons/Email.svg';

const ContactDetails = ({ t }) => {
  const ContactDetailsContent = [
    {
      className: 'officeName',
      text: 'North Carolina Head Office',
    },
    {
      className: 'address',
      icon: <LocationIcon />,
      link: 'https://maps.app.goo.gl/dSBFY4gPNvime47L7',
      text: '203 Creek Ridge Rd, Greensboro, NC 27406, Suite E',
    },
    {
      className: 'phone',
      icon: <PhoneIcon />,
      link: 'tel:+14237477608',
      text: '+1(423)747-7608',

    },
    {
      className: 'email',
      icon: <EmailIcon />,
      link: 'mailto:info@nwt-llc.com',
      text: 'brian.gray@nwt-llc.com',
    },
    {
      className: 'officeName',
      text: 'Georgia Branch Office',
    },
    {
      className: 'address',
      icon: <LocationIcon />,
      link: 'https://maps.app.goo.gl/VFpJ7HYHE6Kua5fc7',
      text: '5055 Old Ellis Point UNIT D25055 Old Ellis Point, Roswell, GA 30076',
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
      link: 'mailto:brian.gray@nwt-llc.com',
      text: 'info@nwt-llc.com',
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
