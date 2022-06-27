function Tags({ tags }) {
  return (
    <div className="s1_left_tags">
      {tags.map((tag, index) => (
        <p  key={index} className="tags">{tag}</p>
      ))}
    </div>
  );
}

export default Tags;
