import Icon from '../Icon';
const siteLogo = [
  { icon: 'faceBook', url: 'https://www.facebook.com/profile.php?id=100011211274646' },
  { icon: 'x', url: 'https://twitter.com/?lang=ru' },
  { icon: 'linkedin', url: 'https://www.linkedin.com/in/martin-baghdasaryan-071401266/' },
  { icon: 'whatsapp', url: 'https://web.whatsapp.com/' }
];

const Contact = () => {
  return (
    <div className="flex gap-[28px]">
      {siteLogo.map((el, index) => (
        <div key={index}>
          <button onClick={() => window.open(el.url)}>
            <Icon name={el.icon} />
          </button>
        </div>
      ))}
    </div>
  );
};

export default Contact;
