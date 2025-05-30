const Navbar = () => {
  return (
    <nav>
      <div>
        <h1 className="text-4xl font-bold">Career Dock</h1>
      </div>
      <div className="w-[200px] border-1 border-zinc-900 flex justify-between">
        <a href="/login">Login</a>
        <a href="/register">Register</a>
      </div>
      <div></div>
    </nav>
  );
};

export default Navbar;
