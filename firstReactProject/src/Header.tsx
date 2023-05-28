function Header() {
  const firstName = 'Hiago';
  const lastName = 'Isoppo Trajano';

  return (
    <>
      <h1 className="greeting">
        Olá {`${firstName} ${lastName}`}
        <img src="https://i.imgur.com/rqvLd3q.png" alt="" />
      </h1>
    </>
  );
}

export default Header;
