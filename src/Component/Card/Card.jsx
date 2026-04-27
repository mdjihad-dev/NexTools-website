import { use } from 'react';

const Card = ({ data }) => {
const useData = use(data)
console.log(useData);

  return <div>
    <h1>UseData</h1>
  </div>;
};

export default Card;