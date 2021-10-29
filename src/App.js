import { useEffect } from 'react';
import './App.css';
import StudentForm from './components/StudentForm';

function App() {

  useEffect(() => {
    const script = document.createElement('script');

    script.src = 'https://platform.linkedin.com/badges/js/profile.js';
    script.async = true;
    script.defer = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="App">
      <h1> SECONDARY SCHOOL STUDENT PERFORMANCE PREDICTION <em>by BINARY CLASSIFICATION</em></h1>
      <StudentForm />
      <div
        class="badge-base LI-profile-badge bottom-right"
        data-locale="fr_FR"
        data-size="small"
        data-theme="light"
        data-type="VERTICAL"
        data-vanity="jordan-adopo-9b2a98139"
        data-version="v1"
      >
        <a
          class="badge-base__link LI-simple-link"
          href="https://www.linkedin.com/in/jordan-adopo-9b2a98139/?trk=profile-badge"
        />
      </div>
    </div>
  );
}

export default App;
