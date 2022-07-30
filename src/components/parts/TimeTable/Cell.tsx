import './Cell.css'

type Props = {
  subject: string;
};

const Cell = ({ subject }: Props) => {
  return (
    <div className="cell" onClick={() => {
      console.log(subject);
    }}>
      {subject}
    </div>
  )
}

export default Cell;