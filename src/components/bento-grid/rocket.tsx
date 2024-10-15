import Spline from "@splinetool/react-spline/next";

export default function Rocket() {
  return (
    <main className="size-full relative bg-[#111111]">
      <div className="absolute bottom-0 right-0 h-16 w-40 bg-[#111111]"></div>
      <Spline scene="https://prod.spline.design/cBhuUS0Bc6GVRgJl/scene.splinecode" />
    </main>
  );
}
