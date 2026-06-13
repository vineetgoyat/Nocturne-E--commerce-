import Container from "../../../components/ui/Container";
import Button from "../../../components/ui/Button";

const Newsletter = () => {
  return (
    <section className="py-32">

      <Container>

        <div
          className="
          bg-[#141414]
          border border-zinc-800
          rounded-2xl
          p-12
          text-center
          "
        >

          <p className="uppercase tracking-[8px] text-[#C9A227]">
            Join The Circle
          </p>

          <h2 className="text-5xl mt-6">
            Become A Collector
          </h2>

          <p className="text-zinc-400 mt-6 max-w-xl mx-auto">
            Receive early access to new collections,
            exclusive artifacts and hidden chapters.
          </p>

          <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center">

            <input
              type="email"
              placeholder="Enter your email"
              className="
              bg-black
              border border-zinc-700
              px-5 py-4
              rounded-lg
              w-full md:w-[350px]
              "
            />

            <Button>
              Join
            </Button>

          </div>

        </div>

      </Container>

    </section>
  );
};

export default Newsletter;