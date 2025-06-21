import Link from 'next/link';

const Navbar = () => {
  return (
    // The typo was likely on this line. Ensure it says className="navbar"
    <nav className="navbar">
      <Link href="/" className="nav-link">
        Home
      </Link>
      <Link href="/blog" className="nav-link">
        Blog
      </Link>
      <Link href="/assistant" className="nav-link">
        AI Assistant
      </Link>
    </nav>
  );
};

export default Navbar;