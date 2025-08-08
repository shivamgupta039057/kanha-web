import Booking from '@/component/Booking/Booking';

// Fetch room details from API or DB
async function getRoomDetails(roomId) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/rooms/${roomId}`, {
      cache: 'no-store'
    });
    if (!res.ok) {
      throw new Error('Failed to fetch room details');
    }
    const data = await res.json();
    // If your API response is wrapped, adjust accordingly
    return data?.data ? data.data : data;
  } catch (error) {
    // Fallback/default values if fetch fails
    return {
      name: "Room",
      hotelName: "New Kanha Hotel",
      shortDescription: "",
      idealFor: "",
      location: "Jaipur",
      price: "",
      type: "",
      image: "/images/kanhalogo.png"
    };
  }
}

// Next.js 13+ dynamic SEO metadata
export async function generateMetadata({ params }) {
  const roomId = params.RoomId;
  const room = await getRoomDetails(roomId);

  return {
    title: `${room.name || "Room"} - Book at ${room.hotelName || "New Kanha Hotel"} | Best Price Guaranteed`,
    description: `Stay in ${room.name || "a room"} at ${room.hotelName || "New Kanha Hotel"}. ${room.shortDescription || ""} Perfect for ${room.idealFor || ""}. Located in ${room.location || "Jaipur"}. Book now for only ₹${room.price || ""} per night.`,
    keywords: [
      room.name || "Room",
      `${room.hotelName || "New Kanha Hotel"} rooms`,
      `${room.location || "Jaipur"} hotels`,
      'Book hotel room online',
      `${room.type || "hotel"} accommodation`
    ],
    openGraph: {
      title: `${room.name || "Room"} - ${room.hotelName || "New Kanha Hotel"}`,
      description: `${room.shortDescription || ""}`,
      url: `https://newkanhahotel.com/rooms/${roomId}`,
      images: [{ url: room.image || "/images/kanhalogo.png", alt: room.name || "Room" }]
    }
  };
}

export default async function Page({ params }) {
  const roomId = params.RoomId;
  return (
    <>
      <Booking roomId={roomId} />
    </>
  );
}
