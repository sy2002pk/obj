import './natural.css'
import Religion from '../../layout/religion'
import imageNatura from '../../../assets/images/natural.png'
import Natura1 from '../../../assets/images/Natural1.png'
import Natura2 from '../../../assets/images/Natural2.png'
import Natura3 from '../../../assets/images/Natural3.png'
import Natura4 from '../../../assets/images/Natural4.png'
import Natura5 from '../../../assets/images/Natural5.png'
import Natura6 from '../../../assets/images/Natural6.png'
import Natura7 from '../../../assets/images/Natural7.png'

const ReligionNaturaPage = () => {
    const items = [
        {
          title: 'Global Spread of Natura',
          description: 'This title explores how Natura has spread beyond India to countries across the globe, influencing various cultures.',
          imgSrc: Natura1, 
        },
        {
          title: 'Natura’s Cultural Influence Worldwide',
          description: 'Focuses on the impact of Hindu traditions, festivals, and practices on global cultures and societies.',
          imgSrc: Natura2, 
        },
        {
          title: 'Hindu Diaspora: Preserving Tradition Abroad',
          description: 'Examines how Hindu communities maintain their religious practices and cultural identity in countries outside of India.',
          imgSrc: Natura3,
        },
        {
          title: 'Natura in the Modern World',
          description: 'Discusses the role and adaptation of Natura in contemporary global society, including its interactions with other cultures and religions.',
          imgSrc: Natura4, 
        }
      ];
    const temples = [
      {
        name: "Varanasi - India",
        description:
          "An ancient city on the Ganges River, Varanasi is a major pilgrimage site where Hindus seek spiritual purification and liberation from the cycle of rebirth.",
        image: Natura5,
      },
      {
        name: "Kedarnath Temple - India",
        description:
          "A sacred Himalayan temple dedicated to Lord Shiva, part of the Char Dham pilgrimage, known for its remote and spiritually significant location.",
        image: Natura6,
      },
      {
        name: "Angkor Wat - Cambodia",
        description:
          "A vast temple complex originally dedicated to Lord Vishnu, representing one of the largest and most iconic examples of Hindu architecture.",
        image: Natura7,
      },
    ];
    return (
        <>  
            <Religion/>
            <div className="container">
                <div><img src={imageNatura} alt="" /></div>
                <div className="overlay-religion">
                    <h1 className="title">Buddhism</h1>
                    <p className="subtitle">
                    A Timeless Path of Enlightenment, Profound Philosophical Wisdom, and a Rich Cultural Tradition Spanning Millennia
                    </p>
                </div>
            </div>
            <div className="information-section">
                <p className="category">Social</p>
                <h1 className="main-title">
                    <span className="main">Main </span>
                    <span className="highlight">Information</span>
                </h1>
                <p className="sub-title">Global Catholic News Update</p>
            </div>
            <div className="grid-container">
            {items.map((item, index) => (
                <div key={index} className="grid-item">
                <img src={item.imgSrc} alt={item.title} className="grid-image" />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                </div>
            ))}
            </div>
            <div className="temple-list">
              <h1 className="title">Temple</h1>
              <p className="subtitle">
                Buddhist Architecture has significantly influenced art, architecture, and cultural traditions. Temples, stupas, and pagodas are celebrated and revered worldwide.
              </p>
              <div className="temple-container">
                {temples.map((temple, index) => (
                  <div className="temple-card" key={index}>
                    <img src={temple.image} alt={temple.name} className="temple-image" />
                    <div className="temple-info">
                      <h2 className="temple-name">{temple.name}</h2>
                      <p className="temple-description">{temple.description}</p>
                   </div>
               </div>
               ))}
              </div>
            </div>
            <div className="pray-section">
              <h1 className="pray-title">Pray</h1>
              <p className="pray-subtitle">Peace every day, prayers at your fingertips.</p>
              <p className="pray-description">
                Receive the Daily Devotional, Share prayers with others, and more on the Pray.com app.
                <br />Download on now
              </p>
            <div className="pray-buttons">
              <button className="app-store-btn">Download on the APP STORE</button>
              <button className="google-play-btn">GET IT ON GOOGLE PLAY</button>
            </div>
            </div>
        </>
    )
}

export default ReligionNaturaPage;
