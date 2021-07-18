import { useParams, useLocation } from 'react-router-dom';

function UserDetail() {
  const { id } = useParams();
  const { search } = useLocation();

  const query = new URLSearchParams(search);
  return (
    <div>
      <h4>This is user {id} detail page</h4>
      <h4>{query.get('first')}</h4>
    </div>
  );
}

export default UserDetail;
