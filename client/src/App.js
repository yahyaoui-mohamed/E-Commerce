import Navbar from "./components/Navbar";
window.addEventListener("scroll", function () {
  if (this.scrollY > 400) document.querySelector(".navbar-light").classList.add("animate__fadeInDown", "fixed");
  else document.querySelector(".navbar-light").classList.remove("animate__fadeInDown", "fixed");
})
function App() {
  return (
    <div>
      <Navbar></Navbar>
    </div >
  );
}

export default App;
