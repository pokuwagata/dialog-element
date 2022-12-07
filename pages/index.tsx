import dynamic from "next/dynamic";

const Dialog = dynamic(() => import("../Dialog"), {
  ssr: false,
});

export default function Home() {
  return <Dialog />;
}
