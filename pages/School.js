
import Image from "next/image";

export default function School() {
  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-800">
      <h1 className="text-3xl font-bold text-indigo-700 mb-4">Anagha Modern Preparatory Schools</h1>

      <p className="mb-4">
        Located along Illeh Road, Ekpoma, Edo State, our school provides Crèche, Nursery, and Primary education under the motto:
        <strong className="text-indigo-600"> "Discipline and Knowledge"</strong>.
      </p>

      <div className="mb-6">
        <Image
          src="/images/amps-handbill.jpg"
          alt="Anagha Modern Preparatory School Flyer"
          width={800}
          height={500}
          className="rounded shadow"
        />
      </div>

      <p className="mb-2">
        <strong>Admission Ongoing!</strong> We welcome new learners into our crèche, nursery, and primary sections.
      </p>

      <p className="mb-4">
        Our classrooms blend traditional instruction with digital tools to ensure every child receives the best start in life.
      </p>

      <div className="mt-6">
        <p><strong>📞 Tel:</strong> 07060704682</p>
        <p><strong>📧 Email:</strong> <a href="mailto:ampschools2022@gmail.com" className="text-indigo-600">ampschools2022@gmail.com</a></p>
      </div>
    </div>
  );
}
