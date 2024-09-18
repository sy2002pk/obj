import './containerHome.css'
import React from "react";
// import Footer from "../Footer/Footer";
import image5 from "../../assets/images/5.png";
import image6 from "../../assets/images/6.png";
import image7 from "../../assets/images/7.png";
import image8 from "../../assets/images/8.png";
// import "./Home.css";

const ContainerHomepage = () => {
  return (
    <div className="home-container">
      {/* Christianity */}
      <section className="section-container">
        <img src={image5} alt="Christianity" className="section-image" />
        <div className="section-text">
          <h2 className="section-title">Christianity</h2>
          <p className="section-description">
            Explore traditional and modern prayers in Christianity, from the
            Lord's Prayer to daily devotions. The app helps you deepen your
            connection with God, find peace and strength in your faith, and
            journey alongside the community of believers on your spiritual path.
          </p>
          <p className='blur'>
            Daily Buddhist Scriptures: Receive daily Buddhist scriptures and
            prayers to nourish your soul and guide your life. Start each day
            with a message of compassion and wisdom to practice mindfulness.
            Prayer Requests: Submit your personal prayer requests and join a
            global Buddhist community to meditate and pray together. Share your
            concerns and receive support from the community as they pray
            alongside you. Guided Meditation: Participate in guided meditation
            sessions that help you delve deep into mindfulness practice and find
            inner peace. These sessions are designed to help you reduce stress
            and seek tranquility in your soul.
          </p>
          <button className="section-button">More →</button>
        </div>
      </section>

      {/* Buddhism */}
      <section className="section-container reverse">
        <img src={image6} alt="Buddhism" className="section-image" />
        <div className="section-text">
          <h2 className="section-title">Buddhism</h2>
          <p className="section-description">
            The Buddhism section of the Prayer App offers you a path to
            mindfulness and inner peace through daily Buddhist scriptures,
            guided meditations, and community connections.
          </p>
          <p>Daily Buddhist Scriptures: Receive daily Buddhist scriptures and prayers to nourish 
            your soul and guide your life. Start each day with a message of compassion and wisdom 
            to practice mindfulness. Prayer Requests: Submit your personal prayer requests and join 
            a global Buddhist community to meditate and pray together. Share your concerns and receive 
            support from the community as they pray alongside you. Guided Meditation: Participate in 
            guided meditation sessions that help you delve deep into mindfulness practice and find inner 
            peace. These sessions are designed to help you reduce stress and seek tranquility in your soul.</p>
          <button className="section-button">More →</button>
        </div>
      </section>

      {/* Hinduism */}
      <section className="section-container">
        <img src={image7} alt="Hinduism" className="section-image" />
        <div className="section-text">
          <h2 className="section-title">Hinduism</h2>
          <p className="section-description">
            The Hinduism section of the Prayer App provides you with access to
            daily prayers, sacred mantras, and ritual guidance.
          </p>
          <p>
          Daily Prayers and Mantras: Receive prayers and mantras from Hindu scriptures to connect 
          with the deities and practice your faith daily. Start each day with protection and peace 
          from these ancient prayers. Prayer Requests: Submit your prayer requests and join a global
           Hindu community to pray and perform rituals together. Share your wishes and receive support 
           from the community through collective prayer. Guided Mantra Meditation: Engage in guided Mantra
            meditation sessions to deepen your connection with the deities and seek purity in your soul. 
            These sessions focus on using Mantras to bring about peace and enlightenment.
          </p>
          <button className="section-button">More →</button>
        </div>
      </section>

      {/* Mother Nature */}
      <section className="section-container reverse">
        <img src={image8} alt="Mother Nature" className="section-image" />
        <div className="section-text">
          <h2 className="section-title">Mother Nature</h2>
          <p className="section-description">
            The Mother Nature section of the Prayer App invites you to reconnect
            with the natural world through prayers and meditations that honor
            the earth and all its life forms.
          </p>
          <p>
          Daily Earth Prayers: Receive daily prayers that celebrate the beauty and power of the natural world. 
          These prayers help you connect with the earth and express gratitude for the life it sustains. Guided 
          Nature Meditations: Participate in guided meditations inspired by the natural world. These sessions 
          help you align your mind and spirit with the rhythms of nature, fostering a sense of peace and balance. 
          Environmental Reflections: Engage in daily reflections that encourage mindfulness about your relationship 
          with the environment. Explore ways to live in harmony with nature and make a positive impact on the earth.
          </p>
          <button className="section-button">More →</button>
        </div>
      </section>

    </div>
  );
}

export default ContainerHomepage;
