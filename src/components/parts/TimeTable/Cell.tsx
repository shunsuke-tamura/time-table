type Props = {
  subject: string;
};

const Cell = ({ subject }: Props) => {
  return (
    <>
      <div>
        {subject}
      </div>
    </>
  )
}

export default Cell;