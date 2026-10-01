function NavItem({ id, label, isActive }) {
  return (
    <li className="nav-item">
      <a
        className={`nav-link ${isActive ? "active" : ""}`}
        aria-current={isActive ? "page" : undefined}
        href={`#${id}`}
      >
        {label}
      </a>
    </li>
  );
}
export default NavItem;
