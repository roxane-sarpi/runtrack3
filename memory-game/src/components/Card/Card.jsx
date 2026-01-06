// Plus besoin d'importer useState ici !

// La carte reçoit maintenant son état (isFlipped) et son action (onClick) du parent
export default function Card({ label, isFlipped, onClick }) {
  
  return (
    <div className="card" onClick={onClick}>
      {/* Si le parent dit isFlipped=true, on affiche le label, sinon "?" */}
      {isFlipped ? label : "❓"}
    </div>
  );
}