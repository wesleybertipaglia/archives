import Container from "./Container";

const Footer = () => {
  return (
    <footer>
      <Container classList="flex justify-between items-center py-6">
        <p className="text-sm text-gray-600">
          &copy; 2021 Hack-GPT. All rights reserved.
        </p>

        <nav className="flex gap-4">
          <a
            href="
            https://twitter.com/hashtag/100DaysOfCode"
          >
            #100DaysOfCode
          </a>
        </nav>
      </Container>
    </footer>
  );
};

export default Footer;
