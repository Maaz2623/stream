import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <section className="flex justify-center items-center h-[100vh]">
        <SignIn/>
    </section>
  );
}
