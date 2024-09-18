
import { useState } from 'react';
import './contact.css'

const faqData = [
    {
      question: "What does lorem ipsum actually mean?",
      answer: "Lorem ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
      question: "How do we know what kind of sounds dinosaurs made?",
      answer: "Researchers use fossils and modern technology to recreate possible sounds."
    },
    {
      question: "Why work from home is not as fun as we thought it would be?",
      answer: "Remote work comes with its own challenges like isolation and lack of structure."
    },
    {
      question: "In what way did human beings start using words?",
      answer: "Language developed over thousands of years as humans evolved and needed to communicate."
    },
    {
      question: "Which is the least developed area in the world?",
      answer: "Certain regions in sub-Saharan Africa and parts of Asia remain the least developed."
    }
  ];
const ContactPage = () => {
    const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
    return (
        <div className="faq-container">
            <h2>FAQ</h2>
            <h3>Frequently Asked Questions</h3>
            {faqData.map((item, index) => (
                <div key={index} className="faq-item">
                <div className="faq-question" onClick={() => toggleFAQ(index)}>
                    {item.question}
                    <span className="faq-icon">{activeIndex === index ? '-' : '+'}</span>
                </div>
                {activeIndex === index && <div className="faq-answer">{item.answer}</div>}
        </div>
      ))}
    </div>
    )
}

export default ContactPage;