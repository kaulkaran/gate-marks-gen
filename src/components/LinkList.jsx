const LinkList = ({ links }) => {
    return (
      <ul>
        {links.map((link) => (
          <li key={link._id}>
            <a href={link.url} target="_blank" rel="noopener noreferrer">{link.url}</a>
          </li>
        ))}
      </ul>
    );
  };
  
  export default LinkList;
  