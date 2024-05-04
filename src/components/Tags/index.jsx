import "./index.css";
import Tag from "../../components/Tag";

const Tags = ({ tags }) => {
  return (
    <div className="tags">
      {tags && tags.length > 0 && tags.map((tag, i) => (
        <Tag key={i} tag={tag} />
      ))}
    </div>
  );
};

export default Tags;
