import React, { useState } from 'react';
import { BookOpen, Award, Gamepad2, FileText, Link, Users, Target, Trophy, CheckCircle, Clock, Brain } from 'lucide-react';

export default function SocialStudiesHub() {
  const [activeSection, setActiveSection] = useState('home');
  const [quizProgress, setQuizProgress] = useState({});
  const [currentQuiz, setCurrentQuiz] = useState(null);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const quizzes = {
    geography: {
      title: "World Geography Challenge",
      questions: [
        { q: "What is the capital of Japan?", options: ["Seoul", "Tokyo", "Beijing", "Bangkok"], correct: 1 },
        { q: "Which continent is the Sahara Desert located in?", options: ["Asia", "Australia", "Africa", "South America"], correct: 2 },
        { q: "What is the longest river in the world?", options: ["Amazon", "Nile", "Yangtze", "Mississippi"], correct: 1 }
      ]
    },
    history: {
      title: "Ancient Civilizations",
      questions: [
        { q: "Which ancient civilization built the pyramids?", options: ["Romans", "Greeks", "Egyptians", "Mayans"], correct: 2 },
        { q: "The Renaissance began in which country?", options: ["France", "Italy", "Spain", "England"], correct: 1 },
        { q: "Who was the first Emperor of Rome?", options: ["Julius Caesar", "Augustus", "Nero", "Constantine"], correct: 1 }
      ]
    },
    civics: {
      title: "Government & Citizenship",
      questions: [
        { q: "How many branches are in the US government?", options: ["2", "3", "4", "5"], correct: 1 },
        { q: "What does the legislative branch do?", options: ["Enforce laws", "Make laws", "Interpret laws", "Veto laws"], correct: 1 },
        { q: "Which amendment guarantees freedom of speech?", options: ["First", "Second", "Fourth", "Fifth"], correct: 0 }
      ]
    }
  };

  const resources = [
    { title: "National Geographic Kids", url: "https://kids.nationalgeographic.com", category: "Geography" },
    { title: "History Channel Education", url: "https://www.history.com", category: "History" },
    { title: "iCivics - Civic Education", url: "https://www.icivics.org", category: "Civics" },
    { title: "Smithsonian Learning Lab", url: "https://learninglab.si.edu", category: "Multiple Topics" },
    { title: "Library of Congress", url: "https://www.loc.gov/teachers", category: "Primary Sources" }
  ];

  const projects = [
    { 
      title: "Create Your Own Country", 
      desc: "Design a country with its own government, economy, and culture",
      duration: "2-3 weeks",
      skills: ["Geography", "Civics", "Economics"]
    },
    { 
      title: "Historical Timeline Project", 
      desc: "Build an interactive timeline of a major historical era",
      duration: "1 week",
      skills: ["History", "Research", "Technology"]
    },
    { 
      title: "Community Service Initiative", 
      desc: "Plan and execute a project that benefits your local community",
      duration: "4 weeks",
      skills: ["Civics", "Leadership", "Collaboration"]
    },
    { 
      title: "Cultural Heritage Presentation", 
      desc: "Research and present about a culture or civilization",
      duration: "2 weeks",
      skills: ["History", "Geography", "Culture"]
    }
  ];

  const games = [
    { name: "Geography Quest", desc: "Explore continents and identify countries, capitals, and landmarks", icon: "🗺️" },
    { name: "History Detective", desc: "Solve historical mysteries using primary sources", icon: "🔍" },
    { name: "Democracy Builder", desc: "Create laws and manage a virtual society", icon: "🏛️" },
    { name: "Trade Route Challenge", desc: "Learn about historical trade and economics", icon: "⛵" }
  ];

  const startQuiz = (quizKey) => {
    setCurrentQuiz(quizKey);
    setQuizAnswers({});
    setShowResults(false);
    setActiveSection('quiz-taking');
  };

  const handleAnswer = (questionIndex, answerIndex) => {
    setQuizAnswers(prev => ({
      ...prev,
      [questionIndex]: answerIndex
    }));
  };

  const submitQuiz = () => {
    const quiz = quizzes[currentQuiz];
    let correct = 0;
    quiz.questions.forEach((q, i) => {
      if (quizAnswers[i] === q.correct) correct++;
    });
    setQuizProgress(prev => ({
      ...prev,
      [currentQuiz]: Math.round((correct / quiz.questions.length) * 100)
    }));
    setShowResults(true);
  };

  const renderHome = () => (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to Social Studies Hub</h1>
        <p className="text-xl opacity-90">Your comprehensive platform for interactive learning, exploration, and discovery</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
          onClick={() => setActiveSection('quizzes')}
          className="bg-white rounded-lg shadow-lg p-6 cursor-pointer hover:shadow-xl transition-shadow border-t-4 border-blue-500"
        >
          <Award className="w-12 h-12 text-blue-500 mb-4" />
          <h3 className="text-xl font-bold mb-2">Interactive Quizzes</h3>
          <p className="text-gray-600">Test your knowledge with engaging quizzes on various topics</p>
        </div>

        <div 
          onClick={() => setActiveSection('resources')}
          className="bg-white rounded-lg shadow-lg p-6 cursor-pointer hover:shadow-xl transition-shadow border-t-4 border-green-500"
        >
          <Link className="w-12 h-12 text-green-500 mb-4" />
          <h3 className="text-xl font-bold mb-2">Learning Resources</h3>
          <p className="text-gray-600">Access curated links to top educational websites</p>
        </div>

        <div 
          onClick={() => setActiveSection('projects')}
          className="bg-white rounded-lg shadow-lg p-6 cursor-pointer hover:shadow-xl transition-shadow border-t-4 border-purple-500"
        >
          <FileText className="w-12 h-12 text-purple-500 mb-4" />
          <h3 className="text-xl font-bold mb-2">Projects & Activities</h3>
          <p className="text-gray-600">Hands-on projects to deepen your understanding</p>
        </div>

        <div 
          onClick={() => setActiveSection('games')}
          className="bg-white rounded-lg shadow-lg p-6 cursor-pointer hover:shadow-xl transition-shadow border-t-4 border-orange-500"
        >
          <Gamepad2 className="w-12 h-12 text-orange-500 mb-4" />
          <h3 className="text-xl font-bold mb-2">Educational Games</h3>
          <p className="text-gray-600">Learn while having fun with interactive games</p>
        </div>

        <div 
          onClick={() => setActiveSection('self-learning')}
          className="bg-white rounded-lg shadow-lg p-6 cursor-pointer hover:shadow-xl transition-shadow border-t-4 border-pink-500"
        >
          <Brain className="w-12 h-12 text-pink-500 mb-4" />
          <h3 className="text-xl font-bold mb-2">Self-Learning Paths</h3>
          <p className="text-gray-600">Personalized learning journeys at your own pace</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-yellow-500">
          <Trophy className="w-12 h-12 text-yellow-500 mb-4" />
          <h3 className="text-xl font-bold mb-2">Your Progress</h3>
          <p className="text-gray-600">Track achievements and completed activities</p>
          <div className="mt-4">
            <div className="flex justify-between text-sm mb-1">
              <span>Quizzes Completed</span>
              <span className="font-bold">{Object.keys(quizProgress).length}/3</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderQuizzes = () => (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold mb-6">Interactive Quizzes</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(quizzes).map(([key, quiz]) => (
          <div key={key} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <Award className="w-10 h-10 text-blue-500" />
              {quizProgress[key] && (
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-bold">
                  {quizProgress[key]}%
                </span>
              )}
            </div>
            <h3 className="text-xl font-bold mb-2">{quiz.title}</h3>
            <p className="text-gray-600 mb-4">{quiz.questions.length} questions</p>
            <button 
              onClick={() => startQuiz(key)}
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors font-semibold"
            >
              {quizProgress[key] ? 'Retake Quiz' : 'Start Quiz'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  const renderQuizTaking = () => {
    if (!currentQuiz) return null;
    const quiz = quizzes[currentQuiz];

    if (showResults) {
      const correct = quiz.questions.filter((q, i) => quizAnswers[i] === q.correct).length;
      const percentage = Math.round((correct / quiz.questions.length) * 100);
      
      return (
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-6">
              <Trophy className="w-20 h-20 text-yellow-500 mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-2">Quiz Complete!</h2>
              <p className="text-5xl font-bold text-blue-600 mb-2">{percentage}%</p>
              <p className="text-gray-600">You got {correct} out of {quiz.questions.length} correct</p>
            </div>
            
            <div className="space-y-4 mb-6">
              {quiz.questions.map((q, i) => (
                <div key={i} className="border rounded-lg p-4">
                  <p className="font-semibold mb-2">{q.q}</p>
                  <p className={`${quizAnswers[i] === q.correct ? 'text-green-600' : 'text-red-600'}`}>
                    Your answer: {q.options[quizAnswers[i]]}
                    {quizAnswers[i] === q.correct ? ' ✓' : ' ✗'}
                  </p>
                  {quizAnswers[i] !== q.correct && (
                    <p className="text-green-600">Correct answer: {q.options[q.correct]}</p>
                  )}
                </div>
              ))}
            </div>

            <button 
              onClick={() => setActiveSection('quizzes')}
              className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors font-semibold"
            >
              Back to Quizzes
            </button>
          </div>
        </div>
      );
    }

    return (
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6">{quiz.title}</h2>
          <div className="space-y-6">
            {quiz.questions.map((q, i) => (
              <div key={i} className="border rounded-lg p-4">
                <p className="font-semibold mb-3">{i + 1}. {q.q}</p>
                <div className="space-y-2">
                  {q.options.map((opt, j) => (
                    <label key={j} className="flex items-center space-x-3 cursor-pointer hover:bg-gray-50 p-2 rounded">
                      <input
                        type="radio"
                        name={`question-${i}`}
                        checked={quizAnswers[i] === j}
                        onChange={() => handleAnswer(i, j)}
                        className="w-4 h-4"
                      />
                      <span>{opt}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="flex gap-4 mt-6">
            <button 
              onClick={() => setActiveSection('quizzes')}
              className="flex-1 bg-gray-200 text-gray-800 py-3 rounded-lg hover:bg-gray-300 transition-colors font-semibold"
            >
              Cancel
            </button>
            <button 
              onClick={submitQuiz}
              disabled={Object.keys(quizAnswers).length !== quiz.questions.length}
              className="flex-1 bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors font-semibold disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              Submit Quiz
            </button>
          </div>
        </div>
      </div>
    );
  };

  const renderResources = () => (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold mb-6">Learning Resources</h2>
      <div className="grid gap-4">
        {resources.map((resource, i) => (
          <div key={i} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <BookOpen className="w-6 h-6 text-blue-500" />
                  <h3 className="text-xl font-bold">{resource.title}</h3>
                </div>
                <p className="text-sm text-gray-600 mb-3">Category: {resource.category}</p>
                <a 
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors text-sm font-semibold"
                >
                  Visit Resource →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderProjects = () => (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold mb-6">Projects & Activities</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <div key={i} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <FileText className="w-10 h-10 text-purple-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.desc}</p>
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
              <Clock className="w-4 h-4" />
              <span>{project.duration}</span>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.skills.map((skill, j) => (
                <span key={j} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-semibold">
                  {skill}
                </span>
              ))}
            </div>
            <button className="w-full bg-purple-500 text-white py-2 rounded-lg hover:bg-purple-600 transition-colors font-semibold">
              View Project Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  const renderGames = () => (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold mb-6">Educational Games</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {games.map((game, i) => (
          <div key={i} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="text-5xl mb-4">{game.icon}</div>
            <h3 className="text-xl font-bold mb-2">{game.name}</h3>
            <p className="text-gray-600 mb-4">{game.desc}</p>
            <button className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition-colors font-semibold">
              Play Game
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  const renderSelfLearning = () => (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold mb-6">Self-Learning Paths</h2>
      
      <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg p-6 mb-6">
        <h3 className="text-2xl font-bold mb-2">Choose Your Learning Journey</h3>
        <p>Follow structured paths or explore topics at your own pace</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <Target className="w-10 h-10 text-blue-500 mb-4" />
          <h3 className="text-xl font-bold mb-2">Beginner Path</h3>
          <p className="text-gray-600 mb-4">Start with foundational concepts in geography, history, and civics</p>
          <ul className="space-y-2 text-sm mb-4">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              Introduction to World Geography
            </li>
            <li className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full border-2 border-gray-300" />
              Ancient Civilizations Overview
            </li>
            <li className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full border-2 border-gray-300" />
              Basics of Government
            </li>
          </ul>
          <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors font-semibold">
            Start Path
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <Target className="w-10 h-10 text-green-500 mb-4" />
          <h3 className="text-xl font-bold mb-2">Intermediate Path</h3>
          <p className="text-gray-600 mb-4">Deepen understanding with comparative studies and analysis</p>
          <ul className="space-y-2 text-sm mb-4">
            <li className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full border-2 border-gray-300" />
              Comparative Government Systems
            </li>
            <li className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full border-2 border-gray-300" />
              Cultural Geography
            </li>
            <li className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full border-2 border-gray-300" />
              Modern World History
            </li>
          </ul>
          <button className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-colors font-semibold">
            Start Path
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <Target className="w-10 h-10 text-purple-500 mb-4" />
          <h3 className="text-xl font-bold mb-2">Advanced Path</h3>
          <p className="text-gray-600 mb-4">Master complex topics and develop critical thinking skills</p>
          <ul className="space-y-2 text-sm mb-4">
            <li className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full border-2 border-gray-300" />
              Global Economics & Trade
            </li>
            <li className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full border-2 border-gray-300" />
              International Relations
            </li>
            <li className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full border-2 border-gray-300" />
              Contemporary Issues Analysis
            </li>
          </ul>
          <button className="w-full bg-purple-500 text-white py-2 rounded-lg hover:bg-purple-600 transition-colors font-semibold">
            Start Path
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <BookOpen className="w-8 h-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-800">Social Studies Hub</span>
            </div>
            <div className="flex gap-2 flex-wrap">
              <button 
                onClick={() => setActiveSection('home')}
                className={`px-4 py-2 rounded-lg transition-colors ${activeSection === 'home' ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'}`}
              >
                Home
              </button>
              <button 
                onClick={() => setActiveSection('quizzes')}
                className={`px-4 py-2 rounded-lg transition-colors ${activeSection === 'quizzes' ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'}`}
              >
                Quizzes
              </button>
              <button 
                onClick={() => setActiveSection('resources')}
                className={`px-4 py-2 rounded-lg transition-colors ${activeSection === 'resources' ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'}`}
              >
                Resources
              </button>
              <button 
                onClick={() => setActiveSection('projects')}
                className={`px-4 py-2 rounded-lg transition-colors ${activeSection === 'projects' ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'}`}
              >
                Projects
              </button>
              <button 
                onClick={() => setActiveSection('games')}
                className={`px-4 py-2 rounded-lg transition-colors ${activeSection === 'games' ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'}`}
              >
                Games
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {activeSection === 'home' && renderHome()}
        {activeSection === 'quizzes' && renderQuizzes()}
        {activeSection === 'quiz-taking' && renderQuizTaking()}
        {activeSection === 'resources' && renderResources()}
        {activeSection === 'projects' && renderProjects()}
        {activeSection === 'games' && renderGames()}
        {activeSection === 'self-learning' && renderSelfLearning()}
      </main>
    </div>
  );
}