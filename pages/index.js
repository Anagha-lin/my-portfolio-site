import Link from "next/link";

export default function Home() {
	  return (
		      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
		        <h1 className="text-4xl font-bold text-center text-indigo-700">Linus Irefo Anagha</h1>
		        <p className="mt-4 text-lg text-center max-w-xl">
		          Frontend Developer • Researcher • Teacher • School Proprietor
		        </p>

		        <div className="mt-6 space-x-4">
		          <Link href="/About" className="px-4 py-2 bg-indigo-600 text-white rounded shadow hover:bg-indigo-700">
		            About Me
		          </Link>
		          <a href="/Linus_Anagha_Frontend_Developer_CV.docx" download className="px-4 py-2 bg-gray-800 text-white rounded shadow hover:bg-gray-900">
		            Download CV
		          </a>
		        </div>
		      </div>
		    );
}
