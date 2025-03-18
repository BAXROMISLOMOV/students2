import mylogo from "../assents/MYLOGO.jpeg";

function HomePage() {
  return (
    <div
      className="w-screen h-full bg-cover bg-center"
      style={{ backgroundImage: `url(${mylogo})` }}
    />
  );
}

export default HomePage;
