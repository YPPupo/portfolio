
interface Props {
  title: string;
}

const TechTags = ({ title }: Props) => {
  return (
    <div className="p-2 md:px-4 md:py-2 rounded-2xl bg-picton-blue-800 text-picton-blue-100 shadow-xl">
      <p className="text-p">{title}</p>
    </div>
  );
};

export default TechTags;
