import Link from "next/link";

export default function Home() {
  return (
    <div>
      <main>
        <div className="h-80 bg-[url('/awskcug_logo.png')] bg-no-repeat bg-contain bg-center"></div>
        <p className="text-2xl text-center font-bold my-4">AWS Kansas City User Group</p>
        <div className="flex flex-col items-center">
          <Link href="https://bit.ly/awskcug" className="text-xl text-blue-700 underline">https://bit.ly/awskcug</Link>
          <img src="/bit.ly_awskcug.png" alt="AWS Kansas City User Group"/>
        </div>        
      </main>
    </div>
  );
}
