const Footer = () => {
  return (
    <footer className="max-w-6xl mx-auto !w-[85%] mt-20">
      <div className="pt-4 pb-2 text-center border-t border-t-border-color">
        <p className="text-lg">
          All rights reserved. | Created by{" "}
          <a
            href="https://github.com/WabweniBrian/"
            className="text-primary hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            Wabweni Brian{" "}
          </a>{" "}
          &copy;
          {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
