import Link from "next/link";

export default function NavBar() {
	  return (
		      <nav className="bg-green-900 text-white shadow-md">
		        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
		          <h1 className="text-xl font-bold tracking-wide">Linus I. Anagha</h1>
		          <ul className="flex space-x-6 text-sm font-medium">
		            <li><Link href="/" className="hover:text-green-300">Home</Link></li>
		            <li><Link href="/About" className="hover:text-green-300">About</Link></li>
		            <li><Link href="/Projects" className="hover:text-green-300">Projects</Link></li>
		            <li><Link href="/Publications" className="hover:text-green-300">Publications</Link></li>
		            <li><Link href="/School" className="hover:text-green-300">School</Link></li>
		            <li><a href="/Linus_Anagha_Frontend_Developer_CV.docx" className="hover:text-green-300" download>Download CV</a></li>
		          </ul>
		        </div>
		      </nav>
		    );
}
