import { useState, useRef, useEffect } from "react";
import { HoverEffect } from "./components/ui/card-hover-effect";
function App() {
  const [readstate, setReadtState] = useState(true);
  
  const ayyah135 = "./quran2.mp3"; 
  const ayyah61 = "./quran1.mp3"; 

  const [currentAudio, setCurrentAudio] = useState(null);
  const audioRef : any= useRef(null);

  const questions = [
    {
      question: "What does 'Salam' mean in Islam?",
      options: ["Peace", "War", "Justice", "Truth"],
      answer: "Peace",
    },
    {
      question: "Who should Muslims stand firm for?",
      options: ["Their enemies", "Themselves", "Justice", "Wealth"],
      answer: "Justice",
    },
    {
      question: "What is 'Sulha'?",
      options: ["Prayer", "Negotiation", "Conflict", "Fasting"],
      answer: "Negotiation",
    },
    {
      question: "What is the Arabic term for remembrance of God?",
      options: ["Dhikr", "Salah", "Sawm", "Zakat"],
      answer: "Dhikr",
    },
    {
      question: "What should Muslims do when the enemy is inclined to peace?",
      options: ["Fight harder", "Make peace", "Ignore them", "Run away"],
      answer: "Make peace",
    },
    {
      question: "What is essential for achieving peace in Islam?",
      options: ["Violence", "Compassion", "Greed", "Hate"],
      answer: "Compassion",
    },
    {
      question: "What is 'Salah'?",
      options: ["Fasting", "Charity", "Prayer", "Remembrance"],
      answer: "Prayer",
    },
    {
      question: "What is the role of justice in Islam?",
      options: ["Unimportant", "Essential", "Optional", "Ignored"],
      answer: "Essential",
    },
    {
      question: "How can Muslims work toward lasting peace?",
      options: ["Through violence", "Through ethical behavior", "By lying", "By ignoring others"],
      answer: "Through ethical behavior",
    },
    {
      question: "What does the Qur'an promote?",
      options: ["War", "Peace", "Greed", "Suffering"],
      answer: "Peace",
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [showResult, setShowResult] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0); // State لموقع المؤشر

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleAudioPlay = (audioSrc : any) => {
     if (currentAudio === audioSrc) {
      audioRef.current.pause();
      setCurrentAudio(null);
    } else {
      if (currentAudio) {
        audioRef.current.pause();
      }
      audioRef.current.src = audioSrc;
      audioRef.current.play();
      setCurrentAudio(audioSrc);
    }
  };

  const handleAnswerClick = (option : any) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestionIndex] = option;
    setAnswers(updatedAnswers);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResult(true);
    }
  };

  useEffect(() => {
    const cursorTrail : any = document.querySelector('.cursor-trail');

    const handleMouseMove = (e : any) => {
      // تحديث موقع الدائرة الكبيرة
      cursorTrail.style.left = `${e.pageX}px`;
      cursorTrail.style.top = `${e.pageY}px`;

      // إنشاء دائرة صغيرة
      const dot = document.createElement('div');
      dot.className = 'cursor-dot';
      dot.style.left = `${e.pageX}px`;
      dot.style.top = `${e.pageY}px`;
      document.body.appendChild(dot);

      const offsetX = Math.random() * 30 - 15; 
      const offsetY = Math.random() * 30 - 15; 
      dot.style.transform = `translate(${offsetX}px, ${offsetY}px)`;

      setTimeout(() => {
        dot.remove();
      }, 600);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  const correctAnswersCount = answers.filter((answer, index) => answer === questions[index].answer).length;
  const projects = [
    {
      title: "Organization of Islamic Cooperation (OIC)",
      description:
        "An international organization founded to promote cooperation among Muslim-majority countries and to work towards peace, security, and development in the Islamic world.",
      link: "",
    },
    {
      title: "Islamic Relief Worldwide",
      description:
        "A humanitarian organization that provides emergency aid and development assistance to those in need, focusing on disaster response, health, and education to foster peace and security.",
      link: "",
    },
    {
      title: "Muslim Aid",
      description:
        "An international NGO that provides humanitarian relief and development programs, promoting social justice and empowering communities for peace and security.",
      link: "",
    },
    {
      title: "Global Relief Trust",
      description:
        "A charity organization that focuses on providing humanitarian assistance to vulnerable communities, fostering peace and stability through various programs.",
      link: "",
    },
    {
      title: "Qatar Charity",
      description:
        "A charity organization that aims to provide relief and development assistance to communities in need, enhancing social and economic conditions to promote peace.",
      link: "",
    },
    {
      title: "The Muslim World League (MWL)",
      description:
        "An international Islamic organization that promotes Islamic values, encourages interfaith dialogue, and works towards global peace and security.",
      link: "",
    },
  ];
  
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto bg-gray-950 p-8 rounded-lg shadow-2xl">
        <div
          className="fixed top-0 left-0 h-1 bg-indigo-600 z-50 rounded-lg transition-all duration-300"
          style={{
            width: `${(scrollPosition / (document.body.scrollHeight - window.innerHeight)) * 100}%`,
          }}
        />
        
        <h1 className="text-5xl font-bold text-center text-indigo-400 mb-8">ISLAM & PEACE</h1>

        {readstate && (
          <article className={`space-y-6 transition-opacity duration-700 ease-in opacity-0 ${readstate ? 'opacity-100' : ''}`}>
            <p className="text-xl leading-relaxed">
              Islam promotes peace, security, and justice as core values essential for building harmonious societies. The teachings of Islam emphasize that peace (<span className="italic">Salam</span>) is not only the absence of conflict but also a state of well-being and balance, achieved through justice and compassion for others.
            </p>

            <p className="text-xl leading-relaxed">
              This is reflected in the Qur'an and Hadith, which guide Muslims toward peaceful coexistence and the resolution of conflicts through dialogue and fairness.
            </p>

            <blockquote onClick={() => handleAudioPlay(ayyah135)} className="border-l-4 border-indigo-500 pl-4 text-lg italic text-gray-300">
              "O believers! Stand firm for justice as witnesses for Allah even if it is against yourselves, your parents, or close relatives."
              <span className="block mt-2 text-gray-400">— Qur'an 4:135</span>
            </blockquote>

            <p className="text-xl leading-relaxed">
              This highlights the importance of objectivity and fairness in all matters, whether personal, communal, or international.
            </p>

            <p className="text-xl leading-relaxed">
              Moreover, Islam strongly advocates for peaceful resolutions to conflicts. In the Qur'an, Allah commands believers to incline towards peace if the other party shows a willingness to do so:
            </p>

            <blockquote onClick={() => handleAudioPlay(ayyah61)} className="border-l-4 border-indigo-500 pl-4 text-lg italic text-gray-300">
              "If the enemy is inclined towards peace, make peace with them. And put your trust in Allah. Indeed, He alone is the All-Hearing, All-Knowing."
              <span className="block mt-2 text-gray-400">— Qur'an 8:61</span>
            </blockquote>

            <p className="text-xl leading-relaxed">
              Islamic scholars also stress the importance of forgiveness, charity, and compassion in maintaining peace. The process of reconciliation, referred to as <span className="italic">Sulha</span>, involves peaceful negotiations and conflict resolution aimed at restoring relationships between disputing parties.
            </p>

            <p className="text-xl leading-relaxed">
              Furthermore, the spiritual aspect of peace in Islam is significant. Personal transformation through acts such as prayer (<span className="italic">Salah</span>), remembrance of God (<span className="italic">Dhikr</span>), and fasting (<span className="italic">Sawm</span>) is seen as vital to developing inner peace, which in turn contributes to peaceful relationships with others.
            </p>

            <p className="text-xl leading-relaxed">
              To achieve peace through Islam, it is essential to foster a mindset rooted in justice, compassion, and reconciliation while promoting ethical behavior and spiritual growth. By living in accordance with these principles, individuals and communities can work toward lasting peace and security.
            </p>
            <div className="max-w-5xl mx-auto px-8">
              <HoverEffect items={projects} />
            </div>
          </article>
        )}

        <div className="mt-10 text-center">
          <button
            onClick={() => setReadtState(!readstate)}
            className="px-6 py-3 bg-indigo-600 text-white font-bold rounded-lg shadow-md hover:bg-indigo-700 transition-transform duration-300 ease-in-out transform hover:scale-105"
          >
            {readstate ? "Mark as Read" : "Test your knowledge"}
          </button>
        </div>

        {!readstate && !showResult && (
          <div className="mt-6 bg-indigo-900 p-4 rounded-lg text-center">
            <p className="text-xl font-semibold text-indigo-300">Simple quiz after reading</p>
            <div className="mt-4">
              <h2 className="text-2xl font-bold">{questions[currentQuestionIndex].question}</h2>
              <div className="mt-4 space-y-2">
                {questions[currentQuestionIndex].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerClick(option)}
                    className={`w-full py-2 rounded-lg bg-gray-700 text-white hover:bg-gray-600 transition-transform duration-300 ease-in-out transform hover:scale-105 ${
                      answers[currentQuestionIndex] === option
                        ? option === questions[currentQuestionIndex].answer
                          ? "bg-green-500"
                          : "bg-red-500"
                        : ""
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {showResult && (
          <div className="mt-6 bg-indigo-900 p-4 rounded-lg text-center">
            <p className="text-xl font-semibold text-indigo-300">Quiz Results</p>
            <p className="text-lg text-white">
              You got {correctAnswersCount} out of {questions.length} correct!
            </p>
          </div>
        )}
      </div>

      <audio ref={audioRef} />
    </div>
  );
}

export default App;
