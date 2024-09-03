const Footer = ({ copyright, companyName }) => {
  return (
    <footer className="h-[60px] flex items-center justify-between text-xs">
      <p>{copyright}</p>
      <p>{companyName}</p>
    </footer>
  );
};

export default Footer;
