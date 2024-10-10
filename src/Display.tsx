import './Display.css'

interface DisplayProps {
  currentNumber: number | null;
  operator: string;
  secondNumber: number | null;
}

export default function App({ currentNumber, operator, secondNumber }: DisplayProps) {
  function showDisplay(): string {
    let display: string[] = [];
    
    if (currentNumber !== null) display.push(String(currentNumber));
    if (operator !== '') display.push(operator);
    if (secondNumber !== null) display = [String(secondNumber)];

    return display.join('');
  }

  return (
    <>
      <div className="calc-display">{showDisplay()}</div>
    </>
  );
}
