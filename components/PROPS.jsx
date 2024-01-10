import { useState } from "react";

const PROPS = ({ children }) => {
  const [like, setLike] = useState(0);

  const handleLike = () => {
    setLike((prevState) => prevState + 1);
  };

  return children({ like, handleLike });
};

export default PROPS;

