import { Link } from 'umi';
import NavBar from '../../components/NavBar';

function BasicLayout(props) {
  return (
    <div>
        <NavBar theme={'solid'}/>
        {props.children}
        <Link to="/shopping/book">book</Link>
        <Link to="/shopping/shield">shield</Link>
        <Link to="/shopping/weapon">weapon</Link>
    </div>
  );
}

export default BasicLayout;
