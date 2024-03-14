
interface Props {
  title: string;
}

const TechTags = ({ title }: Props) => {
  return (
    <div className="px-4 py-2 rounded-2xl bg-picton-blue-800 text-picton-blue-100 shadow-xl">
      <p>{title}</p>
    </div>
  );
};

export default TechTags;
