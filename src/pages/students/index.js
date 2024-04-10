import { useEffect } from "react";
import { useRouter } from "next/router";
import { fetchStudents } from "@/infrastructure/inner/fetchReservations";

export default function Students({ students }) {
  const router = useRouter();

  useEffect(() => {
    const firstStudentId = students[0].id;
    router.push(`/students/${firstStudentId}`);
  }, [students, router]);
}

export async function getStaticProps({ params }) {
  const students = await fetchStudents();

  return {
    props: {
      students: students,
    },
  };
}
