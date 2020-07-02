import Link from "next/link";
export default ({ currentUser }) => {
  return (
    <nav classNmae="navbar navbar-light bg-light">
      <Link href="/">
        <a className="navbar-brand">GitTix</a>
      </Link>
    </nav>
  );
};
