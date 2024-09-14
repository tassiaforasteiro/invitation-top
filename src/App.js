import React, { useState } from 'react';
import './App.css';  // Import the CSS file
import PacmanImage from './assets/pacman.jpeg';
import Hands from './assets/hands.JPEG';
import Confetti from 'react-confetti';  // Import react-confetti





const App = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedUser, setSelectedUser] = useState('');
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleUserSelect = (user) => {
    setSelectedUser(user);
    setCurrentStep(2); // Proceed to the next step
  };

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
    if (answer === 'Coraline') {
      setError(''); // Clear any previous error message
      setCurrentStep(3); // Proceed to the next step
    } else {
      // Custom error messages for Denis and Marie-Annick
      if ((selectedUser === 'Denis' || selectedUser === 'Marie-Annick') && answer === 'Esther') {
        setError("On sait, mais ce n’est pas ce qu’on attend ! 🙄");  // Specific message for clicking "Esther"
      } else if ((selectedUser === 'Denis' || selectedUser === 'Marie-Annick') && answer === 'Auriane') {
        setError("Beeem ! 🚨🚨🚨");  // Specific message for clicking "Auriane"
      } else {
        setError("Beeem ! 🚨🚨🚨");  // Default error message for other users
      }
    }
  };

  const handlePasswordSubmit = () => {
    if (password.toLowerCase() === 'prout' && selectedUser === 'Denis') {
      setCurrentStep(5); // Proceed for Denis
    } else if (password.toLowerCase() === 'cerveza' && selectedUser === 'Auriane') {
      setCurrentStep(5); // Proceed for Auriane
    } else {
      setError('Oups, pas encore !'); // Show error for wrong passwords
    }
  };

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
    setError(''); // Clear error message when moving forward
  };
  

  return (
    <div className="invitation-container">
      {/* Step 1: Select the user */}
      {currentStep === 1 && (
        <div>
          <h1>Bienvenue à une invitation spéciale !</h1>
          <p>Sélectionnez votre nom :</p>
          <button onClick={() => handleUserSelect('Auriane')}>Auriane☀️</button>
          <button onClick={() => handleUserSelect('Esther et Mallo')}>Esther et Mallo🍕💪</button>
          <button onClick={() => handleUserSelect('Denis')}>Denis o brabo 👍</button>
          <button onClick={() => handleUserSelect('Marie-Annick')}>Marie-Annick 🥰</button>
        </div>
      )}

      {/* Step 2: Depending on the user, ask the correct question */}
      {currentStep === 2 && (
        <div>
          <h2>{selectedUser === 'Denis' || selectedUser === 'Marie-Annick' 
            ? 'Super ! Maintenant, dites-nous, qui est votre fille préférée ?' 
            : 'Qui est ta sœur préférée ?'}
          </h2>
          <button onClick={() => handleAnswerSelect('Auriane')}>Auriane</button>
          <button onClick={() => handleAnswerSelect('Esther')}>Esther</button>
          <button onClick={() => handleAnswerSelect('Coraline')}>Coraline</button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
      )}

      {/* Step 3: Correct answer (Coraline) is selected */}
      {currentStep === 3 && (
        <div>
          <h2>Bien vu 👍</h2>
          <button onClick={handleNextStep}>Suivante →</button>
        </div>
      )}

      {/* Personalized flows based on the selected user */}

      {/* Marie-Annick Flow */}
      {currentStep === 4 && selectedUser === 'Marie-Annick' && (
        <div>
          <h2>Marie-Annick, pas besoin de sortir ton mouchoir ! 🤧</h2>
          <button onClick={handleNextStep}>Suivant →</button>
        </div>
      )}

      {currentStep === 5 && selectedUser === 'Marie-Annick' && (
        <div>
          <h2>Félicitations ! 🎁 Vous venez d'accéder à une invitation ultra privée !</h2>
          <button onClick={handleNextStep}>Suivant →</button>
        </div>
      )}

      {currentStep === 6 && selectedUser === 'Marie-Annick' && (
        <div>
          <h2>Cette invitation t’offre officiellement 1 à 3 jours de congé !</h2>
          <button onClick={handleNextStep}>Suivant →</button>
        </div>
      )}

      {currentStep === 7 && selectedUser === 'Marie-Annick' && (
        <div>
          <h2>Tu devines déjà de quoi il s'agit ?</h2>
          <img src={PacmanImage} alt="Pacman" className="pacman-image" />
          <button onClick={handleNextStep}>Suivant →</button>
        </div>
      )}

      {currentStep === 8 && selectedUser === 'Marie-Annick' && (
        <div>
          <h2>ON SE PACS ! </h2>        
          <img src={Hands} alt="HANDS" className="pacman-image" />
          <h2> 📆 Réserve la date: 4 octobre, 8h30 </h2>
            <h2>Acceptez-vous l’invitation ?</h2>
          <button onClick={() => alert("Haha, tu ne peux pas cliquer ici ! 👻")}>Non</button>
          <button onClick={handleNextStep}>Oui</button>
        </div>
      )}

      {currentStep === 9 && selectedUser === 'Marie-Annick' && (
        <div>
           <>
         <h2>SUPER 🎉 ON EST HEUREUSESs DE TE COMPTER PARMI NOUS !</h2>
         <p>On prévoit un repas cool ensemble pour le midi</p>

         {/* Confetti component */}
         <Confetti
           width={window.innerWidth}
           height={window.innerHeight}
           numberOfPieces={200}  // You can customize the number of confetti pieces
         />
       </>
        </div>
      )}

      {/* Denis Flow */}
      {currentStep === 4 && selectedUser === 'Denis' && (
        <div>
          <h2>Devine le mot de passe !</h2>
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handlePasswordSubmit}>Entrer</button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
      )}

      {currentStep === 5 && selectedUser === 'Denis' && (
        <div>
          <h2>Félicitations ! 🎁 Vous venez d'accéder à une invitation ultra privée !</h2>
          <button onClick={handleNextStep}>Suivant →</button>
        </div>
      )}

      {currentStep === 6 && selectedUser === 'Denis' && (
        <div>
          <h2>Cette invitation t’offre officiellement 1 à 3 jours de congé !</h2>
          <button onClick={handleNextStep}>Suivant →</button>
        </div>
      )}

      {currentStep === 7 && selectedUser === 'Denis' && (
        <div>
          <h2>Tu devines déjà de quoi il s'agit ?</h2>
          <img src={PacmanImage} alt="Pacman" className="pacman-image" />
          <button onClick={handleNextStep}>Suivant →</button>
        </div>
      )}

      {currentStep === 8 && selectedUser === 'Denis' && (
        <div>
          <h2>ON SE PACS ! </h2>        
          <img src={Hands} alt="HANDS" className="pacman-image" />
          <h2> 📆 Réserve la date: 4 octobre, 8h30 </h2>
            <h2>Acceptez-vous l’invitation ?</h2>
          <button onClick={() => alert("Haha, tu ne peux pas cliquer ici ! 👻")}>Non</button>
          <button onClick={handleNextStep}>Oui</button>
        </div>
      )}

      {currentStep === 9 && selectedUser === 'Denis' && (
        <div>
           <>
         <h2>SUPER 🎉 ON EST HEUREUSESs DE TE COMPTER PARMI NOUS !</h2>
         <p>On prévoit un repas cool ensemble pour le midi</p>

         {/* Confetti component */}
         <Confetti
           width={window.innerWidth}
           height={window.innerHeight}
           numberOfPieces={200}  // You can customize the number of confetti pieces
         />
       </>
        </div>
      )}

      {/* Esther et Mallo Flow */}
      {currentStep === 4 && selectedUser === 'Esther et Mallo' && (
        <div>
          <h2>Esther, tu sais déjà !</h2>
          <button onClick={handleNextStep}>Suivant →</button>
        </div>
      )}

      {currentStep === 5 && selectedUser === 'Esther et Mallo' && (
        <div>
          <h2>Félicitations ! 🎁 Vous venez d'accéder à une invitation ultra privée !</h2>
          <button onClick={handleNextStep}>Suivant →</button>
        </div>
      )}

      {currentStep === 6 && selectedUser === 'Esther et Mallo' && (
        <div>
          <h2>Cette invitation t’offre officiellement 1 à 3 jours de congé !</h2>
          <button onClick={handleNextStep}>Suivant →</button>
        </div>
      )}

      {currentStep === 7 && selectedUser === 'Esther et Mallo' && (
        <div>
          <h2>Tu devines déjà de quoi il s'agit ?</h2>
          <img src={PacmanImage} alt="Pacman" className="pacman-image" />
          <button onClick={handleNextStep}>Suivant →</button>
        </div>
      )}

      {currentStep === 8 && selectedUser === 'Esther et Mallo' && (
        <div>
                 <h2>ON SE PACS ! </h2>        
          <img src={Hands} alt="HANDS" className="pacman-image" />
          <h2> 📆 Réserve la date: 4 octobre, 8h30 </h2>
            <h2>Acceptez-vous l’invitation ?</h2>
            <button onClick={() => alert("Haha, tu ne peux pas cliquer ici ! 👻")}>Non</button>
          <button onClick={handleNextStep}>Oui</button>
        </div>
      )}

      {currentStep === 9 && selectedUser === 'Esther et Mallo' && (
        <div>
           <>
         <h2>SUPER 🎉 ON EST HEUREUSES DE TE COMPTER PARMI NOUS !</h2>
         <p>On prévoit un repas cool ensemble pour le midi</p>

         {/* Confetti component */}
         <Confetti
           width={window.innerWidth}
           height={window.innerHeight}
           numberOfPieces={200}  // You can customize the number of confetti pieces
         />
       </>
        </div>
      )}

      {/* Auriane Flow */}
      {currentStep === 4 && selectedUser === 'Auriane' && (
        <div>
          <h2>Insérez le mot de passe (indice : bière en espagnol 🍺)</h2>
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handlePasswordSubmit}>Entrer</button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
      )}

      {currentStep === 5 && selectedUser === 'Auriane' && (
        <div>
          <h2>Félicitations ! 🎁 Vous venez d'accéder à une invitation ultra privée !</h2>
          <button onClick={handleNextStep}>Suivant →</button>
        </div>
      )}

      {currentStep === 6 && selectedUser === 'Auriane' && (
        <div>
          <h2>Cette invitation t’offre officiellement 1 à 3 jours de congé !</h2>
          <button onClick={handleNextStep}>Suivant →</button>
        </div>
      )}

      {currentStep === 7 && selectedUser === 'Auriane' && (
        <div>
          <h2>Tu devines déjà de quoi il s'agit ?</h2>
          <img src={PacmanImage} alt="Pacman" className="pacman-image" />
          <button onClick={handleNextStep}>Suivant →</button>
        </div>
      )}

      {currentStep === 8 && selectedUser === 'Auriane' && (
        <div>
                 <h2>ON SE PACS ! </h2>        
          <img src={Hands} alt="HANDS" className="pacman-image" />
          <h2> 📆 Réserve la date: 4 octobre, 8h30 </h2>
            <h2>Acceptez-vous l’invitation ?</h2>
          <button onClick={() => alert("Haha, tu ne peux pas cliquer ici ! 👻")}>Non</button>
          <button onClick={handleNextStep}>Oui</button>
        </div>
      )}

      {currentStep === 9 && selectedUser === 'Auriane' && (
         <>
         <h2>SUPER 🎉 ON EST HEUREUSES DE TE COMPTER PARMI NOUS !</h2>
         <p>On prévoit un repas cool ensemble pour le midi</p>

         {/* Confetti component */}
         <Confetti
           width={window.innerWidth}
           height={window.innerHeight}
           numberOfPieces={200}  // You can customize the number of confetti pieces
         />
       </>
        
        
      )}
    </div>
  );
};

export default App;