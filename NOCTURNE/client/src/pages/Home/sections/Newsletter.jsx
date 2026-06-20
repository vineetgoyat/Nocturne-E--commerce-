import Container from "../../../components/ui/Container";
import Button from "../../../components/ui/Button";

const Newsletter = () => {
  return (
    <>
      {/* Background Glow */}
      <div className="absolute inset-0 flex justify-center">
        <div
          className="
            w-[700px]
            h-[700px]
            bg-[#C9A227]/5
            blur-[220px]
            rounded-full
          "
        />
      </div>

      <Container>
        <div
          className="
            relative
            bg-[#111111]
            border
            border-zinc-800
            rounded-[40px]
            p-20
            text-center
            overflow-hidden
          "
        >
          <p
            className="
              uppercase
              tracking-[10px]
              text-[#C9A227]
              text-sm
            "
          >
            Private Access
          </p>

          <h2
            className="
              text-5xl
              md:text-7xl
              mt-8
              font-light
            "
          >
            Join The Circle
          </h2>

          <p
            className="
              text-zinc-500
              mt-8
              max-w-3xl
              mx-auto
              text-center
              text-xl
              leading-[2]
              px-4
            "
          >
            Gain privileged access to limited releases,
            private collections and invitation-only acquisitions
            reserved exclusively for Nocturne members.
          </p>

          <div
            className="
              mt-12
              flex
              flex-col
              md:flex-row
              gap-4
              justify-center
              items-center
            "
          >
            <input
              type="email"
              placeholder="collector@nocturne.com"
              className="
                bg-black
                border
                border-zinc-700
                px-6
                py-5
                rounded-2xl
                w-full
                md:w-[420px]
                text-white
                outline-none
                focus:border-[#C9A227]
                transition-all
              "
            />

            <Button>Request Invitation</Button>
          </div>

          <p
            className="
              text-zinc-600
              text-sm
              mt-8
              tracking-wide
            "
          >
            Limited membership • Curated releases • Exclusive access
          </p>
        </div>
      </Container>
    </>
  );
};

export default Newsletter;