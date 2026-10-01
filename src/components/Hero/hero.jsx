import "./hero.css";
import heroImg from "../../assets/hero.jpg";
function Hero() {
  return (
    <header id="about" class="main-header py-5 border-bottom">
      <div class="container">
        <div class="row align-items-center gx-md-5">
          <div class="col-md-6">
            <h2 class="fs-3 fw-normal">About Me</h2>
            <h1 class="fw-bold">Hi I'm Quang Tu Dinh</h1>
            <p class="fs-5 fw-light text-secondary">
              A Computer Science student with a strong interest in DevOps, cloud
              computing, and modern software development. I enjoy building
              practical solutions and continuously improving my skills in
              frontend development, Git, Docker, CI/CD pipelines, and cloud
              technologies. I'm currently looking for opportunities where I can
              apply my knowledge, gain hands-on experience, and grow as a DevOps
              Engineer.
            </p>
            <a href="#" className="btn btn-neon rounded-pill mb-3 mb-lg-0">
              Download Resume
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M256 0a256 256 0 1 0 0 512 256 256 0 1 0 0-512zM244.7 387.3l-104-104c-4.6-4.6-5.9-11.5-3.5-17.4s8.3-9.9 14.8-9.9l56 0 0-96c0-17.7 14.3-32 32-32l32 0c17.7 0 32 14.3 32 32l0 96 56 0c6.5 0 12.3 3.9 14.8 9.9s1.1 12.9-3.5 17.4l-104 104c-6.2 6.2-16.4 6.2-22.6 0z" />
              </svg>
            </a>
          </div>
          <div class="col-md-6">
            <img
              src={heroImg}
              alt="Hero Img"
              class="w-100 object-fit-cover rounded"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Hero;
