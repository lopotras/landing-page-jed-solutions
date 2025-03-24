import pilot from "../../public/logo-web.png";

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
                We are a global technology consulting firm specializing in financial systems
                optimization and distributed computing solutions. With deep expertise in
                building payment processing systems
                and scalable banking infrastructure, we help financial institutions
                transform their digital landscape through innovative distributed systems
                architecture. Our international team delivers excellence in developing
                fault-tolerant, highly available financial software systems, with focus on
                scalability and performance.
              </p>
              <p className="text-xl text-muted-foreground mt-4">
                Contact us at <a href="mailto:jedi@jedsolutions.xyz" className="text-primary hover:text-primary/80">jedi@jedsolutions.xyz</a>.
              </p>
            </div>

            {/* <Statistics /> */}
          </div>
        </div>
      </div>
    </section>
  );
};
