function RainColumn({ index }) {
  const text = generateCharacters(20).split("").join("\n");

  const style = {
    left: `${index * 3}vw`,
    animationDelay: `${Math.random() * 3}s`,
    animationDuration: `${2 + Math.random() * 3}s`
  };

  return (
    <div className="rain-line" style={style}>
      {text}
    </div>
  );
}

const availableCharacters =
  "0123456789" +
  "abcdefghijklmnopqrstuvwxyz" +
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ" +
  "ｱｵｴｳﾜｦｧｨｩｪｫｬｭｮｯ";

function generateCharacters(amount) {
  let lineCharacters = "";
  for (let i = 0; i < amount; i++) {
    lineCharacters += availableCharacters.charAt(
      Math.floor(Math.random() * availableCharacters.length)
    );
  }

  return lineCharacters;
}

export default function Rain({ active, stopRain }) {
  const columnAmount = 50;

  if (!active) return null;

  return (
    <>
      <div id="rain-container">
        {Array.from({ length: columnAmount }).map((_, i) => (
          <RainColumn key={i} index={i} />
        ))}
      </div>

      <button id="stop-rain" onClick={stopRain}>
        Stop Rain
      </button>
    </>
  );
}