import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <section className="flex justify-center items-center h-[100vh]">
        <SignUp/>
    </section>
  );
}
