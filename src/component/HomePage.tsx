import mylogo from "../assents/MYLOGO.jpeg";

function HomePage() {
  return (
    <div
      className="w-445 h-full bg-cover bg-center"
      style={{ backgroundImage: `url(${mylogo})` }}
    />
  );
}

export default HomePage;
