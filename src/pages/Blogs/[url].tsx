import { useParams } from 'react-router-dom';

export default function SingleBlog() {

    const params=useParams();

    console.log(params);

  return (
    <div>
      <h1>Single blog page</h1>
    </div>
  )
}
