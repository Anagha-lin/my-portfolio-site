import Image from "next/image";
import Link from "next/link";

export default function Home() {
	  return (
		      <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-green-100 to-emerald-200 px-4">
		        <div className="flex flex-col items-center text-center max-w-2xl w-full p-6 bg-white shadow-xl rounded-xl border border-green-300">
		          <div className="mb-6">
		            <Image
		              src="/images/linusssss.jpg"
		              alt="Linus Anagha"
		              width={160}
		              height={160}
		              className="rounded-full border-4 border-green-600 shadow-lg"
		            />
		          </div>

		          <h1 className="text-4xl font-bold text-green-900 mb-2">Linus Irefo Anagha</h1>
		          <p className="text-md text-gray-700 mb-6">
		            Frontend Developer • Environmental Researcher • Teacher • School Proprietor
		          </p>

		          <div className="flex flex-wrap justify-center gap-4 mb-4">
		            <Link href="/About">
		              <button className="bg-green-700 hover:bg-green-800 text-white px-5 py-2 rounded-full shadow transition">
		                About Me
		              </button>
		            </Link>
		            <a href="/tech cv.pdf" download>
		              <button className="bg-gray-700 hover:bg-gray-800 text-white px-5 py-2 rounded-full shadow transition">
		                Download CV
		              </button>
		            </a>
		            <a href="mailto:linusanagha37@gmail.com">
		              <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-2 rounded-full shadow transition">
		                Contact
		              </button>
		            </a>
		          </div>

		          <div className="flex flex-wrap justify-center gap-4 mt-2">
		            <Link href="/Publications">
		              <button className="bg-green-800 hover:bg-green-900 text-white px-5 py-2 rounded-full shadow transition">
		                View Publications
		              </button>
		            </Link>
		            <Link href="/School">
		              <button className="bg-lime-600 hover:bg-lime-700 text-white px-5 py-2 rounded-full shadow transition">
		                My School
		              </button>
		            </Link>
		          </div>
		        </div>
		      </div>
		    );
}
