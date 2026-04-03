import { Link } from 'react-router-dom';

export default function Breadcrumbs({ items }) {
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <ol>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={item.path}>
              {isLast ? <span aria-current="page">{item.name}</span> : <Link to={item.path}>{item.name}</Link>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}