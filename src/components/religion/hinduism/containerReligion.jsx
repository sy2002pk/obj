import './containerReligion.css'
import Religion from '../../layout/religion'
import imageHinduism from '../../../assets/images/Design.png'
import Hinduism1 from '../../../assets/images/Hinduism1.png'
import Hinduism2 from '../../../assets/images/Hinduism2.png'
import Hinduism3 from '../../../assets/images/Hinduism3.png'
import Hinduism4 from '../../../assets/images/Hinduism4.png'
import Hinduism5 from '../../../assets/images/Hinduism5.png'
import Hinduism6 from '../../../assets/images/Hinduism6.png'
import Hinduism7 from '../../../assets/images/Hinduism7.png'

const ReligionHinduismPage = () => {
    const items = [
        {
          title: 'Global Spread of Hinduism',
          description: 'This title explores how Hinduism has spread beyond India to countries across the globe, influencing various cultures.',
          imgSrc: Hinduism1, 
        },
        {
          title: 'Hinduism’s Cultural Influence Worldwide',
          description: 'Focuses on the impact of Hindu traditions, festivals, and practices on global cultures and societies.',
          imgSrc: Hinduism2, 
        },
        {
          title: 'Hindu Diaspora: Preserving Tradition Abroad',
          description: 'Examines how Hindu communities maintain their religious practices and cultural identity in countries outside of India.',
          imgSrc: Hinduism3,
        },
        {
          title: 'Hinduism in the Modern World',
          description: 'Discusses the role and adaptation of Hinduism in contemporary global society, including its interactions with other cultures and religions.',
          imgSrc: Hinduism4, 
        }
      ];
    const temples = [
      {
        name: "Varanasi - India",
        description:
          "An ancient city on the Ganges River, Varanasi is a major pilgrimage site where Hindus seek spiritual purification and liberation from the cycle of rebirth.",
        image: Hinduism5,
      },
      {
        name: "Kedarnath Temple - India",
        description:
          "A sacred Himalayan temple dedicated to Lord Shiva, part of the Char Dham pilgrimage, known for its remote and spiritually significant location.",
        image: Hinduism6,
      },
      {
        name: "Angkor Wat - Cambodia",
        description:
          "A vast temple complex originally dedicated to Lord Vishnu, representing one of the largest and most iconic examples of Hindu architecture.",
        image: Hinduism7,
      },
    ];
    return (
        <>  
            <Religion/>
            <div className="box1">
                <div className="b2">
                    <h1>Hinduism</h1>
                    <p>A Vast and Timeless Tradition Rooted in Spirituality, Deep Philosophical Thought, and a Rich Cultural Legacy Spanning Millennia</p>
                </div>
                <div className="b3"><img src={imageHinduism} alt="" /></div>
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

export default ReligionHinduismPage;
