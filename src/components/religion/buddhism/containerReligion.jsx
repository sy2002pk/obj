import './containerReligion.css'
import buddhism from '../../../assets/images/buddhism.png'
import Buddhism2 from '../../../assets/images/Buddhism2.png'
import Buddhism3 from '../../../assets/images/Buddhism3.png'
import Buddhism4 from '../../../assets/images/Buddhism4.png'
import Buddhism5 from '../../../assets/images/Buddhism5.png'
import Buddhism6 from '../../../assets/images/Buddhism6.png'
import Buddhism7 from '../../../assets/images/Buddhism7.png'
import Buddhism8 from '../../../assets/images/Buddhism8.png'
import Buddhism9 from '../../../assets/images/Buddhism9.png'
import Religion from '../../layout/religion'



const ReligionBuddhismPage = () => {
    const items = [
        {
          title: 'Origin and History',
          description: 'Buddhism originated in India around the 6th century BCE. It was founded by Siddhartha Gautama, who became known as the Buddha after attaining enlightenment.',
          imgSrc: Buddhism2, 
        },
        {
            title: 'Major Branches',
            description: 'Focuses on the original teachings of the Buddha, mainly practiced in Southeast Asia.',
            imgSrc: Buddhism3, 
          },
          {
            title: 'Core Teachings',
            description: `The belief in continuous rebirth and the effects of one's actions on future lives.`,
            imgSrc: Buddhism4, 
          },
          {
            title: 'Global Influence and Modern Challenges',
            description: 'Buddhism has spread globally and influenced various areas like philosophy and psychology. It faces modern challenges such as globalization, religious conflicts, and the need for cultural preservation.',
            imgSrc: Buddhism5, 
          },
          {
            title: 'Major Festivals',
            description: ' A festival honoring parents and ancestors, celebrated in East Asia.',
            imgSrc: Buddhism6, 
          },
        
      ];
    const temples = [
      {
        name: "Bodh Gaya - India",
        description:
          "The site where Buddha attained enlightenment under the Bodhi Tree, a major pilgrimage destination for Buddhists. ",
        image: Buddhism7,
      },
      {
        name: "Shwedagon Pagoda - Myanmar",
        description:
          "A stunning golden stupa that is one of Myanmar's most sacred sites.",
        image: Buddhism8,
      },{
        name: "Borobudur - Indonesia",
        description:
          "The world’s largest Buddhist temple, known for its intricate carvings and stunning architecture. ",
        image: Buddhism9,
      },
    ];
    return (
        <>  
            <Religion/>
            <div className="container">
                <div><img src={buddhism} alt="" /></div>
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

export default ReligionBuddhismPage;
