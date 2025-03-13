import { Statistics } from "./Statistics";
import pilot from "../../public/w4r.webp";

export const About = () => {
  return (
    <section
      id="about"
      className="container py-24 sm:py-32"
    >
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src={pilot}
            alt=""
            className="w-[300px] object-contain rounded-lg"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  About{" "}
                </span>
                Company
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
                We are a global technology consulting firm specializing in custom software
                development and IT solutions. With expertise across multiple industries,
                we help businesses transform their digital landscape through innovative
                programming services, strategic IT consulting, and cutting-edge technical
                implementations. Our international team delivers excellence in software
                development, system integration, and technology optimization.
              </p>
              <p className="text-xl text-muted-foreground mt-4">
                Contact us at <a href="mailto:contact@work4rail.com" className="text-primary hover:text-primary/80">contact@work4rail.com</a>.
              </p>
            </div>

            {/* <Statistics /> */}
          </div>
        </div>
      </div>
    </section>
  );
};
