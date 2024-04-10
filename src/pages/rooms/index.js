import { useEffect } from "react";
import { useRouter } from "next/router";
import { fetchRooms } from "@/infrastructure/inner/fetchReservations";

export default function Rooms({ rooms }) {
  const router = useRouter();

  useEffect(() => {
    const firstRoomId = rooms[0].id;
    router.push(`/rooms/${firstRoomId}`);
  }, [rooms, router]);
}

export async function getStaticProps() {
  const rooms = await fetchRooms();

  return {
    props: {
      rooms: rooms,
    },
  };
}
